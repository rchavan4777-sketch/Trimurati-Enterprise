import CountUp from "@/components/count-up";
import { Icon } from "@/components/icons";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import BorderGlow from "@/components/border-glow";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import ContactEnquiryForm from "@/components/contact-enquiry-form";
import { contactStats, siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Trimurti Enterprise for stone crusher supply, transport logistics, hard rock blasting, and infrastructure consultation."
};

const parseStatValue = (value) => {
  const clean = value.replace(/,/g, "");
  const match = clean.match(/^([+-]?\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { number: 0, suffix: value };
  }

  return {
    number: Number(match[1]),
    suffix: match[2]
  };
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Trimurti Enterprise",
    url: `${siteConfig.url}/contact`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="section">
        <FadeIn className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Reach Out To Us</span>
          <h1 className="display" style={{ maxWidth: "56rem", margin: "1rem auto 0" }}>
            Let&apos;s build your <em>vision</em> together.
          </h1>
        </FadeIn>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <SlideIn direction="left">
            <ContactEnquiryForm />
          </SlideIn>

          <SlideIn direction="right">
            <StaggerContainer style={{ display: "grid", gap: "1.25rem" }}>
              <StaggerItem>
                <BorderGlow innerClassName="contact-card panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                  <article>
                    <div className="mini-icon"><Icon name="location" /></div>
                    <h3 style={{ marginTop: 0 }}>Our Headquarter</h3>
                    <p>
                      {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                    </p>
                  </article>
                </BorderGlow>
              </StaggerItem>

              <StaggerItem>
                <BorderGlow innerClassName="contact-card panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                  <article>
                    <div className="mini-icon"><Icon name="call" /></div>
                    <h3 style={{ marginTop: 0 }}>Phone &amp; Support</h3>
                    <p><a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a></p>
                    <p>{siteConfig.workingHours}</p>
                    <div className="mini-icon" style={{ marginTop: "1rem" }}><Icon name="mail" /></div>
                    <h3>Email</h3>
                    <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                  </article>
                </BorderGlow>
              </StaggerItem>

              <StaggerItem>
                <a className="contact-card whatsapp-card" href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="Chat with us on WhatsApp">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span className="mini-icon" style={{ background: "rgba(255,255,255,.14)", color: "white", marginBottom: 0 }}>
                        <Icon name="chat" />
                      </span>
                      <strong>Chat on WhatsApp</strong>
                    </div>
                    <Icon name="arrow" />
                  </div>
                </a>
              </StaggerItem>

              <StaggerItem>
                <div className="map-card">
                  <iframe
                    title="Trimurti Enterprise Location"
                    src="https://www.google.com/maps?q=19.174911,72.876675&output=embed"
                    width="100%"
                    height="320"
                    style={{ border: 0, borderRadius: "24px" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a
                    className="map-card__badge contact-card"
                    href="https://www.google.com/maps/place/19%C2%B010'29.7%22N+72%C2%B052'36.0%22E/@19.174911,72.876675,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.174911!4d72.876675!18m1!1e1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                      <span className="mini-icon" style={{ marginBottom: 0 }}><Icon name="location" /></span>
                      <strong>View Map Location</strong>
                    </div>
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </SlideIn>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <FadeIn>
            <StaggerContainer className="card-grid">
              {contactStats.map((stat) => {
                const { number, suffix } = parseStatValue(stat.value);

                return (
                  <StaggerItem key={stat.label} className="stat-card" style={{ color: "var(--foreground)" }}>
                    <strong style={{ color: "var(--primary)" }}>
                      <CountUp
                        from={0}
                        to={number}
                        duration={1.8}
                        separator=","
                        suffix={suffix}
                        showSuffixOnEnd
                        className="stat-card__count"
                      />
                    </strong>
                    <span style={{ color: "#757681" }}>{stat.label}</span>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}










