'use strict';

/**
 * Created by Samuel Castro on 30/12/14.
 */

/**
 * @ngdoc overview
 * @name helloInnovationApp
 * @description
 * # helloInnovationApp
 *
 * Main module of the application.
 */
angular
  .module('helloInnovationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
