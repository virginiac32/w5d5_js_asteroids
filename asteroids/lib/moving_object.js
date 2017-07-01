function MovingObject (options) {
  this.pos = options[pos];
  this.vel = options[vel];
  this.radius = options[radius];
  this.color = options[color];
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(pos[0],pos[1],radius,0,2*Math.PI);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
}

MovingObject.prototype.move = function () {
  this.pos += this.vel;
}
