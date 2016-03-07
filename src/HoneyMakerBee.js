var HoneyMakerBee = function() {
  Bee.call(this, arguments);

  this.age = 10;
  this.job = 'make honey';

  //color property is inherited from bee
  //food property is inherited from grub
  //eat method is inherited from grub

  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};