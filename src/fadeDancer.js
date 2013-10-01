var FadeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('fadeDancer');
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
  var colors = ['red', 'blue', 'green', 'white', 'orange', 'purple', 'pink'];

  this.$node.css({'border-color': colors[Math.floor(Math.random() * colors.length-1)]});
};