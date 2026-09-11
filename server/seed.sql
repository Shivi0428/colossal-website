-- Optional: seeds the `services` table with the same 3 offerings shown on
-- the homepage today, so /api/services returns real data if the frontend
-- is ever switched from hardcoded copy to DB-driven content.
INSERT INTO services (service_name, slug, description, icon_name) VALUES
  ('Software & Cloud Engineering', 'software-cloud-engineering',
   'Scalable, secure custom software and cloud infrastructure built to handle enterprise workloads with zero downtime.',
   'Cloud'),
  ('Performance Digital Marketing', 'performance-digital-marketing',
   'Data-driven SEO, PPC, and funnel optimization that consistently deliver measurable ROI and qualified sales leads.',
   'LineChart'),
  ('Strategic Tech Consulting', 'strategic-tech-consulting',
   'Senior tech architecture and ERP integration to streamline operations and eliminate technical debt.',
   'Network')
ON CONFLICT (slug) DO NOTHING;
