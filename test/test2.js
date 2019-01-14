var assert = require('assert');
describe('String', function() {
  describe('#split()', function() {
    it('string split test', function() {
      assert.equal('123'.split('').length, 3);
    });
  });
});