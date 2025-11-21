import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Leony Guideline",
    description: "A VitePress Site",
    lang: 'zh_CN',
    head: [
        ['link', {rel: 'icon', href: '/favorite.svg'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/favorite.svg',

        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/markdown-examples'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    zh_CN: {
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
        },

        sidebar: [
            {
                text: '指南',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/synn/journey'},
            {icon: 'wechat', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
