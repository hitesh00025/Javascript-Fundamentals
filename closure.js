function sayAlice(name) {
    return function() {console.log(name);}
}
sayAlice('Hello Alice')();//Hello Alice 
