var RetiredForagerBee = function() {
  ForagerBee.call(this, arguments);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

  //food property is inherited from Grub
  //eat method is inherited from Grub
  //treasureChest property inherited from ForagerBee 

};

RetiredForagerBee.prototype = Object.create(ForagerBee);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};