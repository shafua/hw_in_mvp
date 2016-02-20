describe("binding data", function() {
	var q = 5;
	var	o = 7;
	var resulting;
	before(function() {
		quantity.value = q;
		order.value = o;
		results.innerHTML = ''
		order.onchange();

	});

  it("showed right quantity of data", function() {
  	chai.assert.strictEqual(results.innerHTML.split(",").length, q)
  });

  it("showed right order of data", function() {

  	results.innerHTML.split(",").forEach( function (item) {chai.expect(item.replace(/[^-0-9]/gim,'').length).below(o+1); });
  });

});




describe("showing data", function() {
	var input = [10,22,34,85,2,34];
	before(function() {  
		VIEW.showData(input);
	});

	afterEach(function() { results.innerHTML = "" });

  it("show data", function() {
    chai.expect(results.innerHTML).to.have.string(input.join(", "));

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
   for(var i = 0; i < output.length; i++) {chai.assert.isNumber(output[i], "item#"+i+" of output is not number"); }
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