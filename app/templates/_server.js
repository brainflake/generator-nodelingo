global._ = require('underscore')

var express = require('express')
  , socketio = require('socket.io')
  , http = require('http')
  , path = require('path')

/*
 * Create Express app, HTTP server and Socket IO server
 */
var app = express()
  , server = http.createServer(app)
  , io = socketio.listen(server)

require('./config')(app)

app.use(express.favicon())
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

if ('development' == app.get('env')) {
  app.use(express.errorHandler())
}

require('./config/routes')(app)

<% if (mongoose) { %>require('./app/models')(app)<% } %>

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'))
})
