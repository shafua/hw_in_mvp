var VIEW = (function (module) {
	var module = module || {};

	module.showData = function (input) {

		var pluralEnding = quantity_field.value != 1;
		module.__setRightPlural(pluralEnding);

		results.innerHTML = input.join(", ");
	}

	module.__setRightPlural = function (state) {
		plural_word.innerHTML = state ? "numbers" : "number&nbsp;";
	}

	return module
})(VIEW);