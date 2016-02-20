var MODEL;
MODEL = (function (module) {
	var module = module || {};

	module.getData = function (quantity,order) {
		return [5,7,"8"]
	}

	module.generateRandomInteger = function (order) {
		order = order || 1;
		return Math.round( Math.random() * Math.pow(10, order) )
	}

	return module
})(MODEL);