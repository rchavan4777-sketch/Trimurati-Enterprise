export const siteConfig = {
  name: "Trimurti Enterprise",
  url: "https://www.trimurtienterprise.com",
  description:
    "Trimurti Enterprise delivers infrastructure materials, transport logistics, hard rock blasting, and civil execution support for large-scale industrial projects across India.",
  phone: "+91 98765 43210",
  email: "info@trimurtienterprise.com",
  whatsapp: "919876543210",
  address: {
    street: "102 Archway Plaza, Industrial District",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "400001"
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Instagram", href: "https://www.instagram.com" }
  ]
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const homeStats = [
  { value: "250+", label: "Active Projects" },
  { value: "1.2k", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" }
];

export const services = [
  {
    slug: "hard-rock-control-blasting",
    name: "Hard Rock Control Blasting",
    short: "Precision-engineered excavation with minimal vibration and maximum control.",
    description:
      "High-precision explosives management for controlled excavations in dense geological environments and sensitive infrastructure zones.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmdn15gFnARIsAxCehHV1FnRs1YG7mvEcRr8pJ8duOGGod2Q9Ic4rP3VUn1ql2Ruq5xY6LTJm5LpusszXyjojuGT9Vhl2TyQ-LRFYNo_4NNP7yekE1-M1UsUBVog3YcznAWkEc-baxnNWLqKHusE_Dk-YGzdYl-RK5h3yfKzr3C9ew0Ld_RiASWrky1Ue0MQcT2dcxvpdhgIFQDjw6U2idpYWxeEOrVXjgEGsSVpEajsECk2yrwpRKcinNYFIau0qkDRuBsPPldk",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOAWbksS9ye5pYAcdBM84176G5iBEGeI9BTMXqeXR-DeIQI6p5uARrK1KK-PWbNzLXIngQjzrOh6H5eEszk_vNyNcEf-o_g-qnXsDeUrcnqJ7OMeVu_OLCWGBsFWjigrmhYlbyhtZtkXAzhWXTSyyrx40TuUM7HoSrMEIUAtiSwM7IvJGFoo244MKDUMKEMhsXQi5yg8DTYbOE0lIzxI-A1fBFO_6exTYBoB-1dH_bOQC6BjRsAm0r3vogA7_5nmF_K89vsD6L2rw",
    icon: "blast",
    heroTag: "Infrastructure Excellence",
    useCases: ["Urban Excavation", "Tunneling Projects", "Quarry Operations"],
    benefits: [
      {
        title: "Seismic Safety",
        text: "Advanced vibration monitoring protects nearby utilities, heritage structures, and dense urban developments."
      },
      {
        title: "Precision Profiling",
        text: "Accurate cut geometry reduces over-break and minimizes downstream backfilling requirements."
      },
      {
        title: "Time Efficiency",
        text: "Optimized blast sequencing accelerates excavation cycles and keeps infrastructure schedules on track."
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Site Survey",
        text: "Geological mapping, density assessment, and utility sensitivity reviews shape the blast strategy."
      },
      {
        step: "02",
        title: "Blast Design",
        text: "Hole depth, burden, spacing, and charge distribution are modeled for safe fragmentation."
      },
      {
        step: "03",
        title: "Execution",
        text: "Electronic detonators and controlled sequencing manage energy release with site-specific discipline."
      },
      {
        step: "04",
        title: "Post-Blast Analysis",
        text: "Debris clearance and vibration review verify performance and support final sign-off."
      }
    ],
    metaTitle: "Hard Rock Control Blasting Services",
    metaDescription:
      "Explore Trimurti Enterprise hard rock control blasting solutions for excavation, tunneling, quarry work, and sensitive urban projects."
  },
  {
    slug: "hard-rock-diamond-saw-cutting",
    name: "Hard Rock Diamond Saw Cutting",
    short: "Clean, vibration-free sawing for precise removal in constrained sites.",
    description:
      "Industrial diamond-tipped cutting solutions for exact line control where low vibration and minimal disturbance are critical.",
    icon: "cut"
  },
  {
    slug: "chemical-hard-rock-cracking",
    name: "Chemical Hard Rock Cracking",
    short: "Silent expansive agents for demolition zones where blasting is restricted.",
    description:
      "Rock demolition using expansive compounds to split hard strata safely in regulated, dense, or noise-sensitive areas.",
    icon: "flask"
  },
  {
    slug: "manual-hard-rock-breaking",
    name: "Manual Hard Rock Breaking",
    short: "Skilled intervention for delicate and difficult access excavation work.",
    description:
      "Careful manual rock removal for precision excavation around utilities, structures, and irregular profiles.",
    icon: "hammer"
  },
  {
    slug: "splitter-rock-cracking",
    name: "Splitter Rock Cracking",
    short: "Hydraulic splitting for efficient breakdown of large hard rock sections.",
    description:
      "Controlled rock splitting solutions that improve safety and access while reducing uncontrolled breakage.",
    icon: "split"
  },
  {
    slug: "steel-fabric-wiremesh-fixing",
    name: "Fixing of Steel Fabric / Wiremesh",
    short: "Reinforcement installation for slope protection and excavation stability.",
    description:
      "Mesh and fabric fixing services that strengthen exposed faces and support shotcrete or structural stabilization layers.",
    icon: "grid"
  },
  {
    slug: "all-diameter-rockbolts",
    name: "All Diameter Rockbolts",
    short: "Comprehensive rock anchoring systems for face and tunnel stabilization.",
    description:
      "Rockbolt supply and installation across a range of diameters for underground works, slopes, and structural retaining faces.",
    icon: "bolt"
  },
  {
    slug: "shotcrete",
    name: "Shotcrete",
    short: "Immediate concrete support and surface sealing for demanding sites.",
    description:
      "High-pressure shotcrete application for excavation support, lining, sealing, and rapid structural reinforcement.",
    heroImage: "/images/services/SHOTCRETE1.jpeg",
    detailImage: "/images/services/SHOTCRETE2.jpeg",
    ctaImage: "/images/services/SHOTCRETE3.jpeg",
    icon: "drop",
    metaTitle: "Shotcrete Services",
    metaDescription:
      "Explore Trimurti Enterprise shotcrete services for rapid structural support, sealing, and reinforced excavation surfaces."
  }
];

export const featuredServices = [
  { title: "Civil Engineering", text: "Precision planning and structural integrity for large-scale urban developments.", icon: "arch" },
  { title: "Raw Materials", text: "Supplying premium stone, sand, and graded aggregates for heavy foundations.", icon: "foundation" },
  { title: "Bulk Logistics", text: "High-capacity transport systems that keep projects supplied without delay.", icon: "truck" },
  { title: "Mining Operations", text: "Efficient resource extraction managed with disciplined environmental safety protocols.", icon: "pick" },
  { title: "Heavy Equipment", text: "A modern fleet of excavators, crushers, and support machinery for high-output sites.", icon: "tools" },
  { title: "Rapid Deployment", text: "Responsive logistics support for emergency infrastructure repairs and supply movement.", icon: "speed" },
  { title: "Quality Control", text: "Internal testing and sieve analysis to ensure dependable aggregate performance.", icon: "shield" },
  { title: "Site Consulting", text: "On-ground advice that aligns material quality, haulage planning, and structural requirements.", icon: "people" }
];

export const divisions = [
  {
    title: "Trimurti Stone Crusher",
    text: "Our crushing units utilize advanced engineering to produce graded aggregates that exceed national standards for heavy-duty infrastructure.",
    points: ["High-grade basalt aggregates", "Precision sieve analysis"],
    cta: "Technical Specs",
    icon: "crusher"
  },
  {
    title: "Trimurti Transport",
    text: "A heavy-lift fleet equipped with route planning and disciplined logistics coordination for just-in-time delivery.",
    points: ["Multi-axle logistics solutions", "Specialized heavy haulage"],
    cta: "Fleet Capacity",
    icon: "truck"
  }
];

export const certifications = [
  { title: "ISO 9001:2015", text: "Quality Management", icon: "seal" },
  { title: "Class A Contractor", text: "Govt. Certified", icon: "gavel" },
  { title: "OHSAS 18001", text: "Safety Standard", icon: "shield" },
  { title: "Green Enabler", text: "Sustainable Sourcing", icon: "leaf" }
];

export const values = [
  {
    title: "The Mission",
    text: "To empower infrastructure projects with uncompromised material quality and logistics precision, ensuring every foundation is built for longevity.",
    icon: "rocket"
  },
  {
    title: "The Vision",
    text: "To be the most trusted name in architectural resources across the nation, synonymous with the strength of the structures we help build.",
    icon: "vision"
  },
  {
    title: "The Values",
    text: "Integrity in measurement, punctuality in delivery, and excellence in every grain of sand we provide to our civic partners.",
    icon: "spark"
  }
];

export const team = [
  {
    name: "Rajesh Trimurti",
    role: "Managing Director",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Ss8XwHU8_o3AwZF2UTr10UB1T90-CIcXWclmCj5rw-INr8tRipSLCuWpPGxtjiNefaKBG2YzbrlUqaTYjsauwfz4QV8bhwZCSOdbiTB-JhPAHrhg5f64N4M-GwRS28XEbs8mBMe7lpJ-2h9IuWdL_HdpvyJvUSDi_mHxCN-BGvORFxWVEMy1ya1OUUgEaUEwi_y9FmQ2PAX9KU8Xg8Dr18LDwCHs6FWlPR9z9XFvPaLBwqOGLnjEhrIDBQJrDMFBqtdxPcKW5Bc"
  },
  {
    name: "Ananya Sharma",
    role: "Head of Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBSiHlSqd_KJb2Fo4zEiYemJOEouKmuaQt5vd0AZrS73lcFHDf1VYc0qKotdhvioJGuPbqKAvpkW86fEjawh1tUaxRjJs-ixytfd3rcnOiZmLyXia7VMVXQWD2NnaC63uPqkY_XCDcndFNbrkAhABpfPG7u7xdnv-qI1HYMUJKyXi2bQZoX4hWTjf7e880Zh2cR5dBc3gdcOXSBkhjHplh0uqF0D3XUXg8KS8yMXaFYuyQfzdEo6r2MQe1YvI-wNxhMvKgYIuxpuc"
  },
  {
    name: "Vikram Singh",
    role: "Logistics Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Sc3nf71pcMeXoqay01xswrUahk2SDKYgRThoIfHBohqb_9Na1PjbhJsihM3s1yMr2x9aSRtJ3D3iyL4ISf7CSt-Y6xLnm9BMPKxPrFm7dKoutaW41nLtZHz95yDPfj8IOw1D5RP61NAyYujFx398wMYJBdjcyJFRcFbj-eXXENbf9UJNdzQ835-5pqSnGzfIOQXvp36Q44OC3corRmoGjzx5XW30kW_EE2cDT_h0M0UFsBWd0hPlP8JE5JqDSuql6zq2ylHtl7o"
  },
  {
    name: "Priya Patel",
    role: "Quality Assurance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ggsQch0zG0KlXbaC3CbQWVvQvOBLO0-nFIqUT8SiQplwQ6d9F4U9R06xNLs1JrBBKqcNtm1kNcfn6qe-Hwjc0bAd5hRGhFGxnrYuc3LkXzSmgLkD2VUuQRROv6NUT0S4g1wf90zeWLrVl12Tw-u2qvqqREx3-_n52d8fY9G8gJLv8RNBhA3sQ43Q8vv5zh_7j8AJRs3Um4Y8Tqv7H44M-iP8NyBGCAv5CiMugZh3WwYiQxVfPev5I-UZ4HIKsHd3pyc1hBZUJDY"
  }
];

export const resources = [
  {
    title: "Stone Crusher",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2NiiDj-dbPS3mFziZt5XDj0viGkXmP1vNcSFK4LGx6n9qb8GRA7dLKm08CnThOiKBacjui-6U4TMdyJv8ELQxxsWPQtQvYtlK5IwdVFYaf3fzsIEUwz-It5-RhO1LwIISW--JxodO1o9gH7pCmUsXtoHzWla1IGjgCXDmSMRltMleM2OrB3W_tkCKzIuMwNyqNe6S1fTCNUVtLAJ61LSMpgnL7oWAZ4vDbBzmt0eOkMn_PxNY4Qkc-C6PFaUdXvDYsj9wglwiWs",
    points: ["20mm aggregate", "M-Sand (manufactured sand)", "Plaster sand"]
  },
  {
    title: "Transport Services",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9n9vGk9bInV-lH1C8WAZIOIcbWoC9eXg22jnGifglTlgYphA6we6rPJraQiqx-CZyuPWw4hQ1UgaEahnIui8TJ4fCnJPhhHpt_JLbHxrxkZBD0UIg2MLaU_TpNu43i9_50VbqB1xwiDr3cdLbyGtay5WSXEk9PuXfZnzKw21COtr87oQqAwDmz6M5nmPdW3Z_ML2P30cSKbMMQ9p82eFsSU-GZPN5v4p8bKdeIujSiImYuMsW7Xs78-Fb-eYvL0Pwa6-JGgw7pFE",
    points: ["Rubble transport", "Metal haulage", "Fleet logistics solutions"]
  }
];

export const contactStats = [
  { value: "15+", label: "Years Experience" },
  { value: "450+", label: "Projects Delivered" },
  { value: "12", label: "Regions Covered" },
  { value: "100%", label: "Safety Record" }
];

export const mapImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCPSxi9nnEz9CWZXIPFPDTIhG9vB538C6Q9DvlD4mhSpX9b0OJoJP9qlkNWyall8y5OvFrYi5Hh0LdeGkSkDGrdoAfeXWEjXN3VjTN3sw0R-KKKztyDPkq8kO3Yz8D0ueVXOe-SZHEZ4vzAcDU9KeEPfmJ1HJaf4XKoj0zlCDTwI2hotY0nFWAS0eAdeSMtb7Ei2Mu8qXOMNTS64fdGId3asevujjLe6oOPTD5R78yEVp4iOWA2c3Q4OjgxBtjoBraxJRNz2VJhk7k";

export const homeImages = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdQx3BGq6SInZSlQ9SBhUYARNzBZgtCyKimG6ezDbl5J1SoJpYD5af-wHPr-SsaZREmTEouxVBJAiSuAEEE01oMlCpKX0bHhDY0RMG_NACdlFcfp4Cj7f_V0bQEDP6lx4bvP1jHcMT_nRX2OXJ_5e-OTHRlD1sfmLaQGnYGZl68Y2plpp60Qxl-YL2EYTwqcffECvIjJhKmVAAduUVGO_hPb904YTxpQKZvG-6O2QY09GWu-aVaTPcXR4NH7wFSG7IjnlaJGNlgtk",
  crusher:
    "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=80",
  transport:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
};


