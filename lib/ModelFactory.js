var extend  = require('extend-class');
var Model   = require('./Model');

/**
 * A model factory
 * @constructor
 */
function ModelFactory() {

  /** @private */
	this.modelClass = extend(Model);

}

ModelFactory.prototype = {

	/**
	 * Define a property on the model
	 * @param   {string} name       The property name
	 * @param   {Object} [options]  The property options
	 * @returns {ModelFactory}
	 */
	property: function(name, options) {

		Object.defineProperty(this.modelClass.prototype, name, {

			enumerable: true,

			get: function() {
				return this.data.get(name);
			},

			set: function(value) {
				this.data.set(name, value);
			}

		});

		return this;
	},

  class: function() {
    return this.modelClass;
  }

};

module.exports = ModelFactory;