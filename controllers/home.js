(function(){

	angular.module("app")
		.controller("homeCtrl", homeController);
	
	function homeController($scope, home) {
		var self = this;

		// Params
		// self.param = 'whatever'

		// Properties
		self.service = home;

		// Methods
		self.update = update;

		// Hands on!
		if(self.service.data.length == 0) {
			self.service.get();	
		}
	}

	function update() {
		setTimeout(function() {
			// Update also the component handler to fix the js menus
			window.componentHandler.upgradeAllRegistered();
		}, 0); 
	}
	
})();