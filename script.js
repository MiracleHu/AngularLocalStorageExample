	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute','ngStorage']);
   
	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope,$localStorage) {
		// create a message to display in our view
		$localStorage.$default({
    	count: 0
		});
		$scope.count = $localStorage.count;
	
		$scope.message = 'Everyone come and see how good I look! ';
		
		$scope.add = function(){
		  $localStorage.count++;
		  $scope.count = $localStorage.count;
		};
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});