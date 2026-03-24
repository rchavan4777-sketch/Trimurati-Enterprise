import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { clients, featuredServices, homeImages, homeStats, siteConfig } from "@/data/site";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Trimurti Enterprise Home",
    url: siteConfig.url,
    description: siteConfig.description
  };
  const clientRows = [
    clients.filter((_, index) => index % 2 === 0),
    clients.filter((_, index) => index % 2 === 1)
  ].filter((row) => row.length);

  return (
    <>
      <StructuredData data={schema} />
      <section className="section">
        <div className="container hero-grid">
          <SlideIn direction="left">
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
          </SlideIn>
          <SlideIn direction="right" className="hero-art">
            <MediaFrame src={homeImages.hero} alt="Modern concrete building facade" className="hero-frame" priority />
          </SlideIn>
        </div>
      </section>
      <section className="section stats-band">
        <FadeIn className="container">
          <StaggerContainer className="card-grid">
            {homeStats.map((stat) => (
              <StaggerItem key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </section>
      <section className="section">
        <div className="container">
          <FadeIn className="section-heading">
            <div>
              <span className="eyebrow">Our Expertise</span>
              <h2 className="headline">Comprehensive Industrial <em>Solutions</em></h2>
            </div>
          </FadeIn>
          <StaggerContainer className="card-grid">
            {featuredServices.map((service) => (
              <StaggerItem key={service.title} className="service-card">
                <div className="service-icon"><Icon name={service.icon} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <FadeIn className="section-heading center">
            <span className="eyebrow">Trusted By Industry Leaders</span>
            <h2 className="headline" style={{ marginTop: "1rem" }}>
              Clients Who Build at <em>Scale</em>
            </h2>
            <p className="muted" style={{ maxWidth: "46rem", margin: "1.2rem auto 0" }}>
              Our materials, execution support, and rock engineering services have supported leading
              developers, EPC contractors, and infrastructure partners across major projects.
            </p>
          </FadeIn>
          <div className="client-marquee" aria-label="Client logos and names">
            {clientRows.map((row, rowIndex) => (
              <div
                key={`client-row-${rowIndex}`}
                className={`client-marquee__row${rowIndex % 2 === 1 ? " client-marquee__row--reverse" : ""}`}
              >
                <div className="client-marquee__track">
                  {[0, 1].map((copyIndex) => (
                    <div
                      key={`client-group-${rowIndex}-${copyIndex}`}
                      className="client-marquee__group"
                      aria-hidden={copyIndex === 1}
                    >
                      {row.map((client) => (
                        <article key={`${client.name}-${rowIndex}-${copyIndex}`} className="client-card">
                          <div className="client-card__logo">
                            <Image
                              src={client.logo}
                              alt={client.alt}
                              fill
                              sizes="(max-width: 720px) 74vw, (max-width: 980px) 38vw, 17rem"
                            />
                          </div>
                          <p>{client.name}</p>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <FadeIn className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Government Certified A-Class Contractor</span>
          <h2 className="headline" style={{ maxWidth: "40rem", margin: "1rem auto 0" }}>
            Trusted by major metropolitan infrastructure projects nationwide.
          </h2>
        </FadeIn>
      </section>
      <WhatsAppFloat />
    </>
  );
}



