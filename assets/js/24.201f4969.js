(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{466:function(t,e,_){"use strict";_.r(e);var v=_(20),i=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"六、git"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、git"}},[t._v("#")]),t._v(" 六、Git")]),t._v(" "),_("h2",{attrs:{id:"git"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://git-scm.com/"}},[t._v("git 官网")])]),t._v(" "),_("h3",{attrs:{id:"什么是-git"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-git"}},[t._v("#")]),t._v(" 什么是 Git")]),t._v(" "),_("p",[t._v("Git 是分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。")]),t._v(" "),_("h3",{attrs:{id:"什么是版本控制系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制系统"}},[t._v("#")]),t._v(" 什么是版本控制系统")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("版本控制：对软件开发过程中各种程序代码、"),_("a",{attrs:{href:"https://baike.baidu.com/item/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6/286550",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),_("OutboundLink")],1),t._v("及说明文档等文件变更的管理，是"),_("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86/3765602",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件配置管理"),_("OutboundLink")],1),t._v("的核心思想之一。（引自百度百科）")]),t._v(" "),_("p",[t._v("简单的本地版本控制：")]),t._v(" "),_("ul",[_("li",[t._v("论文.docx，论文（最终版）.docx，论文（终极不改）.docx，论文（卒）.docx")])])]),t._v(" "),_("li",[_("p",[t._v("版本控制系统：集中化/分布式。")]),t._v(" "),_("p",[t._v("分布式相比于集中式的最大区别在于开发者可以提交到本地，每个开发者通过克隆（git clone），在本地机器上靠背一个完整的 Git 仓库。（引自百度百科）")])])]),t._v(" "),_("h3",{attrs:{id:"前置设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前置设置"}},[t._v("#")]),t._v(" 前置设置")]),t._v(" "),_("p",[t._v("在使用 git 之前，别忘了设置你的名字和邮箱")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-username"')]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email your-email\n")])])]),_("h3",{attrs:{id:"_3个区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3个区"}},[t._v("#")]),t._v(" 3个区")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/qq_32452623/article/details/78417609"}},[t._v("参考博客")])]),t._v(" "),_("ul",[_("li",[t._v("Working directory：工作区，即你在写代码的工作目录。")]),t._v(" "),_("li",[t._v("Staging area：暂存区，数据暂时存放的区域，可在工作区和版本库之间。")]),t._v(" "),_("li",[t._v("Repository：版本库。存放已经提交的数据的远程仓库。")])]),t._v(" "),_("h3",{attrs:{id:"常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/miracle77hp/articles/11163532.html"}},[t._v("参考博客")])]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("git init")]),t._v("：在当前目录新建一个 Git 代码库。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git clone")]),t._v("：克隆一个远程仓库到本地。 如  "),_("code",[t._v("git clone git@github.com:wdh2019/Frontend-Self-Learning.git")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git add")]),t._v("：添加指定文件到暂存区。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git add .")]),t._v("  提交当前目录的所有文件到暂存区。")]),t._v(" "),_("li",[_("code",[t._v("git add 侧边栏/demo0/index.html")]),t._v(" 提交指定路径的文件：侧边栏/demo0/index.html")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git restore")]),t._v("：将文件从暂存区撤销。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git restore [file]")]),t._v(" "),_("strong",[t._v("将在工作区（已修改）但不在暂存区的文件撤销")]),t._v("。")]),t._v(" "),_("li",[_("code",[t._v("git restore --stage [file]")]),t._v(" "),_("strong",[t._v("将文件从暂存区撤销")]),t._v("。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git rm")]),t._v("：删除工作区文件。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git rm [file1] [file2]")]),t._v(" 删除工作区文件，并将这次删除放入暂存区。")]),t._v(" "),_("li",[_("code",[t._v("git rm --cached [file]")]),t._v(" "),_("strong",[t._v("停止追踪")]),t._v("指定文件，但该文件会保留在工作区。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git mv")]),t._v("：移动或重命名文件。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git mv [original-file] [renamed-file]")])])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git commit")]),t._v("：提交代码到远程仓库.")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git commit -m [message]")]),t._v(" message是你关于这次提交的一些注释。")]),t._v(" "),_("li",[_("code",[t._v("git commit -m [file1] [file2] ... -m message")])])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git status")]),t._v("：显示工作区状态。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git log")]),t._v("：显示当前分支的版本历史。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git log --pretty=oneline")]),t._v(" 常用，每条提交历史缩短至一行。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git diff")]),t._v("：显示暂存区和工作区的差异。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git branch")]),t._v("：操作分支。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git branch")]),t._v(" 列出所有已有分支。")]),t._v(" "),_("li",[_("code",[t._v("git branch [branch-name]")]),t._v(" 创建一个新的分支。")]),t._v(" "),_("li",[_("code",[t._v("git branch -d [branch-name]")]),t._v(" 删除指定分支。")]),t._v(" "),_("li",[_("code",[t._v("git brance -dr [remote-branch]")]),t._v(" 删除指定远程分支。")]),t._v(" "),_("li",[_("code",[t._v("git branch --set-upstream [branch] [remote-branch]")]),t._v(" 建立现有分支和指定远程分支的追踪关系。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git checkout")]),t._v("：切换分支。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git checkout [branch-name]")]),t._v("切换当前分支到指定分支。")]),t._v(" "),_("li",[_("code",[t._v("git checkout -b [branch-name]")]),t._v(" 新建分支并切换到新建的分支。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git merge")]),t._v("：合并分支。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git merge [branch-name]")]),t._v(" 合并指定分支到当前分支中。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git tag")]),t._v("：操作 tag。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git tag")]),t._v(" 列出所有 tag。")]),t._v(" "),_("li",[_("code",[t._v("git tag [tag]")]),t._v(" 在当前提交上新建一个指定的tag。")]),t._v(" "),_("li",[_("code",[t._v("git tag [tag] [commit]")]),t._v(" 在指定提交上新建一个指定的tag。")]),t._v(" "),_("li",[_("code",[t._v("git tag -d [tag]")]),t._v(" 删除本地tag。")]),t._v(" "),_("li",[_("code",[t._v("git push [remote] [tag]")]),t._v(" 提交指定tag到指定远程仓库。")]),t._v(" "),_("li",[_("code",[t._v("git push [remote] --tags")]),t._v(" 提交所有tag到指定远程仓库。")]),t._v(" "),_("li",[_("code",[t._v("git push origin :refs/tags/[tagName]")]),t._v(" 从远程仓库中删除一个指定tag。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git pull")]),t._v("：从远程仓库拉取代码。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git pull [remote] [branch]")]),t._v(" 取回远程仓库的变化，并与本地分支合并。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("git push")]),t._v("：上传代码到远程仓库。")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git push [remote] [branch]")]),t._v(" 上传本地指定分支到远程仓库。")]),t._v(" "),_("li",[_("code",[t._v("git push [remote] --force")]),t._v(" 强行推送当前分支到远程仓库，即便有冲突。")]),t._v(" "),_("li",[_("code",[t._v("git push [remote] --all")]),t._v(" 推送所有分支到远程仓库。")])])])]),t._v(" "),_("h2",{attrs:{id:"github"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/"}},[t._v("github 官网链接")])]),t._v(" "),_("h3",{attrs:{id:"什么是-github"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-github"}},[t._v("#")]),t._v(" 什么是 GitHub")]),t._v(" "),_("p",[t._v("GitHub 是一个面向"),_("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BC%80%E6%BA%90/20720669",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源"),_("OutboundLink")],1),t._v("及私有"),_("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6/12053",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件"),_("OutboundLink")],1),t._v("项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。（引自百度百科）")]),t._v(" "),_("h3",{attrs:{id:"如何为别人的项目贡献代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何为别人的项目贡献代码"}},[t._v("#")]),t._v(" 如何为别人的项目贡献代码")]),t._v(" "),_("ul",[_("li",[t._v("点击别人项目的"),_("code",[t._v("fork")]),t._v("按钮，将项目复制到自己的仓库。")]),t._v(" "),_("li",[t._v("在自己的仓库中修改代码。")]),t._v(" "),_("li",[t._v("通过向别人项目提出"),_("code",[t._v("pull request")]),t._v("，向项目负责人申请将你的代码合并到他的项目中。")]),t._v(" "),_("li",[t._v("如果通过审核，恭喜你，你就为别人的项目添砖加瓦了！")])])])}),[],!1,null,null,null);e.default=i.exports}}]);