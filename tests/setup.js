var chai = require('chai'),
    _ = require('lodash');


chai.use(function(_chai) {
  function _formatPosition(position) {
    return position[0] + ', ' + position[1] + ', ' +
        position[2] + ', ' + position[3];
  }

  var Assertion = _chai.Assertion;

  Assertion.addMethod('positions', function(expected) {
    /**
     * Assert that the given positions for the given IDs are within a certain
     * delta.
     *
     * @param {Object} expected The Grid instance.
     * @param {Function} expected.getPositions
     *
     * @example
     * expect({1: [0, 0, 33.333, 33.333]})
     *     .to.have.positions({1: [0, 0, 33.3, 33.3]});
     * expect({1: [0, 0, 10, 10]}).to.not.have.positions({1: [10, 0, 10, 10]});
     * expect({1: [0, 0, 10, 10]}).to.not.have.positions({5: [0, 0, 10, 10]});
     * expect({1: [0, 0, 10, 10]}).to.not.have.positions({1: [0, 0, 11, 10]});
     */

    var DELTA = 0.01;

    var obj = this._obj.getPositions();

    new Assertion(obj).to.be.an('object');
    new Assertion(expected).to.be.an('object');
    new Assertion(_.keys(obj)).to.have.length(_.keys(expected).length);


    _.forEach(obj, function(position, ID) {
      new Assertion(expected).to.contain.keys(ID);
      new Assertion(position).to.be.an('array').and.have.length(4);
      /*new Assertion(position).to.contain.all.keys(['x', 'y', 'w', 'h']);*/

      var expectedItem = expected[ID],
          msg = 'expected item to be at position ' +
                _formatPosition(expectedItem) + ' ' +
                'but was at position ' + _formatPosition(position);

      new Assertion(position[0]).to.be.closeTo(expectedItem[0], DELTA, msg);
      new Assertion(position[1]).to.be.closeTo(expectedItem[1], DELTA, msg);
      new Assertion(position[2]).to.be.closeTo(expectedItem[2], DELTA, msg);
      new Assertion(position[3]).to.be.closeTo(expectedItem[3], DELTA, msg);
    });
  });
});



global.expect = chai.expect;
