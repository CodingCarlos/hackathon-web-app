(function(){

	angular.module("app")
		.controller("appCtrl", appController);
	
	function appController(session) {
		var self = this;

		// Params
		self.hello = "world";

		// Methods
		self.session = session;
		self.update = update;

		// Hands on!

		// If login enabled, comment the following line
		session.set({name: 'Jhon Doe', uid: '123', pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg', notifications: 2});

		update();
	}

	function update() {
		setTimeout(function() {
			// Update also the component handler to fix the js menus
			window.componentHandler.upgradeAllRegistered();
		}, 0); 
	}
	
})();