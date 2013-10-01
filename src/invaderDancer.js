var InvaderDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('invaderDancer');
  this._isGrowing = true;
  this._height = 50;
  this._width = 63;
};

InvaderDancer.prototype = Object.create(Dancer.prototype);
InvaderDancer.prototype.constructor = InvaderDancer;

InvaderDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // var colors = ['red', 'blue', 'green', 'white', 'orange', 'purple', 'pink'];

  // this.$node.css({'background': colors[Math.floor(Math.random() * colors.length-1)]});
  /*
  this.$node.animate({'width':'0.5em',
                      'height':'0.5em'},
                      'slow');
  */
  // this._height = parseInt(this.$node.css('height').substr(0, this.$node.css('height').length-2)) || 53;
  // this._width = this._width || parseInt(this.$node.css('width').substr(0, this.$node.css('width').length-2));
 
  if(this._isGrowing){
    this.$node.animate({'height': (this._height*2)+'px',
                      'width': (this._width*2)+'px'}, 600);
    this._isGrowing = false;
  } else {
    this.$node.animate({'height': (this._height)+'px',
                      'width': (this._width)+'px'}, 600);
    this._isGrowing = true;
  }
};