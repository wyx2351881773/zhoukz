var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd');
var dbname = "user";
var usename = "toulist";
var dbaid = "aidlist";
var dbguo = "guolist";
var dbtong = "tonglist";
/* GET home page. */
router.post('/api/tou', function(req, res, next) {
    mongo.find(dbname, usename, {}, function(result) {
            if (result.length > 0) {
                res.send({ code: 0, data: result })
            } else {
                res.send({ code: 1, msg: "失败" })
            }
        }, {
            skip: (page - 1) * limit,
            limit: limit
        }

    )
});
router.post('/api/aid', function(req, res, next) {
    mongo.find(dbname, dbaid, {}, function(result) {
            if (result.length > 0) {
                res.send({ code: 0, data: result })
            } else {
                res.send({ code: 1, msg: "失败" })
            }
        }, {
            skip: (page - 1) * limit,
            limit: limit
        }

    )
});
router.post('/api/guo', function(req, res, next) {
    mongo.find(dbname, dbguo, {}, function(result) {
            if (result.length > 0) {
                res.send({ code: 0, data: result })
            } else {
                res.send({ code: 1, msg: "失败" })
            }
        }, {
            skip: (page - 1) * limit,
            limit: limit
        }

    )
});
router.post('/api/tong', function(req, res, next) {
    mongo.find(dbname, dbtong, {}, function(result) {
            if (result.length > 0) {
                res.send({ code: 0, data: result })
            } else {
                res.send({ code: 1, msg: "失败" })
            }
        }, {
            skip: (page - 1) * limit,
            limit: limit
        }

    )
});
module.exports = router;