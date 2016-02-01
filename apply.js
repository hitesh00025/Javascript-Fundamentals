var father = {
    age : 50,
    celebrateBirthday : function(fPrefix, fPostfix) {
        return fPrefix + ++this.age + fPostfix;
    }
};

var son = {
    age : 22
};

console.log(father.celebrateBirthday('Dad is now: ', 'yr old'));

console.log(father.celebrateBirthday.apply(son, ['Son is now: ', 'yr old']));
