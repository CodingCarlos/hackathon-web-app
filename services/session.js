(function(){

	angular.module("app")
		.factory("session", sessionService);

	function sessionService($http) {

		var session = {
			notifications: 5,
			uid: 6283879140818944,
			name: '',
			pic: '',
			set: setSession,
			clearNotifications: clearNotifications
		};

		return session;

		function setSession(newSession) {

			if(typeof(newSession.uid) !== 'undefined') {
				session.uid = newSession.uid;
			}
			
			if(typeof(newSession.name) !== 'undefined') {
				session.name = newSession.name;
			}

			if(typeof(newSession.pic) !== 'undefined') {
				session.pic = newSession.pic;
			}

			if(typeof(newSession.notifications) !== 'undefined') {
				session.notifications = newSession.notifications;
			}
		}

		function clearNotifications() {
			session.notifications = 0;
		}
	}

	
})();