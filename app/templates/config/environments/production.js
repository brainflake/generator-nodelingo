/*
 * Nested Keys will get concated with an underscore, so the examples below will be accessible by:
 *
 * app.get('amazon_key') and app.get('amazon_secret')
 */
module.exports = {
  mongo: 'PRODUCTION_MONGO_URI',
  redis: 'PRODUCTION_REDIS_URI'
}
