var animalsApp = (function(){

    var new_animal = function(name) {
        var animal = {};

        animal.sayHello = function() {
            return "Hello, my name is " + name;
        }
        return animal;
    }

    var new_dog = function(name) {
        var dog = new_animal(name);

        dog.bark = function() {
            return "woof";
        }
        return dog;
    }

    var new_cat = function(name) {
        var cat = new_animal(name);

        cat.meow = function() {
            return "eeooowww";
        }
        return cat;
    }

    return {
        main: function(){
            var dog = new_dog("rover");

            console.log(dog.sayHello());
            console.log(dog.bark());

            var cat = new_cat("tom");

            console.log(cat.sayHello());
            console.log(cat.meow());
        }
    };
}());

animalsApp.main();
