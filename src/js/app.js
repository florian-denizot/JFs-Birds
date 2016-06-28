angular.module('jfsBirdsApp', ['ngRoute', 'LocalForageModule', 'birdList', 'order' ]).
  controller('MainController', function($localForage) {
    this.resetDatabase = function(){
      $localForage.clear().
        then(function(){
          console.log('Database cleared');
        }).catch(function(err){
          console.log(err);
        });
      };
    });


