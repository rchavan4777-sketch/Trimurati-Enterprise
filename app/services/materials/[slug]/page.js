import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { StructuredData } from "@/components/structured-data";
import { siteConfig, materialServicePages } from "@/data/site";

const MATERIAL_LOCAL_IMAGES = {
  "stone-crusher-m-sand": [
    "/images/services/M. SAND1.jpeg",
    "/images/services/M. SAND2.jpeg",
    "/images/services/M. SAND3.jpeg"
  ],
  "transport-m-sand": [
    "/images/services/M. SAND1.jpeg",
    "/images/services/M. SAND2.jpeg",
    "/images/services/M. SAND3.jpeg"
  ]
};

export function generateStaticParams() {
  return materialServicePages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = materialServicePages.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/materials/${service.slug}`
    }
  };
}

export default async function MaterialServicePage({ params }) {
  const { slug } = await params;
  const service = materialServicePages.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const localImages = MATERIAL_LOCAL_IMAGES[slug] ?? [];
  const heroImage = localImages[0];
  const galleryImages = localImages.length ? [...localImages, ...localImages] : [];

  const related = materialServicePages.filter((entry) => {
    if (entry.slug === service.slug) {
      return false;
    }

    if (service.children?.length) {
      return service.children.some((child) => child.href === `/services/materials/${entry.slug}`);
    }

    return entry.group === service.group;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    url: `${siteConfig.url}/services/materials/${service.slug}`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="section" style={{ background: "linear-gradient(135deg, rgba(70,91,158,.96), rgba(132,153,224,.82))", color: "white" }}>
        <div className="container split-grid" style={{ alignItems: "center" }}>
          <div style={{ padding: "2rem 0" }}>
            <span
              className="eyebrow"
              style={{ color: "white", background: "rgba(255,255,255,.14)", padding: ".45rem .85rem", borderRadius: "999px" }}
            >
              {service.group}
            </span>
            <h1 className="display" style={{ color: "white", marginTop: "1rem" }}>
              {service.title}
            </h1>
            <p className="lede" style={{ color: "rgba(255,255,255,.86)", maxWidth: "50rem", marginTop: "1.2rem" }}>
              {service.description}
            </p>
          </div>

          {heroImage ? (
            <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
              <MediaFrame src={heroImage} alt={service.title} className="image-frame" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <article className="panel">
            <div className="service-icon">
              <Icon name={service.icon} />
            </div>
            <h2 className="headline">Service Highlights</h2>
            <ul className="bullet-list" style={{ marginTop: "1rem" }}>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div style={{ marginTop: "1.4rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="button">Request Quote</Link>
              <Link href="/services" className="button-secondary">All Services</Link>
            </div>
          </article>

          <article className="panel">
            <h3 style={{ marginTop: 0 }}>Related Services</h3>
            <div style={{ display: "grid", gap: ".75rem", marginTop: "1rem" }}>
              {related.map((item) => (
                <Link key={item.slug} href={`/services/materials/${item.slug}`} className="nav-dropdown__item" style={{ border: "1px solid rgba(70,91,158,.14)", borderRadius: "10px" }}>
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
        </div>

        {galleryImages.length ? (
          <div className="auto-strip" aria-label={`${service.title} gallery`}>
            <div className="auto-strip__track">
              {galleryImages.map((image, index) => (
                <div key={`${image}-${index}`} className="auto-strip__item">
                  <MediaFrame
                    src={image}
                    alt={`${service.title} image ${index + 1}`}
                    className="image-frame"
                    sizes="(max-width: 980px) 70vw, 28vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
