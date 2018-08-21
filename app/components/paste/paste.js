angular.module('paste', []);
angular
  .module('paste')
  .controller('pasteController', ['$scope', function($scope) {
    $scope.cat = 'ok';
  }]);
angular
  .module('paste')
  .directive('paste', function() {
    return {
      restrict: 'E',
      scope: true,
      controller: 'pasteController',
      controllerAs: '$ctrl',
      templateUrl: '/app/components/paste/paste.html'
    };
  });
