var Assert = chai.assert;
var Expect = chai.expect;



describe("data correctness", function() {
	before(function() {
		quantity_field.value = 5;
		order_field.value = 7;
		results.innerHTML = ''
		order_field.onchange();
	});

  it("showed right quantity of data", function() {
    var q = +quantity_field.value;
  	Assert.strictEqual(results.innerHTML.split(", ").length, q)
  });

  it("showed right order of data", function() {
  	var items = results.innerHTML.split(", ");
    var o = order_field.value;
    for(var i = 0; i < items.length; i++) Expect(items[i].length).below(o+1);
  });

});

describe("right plural", function() {
  describe("case of 1", function() {
  	before(function() {
  		quantity_field.value = 1;
  		order_field.onchange();
  	});

    it("showed right plural word 'number' ", function() {
    	Expect(plural_word.innerHTML).to.equal("number&nbsp;");
    });
  });

  describe("plural cases", function() {
      before(function() {
        quantity_field.value = 25;
        order_field.onchange();
      });

    it("showed right plural word 'number' ", function() {
    	Expect(plural_word.innerHTML).to.equal("numbers");
    });
  });

});




describe("showing data", function() {
	var input = [10,22,34,85,2,34];
	before(function() {  
		VIEW.showData(input);
	});

	afterEach(function() { results.innerHTML = "" });

  it("showing of data", function() {
    Expect(results.innerHTML).to.have.string(input.join(", "));

  });

});




describe("getting of data", function() {
	var length = 2, output = MODEL.getData(length);

  it("returns array", function() {
    Assert.isArray(output, "output is array");
  });

  it("returns right length", function() {
    Assert.lengthOf(output,length);
  });

  it("returns array of numbers", function() {
   for(var i = 0; i < output.length; i++) Assert.isNumber(output[i], "item#"+i+" of output is not number");
  });

});




describe("getting of random integer", function() {

  it("returns number", function() {
    Expect(MODEL.__generateRandomInteger()).to.be.a("number");
  });


  it("returns integer", function() {
    Assert.strictEqual(MODEL.__generateRandomInteger() % 1, 0, "is integer")
  });

  
  it("returns right order", function() {
    var order = 2;
    Assert.isBelow(MODEL.__generateRandomInteger(order), Math.pow(10,order+1), "have right order")
  });

});