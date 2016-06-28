angular.
  module('family').
  component('familyList', {
    templateUrl: 'js/family/family-list.template.html',
    controller: function FamilyListController(familyStorage) {
      var familyList = this;
      var storage = familyStorage.load();
      familyList.autoIncrement = 1;
      familyList.list = [];
        
      // Load Familys form database
      storage.iterate(function(value, key) {
          if(key === 'autoIncrement') {
            familyList.autoIncrement = value;
            console.log('Auto increment = ' + familyList.autoIncrement);
          } else {
            familyList.list.push({
                id : key, 
                scientificName: value.scientificName, 
                commonName : value.commonName,
                orderId : value.orderId  
              });
          }
        }).then(function() {
          console.log('Famillies loaded from database');
        }).catch(function(err) {
          console.log(err);
        });
    }
  });


