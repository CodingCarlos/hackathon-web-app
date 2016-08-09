(function(){

	angular.module("app")
		.factory("login", login);

	function login(api, session) {

		var login = {
			login: login
		};

		return login;

		function login(user, pass) {

			// Error control
			if(typeof(user) === 'undefined' || typeof(pass) === 'undefined') {
				console.error('Undefined user or password provided to login service.');
				return false;
			}

			var json {
				user: user,
				pass: pass
			}

			api.post( api.URL + '/login', json, function(data) {

				// Set the session data
				session.set(data);

				// If there are a token in response, set it for next requests
				if(typeof(data.token) !== 'undefined' && data.token !== '') {
					api.setAuthorizationToken(data.token)
				}
			})
		}
	}
	
})();