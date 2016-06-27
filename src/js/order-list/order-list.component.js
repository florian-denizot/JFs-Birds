angular.
  module('orderList').
  component('orderList', {
    templateUrl: 'js/order-list/order-list.template.html',
    controller: function OrderListController($localForage) {
      var orderList = this;
      orderList.autoIncrement = 1;
      orderList.list = []; 
      
      $localForage.getItem('orders').
        then(function(data){
          orderList.list = data
        }).catch();
      
      orderList.init = function(){
        var initArray = [
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
        
        
        
        if(orderList.storage.length()===0) {
          for(var i; i < initArray.length; i++){
            orderList.storage.setItem(initArray[i].id, initArray[i]).
              catch(function(err) {
                console.log(err);
              });
            orderList.autoIncrement++;
          }
          orderList.storage.setItem('autoIncrement', orderList.autoIncrement).
            catch(function(err) {
              console.log(err);
            });
          orderList.list = initArray;
        } else {
          orderList.storage.getItem('autoIncrement').
            then(function(data){
              orderList.autoIncrement = data; 
              console.log('Order auto increment = ' + orderList.autoIncrement);
            }).catch(function(err) {
              console.log(err);
            });
           
          orderList.storage.iterate(function(value, key) {
            orderList.list.push({id : key, name: value});
          }).then(function() {
                console.log('All orders loaded from database');
            }).catch(function(err) {
                console.log(err);
            }); 
        }
      }
      
      orderList.addOrder = function (){
        orderList.list.push({id : orderList.autoIncrement, name: orderList.orderName});
        orderList.orderName = '';
        orderList.autoIncrement++;
        $('#addOrderModal').modal('hide');
      };
      
      orderList.removeOrder = function (orderId)
      {
        orderList.list.forEach(function(element, index, array){
          if(element.id === orderId){
            array.splice(index, 1);
          }
        });
      };
      
      orderList.init();
    }
  });


