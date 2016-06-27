angular.
  module('jfsBirdsApp').
  config(['$locationProvider', '$routeProvider', '$localForageProvider',
    function config($locationProvider, $routeProvider, $localForageProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/birds', {
          template: '<bird-list></bird-list>'
        }).
        when('/birds/:birdId', {
          template: '<bird-detail></bird-detail>'
        }).
        when('/orders', {
          template: '<order-list></order-list>'
        }).
        when('/famillies', {
          template: '<familly-list></familly-list>'
        }).
        when('/behaviors', {
          template: '<behavior-list></behavior-list>'
        }).
        otherwise('/birds');

      $localForageProvider.config({name: 'jfsBirdsApp'});
    }    
  ]);