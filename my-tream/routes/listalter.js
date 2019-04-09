var express = require('express');
var router = express.Router();
const db = require('../db/db');

// const ObjectId = require('mongodb').ObjectID
/* GET users listing. */
router.get('/', async(req, res, next) =>{

   let {_id}=req.query;
   console.log(_id);
   console.log("111111")
   let delete_current_list=await db.delete('goodslist',{
       "_id":_id
   });

   console.log(delete_current_list.result);
   res.send(delete_current_list.result);
  });
  
  module.exports = router;