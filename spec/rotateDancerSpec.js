describe("rotateDancer", function() {

  var rotateDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new RotateDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node rotate", function() {
    sinon.spy(rotateDancer.$node, 'animate');
    rotateDancer.step();
    expect(rotateDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rotateDancer, "step");
      expect(rotateDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotateDancer.step.callCount).to.be.equal(2);
    });
  });
});
