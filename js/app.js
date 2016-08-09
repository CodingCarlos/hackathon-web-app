(function() {

	var app = angular.module('app', ['ui.router'])

		.config(['$stateProvider', '$urlRouterProvider', 
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/');
			
				$stateProvider
					.state('home', {
						url: "/",
						views: {
							"sidebar": { templateUrl: "views/sidebar.html" },
							"content": { templateUrl: "views/home.html" }
						},
						viewCache: true
					})
					.state('over', {
						url: "/section",
						views: {
							"overview": { templateUrl: "views/section.html" }
						}
					})

			}
		]);

	
})();