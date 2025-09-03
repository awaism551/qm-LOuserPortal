# Components Directory

This directory contains all the reusable React components organized by their purpose and functionality.

## Directory Structure

```
src/components/
├── ui/                    # Basic UI components
│   ├── Logo.tsx          # Logo component with link
│   ├── LanguageSelector.tsx # Language selection component
│   ├── LoginButton.tsx   # Login button component
│   └── CTAButton.tsx     # Call-to-action button component
├── layout/                # Layout and structural components
│   └── TopNavigation.tsx # Top navigation bar component
├── hero/                  # Hero section components
│   ├── HeroSection.tsx   # Main hero section wrapper
│   ├── HeroContent.tsx   # Hero content container
│   ├── HeroTitle.tsx     # Hero title component
│   ├── HeroDescription.tsx # Hero description text
│   ├── CTASection.tsx    # CTA section wrapper
│   └── DecorativeLines.tsx # Decorative line elements
├── index.ts               # Component exports
└── README.md              # This file
```

## Component Categories

### UI Components (`/ui`)
Basic, reusable UI elements that can be used across different parts of the application.

### Layout Components (`/layout`)
Structural components that define the overall layout and navigation of the application.

### Hero Components (`/hero`)
Components specifically for the hero section of the homepage.

## Usage

### Importing Components

```tsx
// Import individual components
import { Logo, LanguageSelector, HeroSection } from '@/components';

// Or import specific components
import Logo from '@/components/ui/Logo';
import TopNavigation from '@/components/layout/TopNavigation';
```

### Component Props

All components accept a `className` prop for additional styling and have sensible defaults for other props.

```tsx
// Example usage with custom props
<Logo href="/home" className="custom-logo" />
<HeroTitle title="Custom Title" />
<LanguageSelector language="English" href="/en" />
```

## Best Practices

1. **TypeScript**: All components are written in TypeScript with proper interfaces
2. **Props**: Components accept props for customization while maintaining defaults
3. **Accessibility**: Components include proper data attributes and semantic HTML
4. **Performance**: Uses Next.js Image optimization and React best practices
5. **Reusability**: Components are designed to be reusable across the application

## Adding New Components

When adding new components:

1. Create the component file in the appropriate directory
2. Add TypeScript interfaces for props
3. Export the component from the directory's index file
4. Update the main `src/components/index.ts` file
5. Add documentation here if needed

## Styling

Components use Tailwind CSS classes and maintain the existing design system. Custom styling can be added via the `className` prop.
