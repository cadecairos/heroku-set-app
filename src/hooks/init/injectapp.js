const Conf = require('conf')
const config = new Conf()

module.exports = async function () {
  // No value stored
  if (!config.has('appName')) return

  // Don't overwrite existing configuration
  if (process.env.HEROKU_APP) return

  process.env.HEROKU_APP = config.get('appName')
}
