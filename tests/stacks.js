var Grid = require('../src/grid.js');


describe('Grid', function() {
  describe('with 2 stacks x 2 elements', function() {
    it('should place each stack on a row', function() {
      var grid = new Grid([
        {id: 1, stack: 1},
        {id: 2, stack: 1},
        {id: 3, stack: 2},
        {id: 4, stack: 2}
      ]);

      expect(grid).to.have.positions({
        1: [0, 0, 50, 50],
        2: [50, 0, 50, 50],
        3: [0, 50, 50, 50],
        4: [50, 50, 50, 50]
      });
    });
  });

  describe('with three stacks', function() {
    it('should place small stacks next to each other', function() {
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

    it('should place large stacks on separate rows', function() {
      var grid = new Grid([
        {id: 1, stack: 1},
        {id: 2, stack: 1},
        {id: 3, stack: 1},
        {id: 4, stack: 2},
        {id: 5, stack: 2},
        {id: 6, stack: 2},
        {id: 7, stack: 3},
        {id: 8, stack: 3},
        {id: 9, stack: 3}
      ]);

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
  });
});
