angular.module('paste', ['banner']);
angular
  .module('paste')
  .controller('pasteController', ['$scope', function($scope) {
    document.ondragover = function(event) {
      event.preventDefault();
    };
    document.ondragenter = function(event) {
      event.preventDefault();
    };
    document.ondrop = function(event) {
      event.preventDefault();
    };
    droparea.ondrop = function(event) {
      var file = event.dataTransfer.files[0];
      if ($scope.isPic(file)) {
        $scope.updatePic(file);
      }
      event.preventDefault();
    };
    $scope.isPic = function (file) {
      return file.type.startsWith("image/");
    }
    $scope.updatePic = function (file) {
      alert(file.name);
    };
    $scope.clicked = function () {
      dropfileinput.click();
    };
    $scope.pasted = function (event) {
      var items = (event.clipboardData || event.originalEvent.clipboardData).items;
      var file = items[0].getAsFile();
      if ($scope.isPic(file)) {
        $scope.updatePic(file);
      }
    }
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
