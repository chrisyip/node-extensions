module.exports = function (suites, options) {
  var opts = options || { async: false }

  suites.forEach(function (suite) {
    suite
      .on('cycle', function(event) {
        var result = String(event.target)

        if (!event.target.error) {
          result = '✓  ' + result
        } else {
          result = '✗  ' + result
        }

        console.log(result)
      })
      .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'), '\n')
      })
      .run(opts)
  })
}
