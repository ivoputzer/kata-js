const {deepEqual, doesNotThrow} = require('assert')

describe('your kata', function(){
  it('has an entry point', () => {
    let boundFn = require.main.require.bind(require.main, process.env.npm_package_main)
    doesNotThrow(boundFn)
  })
  it('returns an empty object', () => {
    let kata = require.main.require(process.env.npm_package_main)
    deepEqual(kata, {})
  })
})
