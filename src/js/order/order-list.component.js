function OrderListController(orderStorage) {
  var orderList = this;
  orderList.list = orderStorage.load();
}
OrderListController.$inject = ['orderStorage'];


angular.
  module('order').
  component('orderList', {
    templateUrl: 'js/order/order-list.template.html',
    controller: OrderListController
  });


