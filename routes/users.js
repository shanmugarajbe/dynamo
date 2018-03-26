var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {

   res.set({
    'Content-Type': 'application/json',
    'x-timestamp':  Date.now()
   });

  next();
});

/* GET users listing. */
router.get('/',function(req, res, next) {
  res.json({ 'users': { 'name':'Sunface','Location': 'Banglaore' } });
})
.post('/',function(req, res, next) {
  next(new Error('not implemented'));
})

module.exports = router;
