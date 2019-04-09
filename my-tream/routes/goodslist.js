var express = require('express');
var router = express.Router();
const db = require('../db/db.js');


/* GET home page. */
router.get('/', async (req, res, next) => {
  // 解构
  let { page, limit } = req.query;
  // console.log(page, limit);
  let allcountlength = await db.find('goodslist', {});
  let red = await db.slices('goodslist', (page - 1) * limit, limit * 1, {});
  let sortarr = await db.sortfind('goodslist', { 'salenum': -1 }, {});
  let slicearr = sortarr.slice((page - 1) * limit, (page - 1) * limit + 10);


  res.send({
    "code": 0,
    "msg": "",
    "count": allcountlength.length,
    "data": slicearr
  });
});

module.exports = router;
