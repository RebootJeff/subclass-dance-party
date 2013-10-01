var FadeDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('fadeDancer');
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle(500);
};