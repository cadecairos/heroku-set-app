const {Command, flags} = require('@oclif/command')
const Conf = require('conf')
const config = new Conf()

class SetAppCommand extends Command {
  async run() {
    const {flags, args} = this.parse(SetAppCommand)

    if (flags.delete) {
      if (!config.has('appName')) {
        return this.log('appName not set')
      }

      const deletedName = config.get('appName')
      config.delete('appName')
      this.log(`Deleted ${deletedName} from the set-app config`)
    } else {
      if (!args.appName) {
        return this.error('appName is a required argument')
      }

      config.set('appName', args.appName)
      this.log(`HEROKU_APP will be set to ${args.appName} until unset`)
    }
  }
}

SetAppCommand.description = 'set-app will inject a given value as HEROKU_APP in every command run'

SetAppCommand.flags = {
  delete: flags.boolean({char: 'd', description: 'delete the stored HEROKU_APP value'}),
}

SetAppCommand.args = [
  {
    name: 'appName',
    required: false,
    description: 'app name that should be set to HEROKU_APP',
  },
]

module.exports = SetAppCommand
