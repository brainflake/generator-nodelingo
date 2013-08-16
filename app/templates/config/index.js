var env = require('./environment')
  , devEnvironment = require('./environments/development')
  , prodEnvironment = require('./environments/production')

function flattenKeys(obj, keyPrefix) {
  var flattenedObj = {}

  if (!obj || _.keys(obj).length == 0) {
    return {}
  }

  _.each(_.keys(obj), function(key) {
    var flatKey = key
    if (keyPrefix) {
      flatKey = keyPrefix + '_' + key
    }

    if (typeof obj[key] == 'string') {
      flattenedObj[flatKey] = obj[key]
    } else {
      _.extend(flattenedObj, flattenKeys(obj[key], flatKey))
    }
  })

  return flattenedObj
}

module.exports = function(app) {
  app.set('port', process.env.PORT || 3000)

  _.each(flattenKeys(env), function(val, key) {
    app.set(key, val)
  })

  if ('development' == app.get('env')) {
    _.each(flattenKeys(devEnvironment), function(val, key) {
      app.set(key, val)
    })
  }

  if ('production' == app.get('env')) {
    _.each(flattenKeys(prodEnvironment), function(val, key) {
      app.set(key, val)
    })
  }
}
