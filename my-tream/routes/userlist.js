var express = require('express');
var router = express.Router();
var db = require('../db/db');
const mongoose = require('mongoose');
/* GET users listing. */
router.get('/', async(req, res, next) =>{
   // 解构
   let {page,limit}=req.query;
   let red = await db.slices('users',(page-1)*limit,limit*1,{});
   for(var i=0;i<red.length;i++){
       red[i].regtime=fmtDate((red[i].regtime)*1);
       if(red[i].close=='on')
       {
        red[i].close='是'
       }
       if(red[i].close=='off')
       {
        red[i].close='不是'
       }
   }
   // console.log(res);
   if(red){
       res.send ({
           "code": 0,
           "msg": "",
           "count": 11,
           "data": red
         } );
   }else{
    res.send ('no');
   }

   

   // 存入数据库
});

router.post('/',async (req, res, next)=>{
    // 解构
    let {state,id,username,email,sex,phone,close}=req.body;
    var _id = mongoose.Types.ObjectId(id);
    if(state=='update'){
        let red = await db.update('users', { '_id': _id },{$set:{'id':_id,'username':username,'email':email,'sex':sex,'phone':phone,'close':close}});
    }
    if(state=='del'){
        let red = await db.delete('users', { '_id': _id });
    }
        
    
    res.body='66';
    

    // 存入数据库

})
function fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}

module.exports = router;

function newFunction(res) {
    console.log(res);
}