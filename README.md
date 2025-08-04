
# Whiteboard SPA (React + Excalidraw)

This project is a single-page React application built with Vite and TypeScript, embedding [Excalidraw](https://github.com/excalidraw/excalidraw) as the main whiteboard. It is designed to run locally and can be exported as a static SPA (no server required).

## Features
- Excalidraw is embedded and ready for customization.
- Modern, fast development with Vite.
- No backend/server required for deployment—just static files.

## Getting Started

### Development

```bash
npm install
npm run dev
```
Then open the local URL shown in the terminal.

### Build for Static Export

```bash
npm run build
```
The static site will be output to the `dist/` folder. You can deploy this folder to any static hosting (GitHub Pages, Netlify, Vercel, etc).

### Preview Production Build

```bash
npm run preview
```

## Customizing Excalidraw

Edit `src/App.tsx` to customize the Excalidraw component or add new features.

---
This project was bootstrapped with Vite's React TypeScript template and extended to embed Excalidraw.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
