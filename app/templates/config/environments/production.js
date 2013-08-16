/*
 * Nested Keys will get concated with an underscore, so the examples below will be accessible by:
 *
 * app.get('mongodb_uri') and app.get('redis')
 */
module.exports = {
  mongodb: {
    uri: 'PRODUCTION_MONGO_URI'
  },
  redis: 'PRODUCTION_REDIS_URI'
}
