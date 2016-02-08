//Create a class Mammal , 2 prototype
//create a class Cat. Create two prototype

var Mammal = function(name, saying) {
  this.name = name;
  this.saying = saying;
}

Mammal.prototype.getName = function() {
  return this.name;
}

Mammal.prototype.says = function() {

  return this.saying || '';
}

var mymammal = new Mammal('Herb the mammal');
//console.log(mymammal.getName());

var Cat = function(name, saying) {
    Mammal.call(this, name, saying);
  }
Cat.prototype = new Mammal();
Cat.prototype.purr = function() {
  return "purrrr"
}

Cat.prototype.getName = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
}

var mycat = new Cat('Henrita', 'Meow');
console.log(mycat.says());
console.log(mycat.purr());
console.log(mycat.getName());

var Dog = function(name, saying, year) {
  this.year = year;
  Cat.call(this, name, saying);
}

Dog.prototype = new Cat();

Dog.prototype.sayYear = function() {

  return this.name + ' ' + this.year;
};

Dog.prototype.purr = function() {

  return "wooooo"
}
var myDog = new Dog('scooby', 'bark', '2015');
//Dog inherits from Cat. Cat inherit from Mammal
console.log(myDog.says());
console.log(myDog.purr());
console.log(myDog.getName());
console.log(myDog.sayYear());
