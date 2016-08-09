(function () {

	angular
		.module('app')
		.directive('event', eventDirective);


	function eventDirective(session) {

		return {
			restrict: 'E',
			scope: {
				data: '='
			},
			link: function(scope, element, attrs) {
				scope.session = session;
			},
			templateUrl: 'views/event.html'
		}

	}

})();