module.exports = headerchecker;

function headerchecker(options) {

  return function _headerchecker(req, res, next) {
    console.log(req.headers);
    next();
  }
}
