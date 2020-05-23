const {Command} = require('@oclif/command')
const Conf = require('conf')
const config = new Conf()

class SetCommand extends Command {
  async run() {
    const {args} = this.parse(SetCommand)

    config.set('appName', args.appName)
    this.log(`HEROKU_APP will be set to ${args.appName} until unset`)
  }
}

SetCommand.description = 'set-app will inject a given value as HEROKU_APP in every command run'

SetCommand.args = [
  {
    name: 'appName',
    required: true,
    description: 'app name that should be set to HEROKU_APP',
  },
]

module.exports = SetCommand
