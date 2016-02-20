var MODEL = (function (module) {
	var module = module || {};

	module.getData = function (quantity,order) {
		return (new Array(quantity)).map( function () { return generateRandomInteger(order) } )
	}

	module.generateRandomInteger = function (order) {
		order = order || 1;
		return Math.round( Math.random() * Math.pow(10, order) )
	}

	return module
})(MODEL);