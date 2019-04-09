var express = require('express');
var router = express.Router();
const {verify} = require('../utils/token');

/* GET users listing. */
router.post('/',async(req, res, next)=> {
  let {token} =req.body;

  
  //  验证token
  let red = verify(token);

  if(red){
      res.body = {
          status:200,
          msg:'success'
      }
  }else{
      res.body = {
          status:302,
          msg:'fail'
      }
  }
  
  
});

module.exports = router;
