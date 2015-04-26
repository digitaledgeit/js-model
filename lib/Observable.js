var emitter = require('component-emitter');

/**
 * An observable data dictionary
 * @constructor
 * @param {Object}  data  The observable data
 */
function Observable(data) {

  /** @private */
  this.data = {};

  if (data) this.set(data);

}
emitter(Observable.prototype);

/**
 * Get a property value or all the property values
 * @param   {string}  [name]    The property name
 * @returns {*}
 */
Observable.prototype.get = function(name) {
	if (arguments.length) {
		return this.data[name];
	} else {
		return this.data;
	}
};


/**
 * Set a property value or all the property values
 * @param   {string}  [name]    The property name
 * @param   {*}       [value]   The property value
 * @returns {Observable}
 */
Observable.prototype.set = function(name, value) {
	if (arguments.length > 1) {

		var changed = this.data[name] !== value;
		this.data[name] = value;
		if (changed) this.emit('change');

	} else {

		//set each property individually
		var props = Object.keys(name);
		for (var i=0; i<props.length; ++i) {
			this.set(props[i], name[props[i]]);
		}

	}
	return this;
};

module.exports = Observable;