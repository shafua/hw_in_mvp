var MODEL = (function (module) {
	var module = module || {};

	module.getData = function (quantity,order) {
		console.log("getData", quantity,order)
		var result = new Array(quantity);
		for (var i = result.length - 1; i >= 0; i--) {
			result[i] = module.__generateRandomInteger(order);
		};
		return result;
	}

	module.__generateRandomInteger = function (order) {
		order = order || 1;
		return Math.round( Math.random() * Math.pow(10, order) )
	}

	return module
})(MODEL);