const quantor = require('./index');

describe('Quantor', () => {

  it('should throw an error if no endpoints are provided', done => {
    try {
      quantor({})(_ => {})
    } catch(e) {
      expect(e.message).toBe('Missing endpoints')
    } finally {
      done()
    }
  })

});