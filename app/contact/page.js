import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { contactStats, mapImage, siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Trimurti Enterprise for stone crusher supply, transport logistics, hard rock blasting, and infrastructure consultation."
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
      <section className="section"><div className="container" style={{ textAlign: "center" }}><span className="eyebrow">Reach Out To Us</span><h1 className="display" style={{ maxWidth: "56rem", margin: "1rem auto 0" }}>Let&apos;s build your <em>vision</em> together.</h1></div></section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <article className="service-card">
            <h2 className="headline" style={{ fontSize: "2.5rem" }}>Send an Enquiry</h2>
            <form className="contact-form" style={{ marginTop: "2rem" }}>
              <div className="contact-form__row">
                <div className="field"><label htmlFor="name">Full Name</label><input id="name" name="name" type="text" placeholder="John Doe" /></div>
                <div className="field"><label htmlFor="phone">Phone Number</label><input id="phone" name="phone" type="tel" placeholder="+91 000 000 0000" /></div>
              </div>
              <div className="field"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" placeholder="john@enterprise.com" /></div>
              <div className="field"><label htmlFor="service">Service Interest</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a Service</option><option>Stone Crusher Operations</option><option>Transport Logistics</option><option>Material Supply</option><option>Site Excavation</option><option>Construction Consultation</option><option>Safety Auditing</option></select></div>
              <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" placeholder="Tell us about your project requirements..." /></div>
              <button type="submit" className="button" style={{ width: "100%", marginTop: ".5rem" }}>Submit Enquiry</button>
            </form>
          </article>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            <article className="contact-card panel"><div className="mini-icon"><Icon name="location" /></div><h3 style={{ marginTop: 0 }}>Our Headquarters</h3><p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}</p></article>
            <article className="contact-card panel"><div className="mini-icon"><Icon name="call" /></div><h3 style={{ marginTop: 0 }}>Phone &amp; Support</h3><p>{siteConfig.phone}</p><p>Mon - Fri, 9:00 AM - 6:00 PM</p><div className="mini-icon" style={{ marginTop: "1rem" }}><Icon name="mail" /></div><h3>Email</h3><p>{siteConfig.email}</p></article>
            <a className="contact-card whatsapp-card" href={`https://wa.me/${siteConfig.whatsapp}`}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}><div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><span className="mini-icon" style={{ background: "rgba(255,255,255,.14)", color: "white", marginBottom: 0 }}><Icon name="chat" /></span><strong>Chat on WhatsApp</strong></div><Icon name="arrow" /></div></a>
            <div className="map-card"><MediaFrame src={mapImage} alt="Map visualization of Trimurti Enterprise location" className="image-frame" /><div className="map-card__badge contact-card"><div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}><span className="mini-icon" style={{ marginBottom: 0 }}><Icon name="location" /></span><strong>View Map Location</strong></div></div></div>
          </div>
        </div>
      </section>
      <section className="section section--soft"><div className="container"><div className="card-grid">{contactStats.map((stat) => <div key={stat.label} className="stat-card" style={{ color: "var(--foreground)" }}><strong style={{ color: "var(--primary)" }}>{stat.value}</strong><span style={{ color: "#757681" }}>{stat.label}</span></div>)}</div></div></section>
      <WhatsAppFloat />
    </>
  );
}


