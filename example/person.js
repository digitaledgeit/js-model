var ModelFactory = require('..');

var Person = ModelFactory()
	.property('firstName')
	.property('lastName')
  .class()
;

var person = new Person({
	firstName:  'Bill',
	lastName:   'Gates'
});

person.on('change', function() {
	console.log('client changed')
});

console.log(person.toString());

person.firstName  = 'Steve';
person.lastName   = 'Jobs';

console.log(person.toString());