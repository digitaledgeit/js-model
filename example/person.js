var factory = require('..');

var Person = factory()
  .property('firstName')
  .property('lastName')
  .use(function (Model) {
    Model.prototype.save = function () {
      console.log('saving...');
      return this;
    };
  })
  .create()
;

var person = new Person({
  firstName: 'Bill',
  lastName: 'Gates'
});

person.on('change', function () {
  console.log('Person changed')
});

console.log(person.toString());

person.firstName = 'Steve';
person.lastName = 'Jobs';

person.save();

console.log(person.toString());
