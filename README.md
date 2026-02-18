<div align="left">

<pre>
 ________  ________  ________  _________  ________ ________  ___       ___  ________     
|\   __  \|\   __  \|\   __  \|\___   ___\\  _____\\   __  \|\  \     |\  \|\   __  \    
\ \  \|\  \ \  \|\  \ \  \|\  \|___ \  \_\ \  \__/\ \  \|\  \ \  \    \ \  \ \  \|\  \   
 \ \   ____\ \  \\\  \ \   _  _\   \ \  \ \ \   __\\ \  \\\  \ \  \    \ \  \ \  \\\  \  
  \ \  \___|\ \  \\\  \ \  \\  \|   \ \  \ \ \  \_| \ \  \\\  \ \  \____\ \  \ \  \\\  \ 
   \ \__\    \ \_______\ \__\\ _\    \ \__\ \ \__\   \ \_______\ \_______\ \__\ \_______\
    \|__|     \|_______|\|__|\|__|    \|__|  \|__|    \|_______|\|_______|\|__|\|_______|

</pre>

</div>

# Zoey Vo's Portfolio

A retro-styled developer portfolio built with React, Vite, and SCSS. Features a terminal interface for navigation and custom cursor effects.

## Features

- **Terminal-Based Navigation**: Command-line style interface for browsing content
- **Custom Cursor**: Dynamic cursor with trail effect
- **Responsive Design**: Mobile-friendly retro aesthetic
- **Asset Preloading**: Fast navigation between pages
- **Error Boundary**: Graceful error handling
- **Dynamic Routing**: Flexible archive system

## Project Structure

```
src/
├── components/
│   ├── CursorTrail.jsx          # Cursor trail particle effect
│   ├── CustomCursor.jsx         # Custom cursor component
│   ├── CustomCursor.scss
│   ├── ErrorBoundary.jsx        # Error handling wrapper
│   ├── PageLayout.jsx           # (moved to layouts/)
│   ├── Terminal/                # Terminal UI components
│   └── index.js                 # Component exports
├── layouts/
│   ├── PageLayout.jsx           # Shared layout for all pages
│   ├── RootLayout.jsx           # Landing page layout
│   └── index.js                 # Layout exports
├── pages/
│   ├── Root.jsx
│   ├── Bio.jsx
│   ├── Resume.jsx
│   ├── Love.jsx
│   ├── Archive.jsx              # Archive directory
│   ├── ArchiveSection.jsx       # Dynamic archive router
│   ├── ArchiveCardGames.jsx
│   ├── ArchiveGuides.jsx
│   ├── ArchiveMedia.jsx
│   ├── ArchiveNotes.jsx
│   ├── ArchiveBookmarks.jsx
│   └── index.js                 # Page exports
├── routes/
│   ├── routeConfig.js           # Route definitions & configuration
│   └── index.js                 # Route exports
├── hooks/
│   ├── useTerminal.js           # Terminal state management
│   ├── useCursorEnlargeOnClick.js
│   └── index.js
├── utils/
│   ├── constants.js             # App constants
│   └── index.js
├── styles/
│   └── App.scss                 # Global styles + cursor trail styles
├── App.jsx                      # Main app with routing
└── main.jsx                     # React DOM entry point
```

## Key Changes & Refactoring

### 1. Layout Routes
Routes are now organized using React Router's layout pattern. The `PageLayout` wrapper is applied to all routes except the root page.

### 2. Dynamic Archive Routes
Instead of individual routes for each archive section (`/archive/cardgames`, `/archive/guides`, etc.), a single dynamic route `/archive/:section` uses the `ArchiveSection` component to render the appropriate content.

### 3. Route Configuration
Route definitions are now centralized in `src/routes/routeConfig.js`, reducing duplication in `App.jsx`.

### 4. Error Boundary
`ErrorBoundary.jsx` wraps the entire app to gracefully handle React errors and prevent full app crashes.

### 5. Layout Organization
Layouts are now in a dedicated `src/layouts/` directory, separating layout concerns from page components.

### 6. Cursor Trail Styles
Cursor trail styling has been consolidated in `src/styles/App.scss` instead of being split across multiple files.

## Commands

### Development
```bash
npm run dev
```
Starts the Vite dev server on `http://localhost:5173`

### Build
```bash
npm run build
```
Builds the production bundle

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm lint
```
Run ESLint to check for code issues

## Technologies

- **React** 19.1.0 - UI library
- **React Router DOM** 6.30.1 - Client-side routing
- **Vite** 6.3.5 - Build tool
- **SCSS** - Styling (via sass-embedded)
- **ESLint** - Code quality

## License

MIT

