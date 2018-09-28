# [base](https://github.com/jsmini/base) [![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base) [![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/base) [![Build Status](https://travis-ci.org/jsmini/base.svg?branch=master)](https://travis-ci.org/jsmini/base) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/base/blob/master/LICENSE)
最好用的js第三方库脚手架，fork或clone本仓库，即可搭建完成一个新库的基础框架

## 特性

- ES6编写源码，编译生成生产代码
- 集成 babel-runtime (默认关闭)
- 第三方依赖自动注入
- 支持浏览器原生
- 支持AMD，CMD
- 支持Webpack，Rollup，fis等
- 支持Node
- 集成单元测试环境
- 集成eslint
- 集成[travis-ci](https://www.travis-ci.org/)
- 支持banner
- 集成[jsmini](https://github.com/jsmini)
- 集成ISSUE_TEMPLATE
- 支持[sideEffects](https://juejin.im/post/5b4ff9ece51d45190c18bb65)

**注意:** 如果不同时使用 export 与 export default 可打开legacy模式，legacy模式下的模块系统可以兼容ie6-8，见rollup配置文件

## 兼容性
单元测试保证支持如下环境：

- Node 4+
- Safari 6+ (Mac)
- iOS 5+ Safari
- Chrome 23+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
- Firefox 4+ (Windows, Mac, Android, Linux)
- Internet Explorer 6+ (Windows, Windows Phone)
- Opera 10+ (Windows, linux, Android)

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 如何使用
通过npm下载安装代码

```bash
$ npm install --save @jsmini/base
```

如果你是node环境

```js
var name = require('@jsmini/base').name;
```

如果你是webpack等环境

```js
import { name } from '@jsmini/base';
```

如果你是requirejs环境

```js
requirejs(['node_modules/@jsmini/base/dist/index.aio.js'], function (jsmini_base) {
    var name = jsmini_base.name;
})
```

如果你是浏览器环境

```html
<script src="node_modules/@jsmini/base/dist/index.aio.js"></script>

<script>
    var name = jsmini_base.name;
</script>
```

## 文档
[API](https://github.com/jsmini/base/blob/master/doc/api.md)

## 贡献指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改package.json中的版本号，修改README.md中的版本号，修改CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish --access=public
```

可能需要你自己修改的地方如下：

- README.md 中的信息
- package.json 中的信息
- config/rollup.js 中的信息
- test/browser/index.html 中的仓库名称

## 更新日志
[CHANGELOG.md](https://github.com/jsmini/base/blob/master/CHANGELOG.md)

## 计划列表
[TODO.md](https://github.com/jsmini/base/blob/master/TODO.md)

## 谁在使用

- [type](https://github.com/jsmini/type)
- [is](https://github.com/jsmini/is)
- [guid](https://github.com/jsmini/guid)
- [inherits](https://github.com/jsmini/inherits)
- [event](https://github.com/jsmini/event)
- [console](https://github.com/jsmini/console)
