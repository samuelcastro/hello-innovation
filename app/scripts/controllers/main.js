'use strict';

/**
 * Created by Samuel Castro on 30/12/14.
 */

/**
 * @ngdoc function
 * @name helloInnovationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloInnovationApp
 */
angular.module('helloInnovationApp')
  .controller('MainCtrl', function ($scope, $modal) {

    $scope.onOpen = function() {
      $modal.open({
        templateUrl: 'views/modal.html',
        controller: function($scope, $modalInstance) {

        }
      });
    }
  });
