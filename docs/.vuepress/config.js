module.exports = {
    base: '/',
    title: 'wdh2019的学习空间',
    description: '欢迎来到wdh2019的学习空间',
    theme: 'vuepress-theme-vdoing',
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
                    sidebarDepth: 2,
                    children: [
                        ['第一篇博客.md', '第一篇博客'],// ['xxx(表示xxx.md)', '你要显示的文章名']
                        'Vue2响应式.md',
                        '使用Fetch请求文件，并下载到本地.md',
                        'Vue-vs-React'
                    ]
                }
            ],
            '/notes/': [
                {
                    title: '前端笔记',
                    sidebarDepth: 3,
                    children: [
                        'frontend/internet.md',
                        'frontend/browser.md',
                        'frontend/html.md',
                        'frontend/css.md',
                        'frontend/javascript.md',
                        'frontend/git.md',
                        'frontend/vue.md',
                        'frontend/webpack.md',
                        'frontend/less.md'
                    ]
                },
                {
                    title: '设计模式',
                    sidebarDepth: 2,
                    children: ['design-pattern/设计模式.md']
                },
                {
                    title: '数据结构与算法',
                    sidebarDepth: 2,
                    children: ['data structure and algorithm/sorting.md']
                },{
                    title: '面试真题',
                    sidebarDepth: 1,
                    children: ['problems/interviews.md']
                }
            ],
        }
    }
}