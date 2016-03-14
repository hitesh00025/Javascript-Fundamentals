var father = {
    age : 50,
    celebrateBirthday : function(fPrefix, fPostfix) {
        return fPrefix + ++this.age + fPostfix;
    }
};

var son = {age : 22};

console.log(father.celebrateBirthday('Dad is now: ', 'yr old'));//Dad is now: 51yr old
//using call
console.log(father.celebrateBirthday.call(son, 'Son is now: ', 'yr old'));//Son is now: 23yr old
//using apply
console.log(father.celebrateBirthday.apply(son, ['Son is now: ', 'yr old']));//Son is now: 24yr old
