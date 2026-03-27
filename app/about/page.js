import CountUp from "@/components/count-up";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { divisions, siteConfig, values } from "@/data/site";

const aboutImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBXbDoqCzEu_-hIaqflYBqMj8WorLeFpiENlU8a7ZsH0zVnirfci4eekrJYGOX064F1LBofe7ty0eo2E1EPnwmpsYlXbnmrL_3IFQ0Z7tTTrAEwhjSH89AjkcZAVvQ444Fkw2tkzem1QX-X6LOn4fTo7QE1kL7tFLRdbUfmvXeUQvIzirHFX1oy1rCF0tCN4affq8TA5Hk2t_6YFBRBeF8nIqp2pK29bj14Y629u7yraQQpulrlk_OubGZplVLm9vTQywwyaSYFRzQ";

export const metadata = {
  title: "About Us",
  description: "Learn about Trimurti Enterprise, our core divisions, certifications, values, and leadership team powering infrastructure delivery."
};

export default function AboutPage() {
  const completionCertificates = [
    {
      name: "HCC Completion Certificate",
      image: "/images/services/HCCcompletion.jpg"
    },
    {
      name: "Afcons Completion Certificate",
      image: "/images/services/Afconcompletion.jpg"
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Trimurti Enterprise",
    url: `${siteConfig.url}/about`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="section">
        <div className="container hero-grid">
          <SlideIn direction="left">
            <span className="eyebrow">Our Legacy</span>
            <h1 className="display">Engineering a <em>Solid</em> Future.</h1>
            <p className="lede" style={{ maxWidth: "40rem", marginTop: "1.5rem" }}>
              Founded on principles of reliability and structural integrity, Trimurti Enterprise has evolved from
              a local transport outfit into a regional powerhouse of infrastructure and material supply.
            </p>
          </SlideIn>

          <SlideIn direction="right" className="hero-art">
            <MediaFrame src={aboutImage} alt="Architectural concrete and steel structure" className="hero-frame" priority />
            <div className="floating-stat">
              <strong>
                <CountUp
                  from={0}
                  to={25}
                  duration={1.8}
                  suffix="+"
                  showSuffixOnEnd
                />
              </strong>
              <span className="eyebrow" style={{ letterSpacing: ".14em" }}>Years of Civil Excellence</span>
            </div>
          </SlideIn>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <FadeIn className="section-heading center">
            <h2 className="headline">Core Divisions</h2>
            <div className="underline" style={{ marginInline: "auto" }} />
          </FadeIn>

          <StaggerContainer className="split-grid">
            {divisions.map((division, index) => (
              <StaggerItem key={division.title} className="division-card">
                <div className="service-meta">
                  <div className="service-icon"><Icon name={division.icon} /></div>
                  <span className="service-index">{`0${index + 1}`}</span>
                </div>
                <h3>{division.title}</h3>
                <p>{division.text}</p>
                <ul className="bullet-list">
                  {division.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="section-heading">
            <div>
              <span className="eyebrow">Completion Certificates</span>
              <h2 className="headline">Project Credentials</h2>
            </div>
          </FadeIn>

          <StaggerContainer className="certificate-grid">
            {completionCertificates.map((certificate, index) => {
              const cardId = `certificate-card-${index + 1}`;

              return (
                <StaggerItem key={certificate.name} className="certificate-flip">
                  <input id={cardId} type="checkbox" className="certificate-flip__toggle" />
                  <label htmlFor={cardId} className="certificate-flip__card" aria-label={`Toggle ${certificate.name}`}>
                    <div className="certificate-face certificate-face--front">
                      <span className="eyebrow" style={{ letterSpacing: ".16em" }}>Tap To Open</span>
                      <h3>{certificate.name}</h3>
                    </div>
                    <div className="certificate-face certificate-face--back">
                      <img src={certificate.image} alt={certificate.name} loading="lazy" />
                    </div>
                  </label>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <StaggerContainer className="values-grid">
            {values.map((item) => (
              <StaggerItem key={item.title} className="value-card">
                <div className="mini-icon"><Icon name={item.icon} /></div>
                <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", marginTop: 0 }}>{item.title}</h3>
                <p>{item.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <FadeIn className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ margin: 0, letterSpacing: ".16em" }}>Directed by</p>
          <h2 className="headline" style={{ margin: ".65rem 0 0", fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)" }}>
            Mr. Balaji .L. Chavan
          </h2>
        </FadeIn>
      </section>

      <WhatsAppFloat />
    </>
  );
}

