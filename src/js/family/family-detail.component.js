angular.
  module('family').
  component('familyEdit', {
    templateUrl: 'js/order/order-detail.template.html',
    controller: function OrderEditController($location, $routeParams, orderStorage) {
      var order = this;
      var storage = orderStorage.load();
      
      order.id = $routeParams.orderId;
      order.name = '';
      
      storage.getItem(order.id).
        then(function(data){
          order.name = data;
        }).catch(function(err){
          console.log(err);
        });
      
      order.save = function (){
        storage.setItem(order.id, order.name).
          then(function(data){
            console.log('Order ' + order.name + ' saved in database');
            $location.path('/orders');
          }).catch(function(err){
            console.log(err);
          });
      };
      
      order.destroy = function ()
      {
        storage.removeItem(order.id).
          then(function(){
            console.log('Order #' + order.id + ' remove from database');
            $location.path('/orders');
          }).catch(function(err){
            console.log(err);
          });
      };
    }
  });

angular.
  module('order').  
  component('orderNew', {
    templateUrl: 'js/order/order-detail.template.html',
    controller: function OrderNewController($location, orderStorage) {
      var order = this;
      var storage = orderStorage.load();
      
      order.autoIncrement = 0;
      
      storage.getItem('autoIncrement').
        then(function(data){
          order.autoIncrement = data;
        }).catch(function(err){
          console.log(err);
        });
      
      order.save = function (){
        storage.setItem(order.autoIncrement, order.name).
          then(function(data){
            
            console.log('Order ' + order.name + ' added to database');
            
            storage.setItem('autoIncrement', order.autoIncrement + 1).
              then(function(data){
                console.log('Order auto increment set to ' + data);
                $location.path('/orders');
              }).catch(function(err){
                console.log(err);
              });
            
          }).catch(function(err){
            console.log(err);
          });
      };
    }
  });


