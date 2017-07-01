function Asteroid (pos) {
  this.COLOR = 'green';
  this.RADIUS = 1000;

}

randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
