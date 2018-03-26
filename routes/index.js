var express = require('express');
var router = express.Router();
var path = require('path');

/* Setting Global Header */
/*router.all('*', function(req, res, next) {
  // res.set({
  //   'Content-Type': 'application/json'
  // });
  next();
});*/
/* GET home page. */

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
  //next();
});


module.exports = router;
