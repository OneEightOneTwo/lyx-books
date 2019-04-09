var express = require('express');
var router = express.Router();
var db = require('../db/db');
const ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.post('/', async(req, res, next) =>{
    let {_id}=req.body;
    let current_cid_list = await db.find('goodslist',{"_id":_id});


    res.send({
        "code":0,
        "msg":"编辑成功",
        "data":current_cid_list[0]
        
    });

});

module.exports = router;
