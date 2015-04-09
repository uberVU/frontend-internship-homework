var Grid = require('../src/grid.js');


describe('Grid', function() {
  describe('with one stack', function() {
    it('should place all items on same row', function() {
      var grid = new Grid([
        {id: 1, stack: 1},
        {id: 2, stack: 1},
        {id: 3, stack: 1},
        {id: 4, stack: 1}
      ]);

      expect(grid).to.have.positions({
        1: [0, 0, 25, 100],
        2: [25, 0, 25, 100],
        3: [50, 0, 25, 100],
        4: [75, 0, 25, 100],
      });
    });
  });

  it('should place two items on the same row', function() {
    var grid = new Grid([
      {id: 1, stack: 1},
      {id: 2, stack: 2}
    ]);

    expect(grid).to.have.positions({
      1: [0, 0, 50, 100],
      2: [50, 0, 50, 100]
    });
  });

  it('should stretch the items horizontally', function() {
    var grid = new Grid([
      {id: 1, stack: 1},
      {id: 2, stack: 1},
      {id: 3, stack: 2},
      {id: 4, stack: 2},
      {id: 5, stack: 3},
      {id: 6, stack: 3},
    ]);

    expect(grid).to.have.positions({
      1: [0, 0, 50, 33.33],
      2: [50, 0, 50, 33.33],
      3: [0, 33.33, 50, 33.33],
      4: [50, 33.33, 50, 33.33],
      5: [0, 66.66, 50, 33.33],
      6: [50, 66.66, 50, 33.33]
    });
  });

  it('should stretch rows', function() {
    var grid = new Grid([
      {id: 1, stack: 1},
      {id: 2, stack: 2},
      {id: 3, stack: 3},
      {id: 4, stack: 4},
      {id: 5, stack: 5},
      {id: 6, stack: 6}
    ]);

    expect(grid).to.have.positions({
      1: [0, 0, 33.33, 50],
      2: [33.33, 0, 33.33, 50],
      3: [66.66, 0, 33.33, 50],
      4: [0, 50, 33.33, 50],
      5: [33.33, 50, 33.33, 50],
      6: [66.66, 50, 33.33, 50]
    });
  });
});
