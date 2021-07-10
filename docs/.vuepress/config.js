module.exports = {
    base: '/',
    title: 'wdh2019 github page',
    description: 'Github page built by Vuepress',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '博客', link: '/blogs/'},
            {text: '笔记', link: '/notes/'}
        ],
        sidebar: {
            '/blogs/': [
                {
                    title: '博客',
                    sidebarDepth: 3,
                    children: [
                        ['第一篇博客', '第一篇博客']// ['xxx(表示xxx.md)', '你要显示的文章名']
                    ]
                }
            ],
            '/notes/': [
                {
                    title: '前端笔记',
                    sidebarDepth: 3,
                    children: [
                        'frontend/internet.md',
                        'frontend/browser.md'
                    ]
                },
                {
                    title: '设计模式',
                    sidebarDepth: 2,
                    children: ['design-pattern/设计模式.md']
                }
            ],
        }
    }
}