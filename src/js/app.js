angular.module('jfsBirdsApp', ['ngRoute', 'LocalForageModule', 'bird', 'order', 'family' ]).
  controller('MainController', ['$localForage', function($localForage) {
    this.resetDatabase = function(){
      $localForage.clear().
        then(function(){
          console.log('Database cleared');
        }).catch(function(err){
          console.log(err);
        });
      };
    }]);


