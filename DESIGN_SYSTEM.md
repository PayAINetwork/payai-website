# PayAI Design System

## 🎨 Color Palette

### Primary Brand Colors

```css
primary: {
  DEFAULT: "#4D63F6",
  50: "#F0F2FE",
  100: "#E1E6FD",
  200: "#C4CDFB",
  300: "#A6B4F8",
  400: "#899BF6",
  500: "#4D63F6",
  600: "#2F47E8",
  700: "#1E2FBB",
  800: "#16238E",
  900: "#0E1861",
  950: "#070C34",
}

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
<div class="bg-primary text-white">Primary Background</div>
<div class="bg-neonCyan text-midnight">Accent Background</div>
<div class="text-electricPurple">Purple Text</div>
```

## 📝 Typography

### Font Families

- **Heading**: Inter (fallback: system-ui, sans-serif)
- **Body**: Inter (fallback: system-ui, sans-serif)
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

### Alternative Body Scale Names

```css
text-body-large: 1.125rem (18px) - line-height: 1.6
text-body-medium: 1rem (16px) - line-height: 1.6
text-body-small: 0.875rem (14px) - line-height: 1.5
text-body-xsmall: 0.75rem (12px) - line-height: 1.4
```

### Usage Examples

```html
<h1 class="text-hero font-bold text-midnight">Hero Title</h1>
<h2 class="text-display font-bold text-midnight">Section Title</h2>
<p class="text-body text-gray-600">Body text content</p>
<button class="bg-primary hover:bg-primary-700 text-white">
  Primary Button
</button>
```

## 🎯 Component Classes

### Buttons

```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-accent">Accent Button</button>
<button class="btn-ghost">Ghost Button</button>
```

### Design System Tokens

```html
<!-- Primary Color Usage -->
<button class="bg-primary hover:bg-primary-700 text-white">Button</button>
<a class="text-primary hover:underline">Link</a>
<div class="ring-primary/40">Focus Ring</div>

<!-- Typography Usage -->
<h1 class="text-display sm:text-display md:text-hero">Responsive Heading</h1>
<p class="text-body md:text-body-lg">Responsive Body Text</p>
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
<div class="shadow-glow-md">Primary glow effect</div>
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

✅ Use `bg-primary` instead of hardcoded colors
✅ Use `text-body md:text-body-lg` for responsive typography
✅ Stick to the typography hierarchy (hero → display → heading → subheading → body)
✅ Apply component classes for consistency
✅ Use proper spacing tokens

### Don'ts

❌ Use hardcoded colors like `bg-[#4D63F6]`
❌ Mix font families randomly
❌ Use arbitrary text sizes outside the system
❌ Override component styles without reason

## 🚀 Implementation Examples

### Hero Section

```html
<section class="section-padding bg-primary">
  <div class="container-payai">
    <h1 class="text-display md:text-hero font-semibold text-white">
      PayAI: AI Agent Economy
    </h1>
    <p class="text-body md:text-body-lg text-white/80 mt-6">
      The future of AI collaboration
    </p>
    <button class="bg-white hover:bg-gray-50 text-primary mt-8">
      Get Started
    </button>
  </div>
</section>
```

### Feature Card

```html
<div class="card-elevated p-8">
  <h3 class="text-subheading md:text-heading font-semibold text-midnight mb-4">
    Feature Title
  </h3>
  <p class="text-body md:text-body-lg text-gray-600 mb-6">
    Feature description content
  </p>
  <button class="bg-primary hover:bg-primary-700 text-white">Learn More</button>
</div>
```

## 📱 Mobile Responsiveness

### Typography Scaling

```html
<!-- Mobile-first responsive typography -->
<h1 class="text-display sm:text-display md:text-hero">Hero Title</h1>
<h2 class="text-heading sm:text-heading md:text-display">Section Title</h2>
<h3 class="text-subheading md:text-heading">Card Title</h3>
<p class="text-body md:text-body-lg">Body content</p>
```

### Color Consistency

```html
<!-- Always use design system tokens -->
<button class="bg-primary hover:bg-primary-700">Primary Button</button>
<a class="text-primary hover:underline">Primary Link</a>
<div class="border-primary">Primary Border</div>
```
