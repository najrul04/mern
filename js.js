/* const dessert = {type: 'pie'};
dessert.type = 'pudding'

const seconds = dessert;
seconds.type = 'fruit'

console.log(seconds) */

// 'use strict'

function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();

var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);

sum(10, 20);
function sum(x, y) {
  return x + y;
}

 function diff(x, y) {
  return x - y;
};
diff(10, 20);

var v = 1;
var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v1 = 2;
  f1();
  console.log(v1);
};

f2();