var express = require('express');
var router = express.Router();
var db = require('../db/db.js');

// const ObjectID = require('mongodb').ObjectID;
/* GET home page. */
router.post('/', async (req, res, next) => {
    let { _id, title, pricing, sellingPrice,
        repertory, img, uploadtime, salenum, classify } = req.body;

    let red = await db.find('goodslist', {
        "_id": _id
    });
    //更新
    if (red.length > 0) {
        await db.update('goodslist', { "_id": _id}, {
            $set: {
                'title': title, 'pricing': pricing, 'sellingPrice': sellingPrice,
                'repertory': repertory, 'img': img, 'uploadtime': uploadtime, 'salenum': salenum, 'classify': classify
            }
        });

        res.send ({ msg: '更新成功' });
    } else if (red.length = 0) {
        await db.insert('goodslist', {
            title, pricing, sellingPrice,
            repertory, img, uploadtime, salenum, classify
        });

        res.send({ msg: '插入成功' });
    }
});

module.exports = router;
