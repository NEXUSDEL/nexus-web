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
    title: "Ingeniería y Documentación Eléctrica",
    desc:
      "Diseño completo de esquemas eléctricos industriales desde cero, migración y actualización de planos antiguos según normativas IEC 61355 e IEC 81346. Desarrollo de gemelo digital para simulación y mantenimiento. Soporte experto continuo para oficinas técnicas.",
  },
  {
    title: "Digitalización & Modernización",
    desc:
      "Digitalización, normalización y modernización de la documentación en proyectos eléctricos existentes. Adaptación integral a los últimos estándares internacionales.",
  },
  {
    title: "Integración CAD/BIM",
    desc:
      "Modelado y coordinación en EPLAN Electric y EPLAN Pro Panel",
  },
];

const asesoramientoPoints = [
  {
    title: "Estandarización de Procesos",
    desc:
      "Definición e implementación de estándares de diseño y automatización de flujos de trabajo a medida. Creación de plantillas, macros, objetos y bibliotecas inteligentes según la casuística de cada cliente.",
    icon: "Wrench",
  },
  {
    title: "Automatización en Ingeniería",
    desc:
      "Generación automática de listas de materiales (BOMs), cableados, mecanizados y documentación de taller, completamente adaptados a la fabricación de maquinaria y cuadros eléctricos.",
    icon: "Doc",
  },
  {
    title: "Transformación Digital Eléctrica",
    desc:
      "Asesoría estratégica para integración de herramientas CAE/EDA (EPLAN, AutoCAD, Revit) y digitalización de procesos de ingeniería eléctrica industrial.",
    icon: "Shield",
  },
];

const formacionPrograms = [
  {
    title: "Formación Operativa EPLAN",
    desc:
      "Incorporación y entrenamiento de nuevos ingenieros eléctricos en EPLAN Electric y ProPanel, desde nivel inicial hasta avanzado.",
    icon: "Doc",
  },
  {
    title: "Impulso de Equipos Técnicos",
    desc:
      "Programas para la promoción interna de técnicos de taller hacia funciones de oficina técnica. Capacitación 100% práctica.",
    icon: "Wrench",
  },
  {
    title: "Reciclaje y Excelencia",
    desc:
      "Actualización y optimización de equipos senior para asegurar que aprovechan el 100% del potencial del software EPLAN y responden a los nuevos retos de la industria.",
    icon: "Shield",
  },
];

const projects = [
  {
    title: "Portafolio en construcción",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "¿Necesitas referencias?",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Solicítalas aquí",
    img: "https://images.unsplash.com/photo-1581093588401-16ef1b2c6e6c?q=80&w=1600&auto=format&fit=crop",
  },
];

const features = [
  { text: "Documentación técnica precisa y conforme a normativas" },
  { text: "Optimización de procesos y reducción de tiempos de fabricación hasta un 30%" },
  { text: "Formación técnica personalizada para equipos eléctricos" },
];

const social = [{ label: "LinkedIn", href: "https://www.linkedin.com" }];

// --------------------------------------
// ICONOS Y LOGO (ajusta el import de las imágenes si es necesario)
// --------------------------------------

const IconMenu = ({ className = "h-5 w-5" }) => (/* ... */);
const IconClose = ({ className = "h-5 w-5" }) => (/* ... */);
const IconPhone = ({ className = "h-5 w-5" }) => (/* ... */);
const IconMail = ({ className = "h-5 w-5" }) => (/* ... */);
const IconMapPin = ({ className = "h-5 w-5" }) => (/* ... */);
const IconBolt = ({ className = "h-6 w-6 text-yellow-400" }) => (/* ... */);
const IconDoc = ({ className = "h-6 w-6" }) => (/* ... */);
const IconWrench = ({ className = "h-6 w-6" }) => (/* ... */);
const IconShield = ({ className = "h-6 w-6" }) => (/* ... */);
const IconClock = ({ className = "h-5 w-5" }) => (/* ... */);
const IconLinkedIn = ({ className = "h-4 w-4" }) => (/* ... */);

function Logo({ variant = "dark", className = "h-10 w-auto" }) {
  // Ajusta la ruta correcta a los logotipos exportados
  const src = variant === "light"
    ? "/logos/nexus-light.png"
    : "/logos/nexus-dark.png";
  return <img src={src} alt="NEXUS Delineación Eléctrica Industrial" className={className} />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    // ...tu código de navegación tal y como estaba
  );
}

// --------------------------------------
// CONTENIDO SECCIONES
// --------------------------------------

function HomeSection() {
  return (
    <section id="inicio">
      <h1>Ingeniería eléctrica efectiva, sin sorpresas</h1>
      <p>
        En <b>NEXUS</b> optimizamos tus procesos de diseño eléctrico y documentación industrial.
        Te acompañamos desde la concepción hasta la entrega final, garantizando calidad, cumplimiento normativo y eficiencia.
      </p>
      <ul>
        {features.map(({ text }, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
      <p>¿Necesitas una propuesta directa? Te respondemos en menos de 24 h.</p>
    </section>
  );
}

function DelineacionSection() {
  return (
    <section id="delineacion">
      <h2>Diseño y documentación eléctrica industrial</h2>
      {delineacionServices.map(({ title, desc }, i) => (
        <div key={i}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}

function AsesoramientoSection() {
  return (
    <section id="asesoramiento">
      <h2>Automatización y estandarización de procesos</h2>
      {asesoramientoPoints.map(({ title, desc, icon }, i) => (
        <div key={i}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}

function FormacionSection() {
  return (
    <section id="formacion">
      <h2>Formación especializada EPLAN Electric y ProPanel</h2>
      {formacionPrograms.map(({ title, desc, icon }, i) => (
        <div key={i}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}

function ProyectosSection() {
  return (
    <section id="proyectos">
      <h2>Proyectos - Portafolio en construcción</h2>
      <p>Descubre próximamente casos de éxito en automatización y cuadros eléctricos industriales. ¿Quieres una referencia o ejemplo concreto? <b>Contáctanos y te lo preparamos a medida.</b></p>
      {/* Puedes mantener la galería con imágenes neutras mientras no haya proyectos */}
    </section>
  );
}

function NosotrosSection() {
  return (
    <section id="nosotros">
      <h2>¿Quién es NEXUS?</h2>
      <p>
        Soy especialista autónomo en delineación eléctrica industrial con más de una década de experiencia.
        Mi propuesta: documentación de máxima calidad, reducción de plazos y digitalización optimizada para fabricantes de maquinaria y cuadros eléctricos.
      </p>
      <ul>
        <li>+10 años en sector industrial y automatización</li>
        <li>Enfoque en cumplimiento de normativas internacionales</li>
        <li>Ahorro real en los procesos de fabricación (hasta un 30%)</li>
      </ul>
    </section>
  );
}

function ContactoSection() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <p>¿Necesitas soporte experto, una formación o una propuesta personalizada? Cuéntanos brevemente tu necesidad, te respondemos en menos de 24 h.</p>
      {/* Mantén el formulario sencillo: nombre, empresa, email y consulta */}
    </section>
  );
}

// --------------------------------------
// EXPORT PRINCIPAL
// --------------------------------------

export default function App() {
  return (
    <div>
      <Navbar />
      <Logo variant="dark" /> {/* Puedes intercambiar 'dark' o 'light' según el fondo */}
      <HomeSection />
      <DelineacionSection />
      <AsesoramientoSection />
      <FormacionSection />
      <ProyectosSection />
      <NosotrosSection />
      <ContactoSection />
      {/* Incluye tus iconos sociales o footer si lo deseas */}
    </div>
  );
}
