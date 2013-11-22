var express = require('express')
  , path = require('path')

module.exports = function(app) {
  app.use(express.favicon())
  app.use(express.bodyParser())
  app.use(express.cookieParser())
  app.use(express.session({secret: 'node rocks'}))
  app.use(express.methodOverride())

  if ('development' == app.get('env')) {
     app.use(require('connect-livereload')({
      port: 35729
    }))
  }

  app.use(app.router)
  app.use(express.static(path.join(app.get('__dirname'), 'public')))

  if ('development' == app.get('env')) {
    app.use(express.errorHandler())
  }
}
