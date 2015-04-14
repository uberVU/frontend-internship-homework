var chai = require('chai'),
    _ = require('lodash');


chai.use(function(_chai) {
  var Assertion = _chai.Assertion;

  var positionTemplate = _.template(
          '${ position[0] }, ${ position[1] }, ' +
          '${ position[1] }, ${ position[2] }'),
      errTemplate = _.template(
          'expected item ${ id } to be at position ${ expected }, ' +
          'but was at position ${ actual }');

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


    _.forEach(obj, function(actual, ID) {
      new Assertion(expected).to.contain.keys(ID);
      new Assertion(actual).to.be.an('array').and.have.length(4);

      var expectedItem = expected[ID],
          msg = errTemplate({
            id: ID,
            expected: positionTemplate({position: expectedItem}),
            actual: positionTemplate({position: actual})
          });

      new Assertion(actual[0]).to.be.closeTo(expectedItem[0], DELTA, msg);
      new Assertion(actual[1]).to.be.closeTo(expectedItem[1], DELTA, msg);
      new Assertion(actual[2]).to.be.closeTo(expectedItem[2], DELTA, msg);
      new Assertion(actual[3]).to.be.closeTo(expectedItem[3], DELTA, msg);
    });
  });
});



global.expect = chai.expect;
