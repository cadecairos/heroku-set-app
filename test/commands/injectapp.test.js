/* eslint-env node, mocha */

const {expect, test} = require('@oclif/test')
const Conf = require('conf')
const config = new Conf()

describe('hooks', () => {
  before(() => config.set('appName', 'hook-test'))

  after(() => config.delete('appName'))

  test
  .stdout()
  .hook('init', {id: 'injectapp'})
  .do(() => {
    expect(process.env.HEROKU_APP).to.equal('hook-test')
  })
  .it('loads appName to process.env')
})
