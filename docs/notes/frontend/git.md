---
title: git
date: 2022-07-01 14:33:10
permalink: /pages/notes/git
categories:
  - 笔记
  - 前端
tags:
  - git
---
# 六、Git



## Git

<a href="https://git-scm.com/">git 官网</a>

### 什么是 Git

Git 是分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。



### 什么是版本控制系统

- 版本控制：对软件开发过程中各种程序代码、[配置文件](https://baike.baidu.com/item/配置文件/286550)及说明文档等文件变更的管理，是[软件配置管理](https://baike.baidu.com/item/软件配置管理/3765602)的核心思想之一。（引自百度百科）

  简单的本地版本控制：

  - 论文.docx，论文（最终版）.docx，论文（终极不改）.docx，论文（卒）.docx

- 版本控制系统：集中化/分布式。

  分布式相比于集中式的最大区别在于开发者可以提交到本地，每个开发者通过克隆（git clone），在本地机器上靠背一个完整的 Git 仓库。（引自百度百科）



### 前置设置

在使用 git 之前，别忘了设置你的名字和邮箱

```bash
git config --global user.name "your-username"
git config --global user.email your-email
```



### 3个区

<a href="https://blog.csdn.net/qq_32452623/article/details/78417609">参考博客</a>

- Working directory：工作区，即你在写代码的工作目录。
- Staging area：暂存区，数据暂时存放的区域，可在工作区和版本库之间。
- Repository：版本库。存放已经提交的数据的远程仓库。



### 常用命令

<a href="https://www.cnblogs.com/miracle77hp/articles/11163532.html">参考博客</a>

- `git init`：在当前目录新建一个 Git 代码库。



- `git clone`：克隆一个远程仓库到本地。 如  `git clone git@github.com:wdh2019/Frontend-Self-Learning.git`



- `git add`：添加指定文件到暂存区。
  - `git add .`  提交当前目录的所有文件到暂存区。
  - `git add 侧边栏/demo0/index.html` 提交指定路径的文件：侧边栏/demo0/index.html



- `git restore`：将文件从暂存区撤销。
  - `git restore [file]`  **将在工作区（已修改）但不在暂存区的文件撤销**。
  - `git restore --stage [file]` **将文件从暂存区撤销**。



- `git rm`：删除工作区文件。
  - `git rm [file1] [file2]` 删除工作区文件，并将这次删除放入暂存区。
  - `git rm --cached [file]` **停止追踪**指定文件，但该文件会保留在工作区。



- `git mv`：移动或重命名文件。 
  - `git mv [original-file] [renamed-file]`



- `git commit`：提交代码到远程仓库.
  - `git commit -m [message]` message是你关于这次提交的一些注释。
  - `git commit -m [file1] [file2] ... -m message`



- `git status`：显示工作区状态。



- `git log`：显示当前分支的版本历史。
  - `git log --pretty=oneline` 常用，每条提交历史缩短至一行。



- `git diff`：显示暂存区和工作区的差异。



- `git branch`：操作分支。
  - `git branch` 列出所有已有分支。
  - `git branch [branch-name]` 创建一个新的分支。
  - `git branch -d [branch-name]` 删除指定分支。
  - `git brance -dr [remote-branch]` 删除指定远程分支。
  - `git branch --set-upstream [branch] [remote-branch]` 建立现有分支和指定远程分支的追踪关系。



- `git checkout`：切换分支。
  - `git checkout [branch-name]`切换当前分支到指定分支。
  - `git checkout -b [branch-name]` 新建分支并切换到新建的分支。



- `git merge`：合并分支。
  - `git merge [branch-name]` 合并指定分支到当前分支中。



- `git tag`：操作 tag。
  - `git tag` 列出所有 tag。
  - `git tag [tag]` 在当前提交上新建一个指定的tag。
  - `git tag [tag] [commit]` 在指定提交上新建一个指定的tag。
  - `git tag -d [tag]` 删除本地tag。
  - `git push [remote] [tag]` 提交指定tag到指定远程仓库。
  - `git push [remote] --tags` 提交所有tag到指定远程仓库。
  - `git push origin :refs/tags/[tagName]` 从远程仓库中删除一个指定tag。



- `git pull `：从远程仓库拉取代码。
  - `git pull [remote] [branch]` 取回远程仓库的变化，并与本地分支合并。



- `git push`：上传代码到远程仓库。
  - `git push [remote] [branch]` 上传本地指定分支到远程仓库。
  - `git push [remote] --force` 强行推送当前分支到远程仓库，即便有冲突。
  - `git push [remote] --all` 推送所有分支到远程仓库。



## GitHub

<a href="https://github.com/">github 官网链接</a>

### 什么是 GitHub

GitHub 是一个面向[开源](https://baike.baidu.com/item/开源/20720669)及私有[软件](https://baike.baidu.com/item/软件/12053)项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。（引自百度百科）



### 如何为别人的项目贡献代码

- 点击别人项目的`fork`按钮，将项目复制到自己的仓库。
- 在自己的仓库中修改代码。
- 通过向别人项目提出`pull request`，向项目负责人申请将你的代码合并到他的项目中。
- 如果通过审核，恭喜你，你就为别人的项目添砖加瓦了！