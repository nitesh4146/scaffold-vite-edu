# Educational App Template

A modern, production-ready React + TypeScript + Vite template designed for educational applications with interactive visualizations, multi-language support, and flexible content organization.

## 🎯 What This Template Provides

### Core Features

- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and optimized production builds
- **Three-Panel Responsive Layout** 
  - Left sidebar for explanations, theory, and concepts
  - Center panel with flippable visualization area
  - Right sidebar for app and visualization controls
- **Navigation System** with dropdown for quick section access
- **Context API** setup for global state management
- **Custom Hooks** for common UI patterns (dropdown management)
- **Performance Optimizations** with React.memo and useMemo
- **Path Aliases** configured (`@/` for `src/`)

### UI Components

#### Pre-built Components
- **AppHeader** - Top navigation bar with title
- **LeftPanel** - Scrollable sidebar with navigation dropdown
  - Navigation dropdown for quick access to sections
  - Content area for explanations, theory, and concepts
- **RightPanel** - Scrollable sidebar for app controls and visualization settings with "Controls Panel" header
- **VisualizationViewer** - Center panel with flip functionality
  - Front side for primary visualization
  - Back side for additional visualization or content
  - Flip button for smooth transition between sides
- **Dropdown** - Reusable dropdown component with click-outside detection

#### Layout
- Three-column responsive grid layout
- Left sidebar: `1fr` (minimum 300px) - Theory & Navigation
- Center visualization: `2fr` (twice the width) - Interactive Visualizations
- Right sidebar: `1fr` (minimum 300px) - Controls & Settings
- Consistent 1.5rem spacing between panels
- Mobile-responsive with stacked layout on smaller screens

### State Management

#### Contexts
- **AppStateContext** - Global app state with memoized values

#### Custom Hooks
- **useDropdown** - Dropdown state management with click-outside detection
- **useAppState** - Access global app state

### Styling

- CSS custom properties (CSS variables) for theming
- Consistent color scheme with light theme
- Shared panel styles (Panel.css) for consistency and maintainability
- Scoped component styles for specific features
- Custom scrollbar styling
- Smooth transitions and hover effects
- Flip animations for visualization panel
- Mobile-first responsive design

### Interactive Features

- **Flippable Visualization Panel** - Smooth 3D flip transition between front and back content
- **Navigation Dropdown** - Quick access to different sections (Section 1-5, customizable)
- **Click-Outside Detection** - Automatic dropdown closing for better UX
- **Keyboard Accessibility** - Full keyboard navigation support

### Developer Experience

- **TypeScript** for type safety
- **ESLint** with React and TypeScript rules configured
- **Hot Module Replacement** for instant feedback
- **Path aliases** for cleaner imports (`@/components`, `@/contexts`, etc.)
- **Organized folder structure** for scalability
- **Icon library** (Lucide React) pre-configured

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppHeader.tsx
│   ├── Dropdown.tsx
│   ├── LeftPanel.tsx
│   ├── LeftPanel.css     # Left panel specific styles
│   ├── Panel.css         # Shared panel styles
│   ├── RightPanel.tsx
│   └── VisualizationViewer.tsx
├── contexts/            # React Context providers
│   └── AppStateContext.tsx
├── hooks/               # Custom React hooks
│   └── useDropdown.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx              # Main app component
├── App.css              # Global styles and CSS variables
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

### Adding or Modifying Navigation Sections

Edit the `sections` array in `src/components/LeftPanel.tsx`:

```typescript
const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'];
```

Implement custom navigation logic in `handleNavigationSelect`:

```typescript
const handleNavigationSelect = (section: string) => {
  console.log(`Navigate to ${section}`);
  navigationDropdown.close();
  // Add your custom navigation logic here
  // e.g., scroll to section, change state, update visualization
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

### Adding Content to Left Sidebar (Theory/Concepts)

Edit `src/components/LeftPanel.tsx`:

```tsx
<div className="panel-body">
  {/* Your explanations, theory, and concepts here */}
  <h3>Topic Title</h3>
  <p>Explanation content...</p>
</div>
```

### Adding Controls to Right Sidebar

Edit `src/components/RightPanel.tsx`:

```tsx
<div className="panel-body">
  {/* Your controls and settings here */}
  <div className="control-group">
    <label>Control Label</label>
    <input type="range" />
  </div>
</div>
```

### Adding Visualizations

#### Front Side Visualization

Pass your visualization as children to `VisualizationViewer`:

```tsx
<VisualizationViewer>
  <YourVisualizationComponent />
</VisualizationViewer>
```

#### Back Side Content

Edit `src/components/VisualizationViewer.tsx` to add content to the back side:

```tsx
<div className="visualization-back">
  <div className="placeholder">
    {/* Your additional visualization or content */}
  </div>
</div>
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
- ✅ Accessible UI with ARIA labels and keyboard navigation
- ✅ Responsive design patterns
- ✅ Clean separation of concerns
- ✅ Reusable component architecture
- ✅ localStorage integration for user preferences
- ✅ Click-outside detection for dropdowns
- ✅ Smooth CSS transitions and animations
- ✅ Custom hooks for state management

## 🎓 Perfect For

- Educational simulations and visualizations
- Physics/Math/Chemistry interactive demos
- Data visualization applications
- Learning management systems
- Interactive tutorials and courses
- Scientific computing interfaces
- Step-by-step learning modules
- Interactive textbooks and materials

## 🚀 Key Features Summary

### For Educators
- 📚 Dedicated space for explanations and theory
- 🎮 Interactive visualization area with flip capability
- 🎛️ Separate controls area for clean UI organization
- 🧭 Navigation system for organizing multiple topics/sections

### For Developers
- ⚡ Lightning-fast development with Vite
- 🔒 Type-safe development with TypeScript
- 🎨 Easy theming with CSS variables
- 📦 Pre-built reusable components
- 🔄 Context-based state management
- 🛠️ Custom hooks for common patterns
- 📱 Mobile-responsive by default

## 📄 License

This template is free to use for educational and commercial projects.
