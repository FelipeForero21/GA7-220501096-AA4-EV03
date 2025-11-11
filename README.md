# Metro de Medellín – Módulo Frontend (React)

## Descripción
Aplicación web desarrollada con React + TypeScript + Vite para apoyar a los usuarios del Metro de Medellín en la planificación de viajes y consulta de información. Incluye mapa interactivo, estaciones, horarios, tarifas y noticias.

## Requisitos
- Node.js 18+
- npm 9+

## Instalación y ejecución
1. Entrar a la carpeta del proyecto frontend:
   - `cd metro-medellin`
2. Instalar dependencias:
   - `npm install`
3. Ejecutar en desarrollo:
   - `npm run dev`
4. Compilar para producción:
   - `npm run build`
5. Previsualizar build:
   - `npm run preview`

## Scripts disponibles
- `npm run dev`: servidor de desarrollo Vite.
- `npm run build`: compila con TypeScript y Vite.
- `npm run preview`: sirve el build en local.
- `npm run lint`: ejecuta ESLint (flat config v9).
- `npm run format`: formatea con Prettier.

## Stack técnico
- React 19 + React Router
- TypeScript (modo estricto, jsx: react-jsx)
- Vite 7 + `@vitejs/plugin-react`
- Leaflet + React-Leaflet (mapa)
- CSS simple (src/styles/global.css)
- ESLint (flat) + Prettier

## Estructura principal
```
metro-medellin/
  src/
    components/   # NavBar, Footer, MapView, StationCard, RouteCalculator, ScheduleTable, NewsCard
    pages/        # Home, Map, Stations, Schedules, Fares, News
    routes/       # AppRoutes
    services/     # mocks: stations, schedules, news, fares
    styles/       # global.css
    types.ts      # Tipos del dominio (Station, Schedule, NewsItem)
    main.tsx      # Entrada React
    App.tsx       # Layout principal
```

## Componentes implementados
- NavBar: navegación superior con enlaces a secciones.
- MapView: mapa Leaflet con marcadores de estaciones.
- StationCard: tarjeta con datos de una estación.
- RouteCalculator: formulario para calcular rutas (validaciones básicas).
- ScheduleTable: tabla de horarios por línea y día.
- NewsCard: tarjeta de noticia/aviso.
- Footer: pie de página con enlaces.

## Páginas
- Home: calculadora de rutas.
- Map: visualización del mapa y estaciones.
- Stations: listado de estaciones.
- Schedules: horarios y frecuencias.
- Fares: tarifas por categoría.
- News: noticias y avisos.

## Estándares de codificación
- TypeScript estricto, imports de tipos con `import type`.
- ESLint v9 (flat config) y Prettier.
- Accesibilidad: uso de roles ARIA, encabezados, foco y colores con contraste.

## Datos y servicios
- Los datos son mocks en `src/services/*`. Para integrar datos reales:
  1. Sustituye los mocks por llamadas a API (fetch/axios) en los mismos módulos.
  2. Tipar respuestas con las interfaces de `src/types.ts`.
  3. Manejar estados de carga y error en las páginas/Componentes.

## Notas
- Este módulo cumple con la arquitectura de componentes definida y sirve como base para integrar datos reales y requisitos derivados de diagramas, historias de usuario y prototipos.