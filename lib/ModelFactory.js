var extendClass = require('extend-class');
var Model = require('./Model');

/**
 * A model factory
 * @constructor
 */
function ModelFactory() {

  /** @private */
  this.modelClass = extendClass(Model);

  /**
   * The defaults
   * @type {Object}
   */
  this.modelClass.prototype.defaults = {};

}

ModelFactory.prototype = {

  /**
   * Define a property on the model
   * @param   {string} name       The property name
   * @param   {Object} [options]  The property options
   * @returns {ModelFactory}
   */
  property: function(name, options) {
    options = options || {};

    Object.defineProperty(this.modelClass.prototype, name, {

      enumerable: true,

      get: function() {
        return this.data.get(name);
      },

      set: function(value) {
        this.data.set(name, value);
      }

    });

    if (options.default) {
      this.modelClass.prototype.defaults[name] = options.default;
    }

    return this;
  },

  /**
   * Use a plugin function
   * @param   {function(Model)}  fn
   * @returns {ModelFactory}
   */
  use: function(fn) {
    fn.call(this, this.modelClass);
    return this;
  },

  /**
   * Create the model class
   * @returns {Model}
   */
  create: function() {
    return this.modelClass;
  }

};

module.exports = ModelFactory;