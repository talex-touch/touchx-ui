import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: 'TouchX UI',
  description: '可触摸的美丽动效 · 生动如生命般的 Vue3 组件库',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/touchx-logo-transparent.png' }],
    ['meta', { name: 'theme-color', content: '#ff6b6b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: 'TouchX UI | 可触摸的美丽动效' }],
    ['meta', { property: 'og:site_name', content: 'TouchX UI' }],
    ['meta', { property: 'og:image', content: '/touchx-logo-transparent.png' }],
    ['meta', { property: 'og:url', content: 'https://touchx-ui.talex.cn/' }],
  ],

  themeConfig: {
    logo: '/touchx-logo-transparent.png',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present TalexDreamSoul',
    },

    editLink: {
      pattern: 'https://github.com/talex-touch/touchx-ui/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/talex-touch/touchx-ui' }
    ],

    nav: [
      { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
      { text: '设计', link: '/design/', activeMatch: '/design/' },
      {
        text: '资源',
        items: [
          { text: 'GitHub', link: 'https://github.com/talex-touch/touchx-ui' },
          { text: 'NPM', link: 'https://www.npmjs.com/package/@talex-touch/touchx-ui' },
          { text: 'Playground', link: '/playground/' },
          { text: '更新日志', link: 'https://github.com/talex-touch/touchx-ui/releases' },
          {
            items: [
              { text: 'Vue 3', link: 'https://cn.vuejs.org/' },
              { text: 'VitePress', link: 'https://vitepress.dev/' },
              { text: 'TypeScript', link: 'https://www.typescriptlang.org/' }
            ]
          }
        ]
      },
      {
        text: '语言',
        items: [
          { text: '简体中文', link: '/' },
          { text: 'English', link: '/en/' }
        ]
      }
    ],

    sidebar,

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})
