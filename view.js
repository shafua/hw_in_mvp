var VIEW = (function (module) {
	var module = module || {};

	module.showData = function (input) {
		results.innerHTML = input.join(", ");
	}

	return module
})(VIEW);