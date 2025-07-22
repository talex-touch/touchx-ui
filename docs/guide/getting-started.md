# Getting Started

Welcome to TouchX UI! This guide will help you get started with our beautiful touchable animation component library.

## Installation

### NPM
```bash
npm install @talex-touch/touchx-ui
```

### Yarn
```bash
yarn add @talex-touch/touchx-ui
```

### PNPM
```bash
pnpm add @talex-touch/touchx-ui
```

## Usage

### Full Import
```typescript
import { createApp } from 'vue'
import TouchXUI from '@talex-touch/touchx-ui'
import '@talex-touch/touchx-ui/dist/style.css'

const app = createApp(App)
app.use(TouchXUI)
app.mount('#app')
```

### On-Demand Import (Recommended)
```typescript
import { createApp } from 'vue'
import { TxButton, TxAvatar } from '@talex-touch/touchx-ui'
import '@talex-touch/touchx-ui/dist/style.css'

const app = createApp(App)
app.use(TxButton)
app.use(TxAvatar)
app.mount('#app')
```

## Basic Example

Here's a simple example to get you started:

```vue
<template>
  <div>
    <TxButton type="primary" @click="handleClick">
      Click me!
    </TxButton>
    <TxAvatar src="https://example.com/avatar.jpg" size="large" />
  </div>
</template>

<script setup>
import { TxButton, TxAvatar } from '@talex-touch/touchx-ui'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```


## Features

TouchX UI provides a comprehensive set of features:

- **🎭 Vivid Touch Experience**: Lifelike touch feedback through precision physics engine
- **🌊 Smooth Animations**: 60fps fluid experience with Bézier curves and physics animations
- **✨ Modern Visual Language**: Glassmorphism aesthetics with dynamic lighting
- **⚡ Performance Optimized**: Vue3 Composition API with Tree Shaking support
- **🎨 Enterprise Design System**: Complete Design Tokens system
- **🚀 Cross-Platform Ready**: Responsive design for all devices

## TypeScript Support

TouchX UI is built with TypeScript and provides full type definitions:

```typescript
import type { TxButtonProps, TxAvatarProps } from '@talex-touch/touchx-ui'

// Full type safety
const buttonProps: TxButtonProps = {
  type: 'primary',
  size: 'large',
  disabled: false
}
```

## Browser Support

TouchX UI supports all modern browsers:

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## Next Steps

Now that you have TouchX UI installed, you can:

1. **Explore Components**: Check out our [component library](/components/) to see all available components
2. **Learn Design Principles**: Understand our [design philosophy](/guide/design-philosophy)
3. **Customize Themes**: Learn about [theming](/guide/theming) to match your brand
4. **View Examples**: Try our [playground](/playground/) for interactive examples

## Need Help?

- 📖 [Documentation](https://touchx-ui.talex.cn)
- 🐛 [Report Issues](https://github.com/talex-touch/touchx-ui/issues)
- 💬 [Discussions](https://github.com/talex-touch/touchx-ui/discussions)
- 📧 [Contact Us](mailto:support@talex.cn)