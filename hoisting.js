var x = 'global';

var y = function () {
    x = 'hoisted';
    console.log(x);
}

y();//hoisted
console.log(x);//hoisted
