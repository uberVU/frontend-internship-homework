var _ = require('lodash');

/**
 * @typedef {Object} Item
 * @property {Number} id Unique identifier.
 * @property {Number} stack The stack this item is part of.
 */

/**
 * @typedef {Number[4]} Position
 *
 * The position and size are numbers that represent percentages i.e. x: 10 means
 * that the items will be positioned 10% of the container's width to the left.
 *
 * @property {Number} 1 The x position.
 * @property {Number} 2 The y position.
 * @property {Number} 3 The width.
 * @property {Number} 4 The height.
 */


/**
 * Create a new grid that efficiently places the given items.
 * @class
 *
 * @param {Item[]} items
 */
function Grid(items) {
  /* TODO: implement me */
  this._items = items;
}


/**
 * Get the positions of the items.
 *
 * Items will be stacked and sorted by ID inside the stacks. The stacks are
 * sorted by stack ID.
 *
 * The stacks will be positioned inside a minimum square (the length of its side
 * is minimized). Items inside a stack will be positioned from left to right. A
 * stack can't span more than one row.
 *
 * If the largest stack has only one item, the stacks will be positioned from
 * left to right and from top to bottom. If the largest stack has more than one
 * item, then they will be positioned top-bottom and left-right.
 *
 * @returns {Object.<ID, Position>}
 */
Grid.prototype.getPositions = function() {
  /* TODO: implement me */
};


module.exports = Grid;
