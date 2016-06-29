angular.module('jfsBirdsApp').
  controller('MainController',  ['$scope', '$location', '$q', 
    'orderStorage', 'familyStorage', 'birdStorage', 
    function($scope, $location, $q, orderStorage, familyStorage, birdStorage) { 
    
    $scope.tasks = [];    
    
    if(typeof($scope.init) === "undefined" )
    {
      $scope.init = true;      
      $scope.tasks[0] = {text : "Initializing Order storage", done : false};
      $scope.tasks[1] = {text : "Initializing Family storage", done : false};
      $scope.tasks[2] = {text : "Initializing Bird storage (Can take a while the first time)", done : false};
      
      var initOrders = orderStorage.init().
        then(function(message){
          $scope.tasks[0] = {text : message, done : true};
        }).catch(function(err){
          console.log(err);
        });

      var initFamillies = familyStorage.init().
        then(function(message){
          $scope.tasks[1] = {text : message, done : true};
        }).catch(function(err){
          console.log(err);
        });

      var initBirds = birdStorage.init().
        then(function(message){
          $scope.tasks[2] = {text : message, done : true};
        }).catch(function(err){
          console.log(err);
        });

      var initTasks = [initOrders, initFamillies, initBirds];
      
      $q.all(initTasks).
        then(function(){
          $scope.init = false;
          $location.path('/birds');
        }).catch(function(err){
          console.log(err);
        });
    }
    
  }]);


