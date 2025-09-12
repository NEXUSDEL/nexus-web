import React, { useState } from "react";

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "delineacion", label: "Delineación" },
  { id: "asesoramiento", label: "Asesoramiento" },
  { id: "formacion", label: "Formación" },
  { id: "proyectos", label: "Proyectos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

const delineacionServices = [
  {
    title: "Planos y Delineación",
    desc: "Elaboración de esquemas eléctricos industriales desde cero: unifilares, multifilares, control y potencia.",
  },
  {
    title: "As-Built & Actualizaciones",
    desc: "Levantamiento, digitalización y actualización de documentación de instalaciones existentes.",
  },
  {
    title: "Cálculo y Dimensionamiento",
    desc: "Criterios de selección de cables, protecciones y cuadros según normativa y condiciones de servicio.",
  },
  {
    title: "Cumplimiento Normativo",
    desc: "Digitalización, actualización y migración de planos antiguos a normativas IEC 61355 e IEC 81346.",
  },
  {
    title: "Integración 3D",
    desc: "Creacion de Gemelo Digital para simular situaciones en el entorno virtual sin riesgo para la instalación real.",
  },
  {
    title: "Soporte a OT",
    desc: "Planificación, revisiones en campo y ajustes durante montaje y puesta en marcha.",
  },
];

const asesoramientoPoints = [
  {
    title: "Estandarización",
    desc: "Definición e implementación de estándares de diseño adaptados a tu empresa",
    icon: "Wrench"
  },
  {
    title: "Listas de Materiales",
    desc: "Creación de bibliotecas de macros, objetos, plantillas y bases de datos actualizadas.",
    icon: "Doc"
  },
  {
    title: "Optimización Documental",
    desc: "Automatización de cableados, generación de listas de materiales (BOM), planos de mecanizado personalizados.",
    icon: "Shield"
  }
];

const formacionPrograms = [
  {
    title: "Formación de Incorporación",
    desc: "Entrenamiento operativo y estratégico a todos los niveles: integración de nuevos ingenieros, reciclaje de equipos técnicos y actualización de perfiles senior.",
    icon: "Doc"
  },
  {
    title: "Promoción Interna",
    desc: "Formación práctica para maximizar la eficiencia, reducir tiempos en diseño y acelerar la producción.",
    icon: "Wrench"
  },
  {
    title: "Actualización de Habilidades",
    desc: "Adaptado a empresas fabricantes de maquinaria, cuadros eléctricos e instaladores industriales.",
    icon: "Shield"
  }
];

const projects = [
  {
    title: "Armarios de potencia",
    img: "/fotos/Potencia.png",
  },
  {
    title: "Armario de control cableado",
    img: "/fotos/Control.png",
  },
  {
    title: "Evaluacion de enrutado",
    imgs: [
      "/fotos/Evaluación W..png",
      "/fotos/Wiring.png",
      "/fotos/Wiring2.png"
    ],
  },
];

const features = [
  { text: "Delineación de calidad" },
  { text: "Asesoramiento experto" },
  { text: "Formación práctica" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nexus-delineaci%C3%B3n-el%C3%A9ctrica-industrial/ " },
];

/* --- Iconos SVG inline --- */
// Iconos minimalistas y monocromáticos
const IconCompass = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16 12 12 8 8 12 12 16 16 12" />
  </svg>
);
const IconUpdate = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 9-9c2.39 0 4.58.94 6.26 2.47" />
    <path d="M21 12a9 9 0 1 1-9-9" />
  </svg>
);
const IconRulerCalc = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="6" rx="2" />
    <path d="M7 3v6M11 3v6M15 3v6M19 3v6" />
  </svg>
);
const IconDoc = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="13" y2="14" />
  </svg>
);
const IconCube3D = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);
const IconSupport = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 15c0 2 8 2 8 0" />
    <circle cx="9" cy="10" r="1" />
    <circle cx="15" cy="10" r="1" />
  </svg>
);
const IconIndustry = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="12" width="20" height="8" rx="2" />
    <rect x="6" y="8" width="4" height="4" />
    <rect x="14" y="4" width="4" height="8" />
  </svg>
);
const IconList = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="6" cy="6" r="2" />
    <circle cx="6" cy="12" r="2" />
    <circle cx="6" cy="18" r="2" />
    <line x1="10" y1="6" x2="20" y2="6" />
    <line x1="10" y1="12" x2="20" y2="12" />
    <line x1="10" y1="18" x2="20" y2="18" />
  </svg>
);

// Iconos utilitarios y de contacto
const IconBolt = ({ className = "h-6 w-6 text-yellow-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const IconWrench = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14.7 4a4 4 0 0 1 5.6 5.6L14 16.9 10 13l5.7-9z" />
    <path d="M2 20l6-6" />
  </svg>
);
const IconShield = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2l7 4v6c0 5-4 9-7 10-3-1-7-5-7-10V6l7-4z" />
  </svg>
);
const IconPhone = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a16 16 0 0 0 10 10h3a2 2 0 0 1 2 2z" />
  </svg>
);
const IconMail = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconMapPin = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconLinkedIn = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2563eb" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 1 1 4 0v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconMenu = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const IconClose = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Logo({ variant = "dark", className }) {
  // Si es para el menú (dark), mostrar Logo X Blanco.png un poco más pequeño; si es para Hero (light), Baner_BSF.png grande y centrado
  const src = variant === "light" ? "/logos/Baner_BSF.png" : "/logos/Logo X Blanco.png";
  let sizeClass = "";
  if (variant === "light") {
    sizeClass = className || "mx-auto h-32 sm:h-40 w-auto";
  } else {
    sizeClass = className || "h-16 sm:h-20 w-auto";
  }
  return <img src={src} alt="NEXUS Delineación Eléctrica Industrial" className={sizeClass} />;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <Logo variant="dark" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
                {n.label}
              </a>
            ))}
            <a href="#contacto" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm bg-red-600 text-white hover:bg-red-700">Solicita presupuesto</a>
          </div>
          <button className="md:hidden p-2 rounded-xl border border-neutral-200" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-sm font-medium text-neutral-700">
                {n.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm bg-red-600 text-white">Solicita presupuesto</a>
          </div>
        )}
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[88vh] grid place-items-center bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,0,0,0.25),transparent_50%)]" />
      <div className="absolute -top-20 right-10 rotate-12 opacity-10 blur-2xl">
        <Logo variant="light" className="h-32 w-auto" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center">
  <Logo variant="light" className="mx-auto h-32 sm:h-40 mb-6" />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Delineación, Asesoramiento y Formación Eléctrica</h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto">En NEXUS optimizamos tus procesos de diseño eléctrico aportando documentación precisa, flujos de trabajo estandarizados y formación avanzada. Somos tu partner técnico: te ayudamos a avanzar más rápido y sin errores..</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg bg-white text-black hover:bg-neutral-200">Solicitar presupuesto</a>
          <a href="#delineacion" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold border border-white/20 hover:bg-white/10">Ver servicios</a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-90">
          {features.map((f, i) => (
            <div key={i} className="inline-flex items-center gap-2 text-sm text-neutral-300">
              <IconBolt className="h-4 w-4" />
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Delineacion() {
  return (
    <section id="delineacion" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Delineación Eléctrica Industrial</h2>
        <p className="mt-3 text-neutral-600 max-w-3xl">¿Picos de trabajo en la oficina técnica? ¿Nuevos proyectos que desbordan a tu equipo? Que la falta de recursos internos no frene tu producción. Funcionamos como una extensión experta de tu equipo de ingeniería.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {delineacionServices.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-md bg-red-50 p-2">
                {idx === 0 && <IconCompass className="h-6 w-6" />} {/* Planos y Delineación */}
                {idx === 1 && <IconUpdate className="h-6 w-6" />} {/* As-Built & Actualizaciones */}
                {idx === 2 && <IconRulerCalc className="h-6 w-6" />} {/* Cálculo y Dimensionamiento */}
                {idx === 3 && <IconDoc className="h-6 w-6" />} {/* Cumplimiento Normativo */}
                {idx === 4 && <IconCube3D className="h-6 w-6" />} {/* Integración 3D */}
                {idx === 5 && <IconSupport className="h-6 w-6" />} {/* Soporte a OT */}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg bg-red-600 text-white hover:bg-red-700">Solicitar presupuesto sin compromiso</a>
        </div>
      </div>
    </section>
  );
}

function Asesoramiento() {
  return (
    <section id="asesoramiento" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Asesoramiento Especializado</h2>
        <p className="mt-3 text-neutral-600 max-w-3xl">¿Sientes que tu equipo solo aprovecha el 30% del potencial de EPLAN? Tener el mejor software no garantiza la eficiencia. La estandarización de procesos, sí. En NEXUS, no solo diseñamos; optimizamos tu flujo de trabajo de ingeniería.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {asesoramientoPoints.map((point, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-md bg-red-50 p-2">
                {idx === 0 && <IconIndustry className="h-6 w-6" />} {/* Estandarización */}
                {idx === 1 && <IconList className="h-6 w-6" />} {/* Listas de Materiales */}
                {idx === 2 && <IconDoc className="h-6 w-6" />} {/* Optimización Documental */}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{point.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg bg-red-600 text-white hover:bg-red-700">Solicita una sesión de diagnóstico gratuita</a>
        </div>
      </div>
    </section>
  );
}

function Formacion() {
  return (
    <section id="formacion" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Formación Especializada</h2>
        <p className="mt-3 text-neutral-600 max-w-3xl">¿Quieres promocionar a tus técnicos pero te falta tiempo para formarlos? El mayor activo de tu empresa es tu equipo. En NEXUS, nos encargamos de potenciarlo. Ofrecemos formación especializada en EPLAN Electric y ProPanel.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {formacionPrograms.map((program, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-md bg-red-50 p-2">
                {program.icon === "Wrench" ? <IconWrench className="h-6 w-6 text-red-600" /> : program.icon === "Doc" ? <IconDoc className="h-6 w-6 text-red-600" /> : <IconShield className="h-6 w-6 text-red-600" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{program.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{program.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg bg-red-600 text-white hover:bg-red-700">Consulta nuestros planes de formación</a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Proyectos</h2>
          <a href="#contacto" className="text-sm font-semibold underline decoration-2 underline-offset-4 decoration-red-600">¿Tienes un proyecto? Hablemos</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {p.imgs ? (
                <div className="flex flex-row gap-2 justify-center items-center p-2">
                  {p.imgs.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={p.title + ' ' + (idx + 1)}
                      className="aspect-[16/10] w-1/3 object-cover group-hover:scale-[1.03] transition-transform rounded-lg border"
                    />
                  ))}
                </div>
              ) : (
                <img src={p.img} alt={p.title} className="aspect-[16/10] w-full object-cover group-hover:scale-[1.03] transition-transform" />
              )}
              <figcaption className="p-4 text-sm text-neutral-700">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Nosotros</h2>
          <p className="mt-4 text-neutral-600">En <strong>NEXUS</strong> nos especializamos en delineación eléctrica industrial, asesoramiento y formación. Nuestro objetivo es entregar documentación clara y ejecutable que permita construir sin sorpresas: planos coherentes, listados completos y memoria técnica alineada con normativa.</p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• Experiencia en fabricantes de cuadros eléctricos, maquinaria y automatización.</li>
            <li>• Especialistas en estandarización de procesos.</li>
            <li>• Comunicación fluida con ingeniería, compras y producción.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
          <div className="flex items-center gap-3">
            <Logo variant="dark" />
            <span className="text-sm text-neutral-600">Delineación Eléctrica Industrial</span>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl p-4 bg-white border border-neutral-200">
              <h4 className="font-semibold">Metodología</h4>
              <p className="mt-1 text-neutral-600">Kick-off, hitos, control de cambios y entrega final validada.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-neutral-200">
              <h4 className="font-semibold">Herramientas</h4>
              <p className="mt-1 text-neutral-600">EPLAN Electric, EPLAN Pro Panel, Eplan FLuid.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Contacto</h2>
          <p className="mt-4 text-neutral-600">Cuéntanos brevemente tu necesidad y te responderemos con una propuesta personalizada en menos de 24 horas.</p>
          <div className="mt-6 space-y-3 text-neutral-700">
            <p className="flex items-center gap-2"><IconPhone className="h-5 w-5" /> <a href="tel:+34625522145" className="underline decoration-2 underline-offset-4 decoration-red-600">+34 625 52 21 45</a></p>
            <p className="flex items-center gap-2"><IconMail className="h-5 w-5" /> <a href="mailto:nexusdelineacion@gmail.com" className="underline decoration-2 underline-offset-4 decoration-red-600">nexusdelineacion@gmail.com</a></p>
            <p className="flex items-center gap-2"><IconMapPin className="h-5 w-5" /> Barcelona, España</p>
            <div className="flex gap-3 pt-2">
              {social.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 border border-neutral-300 text-sm hover:bg-neutral-100">
                  <IconLinkedIn className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <form className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm" action="https://formspree.io/f/xbjvpqgj" method="POST">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Nombre</label>
              <input name="nombre" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label className="text-sm">Empresa</label>
              <input name="empresa" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Servicio de interés</label>
              <select name="servicio" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600">
                <option value="delineacion">Delineación eléctrica</option>
                <option value="asesoramiento">Asesoramiento EPLAN</option>
                <option value="formacion">Formación especializada</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Mensaje</label>
              <textarea name="mensaje" rows={5} required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Describe brevemente tu proyecto o necesidad..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="text-xs text-neutral-500">Al enviar aceptas nuestra política de privacidad.</div>
              <button type="submit" className="rounded-2xl px-5 py-2 font-semibold bg-red-600 text-white hover:bg-red-700">Enviar consulta</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo variant="light" className="h-8 w-auto" />
          <span className="text-sm">NEXUS · Delineación Eléctrica Industrial</span>
        </div>
        <div className="text-xs">© {year} NEXUS. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Delineacion />
        <Asesoramiento />
        <Formacion />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;