(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{311:function(s,a,e){"use strict";e.r(a);var t=e(3),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"mysql配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql配置","aria-hidden":"true"}},[s._v("#")]),s._v(" "),e("router-link",{attrs:{to:"/MySQL/MySQL配置.html"}},[s._v("MySQL配置")])],1),s._v(" "),e("h2",{attrs:{id:"yum按装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum按装mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" yum按装MySQL")]),s._v(" "),e("h3",{attrs:{id:"这里参考了海月博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#这里参考了海月博客","aria-hidden":"true"}},[s._v("#")]),s._v(" 这里参考了"),e("a",{attrs:{href:"https://blog.imzhengfei.com/centos-7-an-zhuang-pei-zhi-mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("海月博客"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("首先centos7 默认已经不支持mysql，因为收费了你懂得，所以内部集成了mariadb，\n而安装mysql的话会和mariadb的文件冲突，所以需要先卸载掉mariadb，以下为卸载mariadb，安装mysql的步骤。\n列出所有被安装的rpm package")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e mariadb-libs-5.5.56-2.el7.x86_64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"强制卸载，因为没有-nodeps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制卸载，因为没有-nodeps","aria-hidden":"true"}},[s._v("#")]),s._v(" 强制卸载，因为没有--nodeps")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps mariadb-libs-5.5.56-2.el7.x86_64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装mysql依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装mysql依赖")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" libaio\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),e("h4",{attrs:{id:"下载yum源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载yum源","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载yum源")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MySQL 8.0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"安装yum源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装yum源","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装yum源")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y localinstall mysql80-community-release-el7-1.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"检查yum源是否安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查yum源是否安装成功","aria-hidden":"true"}},[s._v("#")]),s._v(" 检查yum源是否安装成功")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum repolist enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql.*-community.*"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"可以看到这里默认启用了-mysql-8-0-community-server-，而我们需要安装的是-mysql-5-7-community-server，因此需要修改源设置："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以看到这里默认启用了-mysql-8-0-community-server-，而我们需要安装的是-mysql-5-7-community-server，因此需要修改源设置：","aria-hidden":"true"}},[s._v("#")]),s._v(" 可以看到这里默认启用了 MySQL 8.0 Community Server ，而我们需要安装的是 MySQL 5.7 Community Server，因此需要修改源设置：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/yum.repos.d/mysql-community.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"找到mysql57-community节点："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找到mysql57-community节点：","aria-hidden":"true"}},[s._v("#")]),s._v(" 找到mysql57-community节点：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql57-community"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL 5.7 Community Server\nbaseurl"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://repo.mysql.com/yum/mysql-5.7-community/el/7/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\nenabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\ngpgcheck"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\ngpgkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"将-enabled-0-改成-enabled-1-，再找到mysql80-community节点："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-enabled-0-改成-enabled-1-，再找到mysql80-community节点：","aria-hidden":"true"}},[s._v("#")]),s._v(" 将 enabled=0 改成 enabled=1 ，再找到mysql80-community节点：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql80-community"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL 8.0 Community Server\nbaseurl"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://repo.mysql.com/yum/mysql-8.0-community/el/7/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\nenabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\ngpgcheck"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"将-enabled-1-改成-enabled-0-，保存退出。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-enabled-1-改成-enabled-0-，保存退出。","aria-hidden":"true"}},[s._v("#")]),s._v(" 将 enabled=1 改成 enabled=0 ，保存退出。")]),s._v(" "),e("h4",{attrs:{id:"现在查看-mysql-各个系列默认的版本："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现在查看-mysql-各个系列默认的版本：","aria-hidden":"true"}},[s._v("#")]),s._v(" 现在查看 MySQL 各个系列默认的版本：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum repolist enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql.*-community.*"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"安装mysql-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装mysql")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"查看安装的-mysql-版本："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看安装的-mysql-版本：","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看安装的 MySQL 版本：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("mysqld -V\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"配置mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" "),e("router-link",{attrs:{to:"/MySQL/MySQL配置.html#yum安装配置"}},[s._v("配置MySQL")])],1),s._v(" "),e("h3",{attrs:{id:"更改mysql用户权限（按需执行）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改mysql用户权限（按需执行）：","aria-hidden":"true"}},[s._v("#")]),s._v(" 更改MYSQL用户权限（按需执行）：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/lib/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"启动mysql并查看其状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql并查看其状态","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动mysql并查看其状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl start mysqld\nsystemctl status mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"设置mysql为系统服务，随系统启动而启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置mysql为系统服务，随系统启动而启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置mysql为系统服务，随系统启动而启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" mysqld\nsystemctl daemon-reload\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"重启服务："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启服务：","aria-hidden":"true"}},[s._v("#")]),s._v(" 重启服务：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl restart mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("router-link",{attrs:{to:"/MySQL/MySQL用户管理.html#安装MySQL后修改密码"}},[s._v("修改密码和设置远程连接")])],1),s._v(" "),e("hr"),s._v(" "),e("h1",{attrs:{id:"编译安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),e("h3",{attrs:{id:"_1、下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、下载")]),s._v(" "),e("p",[s._v("官网链接：https://dev.mysql.com/downloads/mysql/5.7.html#downloads\n"),e("img",{attrs:{src:"/images/MySQL-glibc%E4%B8%8B%E8%BD%BD.png",alt:""}})]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[s._v("#")]),s._v(" 解压:")]),s._v(" "),e("p",[s._v("建议：不要安装到其它目录，否则数据库初始化的时候会报cannot change dir的错")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz -C /usr/local/mysql\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysql-5.7.22-linux-glibc2.12-x86_64 mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"卸载系统自带mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载系统自带mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载系统自带mysql")]),s._v(" "),e("p",[s._v("查看：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("卸载：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps softfullname\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"创建用户组和用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建用户组和用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建用户组和用户")]),s._v(" "),e("p",[s._v("创建用户组：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("group "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建用户：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("user "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -r -g mysql mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("为了安全性，给mysql数据库创建专有用户，该用户只能访问mysql目录，不能访问系统其它目录")]),s._v(" "),e("p",[s._v('另外不建议直接用root初始化mysql，否则连接mysql时会报错：[ERROR] Fatal error: Please read "Security" section of the manual to find out how to run mysqld as root!')]),s._v(" "),e("h3",{attrs:{id:"给mysql目录指定专有用户和用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给mysql目录指定专有用户和用户组","aria-hidden":"true"}},[s._v("#")]),s._v(" 给mysql目录指定专有用户和用户组")]),s._v(" "),e("p",[s._v("首先创建data目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mysql\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("指定用户和用户组：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql mysql/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" -R mysql mysql/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("-R包含目录下所有和目录和文件")]),s._v(" "),e("h3",{attrs:{id:"初始化mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化mysql")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mysql/bin\n./mysqld --initialize --user"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql --basedir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/ --datadir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/data/ --lc_messages_dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/share --lc_messages"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("en_US\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("记住生成的临时密码,如果忘记密码或者想重新初始化，可以先将mysql/data目录中文件删除，然后再执行初始化命令")]),s._v(" "),e("h3",{attrs:{id:"配置mysql-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql-2","aria-hidden":"true"}},[s._v("#")]),s._v(" "),e("router-link",{attrs:{to:"/MySQL/MySQL配置.html#yum安装配置"}},[s._v("配置MySQL")])],1),s._v(" "),e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mysql/bin\n启动：./mysqld_safe --user"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"设为开机启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设为开机启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 设为开机启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mysql/support-files/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mysql.server /etc/init.d/mysql\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/init.d/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("将mysql目录填上：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("basedir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/\ndatadir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/data/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("授权：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/init.d/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("设为开机启动：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --add mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"service启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service启动","aria-hidden":"true"}},[s._v("#")]),s._v(" service启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("重启服务：service mysql restart\n停止服务：service mysql stop\n启动服务：service mysql start\n查看服务：service mysql status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"登录mysql修改密码授权远程登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录mysql修改密码授权远程登录","aria-hidden":"true"}},[s._v("#")]),s._v(" 登录mysql修改密码授权远程登录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/local/mysql/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("登录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("./mysql -u root -p  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输入临时密码")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改密码：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" password"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建用户并授权：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("刷新授权：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("FLUSH "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"返回顶部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回顶部","aria-hidden":"true"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"#readme"}},[s._v("返回顶部")])])])},[],!1,null,null,null);a.default=r.exports}}]);