angular.
  module('order').
  component('orderList', {
    templateUrl: 'js/order/order-list.template.html',
    controller: function OrderListController(orderStorage) {
      var orderList = this;
      var storage = orderStorage.load();
      orderList.autoIncrement = 1;
      orderList.list = [];
        
      // Load Orders form database
      storage.iterate(function(value, key) {
          if(key === 'autoIncrement') {
            orderList.autoIncrement = value;
            console.log('Auto increment = ' + orderList.autoIncrement);
          } else {
            orderList.list.push({id : key, name: value});
          }
        }).then(function() {
          console.log('Orders loaded from database');
        }).catch(function(err) {
          console.log(err);
        });
    }
  });


