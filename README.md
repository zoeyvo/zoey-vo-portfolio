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

A retro-styled developer portfolio built with React, Vite, and SCSS. 

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

## Technologies

- **React** 19.1.0 - UI library
- **React Router DOM** 6.30.1 - Client-side routing
- **Vite** 6.3.5 - Build tool
- **SCSS** - Styling (via sass-embedded)
- **ESLint** - Code quality

## License

MIT

