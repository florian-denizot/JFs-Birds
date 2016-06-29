function BirdListController(birdStorage, familyStorage, orderStorage) {
  var birdList = this;
  var birdDb = birdStorage.load();
  var familyDb = familyStorage.load();
  var orderDb = orderStorage.load();

  birdList.autoIncrement = 1;
  birdList.list = [];
  birdList.famillies = [];
  birdList.orders = [];

  // Load Orders from database to fill up the filter listbox
  orderDb.iterate(function(value, key) {
      if(key !== 'autoIncrement') {
        birdList.orders.push({
          id : key, 
          name : value
        });
      }
    }).then(function() {
      console.log('Orders loaded from database');
    }).catch(function(err) {
      console.log(err);
    });

  // Load Famillies from database to fill up the filter listbox
  familyDb.iterate(function(value, key) {
      if(key !== 'autoIncrement') {
        birdList.famillies.push({
          id : key, 
          name : value.name
        });
      }
    }).then(function() {
      console.log('Family loaded from database');
    }).catch(function(err) {
      console.log(err);
    });

  // Load Birds form database
  birdDb.iterate(function(birdData, birdId) {

      if(birdId !== 'autoIncrement') {
        familyDb.getItem(birdData.familyId).
          then(function(familyData){

            orderDb.getItem(familyData.orderId).
              then(function(orderData){

                birdList.list.push({
                  id : birdId, 
                  englishName: birdData.englishName, 
                  scientificName : birdData.scientificName,
                  familyId : birdData.familyId,
                  familyName : familyData.name,
                  orderId : familyData.orderId,
                  orderName: orderData
                });

              }).catch(function(err) {
                console.log(err);
              });
          }).catch(function(err) {
            console.log(err);
          });  
      }

    }).then(function() {
      console.log('Birds loaded from database');
    }).catch(function(err) {
      console.log(err);
    });

  birdList.idComparator = function(actual, expected) { 
    if(expected == "" || actual == expected)
    {
      return true; 
    } 
    else
    {
      return false;
    }
  };
}
BirdListController.$inject = ['birdStorage', 'familyStorage', 'orderStorage'];

angular.
  module('bird').
  component('birdList', {
    templateUrl: 'js/bird/bird-list.template.html',
    controller: BirdListController
  });


