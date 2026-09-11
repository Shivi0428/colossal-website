import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import ProofResults from "./components/ProofResults";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import LeadCTA from "./components/LeadCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <ProofResults />
        <WhyUs />
        <Testimonials />
        <LeadCTA />
      </main>
      <Footer />
    </div>
  );
}
