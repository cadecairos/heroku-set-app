/* eslint-env node, mocha */

const {expect, test} = require('@oclif/test')
const Conf = require('conf')
const config = new Conf()

describe('setapp', () => {
  test
  .stdout()
  .command(['set-app', 'my-cool-app'])
  .it('Sets the config setting', ctx => {
    expect(ctx.stdout).to.contain('HEROKU_APP will be set to my-cool-app until unset')
    expect(config.get('appName')).to.equal('my-cool-app')
  })

  test
  .stdout()
  .command(['set-app', '-d'])
  .it('Deletes appName', ctx => {
    expect(ctx.stdout).to.contain('Deleted my-cool-app from the set-app config')
  })

  test
  .stdout()
  .command(['set-app', '-d'])
  .it('Can\'t delete when not set', ctx => {
    expect(ctx.stdout).to.contain('appName not set')
  })

  test
  .stderr()
  .command(['set-app'])
  .catch(error => {
    expect(error.message).to.contain('appName is a required argument')
  })
  .it('Requires appName argument')
})
