function sum() {
  let args = Array.from(arguments);
  let result = 0;
  args.forEach((number) => {
    result += number;
  });
  return result;
}

// console.log(sum(1,2,3,4,5,6));

function sum2(...args) {
  let result = 0;
  args.forEach ((number) => {
    result += number;
  });
  return result;
}

// console.log(sum2(1,2,3,4,5,6));

Function.prototype.myBind = function (context) {
  let bindArgs = Array.from(arguments);
  // console.log(bindArgs);
  let say = this;
  return function () {
    console.log(bindArgs);
    let callArgs = Array.from(arguments);
    console.log(say);
    // this = say;
    return say.apply(bindArgs.shift(),bindArgs.concat(callArgs));
  }
}

Function.prototype.myBind2 = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context,bindArgs.concat(callArgs));
  }
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

markov.says.myBind(breakfast, "meow")("Markov");
