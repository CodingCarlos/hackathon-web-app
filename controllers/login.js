(function(){

	angular.module("app")
		.controller("loginCtrl", loginController);
	
	function loginController($scope, login) {
		var self = this;

		// Params
		self.user = '';
		self.pass = '';
		self.error = '';

		// Methods
		self.service = login;
		self.login = doLogin;

		// Hands on!!
		update();

		// Internal Functions
		function doLogin() {
			self.service.login(self.user, self.pass);
		}
	}

	function update() {
		setTimeout(function() {
			// Update also the component handler to fix the js menus
			window.componentHandler.upgradeAllRegistered();
		}, 0); 
	}
	
})();