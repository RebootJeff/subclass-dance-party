var InvaderDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('invaderDancer');
};

InvaderDancer.prototype = Object.create(Dancer.prototype);
InvaderDancer.prototype.constructor = InvaderDancer;

InvaderDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var colors = ['red', 'blue', 'green', 'white', 'orange', 'purple', 'pink'];

  this.$node.css({'background': colors[Math.floor(Math.random() * colors.length-1)]});
  /*
  this.$node.animate({'width':'0.5em',
                      'height':'0.5em'},
                      'slow');
  */
};