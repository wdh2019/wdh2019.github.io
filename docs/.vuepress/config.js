module.exports = {
    basd: '/',
    title: '',
    description: 'Github page built by Vuepress',
    themeConfig: {
        // github仓库地址
        repo: 'https://github.com/wdh2019/wdh2019.github.io',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'FirstBlog', link: '/blogs/FirstBlog.md'}
        ],
        sidebar: [
            ['/', '首页'],
            ['/blogs/FirstBlog.md', '我的第一篇博客']
        ]
    }
}