var ModelFactory = require('./lib/ModelFactory');

/**
 * Create a new model factory
 * @returns {ModelFactory}
 */
module.exports = function() {
	return new ModelFactory();
};
