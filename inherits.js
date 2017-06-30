Function.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}

function MovingObject () {}

MovingObject.prototype.move = function () {
  console.log("We're moving!");
}
function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.float = function () {
  console.log("I'm floating!");
}

function Asteroid () {}
Asteroid.inherits(MovingObject);


let joey = new Ship();

console.log(joey.move());

let virginia = new MovingObject();
// console.log(virginia.float());

console.log(joey.__proto__);
console.log(virginia.__proto__);
console.log(joey instanceof Ship);
