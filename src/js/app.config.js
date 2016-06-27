angular.
  module('jfsBirdsApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/birds', {
          template: '<bird-list></bird-list>'
        }).
        when('/birds/edit/:birdId', {
          template: '<bird-detail></bird-detail>'
        }).
        when('/birds/new', {
          template: '<bird-detail></bird-detail>'
        }).
        when('/orders', {
          template: '<order-list></order-list>'
        }).
        when('/orders/edit/:orderId', {
          template: '<order-edit></order-edit>'
        }).
        when('/orders/new', {
          template: '<order-new></order-new>'
        }).
        when('/famillies', {
          template: '<familly-list></familly-list>'
        }).
        when('/behaviors', {
          template: '<behavior-list></behavior-list>'
        }).
        otherwise('/birds');
    }    
  ]);