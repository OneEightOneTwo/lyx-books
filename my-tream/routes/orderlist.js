var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var db = require('../db/db');


/* GET users listing. */
router.get('/', async(req, res, next) =>{
  // 解构
  let {page,limit}=req.query;
  let red = await db.slices('goodslist',(page-1)*limit,limit*1,{});
  if(red){
      res.send ( {
          "code": 0,
          "msg": "",
          "count": 11,
          "data": red
        } )
  }else{
      res.send ( 'no');
  }

  

  // 存入数据库
});


router.post('/',async (req, res, next)=>{
    // 解构
    let {id,state1,state2}=req.body;
    var _id = mongoose.Types.ObjectId(id);
    if(state1=='已'){
        if(state2=='付款'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state1':'等待付款','state2':'等待发货','state3':'等待签收', 'state4':'等待完成订单' }});
        }
        if(state2=='发货'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state2':'等待发货','state3':'等待签收', 'state4':'等待完成订单' }});
        }
        if(state2=='签收'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state3':'等待签收','state4':'等待完成订单' }});
        }
        if(state2=='完成订单'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state4':'等待完成订单' }});
        }
    }
    if(state1=='等待'){
        if(state2=='完成订单'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state1':'已付款', 'state2':'已发货','state3':'已签收','state4':'已完成订单' }});
        }
        if(state2=='签收'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state1':'已付款', 'state2':'已发货','state3':'已签收' }});
        }
        if(state2=='发货'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state1':'已付款', 'state2':'已发货' }});
        }
        if(state2=='付款'){
            let red = await db.update('goodslist', { '_id': _id },{$set:{'state1':'已付款' }});
        }
    }
        
    
    res.send('66');
    

    // 存入数据库

})

module.exports = router;

function newFunction(res) {
    console.log(res);
}
