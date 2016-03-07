var Bee = function() {
  Grub.call(this, arguments);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  
  //food property is inheritied from Grub
  //eat method is inherited from Grub
  
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

