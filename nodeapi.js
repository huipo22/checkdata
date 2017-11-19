var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, { auto_reconnect: true });
var db = new mongodb.Db('huipo', server, { safe: true });
var img = [];
var resu = [];
router.get('/', function (req, res) {

    db.open(function (err, db) {
        if (!err) {
            db.collection('test', function (err, collection) {
                if (!err) {
                    collection.find().toArray(function (err, result) {
                        res.setHeader('Access-Control-Allow-Origin', '*')
                        res.end(JSON.stringify(result));
                        db.close();
                    })
                }
            })
        }
    })
});

module.exports = router;
