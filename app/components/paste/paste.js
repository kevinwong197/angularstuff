angular.module('paste', ['banner']);
angular
  .module('paste')
  .controller('pasteController', ['$scope', function($scope) {
    $scope.updatePic = function (file) {
      alert(file.name);
    };
    $scope.clicked = function () {
      document.getElementById('file').click();
    };
    $scope.dummy = null;
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
