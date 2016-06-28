angular.module('order').
  service('orderStorage', ['$localForage', function($localForage){
    var orders = [
      {id: 1, name: 'Accipitriformes'},
      {id: 2, name: 'Anseriformes'},
      {id: 3, name: 'Apodiformes'},
      {id: 4, name: 'Apterygiformes'},
      {id: 5, name: 'Bucerotiformes'},
      {id: 6, name: 'Caprimulgiformes'},
      {id: 7, name: 'Cariamiformes'},
      {id: 8, name: 'Casuariiformes'},
      {id: 9, name: 'Charadriiformes'},
      {id: 10, name: 'Ciconiiformes'},
      {id: 11, name: 'Coliiformes'},
      {id: 12, name: 'Columbiformes'},
      {id: 13, name: 'Coraciiformes'},
      {id: 14, name: 'Cuculiformes'},
      {id: 15, name: 'Eurypygiformes'},
      {id: 16, name: 'Falconiformes'},
      {id: 17, name: 'Galbuliformes'},
      {id: 18, name: 'Galliformes'},
      {id: 19, name: 'Gaviiformes'},
      {id: 20, name: 'Gruiformes'},
      {id: 21, name: 'Leptosomiformes'},
      {id: 22, name: 'Mesitornithiformes'},
      {id: 23, name: 'Otidiformes'},
      {id: 24, name: 'Passeriformes'},
      {id: 25, name: 'Pelecaniformes'},
      {id: 26, name: 'Phaethontiformes'},
      {id: 27, name: 'Phoenicopteriformes'},
      {id: 28, name: 'Piciformes'},
      {id: 29, name: 'Podicipediformes'},
      {id: 30, name: 'Podicipediformes'},
      {id: 31, name: 'Procellariiformes'},
      {id: 32, name: 'Psittaciformes'},
      {id: 33, name: 'Pterocliformes'},
      {id: 34, name: 'Rheiformes'},
      {id: 35, name: 'Sphenisciformes'},
      {id: 36, name: 'Strigiformes'},
      {id: 37, name: 'Struthioniformes'},
      {id: 38, name: 'Suliformes'},
      {id: 39, name: 'Tinamiformes'},
      {id: 40, name: 'Trogoniformes'}
    ];

    var autoIncrement = 41;

    var storage = $localForage.createInstance({
      name: 'orders'
    });

    
    storage.length().
      then(function(data){
        if(data===0){
          // Add default values to database
          for(var i = 0; i < orders.length ; i++)
          {
            var order = orders[i];
            storage.setItem(order.id, order.name).
              then(function(data) {
                console.log(data + ' order set in database');
              }).catch(function(err) {
                console.log(err);
              });
          }
          storage.setItem('autoIncrement', autoIncrement).
            then(function(data) {
              console.log('AutoIncrement set at ' + data + ' in database');
            }).catch(function(err) {
              console.log(err);
            });
        }
      }).catch(function(err){
        console.log(err);
      });

    this.load = function(){return storage;};

  }]);

