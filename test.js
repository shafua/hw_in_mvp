describe("get data", function() {
	var output = MODEL.getData();

  it("returns array", function() {
    chai.expect(output).to.be.instanceof(Array);
  });

  it("returns array of numbers", function() {

   output.forEach( function (item) { chai.expect(item).to.be.a("number")});
  });

});

describe("get random integer", function() {

  it("returns number", function() {
    chai.expect(MODEL.generateRandomInteger()).to.be.a("number");
  });


  it("returns integer", function() {
    chai.assert.strictEqual(MODEL.generateRandomInteger() % 1, 0, "is integer")
  });

  var order = 2;
  it("returns right order", function() {
    chai.assert.isBelow(MODEL.generateRandomInteger(order), Math.pow(10,order+1), "have right order")
  });

});