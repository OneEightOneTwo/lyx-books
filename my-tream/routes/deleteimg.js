var express = require('express');
var router = express.Router();
var db = require('../db/db');
//引用文件模块
const fs = require('fs')
/* GET home page. */
router.get('/', async (req, res, next) => {
    let { imgext } = req.query;
    console.log('您确定要删除图片吗？', imgext);
    var imgurl = './images/' + imgext;
    fs.unlink(imgurl, (err) => {
        if (err) throw err;
        console.log('文件已删除') ;

    })
    res.send ({
        'code': 0,
        'msg': '图片删除成功'
    });
});



module.exports = router;