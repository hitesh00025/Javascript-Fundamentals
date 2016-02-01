function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price, category) {
  Product.call(this, name, price);
  this.category = category;
}

function Toy(name, price,category) {
  Product.call(this, name, price);
  this.category = category;
}

var cheese = new Food('feta', 5,'nasty');
console.log(cheese.name+''+cheese.price+''+cheese.category);
var fun = new Toy('robot', 40, 'tasty');
console.log(fun.name+''+fun.price+''+fun.category);
