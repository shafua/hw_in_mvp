var PRESENTER = (function (module) {
	var module = module || {};

	quantity_field.onchange = order_field.onchange = function () {
		VIEW.showData( MODEL.getData( +quantity_field.value, +order_field.value ) )
	};
	
	return module	
})(PRESENTER);