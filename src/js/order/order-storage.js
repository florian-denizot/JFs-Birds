angular.module('order').
  service('orderStorage', ['$indexedDB', '$q', function($indexedDB, $q){
    
    var setDefaultValues = function(){
      var orders = [
        {
          "id": 1,
          "name": "Accipitriformes"
        },
        {
          "id": 2,
          "name": "Anseriformes"
        },
        {
          "id": 3,
          "name": "Apodiformes"
        },
        {
          "id": 4,
          "name": "Apterygiformes"
        },
        {
          "id": 5,
          "name": "Bucerotiformes"
        },
        {
          "id": 6,
          "name": "Caprimulgiformes"
        },
        {
          "id": 7,
          "name": "Cariamiformes"
        },
        {
          "id": 8,
          "name": "Casuariiformes"
        },
        {
          "id": 9,
          "name": "Charadriiformes"
        },
        {
          "id": 10,
          "name": "Ciconiiformes"
        },
        {
          "id": 11,
          "name": "Coliiformes"
        },
        {
          "id": 12,
          "name": "Columbiformes"
        },
        {
          "id": 13,
          "name": "Coraciiformes"
        },
        {
          "id": 14,
          "name": "Cuculiformes"
        },
        {
          "id": 15,
          "name": "Eurypygiformes"
        },
        {
          "id": 16,
          "name": "Falconiformes"
        },
        {
          "id": 17,
          "name": "Galbuliformes"
        },
        {
          "id": 18,
          "name": "Galliformes"
        },
        {
          "id": 19,
          "name": "Gaviiformes"
        },
        {
          "id": 20,
          "name": "Gruiformes"
        },
        {
          "id": 21,
          "name": "Leptosomiformes"
        },
        {
          "id": 22,
          "name": "Mesitornithiformes"
        },
        {
          "id": 23,
          "name": "Otidiformes"
        },
        {
          "id": 24,
          "name": "Passeriformes"
        },
        {
          "id": 25,
          "name": "Pelecaniformes"
        },
        {
          "id": 26,
          "name": "Phaethontiformes"
        },
        {
          "id": 27,
          "name": "Phoenicopteriformes"
        },
        {
          "id": 28,
          "name": "Piciformes"
        },
        {
          "id": 29,
          "name": "Podicipediformes"
        },
        {
          "id": 30,
          "name": "Procellariiformes"
        },
        {
          "id": 31,
          "name": "Psittaciformes"
        },
        {
          "id": 32,
          "name": "Pterocliformes"
        },
        {
          "id": 33,
          "name": "Rheiformes"
        },
        {
          "id": 34,
          "name": "Sphenisciformes"
        },
        {
          "id": 35,
          "name": "Strigiformes"
        },
        {
          "id": 36,
          "name": "Struthioniformes"
        },
        {
          "id": 37,
          "name": "Suliformes"
        },
        {
          "id": 38,
          "name": "Tinamiformes"
        },
        {
          "id": 39,
          "name": "Trogoniformes"
        }
      ];
     
      var dbInsertions = [];
      var dbInsertion;
      
      dbInsertion = $indexedDB.openStore('orders', function(store){
        store.insert(orders).then(function(e){
          return "Inserted 39 values in Order database";
        }).catch(function(err) {
          console.log(err);
        });
      }).then(function(message){
        return message;
      });
      dbInsertions.push(dbInsertion)
      
      autoincrement = [{'storeName':'orders', 'value':40}];
      dbInsertion = $indexedDB.openStore('autoincrement', function(store){
         store.insert(autoincrement).
          then(function(e){
            return "Order autoincrement set to 40";
          }).catch(function(err) {
            console.log(err);
          });
      }).then(function(message){
        return message;
      });
      dbInsertions.push(dbInsertion);
      
      return $q.all(dbInsertions).
        then(function(){
          return "Default values set in Order database";
        }).catch(function(err){
          console.log(err);
        });
    };
    
    this.init = function(){
      return $indexedDB.openStore('autoincrement', function(autoincrement){
        autoincrement.getAllKeys().then(function(keys){
          if(keys.indexOf('orders') == -1)
          {
            return setDefaultValues().
              then(function(message){
                return message;
              }).catch(function(err){
                console.log(err);
              });
          }
          else
          {
            return "Order database already exist";
          }
        }).catch(function(err){
          console.log(err);
        });
      }).then(function(message){
        return message;
      });
    };

    this.load = function(){
      return $indexedDB.openStore('orders', function(store){
        store.getAll().then(function(data) {  
          return data;
        }).catch(function(err){
          console.log(err);
        });
      }).then(function(data) {  
          return data;
        });
    };

  }]);

