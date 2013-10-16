

/**
 * Return the last element(s) of an Array.
 * Passing nb will return the nb last elements.
 * 
 * @param {Array} arr 
 * @param {Number} nb optional
 * @return {Array} array of last elements
 * @api public
 */

module.exports = function(arr, nb) {
	var length = arr.length;
	return arr.slice(nb ? length - nb : length - 1, length);
};