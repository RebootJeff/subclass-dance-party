var MassiveDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('massiveDancer');
};

MassiveDancer.prototype = Object.create(Dancer.prototype);
MassiveDancer.prototype.constructor = RotateDancer;

MassiveDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var styles = {
    
  };

  this.$node.animate();
};