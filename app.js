const path = require('path');
const express = require('express');
const mockjs = require('express-mockjs');
const opn = require('opn');
const utils = require('./utils');
require('colors')

// 获取窗口打开标识
let isOpenWin = utils.localStorage().getItem('ISOPENWIN');

// 创建express
const app = express();

// 路由mock数据
app.use('/api', mockjs(path.join(__dirname, './data')));

// 监听端口、打开浏览器
app.listen(port = 3000, function () {
  if (isOpenWin === 'false') {
    let uri = 'http://' + utils.getIP() + ':' + port + '/api';
    opn(uri);

    // 设置窗口打开标识
    utils.localStorage().setItem('ISOPENWIN', 'true');

    console.log("mock server start success.".green);
  }
});
