'use strict';

angular.module('myApp', [
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    	.state('app', {
        	url: '/',
        	templateUrl: 'public/app/app.html',
        	controller: 'AppCtrl'
    	})
    	.state('myapp',{
    		url: '/myapp',
        	templateUrl: 'public/app/app2.html',
    	});
    
}); 