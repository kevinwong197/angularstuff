angular.
  module('App').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/paste', {
          template: '<paste></paste>'
        }).
        otherwise('/paste');
    }
  ]);