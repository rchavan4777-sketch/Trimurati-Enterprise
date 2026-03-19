import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">404</span>
        <h1 className="display" style={{ marginTop: "1rem" }}>Page not found.</h1>
        <p className="lede" style={{ maxWidth: "34rem", margin: "1rem auto 0" }}>
          The page you requested does not exist or has moved. Use the links below to continue exploring the site.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
          <Link href="/" className="button">Home</Link>
          <Link href="/services" className="button-secondary">Services</Link>
        </div>
      </div>
    </section>
  );
}


