[![](https://github.com/szjSmiling/Markdown-Language/raw/master/img/github.png "我的git，欢迎关注")][git]  
>yarn upgrade `# 用于更新包到基于规范范围的最新版本(推荐)`  
>yarn upgrade --latest `# 忽略版本规则，升级到最新版本，并且更新 package.json`  
`使用场景`: 主要是提交代码时, git 上的 [dependabot] 会提示不安全的依赖, 一般都是因为依赖内部引入的一些依赖版本过低导致;
`16.8.0 React 开始支持 Hook`
## React & Ant & Echart 搭建管理系统 
### 1. 安装 `npx`, 并且简单使用
```
npm i -D cowsay
npx cowsay hello
```
### 2. 使用 npx 创建项目
```
npx create-react-app my-react
```
> 注意: 如果想生成 webpack.config.js 请使用命令 `yarn eject`, 这是一个不可逆的过程

### 3. 启动项目
```
yarn start
```
### 4. 依赖的安装
|依赖|作用|
|:---:|:---:|
|yarn add react-router-dom|`路由`|
|yarn add node-sass --save|`CSS3 语法的超集`|
|yarn add sass-resources-loader|`配置全局 scss 变量`|
|yarn add antd|`安装antd组件库`|

### 5. 项目目录结构
```js
public
  -manifest.json：允许将站点添加至主屏幕，是PWA提供的一项重要功能，目前属于草案阶段;
src
  +assets
  +components
  +pages
  -App.js
  -App.scss
  -index.js
  -logo.svg
  -serviceWorker.js
.gitignore
package.json
README.md
yarn.lock
```
***
[git]: https://github.com/szjSmiling
[dependabot]: https://github.com/marketplace/dependabot-preview