// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMaterial','ngCordova', '$selectSearchBox', 'ion-autocomplete','angular-search-and-select'])

.run(function($ionicPlatform,$rootScope,loginService,BackgroundGeolocationService, mySharedService,$cordovaSQLite, $ionicPopup, $ionicLoading, $state,$timeout,$ionicHistory,$cordovaGeolocation) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.show();
            StatusBar.backgroundColorByHexString("#086289");
            StatusBar.overlaysWebView(false);
        }

        $ionicPlatform.registerBackButtonAction(function () {

            if ($ionicHistory.currentStateName() === 'login' || $ionicHistory.currentStateName() === 'home'|| $ionicHistory.currentStateName() === 'dashboard') {

                if(backbutton==0) {
                    backbutton++;
                    window.plugins.toast.showShortBottom('Press Again to Exit');
                    $timeout(function(){backbutton=0;},2500);

                } else {
                    ionic.Platform.exitApp();
                }

            } else if ($ionicHistory.currentStateName() === 'tab.profile') {
                $state.go('dashboard');
            }
            else if ($ionicHistory.currentStateName() === 'tab-ret.addproduct-ret' || $ionicHistory.currentStateName() === 'tab-dist.addproduct-dist')
            {
                if(backbutton==0) {
                    backbutton++;
                    window.plugins.toast.showShortBottom('Order will Vanish once you go back!!!');
                    $timeout(function(){backbutton=0;},2500);

                } else
                {
                    navigator.app.backHistory();
                }
            }
            else {
                navigator.app.backHistory();
            }

        }, 100);

        if (window.cordova) {
            // db = $cordovaSQLite.openDB({name:"my.app_prayag", iosDatabaseLocation: 'default'});
            db = window.openDatabase("my.app",'1','my',1024 * 1024 * 100);
            console.log("browser");
            console.log("Android");
        } else{
            db = window.openDatabase("my.app",'1','my',1024 * 1024 * 100);
            console.log("browser");
        }

        var posOptions = {
            // enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 0
        };


        function onRequestSuccess(success) {
            $rootScope.isGpsEnabled = true;
            console.log("Successfully requested accuracy: "+success.message);

            var options = {timeout: 10000, enableHighAccuracy: true};
            $cordovaGeolocation.getCurrentPosition(options).then(function(position){
                console.log(position.coords.latitude+" "+position.coords.longitude);

                mySharedService.lat = position.coords.latitude;
                mySharedService.lng = position.coords.longitude;

            })
        }


        function onRequestFailure(error) {

            $rootScope.isGpsEnabled = false;
            console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);

            if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
                cordova.plugins.diagnostic.switchToLocationSettings();

                $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                    console.log(position.coords.latitude+" "+position.coords.longitude);

                    mySharedService.lat = position.coords.latitude;
                    mySharedService.lng = position.coords.longitude;

                }, function(err) {
                    console.log(err.code+" "+err.message);
                    console.log("Could not get location");
                });

            } else {
                ionic.Platform.exitApp();
            }
        }

        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS "+dbTableName+" (id integer primary key, username text,password text)");

        var query ="SELECT username, password FROM "+dbTableName+" ORDER BY id DESC LIMIT 1";
        $cordovaSQLite.execute(db, query).then(function(res) {
            for(i=0;i<res.rows.length;i++)
            {
                console.log(res.rows.item(i));
            }

            if(res.rows.length > 0) {

                $ionicLoading.show({
                    template: '<span class="icon spin ion-loading-d"></span> Loading...'
                });

                if(res.rows.item(0).username && res.rows.item(0).password){

                    loginService.loginuser(res.rows.item(0).username,res.rows.item(0).password)

                    .then(function (result) {
                        console.log(result);
                        $timeout(function () {
                            navigator.splashscreen.hide();
                        }, 100);
                        salesexe_id = result.data.sys_user_id;
                        salesexe_name = result.data.sys_user_name;
                        mySharedService.salesexe_id=result.data.sys_user_id;
                        mySharedService.ecex_name=result.data.sys_user_name;
                        salesexe_pincode = result.data.pincode;
                        salesexe_district = result.data.district_name;
                        salesexe_state = result.data.state_name;
                        salesexe_state = result.data.state_name;
                        app_version = result.data.varsion;
                        mySharedService.image = result.data.image;
                        $ionicLoading.hide();
                        console.log(salesexe_district);


                        $state.go('dashboard');
                        // commented
                        // if (ionic.Platform.isAndroid())
                        // {
                        //     cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                        //     BackgroundGeolocationService.init(salesexe_id);
                        // }

                    }, function (result) {

                        $ionicLoading.hide();
                        $timeout(function () {
                            navigator.splashscreen.hide();
                        }, 100);
                        var alertPopup = $ionicPopup.alert({
                            title: 'Login failed!',
                            template: 'Please check your credentials!'
                        });
                        $state.go('login');
                    });

                }

            } else {
                $timeout(function () {
                    navigator.splashscreen.hide();
                }, 100);
                $state.go('login');
            }
        }, function (err) {
            console.error(err);
        });
    });

    $rootScope.seg_amt=[];
    $rootScope.default_category=[];
    $rootScope.show_default_category=[];
    $rootScope.show_default_product=[];
    $rootScope.default_products=[];
    $rootScope.disc_val=[];
    $rootScope.dist_array=[];
    $rootScope.price_val_chg=[];
    $rootScope.profile_state={};
    $rootScope.valid=false;
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'PrayagCtrl'
    })

    // Each tab has its own nav history stack:

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller : 'PrayagCtrl'
    })


    .state('dashboard', {
        url: '/dashboard',
        cache:false,
        templateUrl: 'templates/dashboard.html',
        controller : 'PrayagCtrl'
    })


    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller : 'PrayagCtrl'
    })


    .state('paymaster', {
        url: '/paymaster',
        cache:false,
        templateUrl: 'templates/paymaster.html',
        controller : 'PrayagCtrl'
    })

    .state('paymaster-data', {
        url: '/paymaster-data',
        cache:false,
        templateUrl: 'templates/paymaster-data.html',
        controller : 'PrayagCtrl'
    })


    .state('add-payment', {
        url: '/add-payment',
        templateUrl: 'templates/add-payment.html',
        cache:false,
        controller : 'PrayagCtrl'
    })


    .state('tab.retailers', {
        url: '/retailers',
        cache:false,
        views: {
            'tab-retailers': {
                templateUrl: 'templates/tab-retailers.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('tab.retailers-det', {
        url: '/retailers-det',
        cache:false,
        views: {
            'tab-retailers': {
                templateUrl: 'templates/retailers-details.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.user-detail', {
        url: '/user',
        views: {
            'tab-retailers': {
                templateUrl: 'templates/user-detail.html',
                controller : 'PrayagCtrl'
            }
        }
    })








    .state('tab.distributor', {
        url: '/distributor',
        cache:false,
        views: {
            'tab-distributor': {
                templateUrl: 'templates/tab-distributor.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab.distributor-det', {
        url: '/distributor-det',
        cache:false,
        views: {
            'tab-distributor': {
                templateUrl: 'templates/distributor-details.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.dwr', {
        url: '/dwr',
        cache:false,
        views: {
            'tab-dwr': {
                templateUrl: 'templates/tab-dwr.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.dwr-ret-dist', {
        url: '/dwr-ret-dist',
        cache:false,
        views: {
            'tab-dwr-ret-dist': {
                templateUrl: 'templates/tab-dwr-ret-dist.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.dwr-pay', {
        url: '/dwr-pay',
        cache:false,
        views: {
            'tab-dwr-pay': {
                templateUrl: 'templates/tab-dwr-pay.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.dwr-req', {
        url: '/dwr-req',
        cache:false,
        views: {
            'tab-dwr-req': {
                templateUrl: 'templates/tab-dwr-req.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.dwr-ord', {
        url: '/dwr-ord',
        cache:false,
        views: {
            'tab-dwr-ord': {
                templateUrl: 'templates/tab-dwr-ord.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.leave', {
        url: '/leave',
        cache:false,
        views: {
            'tab-leave': {
                templateUrl: 'templates/tab-leave.html',
                controller : 'PrayagCtrl'
            }
        }
    })


    .state('tab.addleave', {
        url: '/addleave',
        cache:false,
        views: {
            'tab-addleave': {
                templateUrl: 'templates/tab-addleave.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.birthday', {
        url: '/birthday',
        cache:false,
        views: {
            'tab-birthday': {
                templateUrl: 'templates/tab-birthday.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.birthday-detail', {
        url: '/birthday-detail',
        cache:false,
        views: {
            'tab-birthday': {
                templateUrl: 'templates/birthday-detail.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.announcement', {
        url: '/announcement',
        cache:false,
        views: {
            'tab-announcement': {
                templateUrl: 'templates/tab-announcement.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.announcement-detail', {
        url: '/announcement-detail',
        cache:false,
        views: {
            'tab-announcement-detail': {
                templateUrl: 'templates/tab-announcement-detail.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.profile', {
        url: '/profile',
        cache:false,
        views: {
            'tab-profile': {
                templateUrl: 'templates/tab-profile.html',
                controller : 'PrayagCtrl'
            }
        }
    })


    .state('tab.profile-edit', {
        url: '/profile-edit',
        cache:false,
        views: {
            'tab-profile-edit': {
                templateUrl: 'templates/tab-profile-edit.html',
                controller : 'PrayagCtrl'
            }
        }
    })


    .state('tab.expense', {
        url: '/expense',
        cache:false,
        views: {
            'tab-expense': {
                templateUrl: 'templates/tab-expense.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.expense-date', {
        url: '/expense-date',
        cache:false,
        views: {
            'tab-expense-date': {
                templateUrl: 'templates/tab-expense-date.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.expense-day', {
        url: '/expense-day',
        cache:false,
        views: {
            'tab-expense-day': {
                templateUrl: 'templates/tab-expense-day.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.addexpense', {
        url: '/addexpense',
        views: {
            'tab-addexpense': {
                templateUrl: 'templates/tab-addexpense.html',
                controller : 'PrayagCtrl'
            }
        }
    })

    .state('tab.followup', {
        url: '/followup',
        cache:false,
        views: {
            'tab-followup': {
                templateUrl: 'templates/tab-followup.html',
                controller : 'PrayagCtrl'
            }
        }
    })


    .state('tab.nearest', {
        url: '/nearest',
        cache:false,
        views: {
            'tab-nearest': {
                templateUrl: 'templates/tab-nearest.html',
                controller : 'PrayagCtrl'
            }
        }
    })



    .state('become-partner', {
        url: '/partner',
        cache:false,
        templateUrl: 'templates/become-partner.html',
        controller:'PrayagCtrl'
    })

    .state('assign-segment', {
        url: '/assign-segment',
        cache:false,
        templateUrl: 'templates/assign-segment.html',
        controller:'PrayagCtrl'
    })

    .state('assign-distributor', {
        url: '/assign-distributor',
        cache:false,
        templateUrl: 'templates/assign-distributor.html',
        controller:'PrayagCtrl'
    })

    //
    // .state('tab.chats', {
    //     url: '/chats',
    //     views: {
    //         'tab-chats': {
    //             templateUrl: 'templates/tab-chats.html',
    //             controller: 'ChatsCtrl'
    //         }
    //     }
    // })
    //
    // .state('tab.chat-detail', {
    //     url: '/chats/:chatId',
    //     views: {
    //         'tab-chats': {
    //             templateUrl: 'templates/chat-detail.html',
    //             controller: 'ChatDetailCtrl'
    //         }
    //     }
    // })

    // .state('tab.account', {
    //     url: '/account',
    //     views: {
    //         'tab-account': {
    //             templateUrl: 'templates/tab-account.html',
    //             controller: 'AccountCtrl'
    //         }
    //     }
    // })

    //
    // RETAILERS TABS
    //
    .state('tab-ret', {
        url: '/tab-ret',
        abstract: true,
        templateUrl: 'templates/tabs-ret.html',
        controller: 'PrayagCtrl'
    })


    .state('tab-ret.tab-activity-ret', {
        url: '/tab-activity-ret',
        cache:false,
        views: {
            'tab-activity-ret': {
                templateUrl: 'templates/tab-activity-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('map-ret', {
        url: '/map-ret',
        templateUrl: 'templates/point-loc-ret.html',
        cache:false,
        controller: 'PrayagCtrl'
    })

    .state('nearest-map', {
        url: '/nearest-map',
        templateUrl: 'templates/nearest-store-map.html',
        cache:false,
        controller: 'PrayagCtrl'
    })

    .state('tab-ret.tab-order-ret', {
        url: '/tab-order-ret',
        cache:false,
        views: {
            'tab-order-ret': {
                templateUrl: 'templates/tab-order-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-ret.addproduct-ret', {
        url: '/addproduct-ret',
        views: {
            'tab-order-ret': {
                templateUrl: 'templates/addproduct-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('tab-ret.orderdt-ret', {
        url: '/orderdt-ret',
        views: {
            'tab-order-ret': {
                templateUrl: 'templates/orderdt-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-ret.confirmord-ret', {
        url: '/confirmord-ret',
        views: {
            'tab-order-ret': {
                templateUrl: 'templates/confirmord-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('tab-ret.order-details', {
        url: '/order-details-ret',
        cache: false,
        views: {
            'tab-order-details-ret': {
                templateUrl: 'templates/order-details.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('tab-ret.tab-imgdoc-ret', {
        url: '/tab-imgdoc-ret',
        cache:false,
        views: {
            'tab-imgdoc-ret': {
                templateUrl: 'templates/tab-imgdoc-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-ret.gallery-ret', {
        url: '/gallery-ret',
        cache:false,
        views: {
            'tab-imgdoc-ret': {
                templateUrl: 'templates/gallery-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-ret.tab-pop-ret', {
        url: '/tab-pop-ret',
        cache:false,
        views: {
            'tab-pop-ret': {
                templateUrl: 'templates/tab-pop-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })



    .state('tab-ret.addpop-ret', {
        url: '/addpop-ret',
        views: {
            'tab-pop-ret': {
                templateUrl: 'templates/addpop-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-ret.tab-edit-ret', {
        url: '/tab-edit-ret',
        cache:false,
        views: {
            'tab-edit-ret': {
                templateUrl: 'templates/tab-edit-ret.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    //
    // DISTRIBUTER TABS
    //
    .state('tab-dist', {
        url: '/tab-dist',
        abstract: true,
        templateUrl: 'templates/tabs-dist.html',
        controller: 'PrayagCtrl'
    })


    .state('tab-dist.tab-activity-dist', {
        url: '/tab-activity-dist',
        cache:false,
        views: {
            'tab-activity-dist': {
                templateUrl: 'templates/tab-activity-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('tab-dist.tab-order-dist', {
        url: '/tab-order-dist',
        cache:false,
        views: {
            'tab-order-dist': {
                templateUrl: 'templates/tab-order-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-dist.addproduct-dist', {
        url: '/addproduct-dist',
        views: {
            'tab-order-dist': {
                templateUrl: 'templates/addproduct-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })

    .state('tab-dist.orderdt-dist', {
        url: '/orderdt-dist',
        views: {
            'tab-order-dist': {
                templateUrl: 'templates/orderdt-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-dist.confirmord-dist', {
        url: '/confirmord-dist',
        views: {
            'tab-order-dist': {
                templateUrl: 'templates/confirmord-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })



    .state('tab-dist.tab-imgdoc-dist', {
        url: '/tab-imgdoc-dist',
        cache:false,
        views: {
            'tab-imgdoc-dist': {
                templateUrl: 'templates/tab-imgdoc-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-dist.gallery-dist', {
        url: '/gallery-dist',
        cache:false,
        views: {
            'tab-imgdoc-dist': {
                templateUrl: 'templates/gallery-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-dist.tab-pop-dist', {
        url: '/tab-pop-dist',
        cache:false,
        views: {
            'tab-pop-dist': {
                templateUrl: 'templates/tab-pop-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })



    .state('tab-dist.addpop-dist', {
        url: '/addpop-dist',
        views: {
            'tab-pop-dist': {
                templateUrl: 'templates/addpop-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    })


    .state('tab-dist.tab-edit-dist', {
        url: '/tab-edit-dist',
        cache:false,
        views: {
            'tab-edit-dist': {
                templateUrl: 'templates/tab-edit-dist.html',
                controller: 'PrayagCtrl'
            }
        }
    });


    // if none of the above states are matched, use this as the fallback

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var param = function(obj) {
        var query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];


})


.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.views.forwardCache(false);
});

app.directive("searchableMultiselect", function($timeout) {
  return {
    templateUrl: 'templates/manualSearchandselect.html',

    restrict: 'AE',
    scope: {
      displayAttr: '@',
      selectedItems: '=',
      allItems: '=',
      readOnly: '=',
      removeItem: '&',
      addItem: '&',
    },
    link: function(scope, element, attrs) {
      element.bind('click', function (e) {
        e.stopPropagation();
      });

      scope.width = element[0].getBoundingClientRect();

      scope.updateSelectedItems = function(obj)
      {
        console.log(obj);

        var selectedObj;
        var index;
        for (i = 0; typeof scope.selectedItems !== 'undefined' && i < scope.selectedItems.length; i++)
        {
          if (scope.selectedItems[i].toUpperCase() === obj.Key.toUpperCase())
          {
            selectedObj = scope.selectedItems[i];
            index = i;
            break;
          }
        }
        console.log(selectedObj);

        if ( typeof selectedObj === 'undefined' )
        {
          scope.addItem({item: obj});
        }
        else
        {
          scope.addItem({item: obj});
        }
      };

      scope.isItemSelected = function(item)
      {
        if ( typeof scope.selectedItems === 'undefined' ) return false;
        var tmpItem;
        for (i=0; i < scope.selectedItems.length; i++) {
          tmpItem = scope.selectedItems[i];
          if ( typeof tmpItem !== 'undefined'
          &&	typeof tmpItem !== 'undefined'
          &&	typeof item[scope.displayAttr] !== 'undefined'
          &&	tmpItem.toUpperCase() === item[scope.displayAttr].toUpperCase() ) {
            return true;
          }
        }
        return false;
      };

      scope.commaDelimitedSelected = function() {
        var list = "";
        angular.forEach(scope.selectedItems, function (item, index) {
          list += item;
          if (index < scope.selectedItems.length - 1) list += ', ';
        });
        return list.length ? list : "Select an option";
      }
    }
  }
});
