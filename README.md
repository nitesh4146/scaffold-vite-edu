# Educational App Template

A modern, production-ready React + TypeScript + Vite template designed for educational applications with interactive visualizations.

## 🎯 What This Template Provides

### Core Features

- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and optimized production builds
- **Multi-language Support** with persistent language selection (English, Hindi, Marathi, Tamil, Malayalam, Spanish)
- **Responsive Layout** with three-panel design (left sidebar, center visualization, right sidebar)
- **Context API** setup for global state management
- **Custom Hooks** for common UI patterns (dropdown management)
- **Performance Optimizations** with React.memo and useMemo
- **Path Aliases** configured (`@/` for `src/`)

### UI Components

#### Pre-built Components
- **AppHeader** - Top navigation bar with controls and language switcher
- **LeftPanel** - Scrollable sidebar for content and controls
- **RightPanel** - Scrollable sidebar for additional content
- **VisualizationViewer** - Center panel for interactive visualizations
- **Dropdown** - Reusable dropdown component with click-outside detection

#### Layout
- Three-column responsive grid layout
- Left sidebar: `1fr` (minimum 300px)
- Center visualization: `2fr` (twice the width)
- Right sidebar: `1fr` (minimum 300px)
- Consistent 1.5rem spacing between panels
- Mobile-responsive with stacked layout on smaller screens

### State Management

#### Contexts
- **LanguageContext** - Multi-language support with localStorage persistence
- **AppStateContext** - Global app state with memoized values

#### Custom Hooks
- **useDropdown** - Dropdown state management with click-outside detection
- **useLanguage** - Access current language and language switcher
- **useAppState** - Access global app state

### Styling

- CSS custom properties (CSS variables) for theming
- Consistent color scheme with light theme
- Scoped component styles
- Custom scrollbar styling
- Smooth transitions and hover effects
- Mobile-first responsive design

### Developer Experience

- **TypeScript** for type safety
- **ESLint** with React and TypeScript rules configured
- **Hot Module Replacement** for instant feedback
- **Path aliases** for cleaner imports (`@/components`, `@/contexts`, etc.)
- **Organized folder structure** for scalability

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppHeader.tsx
│   ├── Dropdown.tsx
│   ├── LeftPanel.tsx
│   ├── RightPanel.tsx
│   └── VisualizationViewer.tsx
├── contexts/            # React Context providers
│   ├── AppStateContext.tsx
│   └── LanguageContext.tsx
├── hooks/               # Custom React hooks
│   └── useDropdown.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx              # Main app component
└── main.tsx             # Application entry point
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🎨 Customization Guide

### Adding New Languages

Edit `src/types/index.ts`:

```typescript
export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'ml' | 'es' | 'your-lang';

export const languageNames: Record<Language, string> = {
  // ... existing languages
  'your-lang': 'Your Language Name',
};
```

### Customizing Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --bg: #f8f9fa;
  --navbar-bg: #ffffff;
  --accent-color: #4c6ef5;
  /* ... other variables */
}
```

### Adding Visualization Controls

Add controls in `src/components/AppHeader.tsx` within the Controls dropdown:

```tsx
<div className="control-group">
  <button className="control-btn" onClick={handleAction}>
    <span>Your Control</span>
  </button>
</div>
```

### Adding Content to Sidebars

Edit `src/components/LeftPanel.tsx` or `RightPanel.tsx`:

```tsx
<div className="panel-body">
  {/* Your content here */}
</div>
```

### Adding Visualizations

Replace the placeholder in `src/components/VisualizationViewer.tsx` or pass children:

```tsx
<VisualizationViewer>
  {/* Your visualization component */}
</VisualizationViewer>
```

## 🛠️ Built With

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide React](https://lucide.dev/) - Icon library

## 📝 Best Practices Implemented

- ✅ Component memoization for performance
- ✅ Context value memoization to prevent unnecessary re-renders
- ✅ Type-safe props and state
- ✅ Accessible UI with ARIA labels
- ✅ Responsive design patterns
- ✅ Clean separation of concerns
- ✅ Reusable component architecture
- ✅ localStorage integration for user preferences

## 🎓 Perfect For

- Educational simulations and visualizations
- Physics/Math interactive demos
- Data visualization applications
- Learning management systems
- Interactive tutorials
- Scientific computing interfaces

## 📄 License

This template is free to use for educational and commercial projects.
