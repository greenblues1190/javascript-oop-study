console.group("Built-in Math")
console.log('Math.PI', Math.PI);
console.log('Math.random()', Math.random());
console.log('Math.floor(1.5)', Math.floor(1.5));
console.groupEnd("Built-in Math")

var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.group("My Math")
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.random()', MyMath.random());
console.log('MyMath.floor(1.5)', MyMath.floor(1.5));
console.groupEnd("My Math")