var Observable = require('./Observable');

/**
 * Create a model
 * @constructor
 * @param   {Object}  data  The model data
 */
function Model(data) {
  this.data = new Observable(data);
}

Model.prototype = {

  /**
   * Bind an event listener
   * @param   {string}    name      The event name
   * @param   {function}  handler   The event handler
   * @returns {Model}
   */
  on: function() {
    this.data.on.apply(this.data, arguments);
    return this;
  },

  /**
   * Bind an event listener once only
   * @param   {string}    name      The event name
   * @param   {function}  handler   The event handler
   * @returns {Model}
   */
  once: function() {
    this.data.once.apply(this.data, arguments);
    return this;
  },

  /**
   * Un-bind an event listener
   * @param   {string}    name      The event name
   * @param   {function}  handler   The event handler
   * @returns {Model}
   */
  off: function() {
    this.data.off.apply(this.data, arguments);
    return this;
  },

  /**
   * Emit an event
   * @param   {string}    name      The event name
   * @returns {Model}
   */
  emit: function() {
    this.data.emit.apply(this.data, arguments);
    return this;
  },

  /**
   * Get a Plain Old JavaScript Object representing the model data
   * @returns {Object}
   */
  toObject: function() {
    return this.data.get();
  },

  /**
   * Get a string representing the model data
   * @returns {Object}
   */
  toString: function() {
    return '[Model: ' + JSON.stringify(this.toObject()) + ']';
  }

};

module.exports = Model;