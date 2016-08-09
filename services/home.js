(function(){

	angular.module("app")
		.factory("home", homeService);

	function homeService(api) {

		var home = {
			data: [],
			get: get
		};

		return home;

		function get() {

			// Uncomment the following lines to perform a server call
			// api.get(api.URL + '/home', funtion(data) {
			// 	home.data = data;
			// });

			// Fake a server call
			setTimeout(fakeData, 400);
		}


		/* IMPORTANT:
		 * 
		 * IN PRODUCTION APPS REMOVE THIS FUNCTION
		 */
		function fakeData() {
			home.data = [
				{txt: 'this'},
				{txt: 'is'},
				{txt: 'dummy'},
				{txt: 'data'}
			];

			// As this function is called out of Angular Scope, manually apply a digest update
			$scope.$digest();
		}

	}
	
})();