/*
 * Nested Keys will get concated with an underscore, so the examples below will be accessible by:
 *
 * app.get('amazon_key') and app.get('amazon_secret')
 */
module.exports = {
  amazon: {
    key: 'APP_KEY',
    secret: 'APP_SECRET'
  }
}
