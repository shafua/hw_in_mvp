var VIEWMODEL = (function (module) {
	var module = module || {};

	quantity.onchange = order.onchange = function () {
		setData();
	}


	return module

	function setData() {
		VIEW.showData( MODEL.getData( +quantity.value, +order.value ) )
	}
})(VIEWMODEL);