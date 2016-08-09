(function(){

	angular.module("app")
		.factory("home", homeService);

	function homeService($timeout, api) {

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
			$timeout(fakeData, 400)
		}


		/* IMPORTANT:
		 * 
		 * IN PRODUCTION APPS REMOVE THIS FUNCTION
		 */
		function fakeData() {
			home.data.push({txt: 'this'});
			home.data.push({txt: 'is'});
			home.data.push({txt: 'dummy'});
			home.data.push({txt: 'data'});
		}

	}
	
})();