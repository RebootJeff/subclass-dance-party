describe("fadeDancer", function() {

  var fadeDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeDancer = new FadeDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fadeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fade", function() {
    sinon.spy(fadeDancer.$node, 'fadeToggle');
    fadeDancer.step();
    expect(fadeDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(fadeDancer, "step");
      expect(fadeDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadeDancer.step.callCount).to.be.equal(2);
    });
  });
});
