var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

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
