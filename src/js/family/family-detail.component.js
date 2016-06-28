angular.
  module('family').
  component('familyEdit', {
    templateUrl: 'js/family/family-detail.template.html',
    controller: function FamilyEditController($location, $routeParams, familyStorage) {
      var family = this;
      var storage = familyStorage.load();
      
      family.id = $routeParams.familyId;
      family.scientificName = '';
      family.commonName = '';
      
      storage.getItem(family.id).
        then(function(data){
          family.scientificName = data.scientificName;
          family.commonName = data.commonName;
        }).catch(function(err){
          console.log(err);
        });
      
      /*
       * 
       */
      family.save = function (){
        storage.setItem(family.id, family.name).
          then(function(data){
            console.log('Family ' + family.name + ' saved in database');
            $location.path('/famillies');
          }).catch(function(err){
            console.log(err);
          });
      };
      
      family.destroy = function ()
      {
        storage.removeItem(family.id).
          then(function(){
            console.log('Family #' + family.id + ' remove from database');
            $location.path('/famillies');
          }).catch(function(err){
            console.log(err);
          });
      };
    }
  });

angular.
  module('family').  
  component('familyNew', {
    templateUrl: 'js/family/family-detail.template.html',
    controller: function FamilyNewController($location, familyStorage) {
      var family = this;
      var storage = familyStorage.load();
      
      family.autoIncrement = 0;
      
      storage.getItem('autoIncrement').
        then(function(data){
          family.autoIncrement = data;
        }).catch(function(err){
          console.log(err);
        });
      
      family.save = function (){
        storage.setItem(family.autoIncrement, family.name).
          then(function(data){
            
            console.log('Family ' + family.name + ' added to database');
            
            storage.setItem('autoIncrement', family.autoIncrement + 1).
              then(function(data){
                console.log('Family auto increment set to ' + data);
                $location.path('/famillies');
              }).catch(function(err){
                console.log(err);
              });
            
          }).catch(function(err){
            console.log(err);
          });
      };
    }
  });


