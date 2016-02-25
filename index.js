var hstream  = require('hyperstream')
var str = require('string-to-stream')

module.exports = function (templates, content, response) {
  (function (templates) {
    var start = templates.reverse().shift()
    return templates.reduce(function(prev, next) {
      return str(next).pipe(hstream({'.template': prev}))
    }, str(start))
  })(templates).pipe(hstream(content)).pipe(response)
}

