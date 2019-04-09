var express = require('express');
var router = express.Router();
var db = require('../db/db.js');
/* GET users listing. */
router.post('/', async(req, res, next)=> {
  let {red} =req.body;
  let data = await db.insert('goodslist',{'img':red});
  res.send({
    'data':data,
    "code":0,
    "msg":"上传文件成功"
  })
});

module.exports = router;