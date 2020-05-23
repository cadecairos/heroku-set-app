/* eslint-env node, mocha */

const {expect, test} = require('@oclif/test')
const Conf = require('conf')
const config = new Conf()

describe('set-app:delete', () => {
  describe('Succeeds', () => {
    before(() => config.set('appName', 'delete-test'))

    test
    .stdout()
    .command(['set-app:delete'])
    .it('Deletes appName', ctx => {
      expect(ctx.stdout).to.contain('Deleted delete-test from the set-app config')
    })
  })

  describe('Fails', () => {
    before(() => config.delete('appName'))

    test
    .stdout()
    .command(['set-app:delete'])
    .it('Can\'t delete when not set', ctx => {
      expect(ctx.stdout).to.contain('appName not set')
    })
  })
})
