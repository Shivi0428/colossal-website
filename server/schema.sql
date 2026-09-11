-- Colossal Info Solutions - PostgreSQL schema
-- Run with: psql "$DATABASE_URL" -f schema.sql

CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- for gen_random_uuid()

-- ─────────────────────────────────────────────────────────────────────────
-- leads: every "Request Free Consultation" form submission from the site
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leads (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name     TEXT NOT NULL,
    work_email    TEXT NOT NULL,
    company_name  TEXT NOT NULL,
    budget_range  TEXT NOT NULL,
    status        TEXT NOT NULL DEFAULT 'new'
                  CONSTRAINT leads_status_check
                  CHECK (status IN ('new', 'contacted', 'qualified', 'closed_won', 'closed_lost')),
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_leads_work_email ON leads (work_email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);

-- ─────────────────────────────────────────────────────────────────────────
-- services: the offerings shown in the Value Props / Services section
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS services (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_name  TEXT NOT NULL,
    slug          TEXT NOT NULL UNIQUE,
    description   TEXT NOT NULL,
    icon_name     TEXT NOT NULL,          -- maps to a lucide-react icon name
    is_active     BOOLEAN NOT NULL DEFAULT true,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_services_slug ON services (slug);
CREATE INDEX IF NOT EXISTS idx_services_is_active ON services (is_active) WHERE is_active = true;

-- ─────────────────────────────────────────────────────────────────────────
-- case_studies: the metric cards in "Engineered for Results"
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS case_studies (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title             TEXT NOT NULL,
    client_name       TEXT NOT NULL,       -- e.g. "FinTech Client" - keep generic
                                            -- unless the real client has approved being named
    industry          TEXT NOT NULL,
    key_metric_label  TEXT NOT NULL,       -- e.g. "Organic Lead Growth in 90 Days"
    key_metric_value  TEXT NOT NULL,       -- e.g. "+240%" - stored as text since it
                                            -- can carry a %, $, or M suffix
    summary           TEXT NOT NULL,
    is_published      BOOLEAN NOT NULL DEFAULT false, -- keep false until the metric
                                                       -- above is a real, verified number
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON case_studies (industry);
CREATE INDEX IF NOT EXISTS idx_case_studies_is_published ON case_studies (is_published) WHERE is_published = true;

-- ─────────────────────────────────────────────────────────────────────────
-- audit_log: a record of every mutating API action, for traceability
-- ─────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_log (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    action        TEXT NOT NULL,          -- e.g. 'lead.created'
    entity_table  TEXT NOT NULL,          -- e.g. 'leads'
    entity_id     UUID NOT NULL,
    payload       JSONB NOT NULL DEFAULT '{}'::jsonb,
    ip_address    TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_entity ON audit_log (entity_table, entity_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log (created_at DESC);

-- Keep updated_at current on every row change
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_leads_updated_at ON leads;
CREATE TRIGGER trg_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_services_updated_at ON services;
CREATE TRIGGER trg_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_case_studies_updated_at ON case_studies;
CREATE TRIGGER trg_case_studies_updated_at BEFORE UPDATE ON case_studies
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();
