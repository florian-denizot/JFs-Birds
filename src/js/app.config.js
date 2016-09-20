angular.
  module('jfsBirdsApp').
  config(['$locationProvider', '$routeProvider', '$indexedDBProvider',
    function config($locationProvider, $routeProvider, $indexedDBProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/birds', {
          template: '<bird-list></bird-list>'
        }).
        when('/birds/edit/:birdId', {
          template: '<bird-detail></bird-detail>'
        }).
        when('/birds/new', {
          template: '<bird-detail></bird-detail>'
        }).
        when('/orders', {
          template: '<order-list></order-list>'
        }).
        when('/orders/edit/:orderId', {
          template: '<order-edit></order-edit>'
        }).
        when('/orders/new', {
          template: '<order-new></order-new>'
        }).
        when('/famillies', {
          template: '<family-list></family-list>'
        }).
        when('/families/edit/:familyId', {
          template: '<family-edit></family-edit>'
        }).
        when('/families/new', {
          template: '<family-new></family-new>'
        }).        
        when('/behaviors', {
          template: '<behavior-list></behavior-list>'
        }).
        otherwise('/orders');


        $indexedDBProvider
          .connection('jfBirdsDB')
          .upgradeDatabase(1, function(event, db, tx){
            db.createObjectStore('autoincrement', {keyPath: 'storeName'});
            db.createObjectStore('orders', {keyPath: 'id'});
            db.createObjectStore('behaviors', {keyPath: 'id'});
                    
            var familyObjStore = db.createObjectStore('families', {keyPath: 'id'});
            familyObjStore.createIndex('order_idx', 'orderId', {unique: false});
            
            var birdObjStore = db.createObjectStore('birds', {keyPath: 'id'});
            birdObjStore.createIndex('family_idx', 'familyId', {unique: false});

          });
    }    
  ]);