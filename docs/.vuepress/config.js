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
                    children: [
                        ['FirstBlog', 'FirstBlog']// ['xxx(表示xxx.md)', '你要显示的文章名']
                    ]
                }
            ],
            '/notes/': [
                {
                    title: '笔记',
                    children: ['']
                }
            ]
        }
    }
}