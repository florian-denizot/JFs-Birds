function FamilyListController(familyStorage, orderStorage) {
  var familyList = this;
  var familyDb = familyStorage.load();
  var orderDb = orderStorage.load();

  familyList.autoIncrement = 1;
  familyList.list = [];
  familyList.orders = [];

  // Load Orders from database to fill up the filter listbox
  orderDb.iterate(function(value, key) {
      if(key !== 'autoIncrement') {
        familyList.orders.push({
          id : key, 
          name : value
        });
      }
    }).then(function() {
      console.log('Orders loaded from database');
    }).catch(function(err) {
      console.log(err);
    });

  // Load Famillies form database
  familyDb.iterate(function(value, key) {
      var order;

      if(key !== 'autoIncrement') {
        orderDb.getItem(value.orderId).
          then(function(data){
            order = data;

            familyList.list.push({
              id : key, 
              name: value.name, 
              description : value.description,
              orderId : value.orderId,
              orderName: order
            });

          }).catch(function(err) {
            console.log(err);
          });
      }
    }).then(function() {
      console.log('Famillies loaded from database');
    }).catch(function(err) {
      console.log(err);
    });

  familyList.idComparator = function(actual, expected) { 
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
FamilyListController.$inject = ['familyStorage', 'orderStorage'];

angular.
  module('family').
  component('familyList', {
    templateUrl: 'js/family/family-list.template.html',
    controller: FamilyListController
  });