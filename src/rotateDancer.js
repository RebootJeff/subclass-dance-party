var RotateDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('rotateDancer');
};

RotateDancer.prototype = Object.create(Dancer.prototype);
RotateDancer.prototype.constructor = RotateDancer;

RotateDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.animate({step: function(now, fx) {
    $(this).css('-webkit-transform', 'rotate('+now+'deg)');
  }});
};