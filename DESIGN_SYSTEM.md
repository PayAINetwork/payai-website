# PayAI Design System

## 🎨 Color Palette

### Primary Brand Colors

```css
midnight: {
  DEFAULT: "#0A192F",
  50: "#F0F4F8",
  100: "#D9E6F0",
  200: "#B3CCE1",
  300: "#8CB3D2",
  400: "#6699C3",
  500: "#4080B4",
  600: "#336690",
  700: "#264D6C",
  800: "#1A3348",
  900: "#0A192F",
  950: "#050C18",
}

neonCyan: {
  DEFAULT: "#00E5FF",
  50-900: /* Full spectrum */
}

electricPurple: {
  DEFAULT: "#8A2BE2",
  50-900: /* Full spectrum */
}
```

### Usage Examples

```html
<div class="bg-midnight text-white">Primary Background</div>
<div class="bg-neonCyan text-midnight">Accent Background</div>
<div class="text-electricPurple">Purple Text</div>
```

## 📝 Typography

### Font Families

- **Heading**: FT Regola Neue, Montserrat (fallback)
- **Body**: FT Regola Neue, Montserrat (fallback)
- **Code**: JetBrains Mono

### Typography Scale

```css
text-hero: 4.5rem (72px) - line-height: 1.1
text-display: 3.5rem (56px) - line-height: 1.2
text-heading: 2.5rem (40px) - line-height: 1.3
text-subheading: 1.5rem (24px) - line-height: 1.4
text-body-lg: 1.125rem (18px) - line-height: 1.6
text-body: 1rem (16px) - line-height: 1.6
text-caption: 0.875rem (14px) - line-height: 1.5
text-micro: 0.75rem (12px) - line-height: 1.4
```

### Usage Examples

```html
<h1 class="text-hero font-bold text-midnight">Hero Title</h1>
<h2 class="text-display font-bold text-midnight">Section Title</h2>
<p class="text-body text-gray-600">Body text content</p>
```

## 🎯 Component Classes

### Buttons

```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-accent">Accent Button</button>
<button class="btn-ghost">Ghost Button</button>
```

### Cards

```html
<div class="card-base">Basic Card</div>
<div class="card-elevated">Elevated Card</div>
<div class="card-glow">Glowing Card</div>
```

### Containers

```html
<div class="container-payai">Max-width container</div>
<section class="section-padding">Section with padding</section>
```

## 🌈 Gradients

### Background Gradients

```html
<div class="gradient-payai">PayAI Brand Gradient</div>
<div class="gradient-cyan">Cyan Gradient</div>
<div class="gradient-purple">Purple Gradient</div>
```

### Text Gradients

```html
<h1 class="text-gradient-payai">Gradient Text</h1>
<h2 class="text-gradient-cyan">Cyan Text</h2>
```

## ✨ Effects

### Shadows

```html
<div class="shadow-elevation-1">Subtle shadow</div>
<div class="shadow-elevation-3">Medium shadow</div>
<div class="shadow-glow-md">Neon glow effect</div>
```

### Glass Morphism

```html
<div class="glass">Light glass effect</div>
<div class="glass-strong">Strong glass effect</div>
```

### Animations

```html
<div class="animate-fade-in-up">Fade in from bottom</div>
<div class="animate-glow-pulse">Pulsing glow</div>
<div class="animate-float">Floating animation</div>
```

## 📏 Spacing Scale

```css
section: 5rem (80px)
section-sm: 3rem (48px)
section-lg: 7rem (112px)
```

## 🎨 Usage Guidelines

### Do's

✅ Use the defined color scale consistently
✅ Stick to the typography hierarchy
✅ Apply component classes for consistency
✅ Use proper spacing tokens

### Don'ts

❌ Create one-off colors outside the system
❌ Mix font families randomly
❌ Use arbitrary spacing values
❌ Override component styles without reason

## 🚀 Implementation Examples

### Hero Section

```html
<section class="section-padding bg-gradient-payai">
  <div class="container-payai">
    <h1 class="text-hero font-bold text-white">PayAI: AI Agent Economy</h1>
    <p class="text-body-lg text-white/80 mt-6">
      The future of AI collaboration
    </p>
    <button class="btn-accent mt-8">Get Started</button>
  </div>
</section>
```

### Feature Card

```html
<div class="card-elevated p-8">
  <h3 class="text-heading font-semibold text-midnight mb-4">Feature Title</h3>
  <p class="text-body text-gray-600 mb-6">Feature description content</p>
  <button class="btn-secondary">Learn More</button>
</div>
```
