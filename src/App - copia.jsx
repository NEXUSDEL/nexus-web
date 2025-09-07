import React, { useState } from "react";

/**
 * NEXUS – Delineación Eléctrica Industrial
 * Single-file React landing page using TailwindCSS (sin dependencias externas de animación o iconos).
 *
 * Cambios realizados para evitar el error `ReferenceError: invoke is not defined`:
 * - Eliminé la dependencia a `framer-motion` (MotionConfig / motion) ya que en algunas versiones puede introducir llamadas internas incompatibles.
 * - Eliminé la dependencia a `lucide-react` y reemplacé los iconos por SVGs inline simples.
 *
 * Logos:
 *    /public/logos/nexus-dark.png      (logo horizontal sobre fondo claro)
 *    /public/logos/nexus-light.png     (logo cuadrado claro sobre fondo oscuro)
 *
 * Instrucciones rápidas: coloca los logos en /public/logos/ y arranca tu app React/Tailwind como antes.
 */

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

const services = [
  {
    title: "Planos y Delineación",
    desc: "Diseño y normalización de planos eléctricos industriales (unifilares, esquemas de control, bandejas y canalizaciones).",
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
    desc: "Documentación conforme a reglamentos y estándares (REBT/IEC), listas de comprobación y marcado CE.",
  },
  {
    title: "Integración CAD/BIM",
    desc: "Modelado y coordinación con Autodesk® (AutoCAD/Plant), Revit® MEP y exportación IFC.",
  },
  {
    title: "Soporte a Obra",
    desc: "Planificación, revisiones en campo y ajustes durante montaje y puesta en marcha.",
  },
];

const projects = [
  {
    title: "Línea de producción automatizada",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Centro de transformación 20/0,4 kV",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sala de cuadros y CCM",
    img: "https://images.unsplash.com/photo-1581093588401-16ef1b2c6e6c?q=80&w=1600&auto=format&fit=crop",
  },
];

const features = [
  { text: "Entrega ágil y revisiones incluidas" },
  { text: "Checklists de calidad firmadas" },
  { text: "Compromiso de plazos" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

/* --- Iconos SVG inline (pequeños, sin dependencias) --- */
const IconMenu = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const IconClose = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const IconPhone = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.1 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.58.32 1.15.6 1.69a1 1 0 0 1-.25 1L7.7 7.7a16 16 0 0 0 8.6 8.6l1.25-1.25a1 1 0 0 1 1-.25c.54.28 1.11.48 1.69.6a1 1 0 0 1 .75 1V21z" />
  </svg>
);
const IconMail = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);
const IconMapPin = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconBolt = ({ className = "h-6 w-6 text-yellow-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const IconDoc = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);
const IconWrench = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14.7 4a4 4 0 0 1 5.6 5.6L14 16.9 10 13l5.7-9z" />
    <path d="M2 20l6-6" />
  </svg>
);
const IconShield = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2l7 4v6c0 5-4 9-7 10-3-1-7-5-7-10V6l7-4z" />
  </svg>
);
const IconClock = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const IconLinkedIn = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7 8h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5 2.8 5 6.5V24H16v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H7V8z" />
  </svg>
);

function Logo({ variant = "dark", className = "h-10 w-auto" }) {
  const src = variant === "light" ? "/logos/nexus-light.png" : "/logos/nexus-dark.png";
  return <img src={src} alt="NEXUS Delineación Eléctrica Industrial" className={className} />;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <Logo variant="dark" className="h-8 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
                {n.label}
              </a>
            ))}
            <a href="#contacto" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm bg-neutral-900 text-white hover:bg-neutral-800">Solicita presupuesto</a>
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
            <a href="#contacto" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm bg-neutral-900 text-white">Solicita presupuesto</a>
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
        <Logo variant="light" className="mx-auto h-16 sm:h-20 mb-6" />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Delineación Eléctrica Industrial</h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto">Documentación técnica precisa, integrada y lista para obra. Acompañamos tu proyecto desde la ingeniería hasta el montaje, con foco en calidad y cumplimiento normativo.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg bg-white text-black hover:bg-neutral-200">Solicitar presupuesto</a>
          <a href="#servicios" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold border border-white/20 hover:bg-white/10">Ver servicios</a>
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

function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">Servicios</h2>
        <p className="mt-3 text-neutral-600 max-w-3xl">Nos integramos con tu equipo de ingeniería y obra para entregar planos y documentación ejecutiva que acelera la construcción y reduce retrabajos.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
              <div className="inline-flex items-center justify-center rounded-md bg-neutral-50 p-2">
                {/* Icon seleccionado según índice (simple) */}
                {idx % 3 === 0 ? <IconDoc className="h-6 w-6" /> : idx % 3 === 1 ? <IconWrench className="h-6 w-6" /> : <IconShield className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
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
          <a href="#contacto" className="text-sm font-semibold underline decoration-2 underline-offset-4">¿Tienes un proyecto? Hablemos</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <img src={p.img} alt={p.title} className="aspect-[16/10] w-full object-cover group-hover:scale-[1.03] transition-transform" />
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
          <p className="mt-4 text-neutral-600">En <strong>NEXUS</strong> nos especializamos en delineación eléctrica industrial. Nuestro objetivo es entregar documentación clara y ejecutable que permita construir sin sorpresas: planos coherentes, listados completos y memoria técnica alineada con normativa.</p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• Experiencia en industria, logística, alimentación y energía.</li>
            <li>• Trabajo con estándares CAD/BIM y control de versiones.</li>
            <li>• Comunicación fluida con ingeniería, compras y obra.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
          <div className="flex items-center gap-3">
            <Logo variant="dark" className="h-10" />
            <span className="text-sm text-neutral-600">Delineación Eléctrica Industrial</span>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl p-4 bg-white border border-neutral-200">
              <h4 className="font-semibold">Metodología</h4>
              <p className="mt-1 text-neutral-600">Kick-off, hitos, control de cambios y entrega final validada.</p>
            </div>
            <div className="rounded-xl p-4 bg-white border border-neutral-200">
              <h4 className="font-semibold">Herramientas</h4>
              <p className="mt-1 text-neutral-600">AutoCAD®, Revit® MEP, Plant 3D, Office/Excel, IFC.</p>
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
          <p className="mt-4 text-neutral-600">Cuéntanos brevemente tu necesidad y te responderemos con una propuesta.</p>
          <div className="mt-6 space-y-3 text-neutral-700">
            <p className="flex items-center gap-2"><IconPhone className="h-5 w-5" /> <a href="tel:+34999999999" className="underline decoration-2 underline-offset-4">+34 999 99 99 99</a></p>
            <p className="flex items-center gap-2"><IconMail className="h-5 w-5" /> <a href="mailto:contacto@nexus-elec.com" className="underline decoration-2 underline-offset-4">contacto@nexus-elec.com</a></p>
            <p className="flex items-center gap-2"><IconMapPin className="h-5 w-5" /> Calle / Ciudad, España</p>
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
              <input name="nombre" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            </div>
            <div>
              <label className="text-sm">Empresa</label>
              <input name="empresa" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm">Mensaje</label>
              <textarea name="mensaje" rows={5} required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="text-xs text-neutral-500">Al enviar aceptas nuestra política de privacidad.</div>
              <button type="submit" className="rounded-2xl px-5 py-2 font-semibold bg-neutral-900 text-white hover:bg-neutral-800">Enviar</button>
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
          <Logo variant="light" className="h-8" />
          <span className="text-sm">NEXUS · Delineación Eléctrica Industrial</span>
        </div>
        <div className="text-xs">© {year} NEXUS. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

export default function NexusLanding() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
