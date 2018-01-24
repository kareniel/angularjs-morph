var path = require('path')
var browserify = require('browserify')
var run = require('tape-run')

browserify(path.join(__dirname, './test.js'), { debug: true })
  .bundle()
  .pipe(run())
  .pipe(process.stdout)
