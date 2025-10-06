# Universidad App

Proyecto web híbrido para la gestión y visualización de datos de una universidad. Incluye:

- Una parte pública estática (dentro de `public/`) con una plantilla de dashboard y páginas HTML/CSS/JS listas para usar.
- Una aplicación administrativa construida con React + Vite (código fuente en `src/`) pensada para administrar notas, asistencias, historiales y familiares.

Este README está en español y describe cómo ejecutar, desarrollar y desplegar el proyecto.

## Tecnologías principales

- Vite (bundler / dev server)
- React 19
- react-router-dom
- axios
- react-hook-form
- ESLint
- En la parte pública se usan librerías estáticas incluidas en `public/vendor` (Bootstrap, Chart.js, DataTables, FontAwesome, jQuery, etc.)

## Scripts (package.json)

Los scripts disponibles en la raíz (ver `package.json`):

- `npm run dev` — Ejecuta el servidor de desarrollo (Vite) con HMR.
- `npm run build` — Genera los archivos de producción en `dist/`.
- `npm run preview` — Sirve la build de producción localmente para prueba.
- `npm run lint` — Ejecuta ESLint sobre el código.

Ejemplo rápido (Windows PowerShell):

```powershell
npm install
npm run dev
```

Vite por defecto corre en http://localhost:5173 (si no se cambia la configuración).

## Estructura principal del proyecto

Raíz del proyecto (resumen):

- `public/` — Archivos estáticos y una plantilla de dashboard (`dashboard-universidad/`) lista para hosting estático.
	- `dashboard-universidad/` contiene páginas HTML precompiladas como `index.html`, páginas de listado y creación (ej. `crear-estudiante.html`), assets CSS/JS y vendor.
- `src/` — Código fuente React:
	- `main.jsx` — Punto de entrada de la app React.
	- `App.jsx`, `App.css` — Componente raíz y estilos.
	- `admin/` — Componentes y páginas para la interfaz administrativa (Ej: `components/Aside.jsx`, `pages/ListadoNotas.jsx`).
	- `frontend/` — Componentes para la parte pública o front-end (parcialmente usada por la plantilla).
- `index.html` — Entrada principal usada por Vite para el modo dev.
- `package.json`, `vite.config.js`, `eslint.config.js` — Configuraciones del proyecto.

Hay además recursos de la plantilla: `plantilla-universidad/` con html y css para una landing o sitio público.

## Desarrollo local

1. Instalar dependencias

```powershell
npm install
```

2. Levantar servidor de desarrollo

```powershell
npm run dev
```

3. Abrir el navegador en `http://localhost:5173`

## Desarrollo de la parte React

- La app React está en `src/`. Sigue las convenciones de componentes y rutas ya presentes.

## Despliegue

- Para desplegar la app React en producción, ejecuta `npm run build` y sube el contenido de `dist/` a tu servidor/hosting (Netlify, Vercel, GitHub Pages con adaptaciones, etc.).
- La carpeta `public/dashboard-universidad/` se puede desplegar tal cual en un hosting estático.

## Archivos y rutas importantes

- `public/dashboard-universidad/index.html` — Dashboard estático principal.
- `src/admin/components/` — Componentes del panel administrativo.
- `src/admin/pages/` — Páginas y vistas principales (listados, formularios).
- `src/frontend/pages/` — Páginas públicas (si aplica).
- `vite.config.js` — Configuración de Vite y plugins (revisar `@vitejs/plugin-react`).

## Tips y recomendaciones

- Mantén las dependencias actualizadas y revisa breaking changes en React 19 al actualizar.
- Añade un `.env.example` si el proyecto requiere variables de entorno para que otros desarrolladores sepan qué configuración necesitarán.
- Considera separar la API (backend) si aún no existe y documentar sus endpoints para facilitar la integración con `axios`.

## Contribuir

1. Haz un fork o crea una rama nueva para tu feature/bugfix.
2. Añade pruebas o verifica manualmente la funcionalidad.
3. Abre un pull request describiendo los cambios.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
