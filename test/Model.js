var assert = require('assert');
var factory = require('..');

describe('Model', function() {

  describe('.property()', function() {

    it('should have a default value', function() {

      var Model = factory()
        .property('message', {default: 'Hello World!'})
        .create()
      ;

      var model = new Model();

      assert.equal(model.message, 'Hello World!');

    });

    it('should override the default value when a value is set via the constructor', function() {

      var Model = factory()
        .property('message', {default: 'Hello World!'})
        .create()
      ;

      var model = new Model({message: 'Hello Universe!'});

      assert.equal(model.message, 'Hello Universe!');

    });

    it('should override the default value when a value is set', function() {

      var Model = factory()
        .property('message', {default: 'Hello World!'})
        .create()
      ;

      var model = new Model();
      model.message = 'Hello Universe!';

      assert.equal(model.message, 'Hello Universe!');

    });

  });

});