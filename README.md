# Application Template

A clean, polished, and responsive Vite + React + TypeScript template for creating interactive applications with visualizations and multi-language support.

## Features

- 🎨 **Modern UI Components**: Pre-built, customizable components
- 🌐 **Multi-language**: Support for English, Hindi, Marathi, Tamil, Malayalam, and Spanish
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- �️ **Control Panel**: Customizable control interface for your application
- 📊 **Insights Panel**: Display key metrics and data
- 📚 **Collapsible Sidebar**: Organized content sections
- 🎯 **Type-Safe**: Full TypeScript support
- 🎨 **Clean Design**: Professional and clean interface

## Components

### 1. App Container
- Main wrapper with global state management
- Language context provider
- Responsive layout system

### 2. Navigation Bar
- App title/topic name display
- Language switcher dropdown
- Topics dropdown for switching between different sections

### 3. Visualization Viewer
- Central area for displaying interactive content
- Canvas or SVG-based visualizations
- Responsive container

### 4. Control Panel
- Customizable control buttons
- Add your own interactive elements
- Flexible layout

### 5. Insights Panel
- Display key insights and metrics
- Real-time value updates
- Customizable insight cards

### 6. Sidebar
- Collapsible sidebar
- Expandable sections
- Organized content display

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # UI Components
│   ├── Navbar.tsx
│   ├── Navbar.css
│   ├── VisualizationViewer.tsx
│   ├── VisualizationViewer.css
│   ├── AnimationControls.tsx
│   ├── AnimationControls.css
│   ├── InsightsPanel.tsx
│   ├── InsightsPanel.css
│   ├── TheorySidebar.tsx
│   └── TheorySidebar.css
├── contexts/             # React Contexts
│   ├── LanguageContext.tsx
│   └── AppStateContext.tsx
├── App.tsx              # Main App Component
├── App.css              # Global Styles
├── main.tsx             # Entry Point
└── vite-env.d.ts        # Vite Type Definitions
```

## Usage Example

See `src/examples/ExampleApp.tsx` for a complete example of how to use the template with custom content.

## Customization

### Adding Topics

```typescript
import { useAppState } from './contexts/AppStateContext';

const MyComponent = () => {
  const { setTopics, setCurrentTopic } = useAppState();

  useEffect(() => {
    const topics = [
      { id: '1', name: 'Topic 1', description: 'Description' },
      { id: '2', name: 'Topic 2', description: 'Description' },
    ];
    setTopics(topics);
    setCurrentTopic(topics[0]);
  }, []);
};
```

### Customizing Insights

```typescript
import InsightsPanel, { Insight } from './components/InsightsPanel';

const insights: Insight[] = [
  { label: 'Metric 1', value: 45, unit: 'units' },
  { label: 'Metric 2', value: 100, unit: 'items' },
];

<InsightsPanel insights={insights} />
```

### Adding Content to Sidebar

```typescript
import TheorySidebar from './components/TheorySidebar';

const sections = [
  {
    title: 'Section Title',
    content: 'Your content here...',
  },
  {
    title: 'Another Section',
    content: 'More information...',
  },
];

<TheorySidebar sections={sections} />
```

## Customization

Modify the CSS variables in `src/App.css` to customize colors:

```css
:root {
  --accent-color: #4c6ef5;
  --bg: #f8f9fa;
  /* ... more variables */
}
```

## Language Support

The template includes built-in support for:

- 🇬🇧 English (en)
- 🇮🇳 Hindi (hi)
- 🇮🇳 Marathi (mr)
- 🇮🇳 Tamil (ta)
- 🇮🇳 Malayalam (ml)
- 🇪🇸 Spanish (es)

Add translations in your components using the `useLanguage` hook.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
