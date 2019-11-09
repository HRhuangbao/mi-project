var express = require('express');
var router = express.Router();
const { find } = require('../db/db')
const app = express()
/* GET home page. */


app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*')
  //跨域 允许所有/* 读取数据
  next()//往下执行
})

router.get('/xiaomi', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('shouji');
  res.json(data);
});

module.exports = router;
