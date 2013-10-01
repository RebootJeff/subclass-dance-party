var RotateDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('rotateDancer');
  this._angle = 0;

};

RotateDancer.prototype = Object.create(Dancer.prototype);
RotateDancer.prototype.constructor = RotateDancer;

RotateDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var spin = Math.random() * 2000;

  this.$node.css({'-webkit-animation-duration': spin + 'ms'});
};

// RotateDancer.prototype.rotate = function(){
//   // this._angle++;
//   this.$node.css({'-webkit-animation':'spin',
//                   '-webkit-animation-duration': 500});
// };