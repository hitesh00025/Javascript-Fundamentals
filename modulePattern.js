var jspy = (function() {
  var _count = 0;

  var incrementCount = function() {
    _count++;
  }

  var getCount = function() {
    return _count;
  }
  return {
    incrementCount: incrementCount,
    getCount: getCount
  };

})();
jspy.incrementCount();
console.log(jspy.getCount());//1
//the point you cant access a varible directly as it private. 
console.log(alert(jspy._count));//undefined
