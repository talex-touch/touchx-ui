// TouchX UI Sidebar Configuration

export const sidebar = {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Quick Start', link: '/guide/getting-started' }
      ]
    },
    {
      text: 'Design',
      items: [
        { text: 'Design Philosophy', link: '/guide/design-philosophy' },
        { text: 'Design Principles', link: '/guide/design-principles' },
        { text: 'Animation Guide', link: '/guide/animation-guide' }
      ]
    },
    {
      text: 'Development',
      items: [
        { text: 'Theming', link: '/guide/theming' },
        { text: 'Internationalization', link: '/guide/i18n' },
        { text: 'Contributing', link: '/guide/contributing' }
      ]
    }
  ],
  '/components/': [
    {
      text: 'Basic Components',
      items: [
        { text: 'Button', link: '/components/button' },
        { text: 'Avatar', link: '/components/avatar' },
        { text: 'Icon', link: '/components/icon' }
      ]
    },
    {
      text: 'Layout Components',
      items: [
        { text: 'Card', link: '/components/card' },
        { text: 'Container', link: '/components/container' },
        { text: 'Grid', link: '/components/grid' }
      ]
    },
    {
      text: 'Interactive Components',
      items: [
        { text: 'Slider', link: '/components/slider' },
        { text: 'Switch', link: '/components/switch' },
        { text: 'Input', link: '/components/input' }
      ]
    },
    {
      text: 'Feedback Components',
      items: [
        { text: 'Toast', link: '/components/toast' },
        { text: 'Modal', link: '/components/modal' },
        { text: 'Loading', link: '/components/loading' }
      ]
    }
  ],
  '/design/': [
    {
      text: 'Design System',
      items: [
        { text: 'Design Tokens', link: '/design/tokens' },
        { text: 'Color System', link: '/design/colors' },
        { text: 'Typography', link: '/design/typography' },
        { text: 'Spacing System', link: '/design/spacing' }
      ]
    },
    {
      text: 'Visual Style',
      items: [
        { text: 'Glassmorphism', link: '/design/glassmorphism' },
        { text: 'Motion Language', link: '/design/motion' },
        { text: 'Iconography', link: '/design/iconography' }
      ]
    }
  ]
}