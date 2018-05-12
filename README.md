# node-mock

> 前端数据mock方案， 简单、易用、前后端分离

## Status: beta

目前版本beta 后面会持续优化更新，欢迎大家提出优化建议

## Quickstart

```
npm install
npm run api
```

## 独立使用说明：
- 接口文件在data目录
- 添加接口在data目录按示例文件新增json文件即可
- 生成mock数据语法 自行get [mockjs](http://mockjs.com/)官方文档
- 复制接口地址发起请求

## vue-cli 集成node-mock
- clone node-mock 到 vue-cli 根目录
- cd node-mock
- npm install 安装依赖
- 修改config/dev.evn.js, config/dev.evn.js 两个文件 新增 BASE_URL字段 设置接口地址
```
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '""'
})
```
- axios 配置 baseURL: process.env.BASE_URL
- 修改config/index.js 设置接口代理地址

```
    proxyTable: {
      '/api': {
        target: process.env.BASE_URL,
        changeOrigin: true,
        secure: false
      }
    },
```
### 快速启动配置（可选）
- 修改vue-cli package.json文件的scripts字段
- 新增如下命令
```$xslt
    "reset": "node  mocks/reset.store.js",
    "mock": "nodemon mocks/app.js",
    "api": "npm run reset && npm run mock",
```
- vue-cli 根目录运行 npm run api 即可启动node-mock服务


## License
MIT
