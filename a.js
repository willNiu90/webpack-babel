"use strict";

var _babelTest = _interopRequireDefault(require("@will_niu/babel-test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let p = new _babelTest.default('will', 12);
console.log(p);
let arr = [1, 2, 3];
console.log(arr.includes(1));

const bar = async () => {
  console.log(12);
};

bar();

class Person {
  sayname() {
    return 'name';
  }

}

var john = new Person();
console.log(john);
