var express = require('express');
var router = express.Router();
var db = require('../db/db');


/* GET users listing. */
router.post('/register', async (req, res, next) => {
    let {username,password,sex,date,phone,close,desc,email} = req.body;


    let data = {username,password,sex,date,phone,close,desc,email,regtime:Date.now()};
    let red = await db.insert('users',data);

    
    res.send( red.result);

});
// 判断用户名是否存在
router.get('/cunzai', async (req, res, next) => {
    let { phone} = req.query;
    console.log(phone);

    let red = await db.find('users', {'phone':phone})

    console.log(red);
    if (red.length > 0) {
        res.send('no');
        // res.body="no";
    } else {
        res.send('yes');
        // res.body="yes";
    }

});
module.exports = router;
