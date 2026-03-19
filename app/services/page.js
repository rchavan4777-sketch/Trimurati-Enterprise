import Link from "next/link";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { resources, services, siteConfig } from "@/data/site";

const servicesHero = "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIm2sbE68awQ-1_ykz_HWhBGFwk_NLEa8ljbnobzrNJuxo-OrBURVr_NXKmaRLRv2MHcf1qKaAop91uMKPfa0LWaab0dlk_oQdLlFGHLyd9IXVclFwxEVMnTRTb4yJEayst-uUhW1zhRxMeo4PkaPbNWqSk3OjXbWtbAs0-fnf5GR2QEnaAipJ73T0pSSmp8IQVWFdfdvG4V_IS6dr1mSDbXWa8EPFURLM0IrCPXTnZAiWPEQVlitih5_yJU1Lxz3-LWTiihUwuc";

export const metadata = {
  title: "Services",
  description: "Explore Trimurti Enterprise services including blasting, sawing, rock anchoring, shotcrete, stone crushing, and transport logistics."
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Infrastructure Services",
    url: `${siteConfig.url}/services`
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Our Expertise</span>
            <h1 className="display">Mastering the <em>Foundation</em> of Infrastructure.</h1>
            <p className="lede" style={{ maxWidth: "39rem", marginTop: "1.5rem" }}>
              Engineering precision meets industrial power. We provide specialized rock extraction and structural services for the nation&apos;s most demanding projects.
            </p>
          </div>
          <div className="hero-art"><MediaFrame src={servicesHero} alt="Heavy construction machinery" className="hero-frame" priority /></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><div><h2 className="headline">Precision Services</h2><div className="underline" /></div></div>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.slug} className="service-card">
                <div className="service-icon"><Icon name={service.icon} /></div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div style={{ marginTop: "1.2rem" }}><Link href={`/services/${service.slug}`} className="button-ghost">Learn More <Icon name="arrow" /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="resource-grid">
            <article className="panel">
              <span className="eyebrow">Archive of Materials</span>
              <h2 className="headline" style={{ marginTop: "1rem" }}>Foundational <em>Resources</em></h2>
              <p style={{ marginTop: "1.2rem" }}>Beyond specialized services, we maintain a robust supply chain of premium aggregates and logistics services for infrastructure longevity.</p>
              <div className="panel" style={{ marginTop: "1.5rem" }}><h3 style={{ marginTop: 0 }}>Quality Assurance</h3><p>All supplied materials meet strict national standards for density, durability, and particulate sizing.</p></div>
            </article>
            {resources.map((resource) => (
              <article key={resource.title} className="resource-card">
                <div style={{ position: "relative", aspectRatio: "16 / 10" }}><MediaFrame src={resource.image} alt={resource.title} className="image-frame" /></div>
                <div className="resource-card__body">
                  <h3>{resource.title}</h3>
                  <ul className="bullet-list">{resource.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppFloat />
    </>
  );
}


