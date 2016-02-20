describe("showing data", function() {
	var input = [10,22,34,85,2,34];

	VIEW.showData(input);

  it("show data", function() {
    chai.expect(results.innerHTML).to.have.string(input.join(", "));

    results.innerHTML = ""

  });

});


describe("get data", function() {
	var length = 2, output = MODEL.getData(length);

  it("returns array", function() {
    chai.assert.isArray(output, "output is array");
  });

  it("returns right length", function() {
    chai.assert.lengthOf(output,length);
  });

  it("returns array of numbers", function() {
   output.forEach( function (item) { chai.assert.isNumber(item, "item of output is number"); });
  });

});

describe("get random integer", function() {

  it("returns number", function() {
    chai.expect(MODEL.__generateRandomInteger()).to.be.a("number");
  });


  it("returns integer", function() {
    chai.assert.strictEqual(MODEL.__generateRandomInteger() % 1, 0, "is integer")
  });

  var order = 2;
  it("returns right order", function() {
    chai.assert.isBelow(MODEL.__generateRandomInteger(order), Math.pow(10,order+1), "have right order")
  });

});