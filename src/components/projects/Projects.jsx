import React, { useEffect, useRef, useState } from "react";
import { asset } from "../../lib/asset"; // <- ajustá si tu ruta es distinta

// Pokédex
const pokedexInicio = asset("assets/img/pokedex-inicio.png");
const pokedexFab    = asset("assets/img/pokedex-fab.png");
const pokedexFabs   = asset("assets/img/pokedex-fabs.png");

// Consultados (trivia)
const consultadosInicio   = asset("assets/img/consultados-inicio.png");
const consultadosFin      = asset("assets/img/consultados-fin.png");
const consultadosPerdiste = asset("assets/img/consultados-perdiste.png");

// Inmobiliaria (admin)
const inmoCover  = asset("assets/img/inmb.png");
const inmoCover2 = asset("assets/img/inmb2.png");

// Viajes app
const viajes1 = asset("assets/img/viajes1.png");
const viajes2 = asset("assets/img/viajes2.png");
const viajes3 = asset("assets/img/viajes3.png");

// Placeholder
const placeholder = asset("assets/img/programmer.webp");

/* ========= SLIDER REUTILIZABLE ========= */
function Slider({
  images = [],
  auto = true,
  delay = 3000,
  altPrefix = "",
  className = "",
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const total = images.length;
  const timer = useRef(null);

  const go   = (n) => setIdx((v) => (v + n + total) % total);
  const goTo = (n) => setIdx(((n % total) + total) % total);

  useEffect(() => {
    if (!auto || total <= 1) return;
    clearInterval(timer.current);
    if (!paused) timer.current = setInterval(() => go(1), delay);
    return () => clearInterval(timer.current);
  }, [auto, delay, paused, total]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, total]);

  const current = images[idx] || placeholder;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Marco fijo 16:9 para uniformidad en las cards */}
      <button
        type="button"
        aria-label="Abrir imagen en grande"
        onClick={() => setOpen(true)}
        className="relative w-full aspect-[16/9] bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-white/10 group"
      >
        <img
          src={current}
          alt={`${altPrefix} ${idx + 1}`}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = placeholder)}
          className="absolute inset-0 m-auto max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </button>

      {total > 1 && (
        <>
          {/* Flechas mini en la card */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full
                       bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white shadow-md"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full
                       bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white shadow-md"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 px-2 py-1 rounded-full bg-black/30 backdrop-blur ring-1 ring-white/10">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a imagen ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 w-3 rounded-full transition-all ${
                  i === idx ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* ===== Lightbox a pantalla completa ===== */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full
                       bg-white/15 hover:bg-white/25 text-white border border-white/20"
          >
            ✕
          </button>

          {total > 1 && (
            <>
              <button
                aria-label="Anterior"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full
                           bg-white/15 hover:bg-white/25 text-white border border-white/20"
              >
                ‹
              </button>
              <button
                aria-label="Siguiente"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full
                           bg-white/15 hover:bg-white/25 text-white border border-white/20"
              >
                ›
              </button>
            </>
          )}

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img
              src={current}
              alt={`${altPrefix} grande`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* =========  PROYECTOS ========= */
const proyectos = [
  {
    titulo: "Pokédex App",
    descripcion: "App en React Native con PokeAPI: búsqueda, favoritos y detalle.",
    link: "https://github.com/alejandroxgoncalves/pokedex-app",
    images: [pokedexInicio, pokedexFab, pokedexFabs],
  },
  {
    titulo: "Viajes App",
    descripcion:
      "Organiza viajes: destinos, integrantes y gastos (React Native + Expo + Supabase).",
    link: "https://github.com/alejandroxgoncalves/viajes-app",
    images: [viajes1, viajes2, viajes3],
  },
  {
    titulo: "Consultados App",
    descripcion: "Trivia estilo Preguntados con estadísticas y lógica modular.",
    link: "https://github.com/alejandroxgoncalves/consultados-app",
    images: [consultadosFin, consultadosPerdiste, consultadosInicio],
  },
  {
    titulo: "Inmobiliaria Admin",
    descripcion:
      "Panel admin para gestión de propiedades, agentes y clientes (ASP.NET Core MVC).",
    link: "https://github.com/alejandroxgoncalves/InmobiliariaAdmin",
    images: [inmoCover, inmoCover2],
  },
];

/* ========= SECCIÓN PROJECTS ========= */
export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-20 px-5">
      <h1 className="text-3xl font-bold sm:text-4xl xl:text-5xl text-center mb-12">
        Proyectos
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p, i) => (
          <article
            key={i}
            className="rounded-2xl overflow-hidden bg-gray-900 text-white shadow-lg ring-1 ring-white/5"
          >
            <Slider images={p.images} altPrefix={p.titulo} />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{p.titulo}</h2>
              <p className="text-gray-300 mb-4">{p.descripcion}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Ver en GitHub
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
