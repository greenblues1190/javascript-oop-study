// constructor
function Person(name, first, second, third) {
  this.name = 'kim';
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function () {
  return this.first + this.second + this.third;
};

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
lee.sum = function () {
  return 'modified: ' + (this.first + this.second + this.third);
};
console.log(kim.sum());
console.log(lee.sum());
