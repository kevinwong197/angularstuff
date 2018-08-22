angular.module('paste', ['banner']);
angular
  .module('paste')
  .controller('pasteController', ['$scope', function($scope) {
    droparea.ondragover = function(event) {
      event.preventDefault();
    };
    droparea.ondragenter = function(event) {
      event.preventDefault();
    };
    droparea.ondrop = function(event) {
      dropfileinput.files = event.dataTransfer.files;
    };
    $scope.updatePic = function (file) {
      alert(file.name);
    };
    $scope.clicked = function () {
      dropfileinput.click();
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
