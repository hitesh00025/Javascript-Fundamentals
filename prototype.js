function Person (name, age) {
 	this.name = name ;
	this.age=age;
}
//Create a prototype
Person.prototype.sayHi = function (){
	console.log("Hi my name is "+this.name+" and I am "+this.age);
}
//now lets create another function athlete
function Athlete(name,age,sport) {
	this.sport = sport;
  //Add person properties to athlete
  Person.call(this, name, age);
}

//This is differential inheritance
Athlete.prototype = Object.create(Person.prototype);

Athlete.prototype.whatSport = function() {
	console.log(this.name+" plays "+this.sport);
}
var steve = new Person("steve", 35);
steve.sayHi();//Hi my name is steve and I am 35
var lisa = new Athlete("lisa", 29, "basketball");

lisa.sayHi(); // Hi my name is lisa and I am 29
lisa.whatSport(); // Lisa plays basketball
