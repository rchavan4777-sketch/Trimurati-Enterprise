import Link from "next/link";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { featuredServices, homeImages, homeStats, siteConfig } from "@/data/site";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Trimurti Enterprise Home",
    url: siteConfig.url,
    description: siteConfig.description
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Infrastructure Excellence</span>
            <h1 className="display">Building <em>Foundations.</em><br />Breaking Barriers.</h1>
            <p className="lede" style={{ maxWidth: "38rem", marginTop: "1.5rem" }}>
              Engineering India&apos;s tomorrow with precision raw materials and logistical mastery.
              We bridge the gap between architectural vision and structural reality.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              <Link href="/services" className="button">Our Projects</Link>
              <Link href="/contact" className="button-secondary">Partner With Us</Link>
            </div>
          </div>
          <div className="hero-art">
            <MediaFrame src={homeImages.hero} alt="Modern concrete building facade" className="hero-frame" priority />
          </div>
        </div>
      </section>
      <section className="section stats-band">
        <div className="container">
          <div className="card-grid">
            {homeStats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Our Expertise</span>
              <h2 className="headline">Comprehensive Industrial <em>Solutions</em></h2>
            </div>
          </div>
          <div className="card-grid">
            {featuredServices.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon"><Icon name={service.icon} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container split-grid">
          <article className="resource-card">
            <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
              <MediaFrame src={homeImages.crusher} alt="Stone crusher division" className="image-frame" />
            </div>
            <div className="resource-card__body">
              <h3>Stone Crusher Division</h3>
              <p>Our automated crushing plants process premium igneous rock into graded aggregates essential for high-strength concrete and road sub-base.</p>
              <div style={{ marginTop: "1.2rem" }}><Link href="/services" className="button-ghost">Explore Inventory <Icon name="arrow" /></Link></div>
            </div>
          </article>
          <article className="resource-card">
            <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
              <MediaFrame src={homeImages.transport} alt="Industrial transport trucks" className="image-frame" />
            </div>
            <div className="resource-card__body">
              <h3>Logistics &amp; Transport</h3>
              <p>Equipped with a diverse fleet of heavy payload vehicles and real-time tracking, your materials reach site precisely on schedule.</p>
              <div style={{ marginTop: "1.2rem" }}><Link href="/contact" className="button-ghost">View Fleet <Icon name="arrow" /></Link></div>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Government Certified A-Class Contractor</span>
          <h2 className="headline" style={{ maxWidth: "40rem", margin: "1rem auto 0" }}>
            Trusted by major metropolitan infrastructure projects nationwide.
          </h2>
        </div>
      </section>
      <WhatsAppFloat />
    </>
  );
}


