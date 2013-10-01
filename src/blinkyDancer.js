var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this = Object.create(BlinkyDancer.prototype);
  var _dancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  _dancer._oldStep = _dancer.step;
  var self = this;
  _dancer.step = function(){
    _dancer._oldStep();
    self.step();
  };
  this.$node = _dancer.$node;
};

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.toggle();
};

// BlinkyDancer.prototype = makeDancer();
// BlinkyDancer.prototype.constructor = BlinkyDancer;