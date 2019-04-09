var express = require('express');
var router = express.Router();
var db = require('../db/db');
var token = require('../utils/token');
const mongoose = require('mongoose');
/* GET users listing. */
router.post('/', async (req, res) => {
    //解构
    let {
        phone,
        password
    } = req.body;
    
    password = isNaN(password) ? password : password * 1;//一定要转为数字
    let data;
    // let _token = token.create(data.username);
    try {
        data = await db.find('users', {
            'phone': phone,
            'password': password,
            'username':res.username
        });
        
    } catch (error) {
        data = error;
    }
    res.send({
        // _id:data._id,
        data,
        token: token.create({
            phone
        }),
        username:res.username,
        // token:_token
    });


});

router.get('/',async (req,res,next)=>{
    let {_id} =req.query;
    console.log(_id);
    var id =  mongoose.Types.ObjectId(_id);
    let red = await db.find('users',{'_id':id});
    console.log(red[0].close);
    if(red[0].close=='是'){
       res.send('yes');
    }else{
        res.send('no');
    }
});


module.exports = router;
