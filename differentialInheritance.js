//differential inheritance
var myMammal = {
   name: 'Herb the mammal',
   getName: function(){
     return this.name;
   },
   says: function () {
     return this.saying||'';
   }

};

var myCat = Object.create(myMammal);
myCat.name='Henrita';
myCat.saying='Meow';
myCat.purr = function (){

  return "purr"
};
myCat.getName = function(){

  return this.saying+' '+this.name+' '+this.saying+' '+(this.year||'');
}

console.log(myCat.says());
console.log(myCat.getName());
console.log(myCat.purr());

var myDog= Object.create(myCat);
myDog.name='scooby';
myDog.saying='bark';
myDog.year='2016';
myDog.purr= function(){

return('wooooo');

};

console.log(myDog.says());
console.log(myDog.getName());
console.log(myDog.purr());
