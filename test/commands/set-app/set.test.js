/* eslint-env node, mocha */

const {expect, test} = require('@oclif/test')
const Conf = require('conf')
const config = new Conf()

describe('setapp:set', () => {
  test
  .stdout()
  .command(['set-app:set', 'my-cool-app'])
  .it('Sets the config setting', ctx => {
    expect(ctx.stdout).to.contain('HEROKU_APP will be set to my-cool-app until unset')
    expect(config.get('appName')).to.equal('my-cool-app')
  })

  test
  .stderr()
  .command(['set-app:set'])
  .catch(error => {
    expect(error.message).to.contain('Missing 1 required arg:\nappName')
  })
  .it('Requires appName argument')
})
