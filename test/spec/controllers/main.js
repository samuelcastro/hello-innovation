'use strict';

/**
 * Created by Samuel Castro on 30/12/14.
 */

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('helloInnovationApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should has a onOpen function', function () {
    expect(scope.onOpen).toEqual(jasmine.any(Function));
  });
});
