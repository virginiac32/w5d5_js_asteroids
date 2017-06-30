// sumThree(4, 20, 6); // == 30
//
// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach( (num) => {
         sum += num;
       });
      return sum;
    }
    else {
      return _curriedSum;
    }
  }
}

// console.log(curriedSum(3)(4)(6)(20));

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let method = this;

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return method.apply(method, numbers);
    }
    else{
      return _curriedSum;
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry2 = function (numArgs) {
  let numbers = [];
  let method = this;

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return method(...numbers);
    }
    else{
      return _curriedSum;
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry2(3)(4)(20)(6)); // == 30 
