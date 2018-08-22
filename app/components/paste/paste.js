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
      var files = event.dataTransfer.files;
      if (files && files[0] && $scope.isFilePic(files[0])) {
        $scope.searchByFiles(files);
      }
      event.preventDefault();
    };
    $scope.isFilePic = function (file) {
      return file.type.startsWith("image/");
    }
    $scope.ifUrlPic = function (url, callback) {
      var img = new Image();
      img.onload = function () {
        callback(url);
      };
      img.onerror = function () {};
      img.src = url;
    }
    $scope.searchByFiles = function (files) {
      formfile.files = files;
      hiddenform.submit();
    }
    $scope.searchByUrl = function (url) {
      var target = 'https://images.google.com/searchbyimage?image_url='+url;
      window.location = target;
    }
    $scope.clicked = function () {
      dropfileinput.click();
    };
    $scope.pasted = function (event) {
      var files = event.clipboardData.files
      var url = event.clipboardData.getData('Text')
      if (files && files[0] && $scope.isFilePic(files[0])) {
        $scope.searchByFiles(files);
      } else if (url) {
        $scope.ifUrlPic(url, function (url) {
          $scope.searchByUrl(url);
        })
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
