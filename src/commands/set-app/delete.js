const {Command} = require('@oclif/command')
const Conf = require('conf')
const config = new Conf()

class DelCommand extends Command {
  async run() {
    if (!config.has('appName')) {
      return this.log('appName not set')
    }

    const deletedName = config.get('appName')
    config.delete('appName')
    this.log(`Deleted ${deletedName} from the set-app config`)
  }
}

DelCommand.description = 'set-app:delete removes a saved Heroku app name from the config file'

module.exports = DelCommand
