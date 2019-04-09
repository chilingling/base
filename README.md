# [base](https://github.com/jsmini/base) 

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/base/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/jsmini/base.svg?branch=master)](https://travis-ci.org/jsmini/base)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/@jsmini/base)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/base.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/base)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/base.svg)](http://isitmaintained.com/project/jsmini/base "Percentage of issues still open")

jsmini's scaffold. fork / clone this library. and then you can create a new jsmini library.

一组小而美的JS库，jsmini脚手架，fork或clone本仓库，即可搭建完成一个新的jsmini库

English | [简体中文](./README-zh_CN.md)

## Environment Support

unit test ensure it supports the following environments.

| IE/Edge | Chrome | Firefox | Safari | Opera | IOS  | Android | Node  |
| ------- | ------ | ------- | ------ | ----- | ---- | ------- | ----- |
| 6+      | 23+    | 4+      | 6+     | 10+   | 5+   | 2.3+    | 0.10+ |

**Notice:  builds depends on ES5. In order to support IE6-8,  you should import  [es5-shim](http://github.com/es-shims/es5-shim/) . See example in [demo/demo-global.html](./demo/demo-global.html)**

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage
npm installation

```bash
$ npm install --save @jsmini/base
```

Node.js

```js
var name = require('@jsmini/base').name;
```

webpack

```js
import { name } from '@jsmini/base';
```

Require.js

```js
requirejs(['node_modules/@jsmini/base/dist/index.aio.js'], function (jsmini_base) {
    var name = jsmini_base.name;
})
```

Browser

```html
<script src="node_modules/@jsmini/base/dist/index.aio.js"></script>

<script>
    var name = jsmini_base.name;
</script>
```

## Document

[API](https://github.com/jsmini/base/blob/master/doc/api.md)

## Contributing Guide  ![PRs welcome](<https://img.shields.io/badge/PRs-welcome-brightgreen.svg>)
when initialize, install dependencies 

```bash
$ npm install
```

builds your code for production to `build` folder

```bash
$ npm run build
```

run unit test.  notice: borwser enviroment need to test manually.  test file is in `test/browser`

```bash
$ npm test
```

change  the  version in package.json and README.md, add your description in CHANGELOG.md, and then release it happily.

```bash
$ npm run release
```

publish the new package to npm

```bash
$ npm publish --access=public
```

rename  project. you need to edit project name when initialize project or anytime you want to rename the project . you need to rename `formName` and `toname` in file `rename.js`,which will automatically rename project name in the following files

- README.md
- package.json
- config/rollup.js
- test/browser/index.html

```bash
$ npm run rename # rename command
```
## Contributors
[contributors](https://github.com/jsmini/base/graphs/contributors)

## CHANGELOG
[CHANGELOG.md](https://github.com/jsmini/base/blob/master/CHANGELOG.md)

## TODO
[TODO.md](https://github.com/jsmini/base/blob/master/TODO.md)

## who is using

- [type](https://github.com/jsmini/type)
- [is](https://github.com/jsmini/is)
- [inherits](https://github.com/jsmini/inherits)
- [guid](https://github.com/jsmini/guid)
- [clone](https://github.com/jsmini/clone)
- [extend](https://github.com/jsmini/extend)
- [event](https://github.com/jsmini/event)
- [url](https://github.com/jsmini/url)
- [querystring](https://github.com/jsmini/querystring)
- [pubsub](https://github.com/jsmini/pubsub)
- [load](https://github.com/jsmini/load)
- [md5](https://github.com/jsmini/md5)
- [console](https://github.com/jsmini/console)