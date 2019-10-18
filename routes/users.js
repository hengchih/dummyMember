var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.cookie('key', 'test').json([
        {
            name: '王一號',
            phone: '0963426021'
        },
        {
            name: '王二號',
            phone: '0963426022'
        },
        {
            name: '王三號',
            phone: '0963426023'
        }
    ]);
});

module.exports = router;
