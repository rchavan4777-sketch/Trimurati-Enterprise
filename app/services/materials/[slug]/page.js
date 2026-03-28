import Link from "next/link";
import { notFound } from "next/navigation";
import BorderGlow from "@/components/border-glow";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { StructuredData } from "@/components/structured-data";
import { siteConfig, materialServicePages } from "@/data/site";

const DIVISION_PAGE_CONFIG = {
  "trimurti-stone-crusher": {
    galleryLabel: "Project Photos",
    iconOverrides: {
      "stone-crusher-20-mm": "crusher",
      "stone-crusher-m-sand": "foundation",
      "stone-crusher-plaster-sand": "spark"
    },
    technicalDescription:
      "All materials are processed to meet industry grading standards, ensuring performance reliability in structural applications.",
    technicalPoints: [
      "Suitable for RCC and structural concrete",
      "Controlled particle distribution",
      "Clean and tested material output"
    ],
    productionTitle: "Controlled Production for Reliable Quality",
    productionIntro:
      "Our production process is designed for precision and consistency at every stage:",
    productionSteps: [
      "Raw stone selection",
      "Multi-stage crushing process",
      "Screening and grading",
      "Quality inspection",
      "Bulk dispatch readiness"
    ],
    productionClosing:
      "Every batch is processed to maintain uniformity and performance.",
    promiseTitle: "Why Clients Choose This Division",
    promiseIntro:
      "We maintain stable material quality, dependable dispatch, and consistent support from production to delivery.",
    promisePoints: [
      "Daily quality checks and grading control",
      "High-volume production for uninterrupted site work",
      "Reliable project support for urgent and planned demand"
    ]
  },
  "trimurti-transport": {
    galleryLabel: "Transport Operations",
    iconOverrides: {
      "transport-rubble": "truck",
      "transport-metal-10-20": "foundation",
      "transport-m-sand": "arch",
      "transport-plaster-sand": "spark"
    },
    technicalDescription:
      "Our logistics operations follow controlled dispatch standards to ensure safe handling, timely delivery, and dependable supply flow.",
    technicalPoints: [
      "Optimized routes for faster turnaround",
      "Material-specific loading and handling protocols",
      "Tracked dispatch windows for active sites"
    ],
    productionTitle: "Controlled Logistics for Reliable Delivery",
    productionIntro:
      "Our transport execution model is built for consistency at every stage:",
    productionSteps: [
      "Material pickup planning",
      "Vehicle allocation and route scheduling",
      "Safe loading and dispatch",
      "Transit coordination and delivery confirmation",
      "Rapid turnaround for next-cycle demand"
    ],
    productionClosing:
      "Every load is managed to protect quality, timeline, and site continuity.",
    promiseTitle: "Why Clients Choose Our Transport Division",
    promiseIntro:
      "We deliver disciplined logistics support that keeps construction timelines stable and material flow uninterrupted.",
    promisePoints: [
      "Committed delivery windows",
      "Responsive support for urgent site requirements",
      "Reliable fleet coordination across project phases"
    ]
  }
};

const MATERIAL_LOCAL_IMAGES = {
  "trimurti-stone-crusher": [
    "/images/services/M. SAND1.jpeg",
    "/images/services/M. SAND2.jpeg",
    "/images/services/M. SAND3.jpeg"
  ],
  "trimurti-transport": [
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

  const hasSubServices = Array.isArray(service.subServices) && service.subServices.length > 0;
  const divisionConfig = DIVISION_PAGE_CONFIG[service.slug];
  const isDivisionPage = Boolean(divisionConfig) && hasSubServices;

  const subServiceImages = hasSubServices ? service.subServices.flatMap((item) => item.images ?? []) : [];
  const localImages = Array.from(new Set([...(MATERIAL_LOCAL_IMAGES[slug] ?? []), ...subServiceImages]));
  const heroImage = localImages[0];
  const galleryImages = localImages.length ? [...localImages, ...localImages] : [];

  const linkedSlugs = (service.children ?? [])
    .map((child) => child.href?.match(/^\/services\/materials\/([^#/]+)/)?.[1])
    .filter(Boolean);

  const related = materialServicePages.filter((entry) => {
    if (entry.slug === service.slug) {
      return false;
    }

    if (linkedSlugs.length) {
      return linkedSlugs.includes(entry.slug);
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
          <SlideIn direction="left">
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
          </SlideIn>

          {heroImage ? (
            <SlideIn direction="right" delay={0.1}>
              <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
                <MediaFrame src={heroImage} alt={service.title} className="image-frame" />
              </div>
            </SlideIn>
          ) : null}
        </div>
      </section>

      <section className="section">
        {isDivisionPage ? (
          <>
            <div className="container" style={{ marginTop: "2rem" }}>
              <FadeIn>
                <div className="section-heading">
                  <div>
                    <h2 className="headline">Sub Services</h2>
                    <div className="underline" />
                  </div>
                </div>
              </FadeIn>

              <StaggerContainer className="feature-grid">
                {service.subServices.map((subService) => (
                  <StaggerItem key={subService.slug}>
                    <BorderGlow innerClassName="benefit-card" backgroundColor="var(--surface-card)" borderRadius={24}>
                      <article id={subService.slug} style={{ scrollMarginTop: "7rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: ".9rem", marginBottom: "1rem" }}>
                          <div className="mini-icon" style={{ marginBottom: 0 }}>
                            <Icon name={divisionConfig.iconOverrides[subService.slug] ?? subService.icon} />
                          </div>
                          <h3 style={{ margin: 0 }}>{subService.title}</h3>
                        </div>
                        <p>{subService.description}</p>
                        <ul className="bullet-list" style={{ marginTop: "1rem" }}>
                          {subService.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </article>
                    </BorderGlow>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {galleryImages.length ? (
              <FadeIn className="container" style={{ marginTop: "1.5rem" }}>
                <span className="eyebrow">{divisionConfig.galleryLabel}</span>
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
              </FadeIn>
            ) : null}

            <div className="container" style={{ marginTop: "2rem" }}>
              <StaggerContainer className="split-grid">
                <StaggerItem>
                  <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                    <article>
                      <span className="eyebrow">Technical Specifications</span>
                      <h2 className="headline" style={{ marginTop: "1rem" }}>Technical Specifications</h2>
                      <p style={{ marginTop: "1rem" }}>{divisionConfig.technicalDescription}</p>
                      <ul className="bullet-list" style={{ marginTop: "1rem" }}>
                        {divisionConfig.technicalPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  </BorderGlow>
                </StaggerItem>

                <StaggerItem>
                  <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                    <article>
                      <span className="eyebrow">Production Process</span>
                      <h2 className="headline" style={{ marginTop: "1rem" }}>{divisionConfig.productionTitle}</h2>
                      <p style={{ marginTop: "1rem" }}>{divisionConfig.productionIntro}</p>
                      <ul className="bullet-list" style={{ marginTop: "1rem" }}>
                        {divisionConfig.productionSteps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                      <p style={{ marginTop: "1rem", fontWeight: 600 }}>{divisionConfig.productionClosing}</p>
                    </article>
                  </BorderGlow>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <FadeIn className="container" style={{ marginTop: "2rem" }}>
              <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                <article>
                  <span className="eyebrow">Operational Promise</span>
                  <h2 className="headline" style={{ marginTop: "1rem" }}>{divisionConfig.promiseTitle}</h2>
                  <p style={{ marginTop: "1rem" }}>{divisionConfig.promiseIntro}</p>
                  <div style={{ display: "grid", gap: ".8rem", marginTop: "1.2rem" }}>
                    {divisionConfig.promisePoints.map((point) => (
                      <div key={point} className="nav-dropdown__item" style={{ border: "1px solid rgba(70,91,158,.14)", borderRadius: "10px" }}>
                        {point}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "1.4rem" }}>
                    <Link href="/contact" className="button">Request Quote</Link>
                  </div>
                </article>
              </BorderGlow>
            </FadeIn>
          </>
        ) : (
          <div className="container" style={{ marginTop: "2rem" }}>
            <StaggerContainer className="split-grid">
              <StaggerItem>
                <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                  <article>
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
                </BorderGlow>
              </StaggerItem>

              {related.length ? (
                <StaggerItem>
                  <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                    <article>
                      <h3 style={{ marginTop: 0 }}>Related Services</h3>
                      <div style={{ display: "grid", gap: ".75rem", marginTop: "1rem" }}>
                        {related.map((item) => (
                          <Link key={item.slug} href={`/services/materials/${item.slug}`} className="nav-dropdown__item" style={{ border: "1px solid rgba(70,91,158,.14)", borderRadius: "10px" }}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </article>
                  </BorderGlow>
                </StaggerItem>
              ) : null}
            </StaggerContainer>
          </div>
        )}
      </section>
    </>
  );
}

