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
                    title: '笔记',
                    sidebarDepth: 3,
                    children: [
                        ['frontend/前端笔记.md', '前端笔记'],
                        ['design-pattern/设计模式.md', '设计模式']
                    ]
                }
            ],
        }
    }
}