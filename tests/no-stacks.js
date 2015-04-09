var Grid = require('../src/grid.js'),
    _ = require('lodash');


describe('Grid', function() {
  describe('with no stacks', function() {
    it('should place one item fullscreen', function() {
      var grid = new Grid([{id: 1, stack: 1}]);

      expect(grid).to.have.positions({
        1: [0, 0, 100, 100]
      });
    });

    it('should place three items 2 on each row', function() {
      var grid = new Grid([
        {id: 1, stack: 1},
        {id: 2, stack: 2},
        {id: 3, stack: 3}
      ]);

      expect(grid).to.have.positions({
        1: [0, 0, 50, 50],
        2: [50, 0, 50, 50],
        3: [0, 50, 50, 50]
      });
    });

    it('should place four items 2 on each row', function() {
      var grid = new Grid([
        {id: 1, stack: 1},
        {id: 2, stack: 2},
        {id: 3, stack: 3},
        {id: 4, stack: 4}
      ]);

      expect(grid).to.have.positions({
        1: [0, 0, 50, 50],
        2: [50, 0, 50, 50],
        3: [0, 50, 50, 50],
        4: [50, 50, 50, 50]
      });
    });

    it('should place seven items 3 on each row', function() {
      var grid = new Grid(_.times(7, function(i) {
        return {id: i + 1, stack: i + 1};
      }));

      expect(grid).to.have.positions({
        1: [0, 0, 33.33, 33.33],
        2: [33.33, 0, 33.33, 33.33],
        3: [66.66, 0, 33.33, 33.33],
        4: [0, 33.33, 33.33, 33.33],
        5: [33.33, 33.33, 33.33, 33.33],
        6: [66.66, 33.33, 33.33, 33.33],
        7: [0, 66.66, 33.33, 33.33]
      });
    });

    it('should place nine items 3 on each row', function() {
      var grid = new Grid(_.times(9, function(i) {
        return {id: i + 1, stack: i + 1};
      }));

      expect(grid).to.have.positions({
        1: [0, 0, 33.33, 33.33],
        2: [33.33, 0, 33.33, 33.33],
        3: [66.66, 0, 33.33, 33.33],
        4: [0, 33.33, 33.33, 33.33],
        5: [33.33, 33.33, 33.33, 33.33],
        6: [66.66, 33.33, 33.33, 33.33],
        7: [0, 66.66, 33.33, 33.33],
        8: [33.33, 66.66, 33.33, 33.33],
        9: [66.66, 66.66, 33.33, 33.33]
      });
    });

    it('should place thirteen items 4 on each row', function() {
      var grid = new Grid(_.times(13, function(i) {
        return {id: i + 1, stack: i + 1};
      }));

      expect(grid).to.have.positions({
        1: [0, 0, 25, 25],
        2: [25, 0, 25, 25],
        3: [50, 0, 25, 25],
        4: [75, 0, 25, 25],
        5: [0, 25, 25, 25],
        6: [25, 25, 25, 25],
        7: [50, 25, 25, 25],
        8: [75, 25, 25, 25],
        9: [0, 50, 25, 25],
        10: [25, 50, 25, 25],
        11: [50, 50, 25, 25],
        12: [75, 50, 25, 25],
        13: [0, 75, 25, 25]
      });
    });
  });
});
