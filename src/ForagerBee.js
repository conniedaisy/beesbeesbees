var ForagerBee = function() {
  Bee.call(this, arguments);
  this.age = 10;
  this.job = 'find pollen';

  //color property is inherited from Bee
  //food property is inherited from Grub
  //eat method is inherited from Grub

  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
