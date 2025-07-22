// TouchX UI Sidebar Configuration

export const sidebar = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '安装', link: '/guide/installation' }
      ]
    },
    {
      text: '设计',
      items: [
        { text: '设计理念', link: '/guide/design-philosophy' },
        { text: '设计原则', link: '/guide/design-principles' },
        { text: '动效指南', link: '/guide/animation-guide' }
      ]
    },
    {
      text: '开发',
      items: [
        { text: '主题定制', link: '/guide/theming' },
        { text: '国际化', link: '/guide/i18n' },
        { text: '贡献指南', link: '/guide/contributing' }
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
        { text: 'Slider 滑块', link: '/components/slider' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Input 输入框', link: '/components/input' }
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
      text: '设计系统',
      items: [
        { text: '设计令牌', link: '/design/tokens' },
        { text: '颜色系统', link: '/design/colors' },
        { text: '字体系统', link: '/design/typography' },
        { text: '间距系统', link: '/design/spacing' }
      ]
    },
    {
      text: '视觉风格',
      items: [
        { text: '玻璃态设计', link: '/design/glassmorphism' },
        { text: '动效语言', link: '/design/motion' },
        { text: '图标风格', link: '/design/iconography' }
      ]
    }
  ]
}