var express = require('express')
  , path = require('path')

module.exports = function(app) {
  app.use(express.favicon())
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(express.static(path.join(app.get('__dirname'), 'public')))

  if ('development' == app.get('env')) {
    app.use(express.errorHandler())
  }
}
