var Grid = require('../src/grid.js');


describe('Grid', function() {
  it('should sort by stack', function() {
    var grid = new Grid([
      {id: 1, stack: 4},
      {id: 2, stack: 1},
      {id: 3, stack: 3},
      {id: 4, stack: 2}
    ]);

    expect(grid).to.have.positions({
      1: [50, 50, 50, 50],
      2: [0, 0, 50, 50],
      3: [0, 50, 50, 50],
      4: [50, 0, 50, 50]
    });
  });

  it('should sort by item ID', function() {
    var grid = new Grid([
      {id: 3, stack: 1},
      {id: 2, stack: 1},
      {id: 4, stack: 2},
      {id: 1, stack: 2}
    ]);

    expect(grid).to.have.positions({
      1: [0, 50, 50, 50],
      2: [0, 0, 50, 50],
      3: [50, 0, 50, 50],
      4: [50, 50, 50, 50]
    });
  });
});
