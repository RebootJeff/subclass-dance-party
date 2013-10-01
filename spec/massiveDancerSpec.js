describe("massiveDancer", function() {

  var massiveDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new MassiveDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(massiveDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node rotate", function() {
    sinon.spy(massiveDancer.$node, 'animate');
    massiveDancer.step();
    expect(massiveDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(massiveDancer, "step");
      expect(massiveDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(massiveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(massiveDancer.step.callCount).to.be.equal(2);
    });
  });
});
