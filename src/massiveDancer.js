var MassiveDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('massiveDancer');
  this._timeBetweenSteps = 50;
  this.speedTop = 3;
  this.speedLeft = 3;
};

MassiveDancer.prototype = Object.create(Dancer.prototype);
MassiveDancer.prototype.constructor = RotateDancer;

MassiveDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var bodyHeight = $('body').height();
  var bodyWidth = $('body').width();

  var top = this.$node.css('top');
  top = top.substr(0,top.length-2);
  top = parseInt(top);
  if(top + 150 >= bodyHeight){
    this.speedTop = -3;
  } else if(top <= 0){
    this.speedTop = 3;
  }
  top += this.speedTop;

  var left = this.$node.css('left');
  left = left.substr(0,left.length-2);
  left = parseInt(left);
  if(left + 150 >= bodyWidth){
    this.speedLeft = -3;
  } else if(left <= 0){
    this.speedLeft = 3;
  }
  left += this.speedLeft;

  this.$node.css({'top': top,
                  'left': left});
};