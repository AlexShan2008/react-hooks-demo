### Reyun-Home

#### a zero config project use React & Next.js project

## Development

```sh
yarn dev
```

## Building for Production

```sh
yarn build
```

## Deployment

1. 拷贝文件到服务器
   将`package.json`、`next.config.js`、`yarn.lock`文件，`static`文件夹和打包后生成的`.next`文件夹 copy 到服务器

2. 执行相关命令

```sh
# 安装项目依赖
npm install
# 启动服务器
npm run start

```

## Serve Production

```sh
yarn start
```

## Release

<!-- Use [Semantic Versioning](https://semver.org/)

```sh
./bin/release [major | minor | patch | MAJOR.MINOR.PATCH]
``` -->

## Maintenance

```sh
yarn upgrade-interactive # or `rm yarn.lock && yarn install`
yarn upgrade-interactive --latest # check release notes for breaking changes
```

## References

- [next.js](https://github.com/zeit/next.js)
- [react](https://reactjs.org/)
- [MobX](https://mobx.js.org/)
- [react-jss](https://github.com/cssinjs/react-jss)
- [material-ui](https://github.com/mui-org/material-ui)
- [sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [i18next](https://www.i18next.com/)

## Style Guides

- [JavaScript Standard Style](https://standardjs.com/)

### Project Structure

```
├── .next               编译后文件
├── .vscode             VSCode 编译器配置
├── components          组件
├── constants           常量
├── node_modules        安装的依赖包
├── pages               页面
├── stores              mobx store
├── next.config.js      next.js 配置
├── utils               工具代码
├── .babel              babel 配置
├── .editorconfig       编辑器配置
├── .eslint             eslint 配置（代码风格约束）
├── .gitignore          git 忽略文件
├── git.md              git commit 风格约束说明
├── GUIDE.md            本项目较详尽的说明
├── package.json        安装依赖文件
├── static              静态文件夹
    ├── styles          样式文件
    ├── iconfont        图标文件
```
