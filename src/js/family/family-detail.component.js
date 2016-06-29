angular.
  module('family').
  component('familyEdit', {
    templateUrl: 'js/family/family-detail.template.html',
    controller: function FamilyEditController($location, $routeParams, familyStorage, orderStorage) {
      var family = this;
      var familyDb = familyStorage.load();
      var orderDb = orderStorage.load();
      
      family.id = $routeParams.familyId;
      family.name;
      family.description;
      family.orderId;
      family.selectedOrder;
      
      familyDb.getItem(family.id).
        then(function(data){
          family.name = data.name;
          family.description = data.description;
          family.selectedOrder = data.orderId;
          
          orderDb.getItem(family.selectedOrder).
            then(function(data){
              family.orderId = {
                id : family.selectedOrder, 
                name : data
              };
            }).catch(function(err){
              console.log(err);
            });
            
        }).catch(function(err){
          console.log(err);
        });
        
      family.orders = [];
      
      // Load Orders from database to fill up the filter listbox
      orderDb.iterate(function(value, key) {
          if(key !== 'autoIncrement') {
            family.orders.push({
              id : key, 
              name : value
            });
          }
        }).then(function() {
          console.log('Orders loaded from database');
        }).catch(function(err) {
          console.log(err);
        });
      
      family.save = function (){
        familyDb.setItem(family.id, {
            name: family.name, 
            description : family.description, 
            orderId: family.orderId.id
          }).
          then(function(data){
            console.log('Family ' + data.name + ' saved in database');
            $location.path('/famillies');
          }).catch(function(err){
            console.log(err);
          });
      };
      
      family.destroy = function ()
      {
        familyDb.removeItem(family.id).
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
    controller: function FamilyNewController($location, familyStorage, orderStorage) {
      var family = this;
      var familyDb = familyStorage.load();
      var orderDb = orderStorage.load();
      
      family.autoIncrement = 0;
      
      familyDb.getItem('autoIncrement').
        then(function(data){
          family.autoIncrement = data;
        }).catch(function(err){
          console.log(err);
        });
        
      family.orders = [];
      
      // Load Orders from database to fill up the filter listbox
      orderDb.iterate(function(value, key) {
          if(key !== 'autoIncrement') {
            family.orders.push({
              id : key, 
              name : value
            });
          }
        }).then(function() {
          console.log('Orders loaded from database');
        }).catch(function(err) {
          console.log(err);
        });
      
      family.save = function (){
        familyDb.setItem(family.autoIncrement, {
            name: family.name, 
            description : family.description, 
            orderId: family.orderId.id
          }).
          then(function(data){
            
            console.log('Family ' + data.name + ' added to database');
            
            familyDb.setItem('autoIncrement', family.autoIncrement + 1).
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


