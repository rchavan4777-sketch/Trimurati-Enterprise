import { Icon } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { certifications, divisions, siteConfig, values } from "@/data/site";

export const metadata = {
  title: "About Us",
  description: "Learn about Trimurti Enterprise, our core divisions, certifications, values, and leadership team powering infrastructure delivery."
};

export default function AboutPage() {
  const aboutHeroImage = "/images/services/Hard Rock Control Blasting4.jpeg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Trimurti Enterprise",
    url: `${siteConfig.url}/about`
  };

  return (
    <>
      <StructuredData data={schema} />
      <section className="section about-hero">
        <div className="about-hero__bg" aria-hidden="true" style={{ backgroundImage: `url(${aboutHeroImage})` }} />
        <div className="about-hero__overlay" aria-hidden="true" />
        <div className="container about-hero__content">
          <span className="eyebrow">Our Legacy</span>
          <h1 className="display">Engineering a <em>Solid</em> Future.</h1>
          <p className="lede" style={{ maxWidth: "40rem", marginTop: "1.5rem" }}>
            Founded on principles of reliability and structural integrity, Trimurti Enterprise has evolved from a local transport outfit into a regional powerhouse of infrastructure and material supply.
          </p>
          <div className="about-hero__stat">
            <strong>25+</strong>
            <span className="eyebrow" style={{ letterSpacing: ".14em" }}>Years of Civil Excellence</span>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading center"><h2 className="headline">Core Divisions</h2><div className="underline" style={{ marginInline: "auto" }} /></div>
          <div className="split-grid">
            {divisions.map((division, index) => (
              <article key={division.title} className="division-card">
                <div className="service-meta"><div className="service-icon"><Icon name={division.icon} /></div><span className="service-index">{`0${index + 1}`}</span></div>
                <h3>{division.title}</h3>
                <p>{division.text}</p>
                <ul className="bullet-list">{division.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Trust &amp; Compliance</span><h2 className="headline">Verified Excellence</h2></div>
            <p className="muted" style={{ maxWidth: "28rem" }}>Our commitment to safety and quality is backed by international standards and government mandates.</p>
          </div>
          <div className="trust-grid">{certifications.map((item) => <article key={item.title} className="badge-card"><div className="mini-icon" style={{ marginInline: "auto" }}><Icon name={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>
      <section className="section section--soft"><div className="container"><div className="values-grid">{values.map((item) => <article key={item.title} className="value-card"><div className="mini-icon"><Icon name={item.icon} /></div><h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", marginTop: 0 }}>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ margin: 0, letterSpacing: ".16em" }}>Directed by</p>
          <h2 className="headline" style={{ margin: ".65rem 0 0", fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)" }}>Mr. Balaji .L. Chavan</h2>
        </div>
      </section>
      <WhatsAppFloat />
    </>
  );
}





