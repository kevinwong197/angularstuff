angular.module('banner', []);
angular
  .module('banner')
  .controller('bannerController', ['$scope', function($scope) {
    $scope.cursite = function () {
      return location.protocol +
        '//' +
        location.hostname +
        (location.port ? ':'+location.port : '');
    };
  }]);
angular
  .module('banner')
  .directive('banner', function() {
    return {
      restrict: 'E',
      scope: true,
      controller: 'bannerController',
      controllerAs: '$ctrl',
      templateUrl: 'app/components/banner/banner.html'
    };
  });
