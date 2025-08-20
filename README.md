# Portfolio React + Tailwind (Vite, JS)

Plantilla lista para usar (sin TypeScript), con rutas y tarjetas de proyectos.

## Requisitos
- Node.js 18+
- Git

## Instalación
```bash
npm install
npm run dev
```

## Estructura
- `src/pages`: Inicio, Proyectos, Sobre mí, Contacto
- `src/components`: Navbar, ProjectCard
- `src/data/projects.js`: lista de proyectos
- Tailwind ya configurado

## Deploy en Vercel (recomendado)
1. Subí este proyecto a GitHub (repo público).
2. Entra a vercel.com, **New Project** → Importar tu repo.
3. Framework: **Vite** (auto-detecta). Build: `npm run build`. Output: `dist`.
4. Deploy y listo. Conecta dominio si querés.

## Deploy en GitHub Pages (opcional)
Podés usar `vite-plugin-gh-pages` o una acción de GitHub. Vercel es más simple.

## Editables rápidos
- `src/data/projects.js`: agregá tus proyectos.
- `Navbar.jsx`: links y branding.
- `Home.jsx`: tu pitch y datos.
- `About.jsx`: resumen corto.
- `Contact.jsx`: reemplazá el formulario por el servicio que prefieras.

---

Hecho para: **Alejandro Xavier Goncalves** (Salto, Uruguay)
