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
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Avatar 头像', link: '/components/avatar' },
        { text: 'Icon 图标', link: '/components/icon' }
      ]
    },
    {
      text: '布局组件',
      items: [
        { text: 'Card 卡片', link: '/components/card' },
        { text: 'Container 容器', link: '/components/container' },
        { text: 'Grid 栅格', link: '/components/grid' }
      ]
    },
    {
      text: '交互组件',
      items: [
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Slider 滑块', link: '/components/slider' }
      ]
    },
    {
      text: '反馈组件',
      items: [
        { text: 'Toast 提示', link: '/components/toast' },
        { text: 'Modal 模态框', link: '/components/modal' },
        { text: 'Loading 加载', link: '/components/loading' }
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