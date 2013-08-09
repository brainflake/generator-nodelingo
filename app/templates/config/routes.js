var controllers = require('../app/controllers')

module.exports = function(app) {
  app.get('/', controllers.RootController.index)
}
