import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: 'TouchX UI',
  description: 'Beautiful Touchable Animations · A lifelike Vue3 component library',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/touchx-logo-transparent.png' }],
    ['meta', { name: 'theme-color', content: '#ff6b6b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en-US' }],
    ['meta', { property: 'og:title', content: 'TouchX UI | Beautiful Touchable Animations' }],
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
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/talex-touch/touchx-ui' }
    ],

    nav: [
      { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: 'Components', link: '/components/', activeMatch: '/components/' },
      {
        text: 'Resources',
        items: [
          { text: 'GitHub', link: 'https://github.com/talex-touch/touchx-ui' },
          { text: 'NPM', link: 'https://www.npmjs.com/package/@talex-touch/touchx-ui' },
          { text: 'Playground', link: '/playground/' },
          { text: 'Changelog', link: 'https://github.com/talex-touch/touchx-ui/releases' },
          {
            items: [
              { text: 'Vue 3', link: 'https://vuejs.org/' },
              { text: 'VitePress', link: 'https://vitepress.dev/' },
              { text: 'TypeScript', link: 'https://www.typescriptlang.org/' }
            ]
          }
        ]
      }
    ],

    sidebar,

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search query',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate'
            }
          }
        }
      }
    }
  }
})
