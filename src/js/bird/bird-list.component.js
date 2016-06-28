angular.
  module('bird').
  component('birdList', {
    templateUrl: 'js/bird/bird-list.template.html',
    controller: function BirdListController() {
      var birdList = this;
      birdList.autoIncrement = 1
      birdList.list = [];
      
      birdList.addBird = function (){
        birdList.list.push({id : birdList.autoIncrement, englishName: birdList.birdEnglishName});
        birdList.birdEnglishName = '';
        birdList.autoIncrement++;     
      };
      
      birdList.removeBird = function (birdId){
        birdList.list.forEach(function(element, index, array){
          if(element.id === birdId)
          {
            array.splice(index, 1);
          }
        });
      };
    }
  });


