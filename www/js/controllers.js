angular.module('starter.controllers', ['ionic','ngMaterial','chart.js','dcbImgFallback','ngCordova.plugins.nativeStorage'])

// .controller('loginCtrl', function($scope) {})

.controller('DashCtrl', function($scope, $ionicModal,$state) {

    $scope.doTheBack = function() {
        window.history.back();
    }

    $scope.retailer_list= function() {
        $state.go('tab.retailers');
    }


    $scope.distributer_list= function() {
        $state.go('tab.distributor');
    }


    $scope.profile= function() {
        $state.go('tab.profile');
    }


    //===============

})


.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})

.directive('stringToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                return '' + value;
            });
            ngModel.$formatters.push(function(value) {
                return parseFloat(value);
            });
        }
    };
})

.directive('dateInput', function(){
    return {
        restrict : 'A',
        scope : {
            ngModel : '='
        },
        link: function (scope) {
            if (scope.ngModel) scope.ngModel = new Date(scope.ngModel);
        }
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.doTheBack = function() {
        window.history.back();
    };


    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $scope.settings = {
        enableFriends: true
    };
})


.controller('ActivityCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=true;
    $rootScope.img=false;
    $rootScope.pop=false;
    $rootScope.ord=false;
    $rootScope.edit=false;
})

.controller('RETOrderCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.img=false;
    $rootScope.pop=false;
    $rootScope.ord=true;
    $rootScope.edit=false;
})

.controller('RADDproCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.img=false;
    $rootScope.pop=false;
    $rootScope.ord=true;
    $rootScope.edit=false;
})

.controller('OrderDtCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=true;
    $rootScope.pop=false;
    $rootScope.img=false;
    $rootScope.edit=false;
})


.controller('ConfirmOrdCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=true;
    $rootScope.pop=false;
    $rootScope.img=false;
    $rootScope.edit=false;

    //  $scope.currentDate = new Date();
    //  $scope.formatDate = function(date){
    // return new Date(date)
    //   }
    //
    //   $scope.sub_date = function()
    //   {
    //     $scope.currentDate = moment($scope.currentDate).subtract(1, 'days');
    //     $scope.orderDate = moment($scope.currentDate).format('DD-MM-YYYY');
    //     console.log($scope.orderDate);
    //   }

})


.controller('ImgDocCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=false;
    $rootScope.pop=false;
    $rootScope.img=true;
    $rootScope.edit=false;
})

.controller('GalleryCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=false;
    $rootScope.img=true;
    $rootScope.pop=false;
    $rootScope.edit=false;
})

.controller('PopCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=false;
    $rootScope.img=false;
    $rootScope.pop=true;
    $rootScope.edit=false;
})


.controller('ADDPopCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=false;
    $rootScope.img=false;
    $rootScope.pop=true;
    $rootScope.edit=false;
})


.controller('EditCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $rootScope.act=false;
    $rootScope.ord=false;
    $rootScope.img=false;
    $rootScope.pop=false;
    $rootScope.edit=true;
})


.controller('AddpartnerCtrl', function($scope, $rootScope) {

    $scope.doTheBack = function() {
        window.history.back();
    };

    $scope.activeButton='1';
})



.controller('PrayagCtrl',function($scope,$ionicModal,$timeout,loginService,$state,$ionicLoading,$cordovaSQLite,$ionicPopup,mySharedService,Camera,$ionicActionSheet,$cordovaFileTransfer,$cordovaImagePicker,$ionicHistory,$rootScope,$ionicHistory,$cordovaToast,$cordovaFile, $cordovaGeolocation,$filter, $cordovaNativeStorage, $ionicScrollDelegate, BackgroundGeolocationService,$cordovaAppVersion,$window,$location)
{

    $scope.data=[];
    $scope.default_segment=[];
    $scope.default_segment1=[];
    $rootScope.search_data = {};
    $scope.m={}
    $scope.y={}


    $scope.exec_name=mySharedService.ecex_name;

    $scope.default_segment=mySharedService.default_segment;
    $scope.default_segment1=mySharedService.default_segment1;
    $rootScope.default_category=mySharedService.default_category;
    $rootScope.default_products=mySharedService.default_products;

    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    $scope.m = month[new Date().getMonth()];
    $scope.y = new Date().getFullYear().toString();

    console.log($scope.m,$scope.y)


    $scope.getAllProductinfo=function()
    {
        console.log("function call");

        var data ={ 'ret_id':mySharedService.shareRetailerDetaildata.id, 'state':mySharedService.shareRetailerDetaildata.state_name,};


        console.log(mySharedService.shareRetailerDetaildata)

        loginService.orpPostServiceRequest('/index.php/master/getallproduct_info',data)
        .then(function (result)
        {
            console.log(result.data);
            $rootScope.dr_default_segment= [];
            $rootScope.dr_default_category= [];

            mySharedService.default_category = [];
            $rootScope.default_category=[];

            mySharedService.default_products = [];
            $rootScope.default_products = [];

            mySharedService.temp_default_category = [];
            mySharedService.temp_default_products = [];

            mySharedService.dr_default_segment=[];

            mySharedService.default_category

            for(i=0;i<result.data.length;i++)
            {
                $rootScope.dr_default_segment.push({'seg_name':result.data[i].segment_name});
                mySharedService.dr_default_segment.push({'seg_name':result.data[i].segment_name});
            }
            for(j=0;j<result.data1.length;j++)
            {
                // $rootScope.dr_default_category.push({'cat_nos':result.data1[j].product_category_no,'seg_name':result.data1[j].segment_name,'product':result.data1[j].product_name,'id':result.data1[j].id});
                mySharedService.default_category.push({'cat_nos':result.data1[j].product_category_no,'seg_name':result.data1[j].segment_name,'product':result.data1[j].product_name,'id':result.data1[j].id});

                $rootScope.default_category.push({'cat_nos':result.data1[j].product_category_no,'seg_name':result.data1[j].segment_name,'product':result.data1[j].product_name,'id':result.data1[j].id});
            }

            for(j=0;j<result.data2.length;j++)
            {
                mySharedService.default_products.push({'cat_nos':result.data2[j].product_category_no,'seg_name':result.data2[j].segment_name,'product':result.data2[j].product_name,'id':result.data2[j].id});

                $rootScope.default_products.push({'cat_nos':result.data2[j].product_category_no,'seg_name':result.data2[j].segment_name,'product':result.data2[j].product_name,'id':result.data2[j].id});
            }

            mySharedService.temp_default_category = mySharedService.default_category;
            mySharedService.temp_default_products = mySharedService.default_products;

            // mySharedService.dr_default_segment=$rootScope.dr_default_segment;
            // mySharedService.dr_default_category=$rootScope.dr_default_category;

            console.log("****************** NEW ******* $rootScope.dr_default_segment ***********************");
            console.log($rootScope.dr_default_segment);
            console.log("****************** NEW ******* mySharedService.dr_default_segment ***********************");
            console.log(mySharedService.dr_default_segment);

            console.log("****************** NEW ******* mySharedService.default_category ***********************");
            console.log(mySharedService.default_category);
            console.log("****************** NEW ******* $rootScope.default_category ***********************");
            console.log($rootScope.default_category);

            console.log("****************** mySharedService.default_products *******************************");
            console.log(mySharedService.default_products);
            console.log("****************** $rootScope.default_products *******************************");
            console.log($rootScope.default_products);

            console.log("****************** mySharedService.temp_default_category *******************************");
            console.log(mySharedService.temp_default_category);
            console.log("****************** mySharedService.temp_default_products *******************************");
            console.log(mySharedService.temp_default_products);


            mySharedService.show_default_category = [];
            $rootScope.show_default_category = [];
            for(i=0;i<50;i++)
            {
                if(i<mySharedService.default_category.length)
                {
                    mySharedService.show_default_category.push(mySharedService.default_category[i]);
                    $rootScope.show_default_category.push(mySharedService.default_category[i]);
                }
            }

            mySharedService.show_default_product = [];
            $rootScope.show_default_product = [];
            for(i=0;i<50;i++)
            {
                if(i<mySharedService.default_products.length)
                {
                  mySharedService.show_default_product.push(mySharedService.default_products[i]);
                  $rootScope.show_default_product.push(mySharedService.default_products[i]);
                }
            }


        },
        function (resultData) {
            $ionicLoading.hide();

        });


    }

    console.log($location.path());

    if($location.path()=='/tab/retailers-det' || $location.path()=='/tab/distributor-det')
    {
        console.log("sssssssss")

        // $scope.getAllProductinfo();
        console.log("pppppppppppp")

    }


    if($ionicHistory.currentStateName() === 'dashboard')
    {
        $scope.default_segment=[];
        $rootScope.show_default_category=[];
        mySharedService.default_segment=[];
        mySharedService.default_category=[];
        mySharedService.default_products=[];

        loginService.default_segment()
        .then(function (result)
        {
            // console.log(result);
            for(i=0;i<result.data.data.length;i++)
            {
                mySharedService.default_segment.push({'seg_name':result.data.data[i].segment_name});
            }

            for(j=0;j<result.data.data1.length;j++)
            {
                mySharedService.default_category.push({'cat_nos':result.data.data1[j].product_category_no,'seg_name':result.data.data1[j].segment_name,'product':result.data.data1[j].product_name,'id':result.data.data1[j].id});
            }

            for(k=0;k<result.data.data2.length;k++)
            {
                mySharedService.default_products.push({'cat_nos':result.data.data2[k].product_category_no,'seg_name':result.data.data2[k].segment_name,'product':result.data.data2[k].product_name,'id':result.data.data2[k].id});
            }

            $cordovaNativeStorage.setItem("ref", mySharedService.default_segment).then(function (value) {
                $cordovaNativeStorage.getItem("ref").then(function (value) {
                    console.log(value);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });

            $cordovaNativeStorage.setItem("catt", mySharedService.default_category).then(function (value) {
                $cordovaNativeStorage.getItem("catt").then(function (value) {
                    console.log(value);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });

            $cordovaNativeStorage.setItem("prodd", mySharedService.default_products).then(function (value) {
                $cordovaNativeStorage.getItem("prodd").then(function (value) {
                    console.log(value);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        },
        function (err) {
            console.error(err);
        })
        mySharedService.store_default_segments=mySharedService.default_segment;
        mySharedService.store_default_category=mySharedService.default_category;
        mySharedService.store_default_products=mySharedService.default_products;
    }

    $scope.default_segment_select = {
        seg_name: ""
    };

    $scope.default_category_select = {
        seg_name: "",
        cat_nos: "",
        id: ""
    };

    $rootScope.default_product_select = {
        seg_name: "",
        cat_nos: "",
        id: "",
        product: ""
    };

    $scope.seg_flag=false;
    $scope.select_all=function(searchkey,pno)
    {
        console.log(searchkey+" "+pno);
        console.log(mySharedService.dr_default_segment);
        if(searchkey && pno){
        $scope.seg_flag=true;
        $rootScope.dr_default_segment=[];
        for(i=0;i<mySharedService.dr_default_segment.length;i++)
        {
            if(mySharedService.dr_default_segment[i].seg_name.slice(0,searchkey.length)==searchkey || (mySharedService.dr_default_segment[i].seg_name.slice(0,searchkey.length)).toLowerCase()==searchkey)
            {
                console.log(i);
                $rootScope.dr_default_segment.push({'seg_name':mySharedService.dr_default_segment[i].seg_name});
                console.log($rootScope.dr_default_segment);
            }
        }
        if(searchkey.length==0)
        {
            $rootScope.dr_default_segment=mySharedService.dr_default_segment;
        }
        }
        else{

          if($scope.seg_flag)
          {
              // mySharedService.show_default_category=[];
              // $rootScope.show_default_category=[];
              $rootScope.dr_default_segment=[];
              console.log("0 In iF");
              $rootScope.dr_default_segment=mySharedService.dr_default_segment;
              // for(i=0;i<50;i++)
              // {
              //     if(i<mySharedService.default_category.length)
              //     {
              //         mySharedService.show_default_category.push(mySharedService.default_category[i]);
              //         $rootScope.show_default_category.push(mySharedService.default_category[i]);
              //     }
              // }
              $scope.flag=false;
          }else{

            console.log("ELSE");
            $rootScope.dr_default_segment = [];
            var o = mySharedService.dr_default_segment.length;
            console.log(mySharedService.dr_default_segment.length+" : dr Segment length");
            for(i=0;i<o;i++)
            {
                $rootScope.dr_default_segment.push({'seg_name':mySharedService.dr_default_segment[i].seg_name});
                $scope.$digest();
            }
            }
          }
        console.log($rootScope.dr_default_segment);
    }

    $scope.flag=false;
    $scope.select_all_cat=function(searchkey,pno)
    {
        if(mySharedService.temp_default_category.length == 0)
        {
            mySharedService.temp_default_category=$rootScope.default_category;
        }

        if(mySharedService.temp_default_products.length == 0)
        {
            mySharedService.temp_default_products=$rootScope.default_products;
        }
        console.log(searchkey+" "+pno);
        // if(searchkey)
        // {
        //     $scope.flag=true;
        //     console.log("IF");
        //     $rootScope.dr_default_category=[];
        //     $rootScope.show_default_category=[];
        //     console.log(searchkey.length);
        //     for(i=0;i<mySharedService.dr_default_category.length;i++)
        //     {
        //         if(mySharedService.dr_default_category[i].cat_nos.slice(0,searchkey.length)==searchkey || (mySharedService.dr_default_category[i].cat_nos.slice(0,searchkey.length)).toLowerCase()==searchkey)
        //         {
        //             console.log(i);
        //             $rootScope.dr_default_category.push({'cat_nos':mySharedService.dr_default_category[i].cat_nos,'seg_name':mySharedService.dr_default_category[i].seg_name,'id':mySharedService.dr_default_category[i].id,'product':mySharedService.dr_default_category[i].product});

        //             $rootScope.show_default_category.push({'cat_nos':mySharedService.dr_default_category[i].cat_nos,'seg_name':mySharedService.dr_default_category[i].seg_name,'id':mySharedService.dr_default_category[i].id,'product':mySharedService.dr_default_category[i].product});
        //         }
        //     }
        //     var o = $rootScope.show_default_category.length;
        //     var x = 50 + $rootScope.show_default_category.length;
        //     for(i=o;i<x;i++)
        //     {
        //         if(i<mySharedService.dr_default_category.length)
        //         {
        //             mySharedService.show_default_category.push(mySharedService.dr_default_category[i]);
        //             // $scope.$digest();
        //         }
        //     }
        //     if(searchkey.length==0)
        //     {
        //         $rootScope.dr_default_category=mySharedService.dr_default_category;
        //     }
        // }
        if(searchkey)
        {
            $scope.flag=true;
            console.log("IF");
            $rootScope.default_category=[];
            $rootScope.show_default_category=[];
            console.log(searchkey.length);
            for(i=0;i<mySharedService.default_category.length;i++)
            {
                if(mySharedService.default_category[i].cat_nos.slice(0,searchkey.length)==searchkey || (mySharedService.default_category[i].cat_nos.slice(0,searchkey.length)).toLowerCase()==searchkey)
                {
                    console.log(i);
                    console.log(mySharedService.default_category[i].cat_nos);
                    $rootScope.default_category.push({'cat_nos':mySharedService.default_category[i].cat_nos,'seg_name':mySharedService.default_category[i].seg_name,'id':mySharedService.default_category[i].id,'product':mySharedService.default_category[i].product});

                    $rootScope.show_default_category.push({'cat_nos':mySharedService.default_category[i].cat_nos,'seg_name':mySharedService.default_category[i].seg_name,'id':mySharedService.default_category[i].id,'product':mySharedService.default_category[i].product});

                    console.log($rootScope.default_category);
                    console.log($rootScope.show_default_category);
                }
            }
            var o = $rootScope.show_default_category.length;
            var x = 50 + $rootScope.show_default_category.length;
            for(i=o;i<x;i++)
            {
                if(i<mySharedService.default_category.length)
                {
                    mySharedService.show_default_category.push(mySharedService.default_category[i]);
                    // $scope.$digest();
                }
            }
            if(searchkey.length==0)
            {
                $rootScope.default_category=mySharedService.default_category;
            }
        }
        else
        {
            // if($scope.flag)
            // {
            //     mySharedService.show_default_category=[];
            //     $rootScope.show_default_category=[];
            //     $rootScope.dr_default_category=[];
            //     console.log("0 In iF");
            //     $rootScope.dr_default_category=mySharedService.dr_default_category;
            //     for(i=0;i<50;i++)
            //     {
            //         if(i<mySharedService.dr_default_category.length)
            //         {
            //             mySharedService.show_default_category.push(mySharedService.dr_default_category[i]);
            //             $rootScope.show_default_category.push(mySharedService.dr_default_category[i]);
            //         }
            //     }
            //     $scope.flag=false;
            // }
            if($scope.flag)
            {
                mySharedService.show_default_category=[];
                $rootScope.show_default_category=[];
                $rootScope.default_category=[];
                console.log("0 In iF");
                $rootScope.default_category=mySharedService.default_category;
                for(i=0;i<50;i++)
                {
                    if(i<mySharedService.default_category.length)
                    {
                        mySharedService.show_default_category.push(mySharedService.default_category[i]);
                        $rootScope.show_default_category.push(mySharedService.default_category[i]);
                    }
                }
                $scope.flag=false;
            }
            // else
            // {
            //     console.log("ELSE");
            //     var o = $rootScope.show_default_category.length;
            //     var x = 50 + $rootScope.show_default_category.length;
            //     for(i=o;i<x;i++)
            //     {
            //         if(i<mySharedService.dr_default_category.length)
            //         {
            //             $rootScope.show_default_category.push(mySharedService.dr_default_category[i]);
            //             $scope.$digest();
            //         }
            //     }
            // }
            else
            {
                console.log("ELSE");
                var o = $rootScope.show_default_category.length;
                var x = 50 + $rootScope.show_default_category.length;
                for(i=o;i<x;i++)
                {
                    // if(i<mySharedService.default_category.length)
                    // {
                    //     $rootScope.show_default_category.push(mySharedService.default_category[i]);
                    //     $scope.$digest();
                    // }

                    if(i<$rootScope.default_category.length)
                    {
                        $rootScope.show_default_category.push($rootScope.default_category[i]);
                        $scope.$digest();
                    }
                }
            }
        }
        console.log(mySharedService.default_category);
        console.log($rootScope.dr_default_category);
        console.log(mySharedService.dr_default_category);
        console.log($rootScope.show_default_category);
    }

    console.log(app_version);
    console.log(salesexe_id);

    // commented
    // if(ionic.Platform.isAndroid() && salesexe_id) {

    //     $cordovaAppVersion.getVersionNumber()
    //     .then(function (version) {
    //         console.log("app version");

    //         console.log(version);
    //         appVersion = version;

    //         if(app_version!==version)
    //         {
    //             versionerr(app_version,version);
    //             $ionicPlatform.registerBackButtonAction(function(e) {
    //                 //This will restrict the user to close the popup by pressing back key
    //                 e.preventDefault();
    //             },401);
    //         };
    //     });

    //     versionerr = function(newv,oldv) {

    //         var myPopup = $ionicPopup.show({
    //             title: "Update Available",
    //             template: "A newer version("+newv+") of this app is available for download. Please update it from PlayStore ! ",
    //             subTitle: 'Current version : '+oldv,
    //             buttons: [{
    //                 text: 'Exit',
    //                 type: 'button-dark',
    //                 onTap: function(e) {
    //                     ionic.Platform.exitApp();
    //                 }
    //             }, {
    //                 text: '<b>Update</b>',
    //                 type: 'button-positive',
    //                 onTap: function(e) {
    //                     $window.open("https://play.google.com/store/apps/details?id=com.ab_prayag.sales", '_system');
    //                     ionic.Platform.exitApp();
    //                 }
    //             }]
    //         });
    //     }
    // }





    $scope.prod_flag=false;
    $scope.select_all_prod=function(searchkey,pno)
    {
        if(mySharedService.temp_default_category.length == 0)
        {
            mySharedService.temp_default_category=$rootScope.default_category;
        }

        if(mySharedService.temp_default_products.length == 0)
        {
            mySharedService.temp_default_products=$rootScope.default_products;
        }
        console.log(searchkey+" "+pno);
        if(searchkey)
        {
            $scope.prod_flag=true;
            console.log("IF");
            $rootScope.default_products=[];
            $rootScope.show_default_product=[];
            console.log(searchkey.length);
            for(i=0;i<mySharedService.default_products.length;i++)
            {
                if(mySharedService.default_products[i].product.slice(0,searchkey.length)==searchkey || (mySharedService.default_products[i].product.slice(0,searchkey.length)).toLowerCase()==searchkey)
                {
                    console.log(i);
                    $rootScope.default_products.push({'cat_nos':mySharedService.default_products[i].cat_nos,'seg_name':mySharedService.default_products[i].seg_name,'id':mySharedService.default_products[i].id,'product':mySharedService.default_products[i].product});

                    $rootScope.show_default_product.push({'cat_nos':mySharedService.default_products[i].cat_nos,'seg_name':mySharedService.default_products[i].seg_name,'id':mySharedService.default_products[i].id,'product':mySharedService.default_products[i].product});
                }
            }
            var o = $rootScope.show_default_product.length;
            var x = 50 + $rootScope.show_default_product.length;
            for(i=o;i<x;i++)
            {
                if(i<mySharedService.default_products.length)
                {
                    mySharedService.show_default_product.push(mySharedService.default_products[i]);
                    // $scope.$digest();
                }
            }
            if(searchkey.length==0)
            {
                $rootScope.default_products=mySharedService.default_products;
            }
        }
        else
        {
            if($scope.prod_flag)
            {
                mySharedService.show_default_product=[];
                $rootScope.show_default_product=[];
                $rootScope.default_products=[];
                console.log("0 In iF");
                $rootScope.default_products=mySharedService.default_products;
                for(i=0;i<50;i++)
                {
                    if(i<mySharedService.default_products.length)
                    {
                        mySharedService.show_default_product.push(mySharedService.default_products[i]);
                        $rootScope.show_default_product.push(mySharedService.default_products[i]);
                        // $scope.$digest();
                    }
                }
                $scope.prod_flag=false;
            }
            else
            {

                console.log("ELSE");
                var o = $rootScope.show_default_product.length;
                var x = 50 + $rootScope.show_default_product.length;
                for(i=o;i<x;i++)
                {
                    if(i<mySharedService.default_products.length)
                    {
                        $rootScope.show_default_product.push(mySharedService.default_products[i]);
                        $scope.$digest();
                    }
                }

            }
        }
        console.log($rootScope.default_products);
        console.log(mySharedService.default_products);
        console.log($rootScope.show_default_product);
    }

    $scope.activeButton='1';
    $scope.per_det=true;
    $scope.doTheBack = function() {
        $rootScope.cache_val=true;
        window.history.back();
    };

    $scope.dr_type=mySharedService.dr_type;

    //===============SEARCH RETAILER & DISTRIBUTOR WITH MOBILE NO. MODAL DATA START
    //===============
    // ++++++++++++++++++ modal name +++++++++++++++++++++++ //
    $ionicModal.fromTemplateUrl('templates/search-ret-dis.html', {
        scope: $scope,
        animation: 'zoomIn'
    }).then(function(modal) {
        $scope.searchrtt = modal;
    });
    // ++++++++++++++++++ Open modal +++++++++++++++++++++++ //
    $scope.openrt = function(type) {
        $scope.mydata.mob='';
        $scope.dr_type=type;
        mySharedService.dr_type=type;
        console.log($scope.dr_type);
        $scope.searchrtt.show();
    };
    // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
    $scope.closertd = function() {
        $scope.searchrtt.hide();
    };

    //===============
    //===============SEARCH RETAILER & DISTRIBUTOR WITH MOBILE NO. MODAL DATA END..........
    //===============

    //===============
    //===============SEARCH PAYMASTER RETAILER & DISTRIBUTOR MODAL DATA START
    //===============
    // ++++++++++++++++++ modal name +++++++++++++++++++++++ //
    $ionicModal.fromTemplateUrl('templates/search-paymaster.html', {
        scope: $scope,
        animation: 'zoomIn'
    }).then(function(modal) {
        $scope.searchrt = modal;
    });
    // ++++++++++++++++++ Open modal +++++++++++++++++++++++ //
    $scope.opensp = function() {
        $scope.searchrt.show();
    };
    // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
    $scope.closesp = function() {
        $scope.searchrt.hide();
    };

    //===============
    //===============SEARCH RETAILER & DISTRIBUTOR WITH MOBILE NO. MODAL DATA END..........
    //===============


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

            $scope.latitude=position.coords.latitude;
            $scope.longitude=position.coords.longitude;

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

                $scope.latitude=position.coords.latitude;
                $scope.longitude=position.coords.longitude;

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

    $scope.myProfileDetail={};

    /*Login function of controller prayag start*/
    $scope.login = function (uname,pswrd)
    {
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.loginuser(uname,pswrd)
        .then(function (result)
        {
            console.log(result.data);

            $('.ion-navicon-round').trigger('click');

            var query = "INSERT INTO "+dbTableName+" (username,password) VALUES (?,?)";
            $cordovaSQLite.execute(db, query,[uname,pswrd]).then(function(resultData) {
                username = uname;
                password = pswrd;
                salesexe_id = result.data.sys_user_id;
                salesexe_name = result.data.sys_user_name;
                salesexe_category = result.data.assigned_category;
                mySharedService.salesexe_id=result.data.sys_user_id;
                mySharedService.ecex_name=result.data.sys_user_name;
                salesexe_pincode = result.data.pincode;
                salesexe_district = result.data.district_name;
                app_version = result.data.varsion;
                salesexe_state = result.data.state_name;
                $scope.myProfileDetail.image=result.data.image;

                console.log(salesexe_district);


                console.log("INSERT USERNAME -> " + username);
                console.log("INSERT PASSWORD -> " + password);
                console.log("INSERT ID -> " + salesexe_id);
                console.log("INSERT PIN -> " + salesexe_pincode);

                $state.go('dashboard');
                if (ionic.Platform.isAndroid())
                {
                    cordova.plugins.locationAccuracy.request(onRequestSuccess, onRequestFailure, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);

                    BackgroundGeolocationService.init(salesexe_id);
                }
                $timeout(function () { $ionicLoading.hide(); }, 200);
            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            });
        },
        function (resultData) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });

    }

    /*Login function of controller prayag end*/

    /*Retailer listing function of controller prayag start*/

    $scope.retailer_list=[];
    $scope.retailer_list= mySharedService.shareRetailerdata;
    $scope.retailerlist= function (val=0)
    {
        if(val == 0)
        {
            $scope.retailer_list = [];
            mySharedService.shareRetailerdata = [];
        }
        $scope.out_data=false;
        mySharedService.out_data=false;
        $rootScope.show_temp=true;
        $rootScope.ref_ret_lst=true;
        $rootScope.show_await_temp=false;
        $scope.await_retailer_list=[];
        mySharedService.shareAwaitRetailerdata = [];
        $scope.bckval='';
        mySharedService.sharebckvaldata='';
        $scope.backnear='';
        mySharedService.sharebckneardata='';
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.retailerlist(val)
        .then(function (result)
        {

            if(result.length == 0)
            {
                $rootScope.noMoreItemsToDisplay = true;
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.retailer_list = $scope.retailer_list.concat(result);
            mySharedService.shareRetailerdata = mySharedService.shareRetailerdata.concat(result);

            // $scope.retailer_list = result;
            // $scope.contact_person=result.contact_person;

            console.log($scope.retailer_list);

            mySharedService.prepForRetailerDataBroadcast(result);

            console.log($ionicHistory.currentStateName());


            if(!$rootScope.isDetailClicked) {
                $state.go('tab.retailers');
            }

            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    /*Retailer listing function of controller prayag end*/

    $rootScope.noMoreItemsToDisplay = false;
    $scope.loadMoreData = function() {
        console.log("FF1");
        $timeout(function() {
            console.log("FF");
            console.log($scope.retailer_list.length);
            if($rootScope.ref_ret_lst)
            {
                $scope.retailerlist($scope.retailer_list.length || 0);
            }
            else
            {
                $scope.awaitretailerlist($scope.await_retailer_list.length || 0);
            }
        }, 200);
    }

    /*Awaiting Retailer listing function of controller prayag start*/

    $scope.await_retailer_list=[];
    $scope.await_retailer_list= mySharedService.shareAwaitRetailerdata;
    $scope.awaitretailerlist= function (val=0)
    {
        if(val == 0)
        {
            $scope.await_retailer_list = [];
            mySharedService.shareAwaitRetailerdata = [];
        }

        $rootScope.show_await_temp=true;
        $rootScope.show_temp=false;
        $rootScope.ref_ret_lst=false;
        $scope.retailer_list=[];
        mySharedService.shareRetailerdata=[];

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.awaitretailerlist(val)
        .then(function (result)
        {
            if(result.length == 0)
            {
                $rootScope.noMoreItemsToDisplay = true;
            }

            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.await_retailer_list = $scope.await_retailer_list.concat(result);
            mySharedService.shareAwaitRetailerdata = mySharedService.shareAwaitRetailerdata.concat(result);

            // $scope.await_retailer_list = result;
            // mySharedService.shareAwaitRetailerdata = result;
            // mySharedService.prepForRetailerDataBroadcast(result);
            console.log($scope.await_retailer_list);
            $state.go('tab.retailers');
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    /*Awaiting Retailer listing function of controller prayag end*/

    /*distrretailer search number function of ctrl prayag start
    if num exist it will refer to the user-detail
    page if not than refer to the become partner page*/
    $scope.dr_number_search={};
    $scope.dr_number_search= mySharedService.shareDRNumSearchdata;
    $scope.number_search= function (enter_num)
    {
        loginService.number_search(enter_num)
        .then(function (result)
        {
            console.log(result);
            $scope.dr_number_search = result;
            console.log($scope.dr_number_search);
            if(result.id) {
                $state.go('tab.user-detail');
            } else{
                $state.go('become-partner');
            }

            // $scope.contact_person=result.contact_person;
            console.log($scope.dr_number_search);
            mySharedService.prepForDrNUmSearchDataBroadcast(result);
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();
            document.getElementById('enter_num_blank').value='';

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }


    /*distrretailer search number function of ctrl prayag end
    if num exist it will refer to the user-detail
    page if not than refer to the become partner page*/

    //   /*Become a new partner function start*/
    //      $scope.becpartnerdata=[];
    //      $scope.become_partner= function ()
    //      {

    //       var contact_num = $scope.dr_number_search.enter_num;
    //       var next_followup = moment($scope.actdata.next_followup).format('YYYY-MM-DD');
    //       console.log(next_followup);
    //       loginService.become_partner(ret_id,$scope.actdata.activity_date,$scope.actdata.activity_type,$scope.actdata.remark,next_followup)
    //       .then(function (result)
    //       {
    //          console.log(result);
    //           $state.go('tab.retailers');
    //           $timeout(function () { $ionicLoading.hide(); }, 200);
    //           $ionicLoading.hide();

    //         },
    //            function (err) {
    //              $ionicLoading.hide();
    //              console.error(err);
    //           })
    //       }
    // /*Become a new partner function end*/

    /*dateformat function start*/
    $scope.formatDate = function(date){
        return new Date(date)
    }
    /*dateformat function end*/

    /*Paymaster function of prayag ctrl start*/

    $scope.paymaster_lst=[];
    $scope.paymaster_lst=mySharedService.sharePaymasterListdata;
    console.log($scope.paymaster_lst);
    $scope.paymaster_det= function (id,type,paymaster)
    {
        console.log(id);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.paymaster_lst(id,type)
        .then(function (result)
        {
            $scope.paymaster_lst = result;
            console.log($scope.paymaster_lst);
            mySharedService.prepForPaymasterListBroadcast(result);
            if(paymaster =='1' && type=='1')
            {
                $state.go('paymaster');
            }
            if(paymaster =='1' && type=='2')
            {
                $state.go('paymaster');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Paymaster function of prayag ctrl end*/

    /*Paymaster Data function of prayag ctrl start*/

    $scope.pmaster_data=[];
    $scope.pmaster_type=mySharedService.sharePaymasterTypedata;
    $scope.pmaster_data=mySharedService.sharePaymasterdata;
    console.log($scope.pmaster_data);
    $scope.paymaster_data= function (id,r_id,type)
    {
        console.log(id);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.paymaster_data(id,r_id,type)
        .then(function (result)
        {
            $scope.pmaster_data = result;
            console.log($scope.pmaster_data);
            $scope.pmaster_type=type;
            mySharedService.sharePaymasterTypedata=type;
            mySharedService.prepForPaymasterDataBroadcast(result);

            $state.go('paymaster-data');

            $timeout(function () { $ionicLoading.hide(); }, 200);
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Paymaster Data function of prayag ctrl end*/

    /*Add Paymaster BUTTON function of prayag ctrl start*/

    $scope.d_name=mySharedService.shareDistName;
    $scope.bal=mySharedService.shareBaldata;
    $scope.r_id=mySharedService.shareR_ID;
    $scope.d_id=mySharedService.shareD_ID;

    console.log($scope.d_name);
    console.log($scope.bal);
    $scope.add_paym_click= function (d_name,bal,r_id,d_id,type)
    {
        console.log(d_name+" "+bal+" "+r_id+" "+d_id+" "+type);
        $scope.d_name=d_name;
        $scope.bal=bal;
        $scope.r_id=r_id;
        $scope.d_id=d_id;
        mySharedService.shareDistName=d_name;
        mySharedService.shareBaldata=bal;
        mySharedService.shareR_ID=r_id;
        mySharedService.shareD_ID=d_id;
        $state.go('add-payment');
    }
    /*Add Paymaster BUTTON function of prayag ctrl end*/


    /*Add Paymaster Payment function of prayag ctrl start*/

    $scope.paymaster_payment=[];

    $scope.add_payment= function ()
    {
        if($scope.pmaster_type==2)
        {
            $scope.r_id=$scope.d_name;
        }
        console.log($scope.pmaster_type);
        console.log($scope.data.tot_amt);
        console.log($scope.data.mode);
        console.log($scope.data.cheque_num);

        console.log($scope.data.trans_num);
        console.log($scope.data.desc);

        if($scope.data.cheque_dt)
        {
            $scope.data.chq_dt = moment($scope.data.cheque_dt).format('YYYY-MM-DD');
        }
        $scope.data.pay_dt = moment($scope.data.payment_dt).format('YYYY-MM-DD');

        console.log($scope.data.chq_dt);
        console.log($scope.data.pay_dt);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.add_payment($scope.pmaster_type,$scope.r_id,$scope.d_id,$scope.data.tot_amt,$scope.data.mode,$scope.data.cheque_num,$scope.data.chq_dt,$scope.data.pay_dt,$scope.data.trans_num,$scope.data.desc)
        .then(function (result)
        {
            console.log(result);
            $timeout(function () { $ionicLoading.hide(); }, 200);
            $scope.outstanding_list($scope.pmaster_type);
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Add Paymaster Payment function of prayag ctrl end*/


    /*Retailer detail function of prayag ctrl start*/

    $scope.retailer_det={};
    $scope.retailer_det=mySharedService.shareRetailerDetaildata;
    mySharedService.shareRetailerDetaildata = $scope.retailer_det;
    console.log($scope.retailer_det);
    $scope.bckval=mySharedService.sharebckvaldata;
    $scope.backnear=mySharedService.sharebckneardata;
    $scope.type=mySharedService.type;
    $scope.dr_status=mySharedService.dr_status;
    $scope.data.selectedValue=mySharedService.selectedValue;
    $scope.data.selectedValue1=mySharedService.selectedValue1;
    $scope.data.selectedValue2=mySharedService.selectedValue2;
    $scope.data.selectedValue3=mySharedService.selectedValue3;
    $scope.data.selectedValue6=mySharedService.selectedValue6;
    $scope.mysegments=[];
    $scope.mysegments=mySharedService.mysegments;
    $scope.ret_state_data = mySharedService.ret_state_data;
    $scope.ret_district_data = mySharedService.ret_district_data;
    $scope.ret_pincode_data = mySharedService.ret_pincode_data;
    $scope.ret_city_data = mySharedService.ret_city_data;
    $scope.ret_area_data = mySharedService.ret_area_data;

    $scope.ship_state_data = mySharedService.ship_state_data;
    $scope.ship_district_data = mySharedService.ship_district_data;
    $scope.ship_city_data = mySharedService.ship_city_data;
    $scope.ship_area_data = mySharedService.ship_area_data;
    $scope.ship_pincode_data = mySharedService.ship_pincode_data;
    console.log($scope.data.selectedValue);
    console.log($scope.data.selectedValue1);
    console.log($scope.data.selectedValue2);
    $scope.retailer_segs=mySharedService.retailer_segs;
    $scope.retailer_contact = mySharedService.retailer_contact;

    $scope.retailerdetails= function (id,type,bckval,backnear,int_cont,dr_typee,dr_status)
    {

        $rootScope.isDetailClicked = true;
        console.log(dr_typee);
        console.log(dr_status);
        console.log($scope.bckval);
        console.log($scope.backnear);
        $rootScope.type=type;
        $scope.dr_status=dr_status;
        mySharedService.dr_status=dr_status;
        if(bckval)
        {
            $scope.bckval=bckval;
            mySharedService.sharebckvaldata=bckval;
            if(backnear)
            {
                $scope.backnear=backnear;
                mySharedService.sharebckneardata=backnear;
            }
        }

        console.log(id);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        // if(mySharedService.land_on_order)
        // {
        //   type=3;
        // }
        loginService.retailer_details(id,type)
        .then(function (result)
        {
            console.log($scope.retailer_det.contact_2);
            console.log(result);
            $scope.retailer_det = result.data;
            $scope.retailer_segs = result.seg_data;
            mySharedService.retailer_segs = result.seg_data;
            mySharedService.int_typee=result.data.intrested_contact;
            $scope.retailer_contact = result.contact_data;
            mySharedService.retailer_contact = result.contact_data;

            console.log( $scope.retailer_det);
            $scope.data.selectedValue=$scope.retailer_det.state_name;
            mySharedService.selectedValue=$scope.retailer_det.state_name;
            $scope.data.selectedValue2=$scope.retailer_det.district_name;
            mySharedService.selectedValue2=$scope.retailer_det.district_name;
            $scope.data.selectedValue1=$scope.retailer_det.pincode;
            mySharedService.selectedValue1=$scope.retailer_det.pincode;
            $scope.data.selectedValue3=$scope.retailer_det.city;
            mySharedService.selectedValue3=$scope.retailer_det.city;
            $scope.data.selectedValue6=$scope.retailer_det.area;
            mySharedService.selectedValue6=$scope.retailer_det.area;
            $scope.retail_id=result.data.id;
            $rootScope.retailers_id=result.data.id;
            $scope.contact_person=result.data.contact_person;
            $scope.dr_name = result.data.dr_name;
            $scope.type=result.data.type;
            mySharedService.type=result.data.type;
            $scope.mysegments=result.data1;
            mySharedService.mysegments = result.data1;
            $scope.ret_state_data=result.state;
            mySharedService.ret_state_data = result.state;
            $scope.ret_district_data=result.dists;
            mySharedService.ret_district_data = result.dists;
            $scope.ret_pincode_data=result.pins;
            mySharedService.ret_pincode_data = result.pins;
            $scope.ret_city_data=result.city;
            mySharedService.ret_city_data = result.city;
            $scope.ret_area_data=result.area;
            mySharedService.ret_area_data = result.area;

            $scope.ship_state_data=result.ship_states;
            mySharedService.ship_state_data = result.ship_states;
            $scope.ship_district_data=result.ship_dists;
            mySharedService.ship_district_data = result.ship_dists;
            $scope.ship_city_data=result.ship_city;
            mySharedService.ship_city_data = result.ship_city;
            $scope.ship_area_data=result.ship_area;
            mySharedService.ship_area_data = result.ship_area;
            $scope.ship_pincode_data=result.ship_pins;
            mySharedService.ship_pincode_data = result.ship_pins;
            console.log($scope.retailer_det);
            console.log($rootScope.retailers_id);


            loginService.get_state()
            .then(function (result)
            {
                console.log(result);
                $scope.state_arr=result.data;
                mySharedService.state_arr=result.data;
                console.log($scope.state_arr);
            },function (err) {
                console.error(err);
            })

            loginService.get_district($scope.retailer_det.state_name)
            .then(function (result)
            {
                console.log(result);
                $scope.dist_arr=result.data;
                mySharedService.dist_arr=result.data;
                console.log($scope.dist_arr);
            },function (err) {
                console.error(err);
            })

            loginService.get_city($scope.retailer_det.district_name,$scope.retailer_det.state_name)
            .then(function (result)
            {
                console.log(result);
                $scope.city_arr=result.data;
                mySharedService.city_arr=result.data;
            },function (err) {
                console.error(err);
            })

            loginService.get_area($scope.retailer_det.city,$scope.retailer_det.state_name)
            .then(function (result)
            {
                console.log(result);
                $scope.pin_arr=result.data;
                mySharedService.pin_arr=result.data;
                $scope.area_arr=result.data;
                mySharedService.area_arr=result.data;
            },function (err) {
                console.error(err);
            })

            loginService.set_pincode($scope.retailer_det.area,$scope.retailer_det.state_name)
            .then(function (result)
            {
                console.log(result);
                if(result.data.length)
                {
                    $scope.data.selectedValue1=result.data[0].pincode;
                }
                console.log($scope.data.selectedValue1);
            },function (err) {
                console.error(err);
            })

            loginService.set_area($scope.retailer_det.pincode,$scope.retailer_det.state_name)
            .then(function (result)
            {
                console.log(result);
                if(result.data.length)
                {
                    $scope.data.selectedValue6=result.data[0].area;
                }
                console.log($scope.data.selectedValue6);
            },function (err) {
                console.error(err);
            })

            mySharedService.prepForRetailerDetailDataBroadcast(result.data);
            if(int_cont=='Retailer' || type=='1' || dr_typee=='Ret')
            {
                console.log("RET");
                $rootScope.disable_tabs=false;
                if(dr_typee)
                {
                    $rootScope.disable_tabs=true;
                }
                $state.go('tab.retailers-det');
            }

            if(int_cont=='Distributor' || type=='2' ||  dr_typee=='Dist')
            {
                console.log("DIST");
                $rootScope.disable_dist_tabs=false;
                if(dr_typee)
                {
                    $rootScope.disable_dist_tabs=true;
                }
                $state.go('tab.distributor-det');
            }

            if(type==3)
            {
                if(result.data.intrested_contact=='Retailer')
                {
                    $rootScope.disable_tabs=true;
                    $rootScope.show_await_temp=true;
                    $rootScope.show_temp=false;
                    $rootScope.ref_ret_lst=false;
                    $state.go('tab.retailers-det');
                }
                else
                {
                    $rootScope.disable_dist_tabs=true;
                    $rootScope.show_await_dist_temp=true;
                    $rootScope.show_dist_temp=false;
                    $rootScope.ref_dist_lst=false;
                    $state.go('tab.distributor-det');
                }
            }

            $timeout(function () { $ionicLoading.hide(); }, 200);

            $timeout(function () { $rootScope.isDetailClicked = false; }, 2000);

            mySharedService.default_segment=[];
            for(i=0;i<mySharedService.store_default_segments.length;i++)
            {
                for(j=0;j<$scope.retailer_segs.length;j++)
                {
                    if(mySharedService.store_default_segments[i].seg_name==$scope.retailer_segs[j])
                    {
                        mySharedService.default_segment.push({'seg_name':$scope.retailer_segs[j]});
                    }
                    else
                    {

                    }
                }
            }

            mySharedService.default_category=[];
            for(i=0;i<mySharedService.store_default_category.length;i++)
            {
                for(j=0;j<$scope.retailer_segs.length;j++)
                {
                    if(mySharedService.store_default_category[i].seg_name==$scope.retailer_segs[j])
                    {
                        mySharedService.default_category.push(mySharedService.store_default_category[i]);
                    }
                    else
                    {

                    }
                }
            }

            mySharedService.default_products=[];
            for(i=0;i<mySharedService.store_default_products.length;i++)
            {
                for(j=0;j<$scope.retailer_segs.length;j++)
                {
                    if(mySharedService.store_default_products[i].seg_name==$scope.retailer_segs[j])
                    {
                        mySharedService.default_products.push(mySharedService.store_default_products[i]);
                    }
                    else
                    {

                    }
                }
            }

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }




    /*Retailer detail function of prayag ctrl end*/

    $scope.edit_dr_seg=function(dr_id)
    {
        console.log(dr_id);
        $scope.segment_names=[];
        loginService.get_segment_names()
        .then(function (result)
        {
            console.log(result);
            console.log(result.length);
            for(i=0;i<result.length;i++)
            {
                $scope.segment_names.push(result[i].segment_name);
                mySharedService.segment_names.push(result[i].segment_name);
            }
            console.log($scope.segment_names);
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
        loginService.edit_dr_seg(dr_id)
        .then(function (result)
        {
            console.log(result);
            for(i=0;i<result.length;i++)
            {
                $scope.modifiedOrder.push({value:result[i]});
                $scope.seg_select[$scope.segment_names.indexOf(result[i])]=true;
            }
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    $scope.get_ret_data=function()
    {
        console.log($scope.search_ret);
        loginService.get_ret_data($scope.search_ret)
        .then(function (result)
        {
            console.log(result);
            // $scope.$broadcast('scroll.infiniteScrollComplete');
            if($scope.search_ret.length == 0)
            {
                $rootScope.noMoreItemsToDisplay = false;
            }
            else
            {
                $rootScope.noMoreItemsToDisplay = true;
            }
            $scope.retailer_list = result;
            // mySharedService.shareRetailerdata = result;
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    $scope.show_ret_birth = true;
    $scope.birthday_list = mySharedService.birthday_list;
    $scope.birthday_detail = mySharedService.birthday_detail;
    console.log($scope.birthday_detail);

    $scope.get_today_birthday_info_data=function(type)
    {
        $scope.birthday_list =[];
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });
        loginService.get_today_birthday_info_data(type)
        .then(function (result)
        {
            console.log(result);
            $scope.birthday_list = result;
            mySharedService.birthday_list = result;
            $state.go('tab.birthday');
            $ionicLoading.hide();
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    $scope.goto_birthday_detail = function(id)
    {
        console.log(id);
        // $scope.birthday_detail(id)

        $scope.birthday_detail = {};
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });
        loginService.birthday_detail(id).then(function (result)
        {
            console.log(result);
            $scope.birthday_detail = result.data;
            mySharedService.birthday_detail = result.data;
            console.log($scope.birthday_detail);
            $state.go('tab.birthday-detail');
            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })


    }

    // $scope.birthday_detail = function(id)
    // {
    //     console.log(id);
    //     $scope.birthday_detail = {};
    //     $ionicLoading.show
    //     ({
    //         template: '<span class="icon spin ion-loading-d"></span> Loading...'
    //     });
    //     loginService.birthday_detail(id).then(function (result)
    //     {
    //         console.log(result);
    //         $ionicLoading.hide();
    //         $scope.birthday_detail = result.data;
    //         mySharedService.birthday_detail = result.data;
    //         console.log($scope.birthday_detail);
    //     },
    //     function (err) {
    //         $ionicLoading.hide();
    //         console.error(err);
    //     })

    // }

    $scope.save_edit_dr_seg=function(type)
    {
        console.log($scope.modifiedOrder);
        console.log($rootScope.retailers_id);
        loginService.add_dr_seg($rootScope.retailers_id,$scope.modifiedOrder,2)
        .then(function (result)
        {
            console.log(result);
            if(type==1)
            {
                if($rootScope.disable_tabs==true)
                {
                    $scope.retailerdetails($rootScope.retailers_id,'3','','','','Ret');
                }
                else
                {
                    $scope.retailerdetails($rootScope.retailers_id,'1');
                }
            }
            if(type==2)
            {
                if($rootScope.disable_dist_tabs==true)
                {
                    $scope.retailerdetails($rootScope.retailers_id,'3','','','','Dist');
                }
                else
                {
                    $scope.retailerdetails($rootScope.retailers_id,'2');
                }
            }
        },function (err) {
            console.error(err);
        })
    }

    $scope.req_reg=function(dr_id,type)
    {
        console.log(dr_id);
        loginService.req_reg(dr_id)
        .then(function (result)
        {
            console.log(result);
            if(type==1)
            {
                $scope.awaitretailerlist();
            }
            if(type==2)
            {
                $scope.awaitdistributorlist();
            }
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })

    }


    /*Retailer view_edit(update) function of prayag ctrl start*/
    $scope.retailereditview={};
    $scope.retailereditview=mySharedService.shareRetailerViewEditdata
    $scope.retailer_view_edit= function (id,type)
    {

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        console.log(id);
        console.log($scope.retailer_det);

        loginService.retailer_view_edit(id,$scope.retailer_det.dr_name,$scope.retailer_det.email,$scope.retailer_det.contact_person,$scope.retailer_det.contact_2,$scope.retailer_det.street,$scope.data.selectedValue,$scope.data.selectedValue2,$scope.data.selectedValue1,$scope.data.selectedValue3,$scope.data.selectedValue6)
        .then(function (result)
        {

            mySharedService.prepForRetailerDetailViewEditBroadcast(result);
            if(type=='1')
            {
                // $state.go('tab.retailers-det');
                $scope.retailerdetails(id,type);
            }
            else
            {
                // $state.go('tab.distributor-det');
                $scope.retailerdetails(id,type);
            }

            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Retailer view_edit(update) function of prayag ctrl start*/

    /*Retailer activity-history function of prayag ctrl start*/
    $scope.activity_ret_his={};
    $scope.activity_ret_his=mySharedService.shareActivityRetHistorydata;
    $scope.retactivityhistory= function (ret_id,type)
    {

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.activity_ret_history(ret_id)
        .then(function (result)
        {
            console.log(result);
            $scope.activity_ret_his = result;
            console.log($scope.activity_ret_his);
            mySharedService.prepForActivityRetHistoryBroadcast(result);
            if(type=='1')
            {
                $state.go('tab-ret.tab-activity-ret');
            }
            else
            {
                $state.go('tab-dist.tab-activity-dist');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Retailer activity-history function of prayag ctrl end*/


    /*Retailer activity-ret function of prayag ctrl start*/

    $scope.actdata=[];
    $scope.ordate;
    $scope.curDate = new Date();
    $scope.ordate = moment($scope.curDate).format('YYYY-MM-DD');
    $scope.formatDate = function(date){
        return new Date(date)
    }

    $scope.red_date = function()
    {
        $scope.curDate = moment($scope.curDate).subtract(1, 'days');
        $scope.ordate = moment($scope.curDate).format('YYYY-MM-DD');
        console.log($scope.ordate);
    }

    $scope.today = new Date();
    $scope.ad_date = function()
    {
        $scope.curDate = moment($scope.curDate).format('YYYY-MM-DD');
        $scope.today = moment($scope.today).format('YYYY-MM-DD');
        if($scope.curDate < $scope.today)
        {
            console.log($scope.curDate);
            $scope.curDate = moment($scope.curDate).add(1, 'days');
            $scope.ordate = moment($scope.curDate).format('YYYY-MM-DD');
            console.log($scope.ordate);
        }
    }

    $scope.activityret= function (ret_id,type)
    {
        console.log(type);
        $scope.actdata.activity_date=$scope.ordate;
        var next_followup = moment($scope.actdata.next_followup).format('YYYY-MM-DD');
        console.log(next_followup);
        console.log($scope.actdata.activity_date);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.activity_ret_service(ret_id,$scope.actdata.activity_date,$scope.actdata.activity_type,$scope.actdata.remark,next_followup)
        .then(function (result)
        {
            console.log(type);
            console.log(result);
            $scope.retactivityhistory(ret_id,type);
            if(type=='1')
            {
                $state.go('tab-ret.tab-activity-ret');
            }
            else
            {
                $state.go('tab-dist.tab-activity-dist');
            }

            $scope.actdata=[];
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $cordovaToast.show('Activity Created Successfully', 'short', 'bottom').then(function(success) {
            }, function (error) {
            });
            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Retailer activity-ret function of prayag ctrl end*/

    //MY CODE FOR TEXT RECOGINITION

    // $scope.number_cam=mySharedService.number_cam;
    //  var me = this;
    // // me.current_image = 'img/koro-sensei.png';
    // me.image_description = '';
    //  me.detection_type = 'TEXT_DETECTION';
    //
    //  me.detection_types = {
    //    LABEL_DETECTION: 'label',
    //    TEXT_DETECTION: 'text',
    //    LOGO_DETECTION: 'logo',
    //    LANDMARK_DETECTION: 'landmark'
    //  };
    //
    // var api_key = 'AIzaSyAT08Ea_x2Bi4Kfee46Z0_AKrI0d4zSwrw';
    //
    //
    // $scope.textrecog = function(){
    //    // alert('detection type: ' + me.detection_type);
    //
    // 	var options = {
    //   	destinationType: navigator.camera.DestinationType.DATA_URL,
    //  		sourceType: navigator.camera.PictureSourceType.CAMERA,
    //      targetWidth: 500,
    //      targetHeight: 500,
    //      correctOrientation: true,
    //      cameraDirection: 0,
    //      encodingType: navigator.camera.EncodingType.JPEG
    // 	};
    //
    // 	Camera.getPicture(options).then(function(imagedata){
    //
    //
    // 		me.current_image = "data:image/jpeg;base64," + imagedata;
    //      me.image_description = '';
    //      me.locale = '';
    //
    // 		var vision_api_json = {
    // 		  "requests":[
    // 		    {
    // 		      "image":{
    // 		        "content": imagedata
    // 		      },
    // 		      "features":[
    // 		        {
    // 		          "type": me.detection_type,
    // 		          "maxResults": 1
    // 		        }
    // 		      ]
    // 		    }
    // 		  ]
    // 		};
    //
    // 		var file_contents = JSON.stringify(vision_api_json);
    //
    // 		$cordovaFile.writeFile(
    // 			cordova.file.applicationStorageDirectory,
    // 			'file.json',
    // 			file_contents,
    // 			true
    // 		).then(function(result){
    //
    // 			var headers = {
    // 				'Content-Type': 'application/json'
    // 			};
    //
    // 			options.headers = headers;
    //
    // 			var server = 'https://vision.googleapis.com/v1/images:annotate?key=' + api_key;
    // 			var filePath = cordova.file.applicationStorageDirectory + 'file.json';
    //
    // 			$cordovaFileTransfer.upload(server, filePath, options, true)
    // 		  		.then(function(result){
    //
    //              var res = JSON.parse(result.response);
    //              var key = me.detection_types[me.detection_type] + 'Annotations';
    //              var regex = /(\d+)/g;
    //
    //              console.log(result);
    //              console.log(key);
    // 		    		me.image_description = res.responses[0][key][0].description;
    //             numbers = me.image_description.match(regex);
    //             // alert(text.match(regex));
    //             console.log(numbers);
    //             console.log(me.image_description);
    //             var arr_num = numbers.toString().split(',');
    //             console.log(arr_num);
    //             $scope.number_cam=arr_num;
    //             mySharedService.number_cam=arr_num;
    // 			  }, function(err){
    // 			    alert('An error occured while uploading the file');
    // 			  });
    //
    // 		}, function(err){
    //        alert('An error occured while writing to the file');
    //      });
    //
    // 	}, function(err){
    // 	  alert('An error occured getting the picture from the camera');
    // 	});
    //
    //
    // }


    // $scope.upload_micro = function() {
    //     var options = {
    //           quality : 100,
    //           destinationType : navigator.camera.DestinationType.DATA_URL,
    //           sourceType : navigator.camera.PictureSourceType.CAMERA,
    //           // allowEdit : true,
    //           encodingType: navigator.camera.EncodingType.JPEG,
    //           popoverOptions: CameraPopoverOptions,
    //           // targetWidth: 500,
    //           // targetHeight: 500,
    //           saveToPhotoAlbum: false
    //       };
    //
    //         Camera.getPicture(options).then(function(imageData) {
    //        var imagenew = "data:image/jpeg;base64," + imageData;
    //
    //        var subscriptionKey = "852c583b823c4fcc9b636abdfdf8a44f";
    //
    //       // Replace or verify the region.
    //       //
    //       // You must use the same region in your REST API call as you used to obtain your subscription keys.
    //       // For example, if you obtained your subscription keys from the westus region, replace
    //       // "westcentralus" in the URI below with "westus".
    //       //
    //       // NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
    //       // a free trial subscription key, you should not need to change this region.
    //       var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
    //
    //       // Request parameters.
    //       var params = {
    //           "returnFaceId": "true",
    //           "returnFaceLandmarks": "false",
    //           "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
    //       };
    //
    //       function dataURItoBlob(dataURI) {
    //           // convert base64/URLEncoded data component to raw binary data held in a string
    //           var byteString;
    //           if (dataURI.split(',')[0].indexOf('base64') >= 0)
    //               byteString = atob(dataURI.split(',')[1]);
    //           else
    //               byteString = unescape(dataURI.split(',')[1]);
    //
    //           // separate out the mime component
    //           var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    //
    //           // write the bytes of the string to a typed array
    //           var ia = new Uint8Array(byteString.length);
    //           for (var i = 0; i < byteString.length; i++) {
    //               ia[i] = byteString.charCodeAt(i);
    //           }
    //
    //           return new Blob([ia], {type:mimeString});
    //       }
    //
    //       var sourceImageUrl=dataURItoBlob(imagenew);
    //
    //
    //       // Perform the REST API call.
    //       $.ajax({
    //           url: uriBase + "?" + $.param(params),
    //           processData: false,
    //
    //           // Request headers.
    //           beforeSend: function(xhrObj){
    //               xhrObj.setRequestHeader("Content-Type",'application/octet-stream');
    //               xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    //           },
    //
    //           type: "POST",
    //
    //           // Request body.
    //         data: '{"url": ' + '"' + sourceImageUrl + '"}',
    //         dataType: "json",
    //         success: function(data){
    //         alert("success");
    //         },
    //         error: function(e){
    //         console.log(e);
    //         }
    //       })
    //
    //       .done(function(data) {
    //       $scope.info=data[0];
    //       console.log(data);
    //           // Show formatted JSON on webpage.
    //           // $("#responseTextArea").val(JSON.stringify(data, null, 2));
    //       })
    //
    //       .fail(function(jqXHR, textStatus, errorThrown) {
    //           // Display error message.
    //           var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    //           errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
    //               jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
    //           alert(errorString);
    //       });
    //   })
    // }


    $scope.getGallary = function(src) {

      console.log(src);
      console.log("inside gallary")
      if(src == 2 || src == 3 || src == 4  || src == 7) {

          var options = {
              maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
              width: 500,
              height: 500,
              quality: 50  // Higher is better
          };

      } else  {

          var options = {
              maximumImagesCount: 10, // Max number of selected images, I'm using only one for this example
              width: 500,
              height: 500,
              quality: 50  // Higher is better
          };
      }

      // $cordovaImagePicker.getPictures(options).then(function (results) {
      //     console.log(results);
      //     if(src==7)
      //     {
      //         $scope.mediaData = [];
      //     }
      //     //Loop through acquired images
      //     for (var i = 0; i < results.length; i++) {
      //         $scope.mediaData.push({
      //             src: results[i]
      //         });
      //     }

      //     console.log($scope.mediaData);


      //     if(src == 2 && $scope.mediaData.length) {
      //         $scope.profile_update(2);
      //     }

      //     if(src == 3 && $scope.mediaData.length) {
      //         $scope.bill_upload();
      //     }

      //     if(src == 4 && $scope.mediaData.length) {
      //         $scope.lead_pic();
      //     }

      // }, function(error) {
      //     console.log('Error: ' + JSON.stringify(error));    // In case of error
      // });




      navigator.camera.getPicture(onPhotoURISuccess, onFail,{
          quality: 50,
          sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
          destinationType: navigator.camera.DestinationType.FILE_URI
      });
      // }
      function onPhotoURISuccess(imageURI){
          console.log("onPhotoURISuccess"+imageURI);
          $scope.mediaData.push({
              src:imageURI,
          });
          console.log($scope.mediaData);
          console.log($scope.mediaData[0].src);

          if(src == 2 && $scope.mediaData.length) {
              $scope.profile_update(2);
          }

          if(src == 3 && $scope.mediaData.length) {
              $scope.bill_upload();
          }

          if(src == 4 && $scope.mediaData.length) {
              $scope.lead_pic();
          }

      }
      function onFail(message) {
          console.log('onFail: ' + message);
          alert('Failed beause' + message);
      }



  }


    $scope.uploadurl=upload_url;

    $scope.perm=function(src)
    {

      console.log(src);
        // cordova.plugins.diagnostic.getCameraAuthorizationStatus({
        //     successCallback: function(status) {

        //         console.log('1st'+status);

        //         if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){

        $scope.getGallary(src);

        //         } else {

        //             cordova.plugins.diagnostic.requestCameraAuthorization({
        //                 successCallback: function(data_status) {

        //                     console.log('2nd'+data_status);

        //                     if(data_status != 'DENIED') {
        //                         $scope.getGallary(src);
        //                     }
        //                 },
        //                 errorCallback: function(error){
        //                     console.error(error);
        //                 },
        //                 externalStorage: true
        //             });
        //         }
        //     },
        //     errorCallback: function(error){
        //         console.error("The following error occurred: "+error);
        //     },
        //     externalStorage: true
        // });
    }



    /*Function to provide option either gallery or Camera start*/
    $scope.camera_click = function(src)
    {
        // if($scope.mediaData){
        //   console.log($scope.mediaData);
        //   if ($scope.mediaData[0].src) {
        //     console.log($scope.mediaData[0].src);
        //   }
        // }
        console.log(src);

        if(src == 1 || !$scope.myProfileDetail.image || src == 4) {
            var val = 'remove-pic';
        } else {
            var val = '';
        }
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: "<i class='icon ion-android-image'></i> Take Picture From Gallery"},
                { text: "<i class='icon ion-camera'></i> Open Camera" },
                { text: "<i class='icon ion-android-delete orange-color'></i> Remove Photo", className: val}
            ],
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                //return true;

                if(index === 0) { // Manual Button
                    $scope.perm(src);
                }
                else if(index === 1){
                    $scope.takePicture(src);
                    // $scope.textrecog();
                    // $scope.upload_micro();
                }

                else if(index === 2) {
                    $scope.deletePicture(src);
                }


                return true;
            }
        })
    }
    /*Function to click pic ,picimagefromgallery and show images at front end
    task  call on submit button start*/
    $scope.mediaData = [];
    $scope.takePicture = function (srcc,options) {

        var options = {
            quality : 50,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };

        Camera.getPicture(options).then(function(imageData) {

            var options = {
                fileKey: "image",
                fileName: "image.jpg",
                chunkedMode: false,
                mimeType: "image/*",
                params : {'salesexe_id': salesexe_id}
            };

            if(srcc==7)
            {
                $scope.mediaData = [];
            }

            $scope.mediaData.push({
                src: imageData

            });

            console.log(imageData);

            if(srcc == 2 && $scope.mediaData.length) {
                $scope.profile_update(2);
            }

            if(srcc == 3 && $scope.mediaData.length) {
                $scope.bill_upload();
            }

            if(srcc == 4 && $scope.mediaData.length) {
                $scope.lead_pic();
            }

        }, function(err) {

        })
    };


    /* Profile Delete Function Start*/
    $scope.deletePicture = function(src) {

        if(src == 2) {
            $scope.myProfileDetail.image = '';
            mySharedService.image ='';
            $scope.profile_update(1);
        }
    }
    /*Profile Delete Function End*/

    $scope.lead_pic = function()
    {
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        var options = {
            fileKey: "file",
            fileName: "image.jpg",
            chunkedMode: false,
            mimeType: "image/*",
        };
        console.log($scope.retailer_det.id);
        $cordovaFileTransfer.upload(server_url+"/lead_pic.php?id="+$scope.retailer_det.id, $scope.mediaData[0].src, options).then(function(result) {
            console.log(result);
            $scope.retailer_det.dr_image=$.parseJSON(result.response);
            console.log($scope.retailer_det.dr_image);
            $ionicLoading.hide();
            $scope.mediaData=[];
            console.log("SUCCESS: " + JSON.stringify(result));
            $cordovaToast.show('Profile Picture Updated Successfully', 'short', 'bottom').then(function(success) {
            }, function (error) {
            });
        }, function(err) {
            $ionicLoading.hide();
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
        });
    }


    /*Function to click pic ,picimagefromgallery and show images at front end
    task  call on submit button start*/
    /*upload function start*/
    $scope.upload = function(type) {
        // $scope.ret_id=retailer_det;
        console.log($scope.retailer_det.id);
        console.log($scope.data.title);
        console.log($scope.gall_title);
        console.log(mySharedService.shareDrimagDocDetails);

        if($ionicHistory.currentStateName() === 'tab-ret.gallery-ret'){
            $scope.data.title=mySharedService.shareDrimagDocDetails[0].document_title;
            console.log($scope.data.title);
        }

        if($ionicHistory.currentStateName() === 'tab-dist.gallery-dist'){
            $scope.data.title=mySharedService.shareDrimagDocDetails[0].document_title;
            console.log($scope.data.title);
        }


        $ionicLoading.show({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });
        var count=0;
        if($scope.mediaData.length) {

            angular.forEach($scope.mediaData, function(val, key) {

                var options = {
                    fileKey: "file",
                    fileName: "image.jpg",
                    chunkedMode: false,
                    mimeType: "image/*",
                };
                $cordovaFileTransfer.upload(server_url+"/upload.php?ret_id="+$scope.retailer_det.id+"&title="+$scope.data.title+"&created_by="+salesexe_id,val.src, options).then(function(result) {
                    console.log("SUCCESS: " + JSON.stringify(result));

                    if($scope.mediaData.length == (count+1)) {
                        console.log('length '+ $scope.mediaData.length);
                        console.log('file key '+ (count+1));
                        $scope.data=[];
                        $scope.mediaData=[];
                        $scope.dr_img_doc_list($scope.retailer_det.id,type);

                        $timeout(function (){

                            $ionicLoading.hide();

                            $cordovaToast.show('Document/s Uploaded Successfully', 'short', 'bottom').then(function(success) {

                            }, function (error) {
                            });
                        }, 500);
                    }
                    count++;
                }, function(err) {
                    console.log("ERROR: " + JSON.stringify(err));
                }, function (progress) {

                });
            });

        } else {

            $ionicLoading.hide();
            $cordovaToast.show('Profile Picture Updated Successfully', 'short', 'bottom').then(function(success) {
            }, function (error) {
            });
            if(type=='1')
            {
                $state.go('tab-ret.tab-imgdoc-ret');
            }
            else
            {
                $state.go('tab-dist.tab-imgdoc-dist');
            }
        }
    }

    /*upload function end*/

    /*listing of uploaded document and images of dr funt of prayag ctrl start*/
    $scope.dr_doc_imag={};
    $scope.dr_doc_imag = mySharedService.shareDr_imagDoc;
    console.log($scope.dr_doc_imag);
    // console.log($scope.dr_doc_imag[0].document_title);


    $scope.dr_img_doc_list= function (dr_id,type)
    {

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.dr_img_doc_list(dr_id)
        .then(function (result)
        {

            console.log(result);
            $scope.dr_doc_imag = result;
            console.log($scope.dr_doc_imag);
            mySharedService.prepForDRImgDocBroadcast(result);
            if(type=='1')
            {
                $state.go('tab-ret.tab-imgdoc-ret');
            }
            else
            {
                $state.go('tab-dist.tab-imgdoc-dist');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*listing of uploaded document and images of dr funt of prayag end*/

    /*Details of uploaded document and images of dr on the basis of doc_title funtion
    of prayag ctrl  start*/

    $scope.mediaData=[];


    $scope.myDocAddGallaryList =  mySharedService.shareDrimagDocDetails;



    $scope.dr_img_doc_details= function (dr_id,document_title,type)
    {

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.dr_img_doc_details(dr_id, document_title)
        .then(function (result)
        {
            console.log(result);
            // $scope.dr_doc_details = result;
            $scope.myDocAddGallaryList = result;
            console.log($scope.myDocAddGallaryList);
            mySharedService.prepForDRImgDocDetailsBroadcast(result);
            if(type=='1')
            {
                $state.go('tab-ret.gallery-ret');
            }
            else
            {
                $state.go('tab-dist.gallery-dist');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    /*Details of uploaded document and images of dr on the basis of doc_title funtion
    of prayag ctrl  start*/

    /*function to call on imgdoc back button start*/
    // $scope.dr_img_doc_details_back= function (document_title)
    //       {

    //        alert("jhjf");
    //          $scope.mediaData=[];
    //            //$state.go('tab-ret.tab-imgdoc-ret');

    //        }

    /*function to call on imgdoc back button start*/

    /*Retailer particular retailer pop abd gift listing function of prayag ctrl start*/

    $scope.ret_pop_gift_data={};
    $scope.ret_pop_gift_data =  mySharedService.shareRetPopGiftdata ;
    $scope.ret_pop_gift_list= function (ret_id,type)
    {
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.ret_pop_gift_list(ret_id)
        .then(function (result)
        {
            console.log(result);
            $scope.ret_pop_gift_data = result;
            console.log($scope.ret_pop_gift_data);
            mySharedService.prepForRetPopGiftBroadcast(result);
            if(type=='1')
            {
                $state.go('tab-ret.tab-pop-ret');
            }
            else
            {
                $state.go('tab-dist.tab-pop-dist');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Retailer particular retailer pop abd gift listing function of prayag ctrl end*/

    /*Retailer View & Edit function of prayag ctrl start*/

    // $scope.view_edit_data=[];
    // $scope.view_edit_data =  mySharedService.shareViewEidtdata ;
    // $scope.view_edit= function (ret_id,type)
    // {
    // $ionicLoading.show
    // ({
    //     template: '<span class="icon spin ion-loading-d"></span> Loading...'
    // });
    // console.log($scope.retailer_det);
    //  loginService.get_state()
    //    .then(function (result)
    //    {
    //      console.log(result);
    //      $scope.state_arr=result.data;
    //      mySharedService.state_arr=result.data;
    //      console.log($scope.state_arr);
    //      // $state.go('become-partner');
    //      },function (err) {
    //           console.error(err);
    //      })

    // loginService.view_edit_list(ret_id)
    // .then(function (result)
    // {
    //    console.log(result);
    //    $scope.view_edit_data = result;
    //    console.log($scope.view_edit_data);
    //    mySharedService.shareViewEidtdata = result;
    //    // mySharedService.prepForRetPopGiftBroadcast(result);
    //     if(type=='1')
    //     {
    //      $state.go('tab-ret.tab-pop-ret');
    //     }
    //     else
    //     {
    //       $state.go('tab-dist.tab-pop-dist');
    //     }
    //     $timeout(function () { $ionicLoading.hide(); }, 200);

    //     $ionicLoading.hide();

    //   },
    //      function (err) {
    //        $ionicLoading.hide();
    //        console.error(err);
    //     })
    // }
    /*Retailer View & Edit function of prayag ctrl end*/

    /*Executive Pop and Gift stock info and listing for retailer function of prayag ctrl start*/

    $scope.exe_pop_giftstock_data={};
    $scope.exe_pop_giftstock_data =  mySharedService.shareExePopGiftStockdata ;
    $scope.exe_pop_gift_stock_data= function (type)
    {
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.exe_pop_gift_stock_data()
        .then(function (result)
        {
            console.log(result);
            $scope.exe_pop_giftstock_data = result;
            console.log($scope.exe_pop_giftstock_data);
            mySharedService.prepForExePopGiftStockInfoBroadcast(result);
            if(type=='1')
            {
                $state.go('tab-ret.addpop-ret');
            }
            else
            {
                $state.go('tab-dist.addpop-dist');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Executive Pop and Gift stock info and listing  for retailer function of prayag ctrl start*/

    /*Giving pop_gift to the retailer function of prayag ctrl start*/

    $scope.assignpopgifts_ret_data={};
    $scope.assignpopgifts_ret_data =  mySharedService.shareAssignPopGiftRet ;
    $scope.assignpopgift_ret= function (ret_id,pop_gift_id,qty,type,delnote)
    {

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        loginService.assignpopgift_ret(ret_id,pop_gift_id,qty,delnote)
        .then(function (result)
        {
            console.log(result);
            $scope.assignpopgifts_ret_data = result;
            console.log($scope.assignpopgifts_ret_data);
            mySharedService.prepForAssignPopGiftRetInfoBroadcast(result);
            $scope.ret_pop_gift_list(ret_id,type);
            // $state.go('tab-ret.tab-pop-ret');
            $timeout(function () {
                $cordovaToast.show('Pop Gift Sent Succesfully!', 'short', 'bottom').then(function(success) { },
                function (error) {
                });

            }, 300);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }
    /*Giving pop_gift to the retailer function of prayag ctrl end*/

    $scope.new_result=[];
    $scope.out_data=mySharedService.out_data;
    /*Outstanding retailer listing fuction start*/
    $scope.outstanding_list= function (type)
    {
        console.log(type);
        $scope.out_data=true;
        mySharedService.out_data=true;
        $scope.new_result.push({balance:0});
        // $ionicLoading.show
        // ({
        //     template: '<span class="icon spin ion-loading-d"></span> Loading...'
        // });

        loginService.outstanding_list(type)
        .then(function (result)
        {
            console.log(result);

            if(type=='1')
            {
                $scope.retailer_list = mySharedService.prepForRetailerDataBroadcast(result);
                $state.go('tab.retailers');
            }
            else
            {
                $scope.distributor_list = mySharedService.prepForDistributorListDataBroadcast(result);
                $state.go('tab.distributor');
            }
            $timeout(function () { $ionicLoading.hide(); }, 200);
            $ionicLoading.hide();
        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }


    /*Outstanding retailer listing fuction end*/


    /*Distributor listing function  of prayag ctrl start*/

    $scope.distributor_list=[];
    $scope.distributor_list= mySharedService.shareDistributorListdata;
    $scope.distributorlist= function ()
    {
        $scope.out_data=false;
        mySharedService.out_data=false;
        $rootScope.show_await_dist_temp=false;
        $rootScope.show_dist_temp=true;
        $scope.await_distributor_list=[];
        mySharedService.shareAwaitDistributorListdata=[];
        $rootScope.ref_dist_lst=true;
        $scope.bckval='';
        mySharedService.sharebckvaldata='';
        $scope.backnear='';
        mySharedService.sharebckneardata='';
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });


        loginService.distributorlist()
        .then(function (result)
        {

            $scope.distributor_list = result;
            $scope.contact_person=result.contact_person;
            console.log($scope.distributor_list);

            mySharedService.prepForDistributorListDataBroadcast(result);
            $state.go('tab.distributor');
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    /*Distributor listing function of prayag ctrl end*/

    /*Awaiting Distributor listing function  of prayag ctrl start*/

    $scope.await_distributor_list=[];
    $scope.await_distributor_list= mySharedService.shareAwaitDistributorListdata;
    $scope.awaitdistributorlist= function ()
    {
        $rootScope.show_await_dist_temp=true;
        $rootScope.show_dist_temp=false;
        $scope.distributor_list=[];
        $rootScope.ref_dist_lst=false;
        mySharedService.shareDistributorListdata=[];

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });


        loginService.awaitdistributorlist()
        .then(function (result)
        {

            $scope.await_distributor_list = result;
            console.log($scope.await_distributor_list);
            mySharedService.shareAwaitDistributorListdata = result;
            // mySharedService.prepForDistributorListDataBroadcast(result);
            $state.go('tab.distributor');
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    /*Awaiting Distributor listing function of prayag ctrl end*/

    /*Distributor listing details function of prayag ctrl start*/

    $scope.distributor_details={};
    $scope.distributor_details= mySharedService.shareDistributorDetailsdata;
    $scope.distributorDetails= function (id)
    {
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });


        loginService.distributorDetails(id)
        .then(function (result)
        {

            $scope.distributor_details = result;
            console.log("dist details");
            console.log($scope.distributor_details);

            mySharedService.prepForDistributorDetailsDataBroadcast(result);
            $state.go('tab.distributor-det');
            $timeout(function () { $ionicLoading.hide(); }, 200);

            $ionicLoading.hide();

        },
        function (err) {
            $ionicLoading.hide();
            console.error(err);
        })
    }

    /*Distributor listing details function of prayag ctrl end*/

    //  /*Distributor activity-add function start*/

    //    $scope.distr_actdata=[];
    //    $scope.activityret= function (distr_id)
    //    {

    //     $scope.distr_actdata.activity_date='2017-09-06';
    //     var next_followup = moment($scope.distr_actdata.next_followup).format('YYYY-MM-DD');
    //     console.log(next_followup);
    //     $ionicLoading.show
    //     ({
    //         template: '<span class="icon spin ion-loading-d"></span> Loading...'
    //     });

    //     loginService.activity_ret_service(distr_id,$scope.distr_actdata.activity_date,$scope.distr_actdata.activity_type,$scope.distr_actdata.remark,next_followup)
    //     .then(function (result)
    //     {
    //        console.log(result);
    //         $state.go('tab.distributor-det');
    //         $timeout(function () { $ionicLoading.hide(); }, 200);

    //         $ionicLoading.hide();

    //       },
    //          function (err) {
    //            $ionicLoading.hide();
    //            console.error(err);
    //         })
    //     }
    // /*Distributor activity-add function end*/



    /*Distributor view_edit(update) function of prayag ctrl start*/
    $scope.distributoreditview={};
    $scope.distributoreditview=mySharedService.shareDistributorViewEditdata
    $scope.distributor_view_edit= function (id)
    {

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

        console.log(id);
        console.log($scope.distributor_details);

        loginService.distributor_view_edit(id,$scope.distributor_details.dr_name,$scope.distributor_details.contact_person,$scope.distributor_details.street_name,$scope.distributor_details.email,$scope.distributor_details.pincode,$scope.distributor_details.state,$scope.distributor_details.contact_02
            )
            .then(function (result)
            {

                mySharedService.prepForDistributorDetailViewEditBroadcast(result);
                $state.go('tab.distributor-det');
                $timeout(function () { $ionicLoading.hide(); }, 200);

                $ionicLoading.hide();

            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }
        /*Distributor view_edit(update) function of prayag ctrl end*/


        /*salesexe profile data function of prayag ctrl start*/
        $scope.salesexeprofiledata={};
        // $scope.salesexeprofiledata= mySharedService.shareSalesExeProfiledata;
        $scope.salesexe_profile= function (salesexe_id)
        {
            alert("test");
            loginService.salesexe_profile()
            .then(function (result)
            {

                console.log("profile");
                console.log(result);
                $scope.salesexeprofiledata = result;
                console.log($scope.salesexeprofiledata);

                // mySharedService.prepForSalesExeProfileDataBroadcast(result);
                $timeout(function () { $ionicLoading.hide(); }, 200);

                $ionicLoading.hide();

            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }



        $scope.product_segment={};
        $scope.product_segment= mySharedService.shareProductsdata;

        console.log(mySharedService.show_default_category);
        $rootScope.show_default_category=mySharedService.show_default_category;
        $rootScope.show_default_product=mySharedService.show_default_product;

        $scope.add_product_ret = function(val,type)
        {

            $rootScope.cache_val=false;
            mySharedService.edit_enable=false;
            mySharedService.edit_enable_button=false;
            // mySharedService.share_seg_comb_data=[];
            mySharedService.show_proceed_btn=false;
            mySharedService.payment_type=[];
            mySharedService.payment_mode=[];
            mySharedService.order_amt=[];
            mySharedService.order_cno=[];
            mySharedService.order_ref=[];
            mySharedService.next_followup_date=[];
            mySharedService.distributor_idd=[];
            mySharedService.new_arrr=[];

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.fetch_prod_det_ret(val,$rootScope.retailers_id,salesexe_id)
            .then(function (result)
            {
                console.log(result);
                mySharedService.prepFoProductsDataBroadcast(result.seg);
                $scope.product_segment=result.seg;
                $scope.product_cat_data=result.cat;
                mySharedService.shareProductsCatdata=result.cat;

                // $ionicHistory.clearHistory();
                // $ionicHistory.clearCache();
                if(val=='1')
                {
                    $ionicLoading.hide();
                }

                if(val=='2')
                {
                    mySharedService.share_seg_comb_data=[];
                    $ionicHistory.clearCache().then(function () {
                        $rootScope.seg_amt=[];
                        $rootScope.disc_val=[];
                        $rootScope.dist_array=[];
                        $rootScope.price_val_chg=[];
                        mySharedService.cart_arr=[];
                        mySharedService.dist_name=[];
                        $rootScope.prod_feature=[];
                        $rootScope.valid=false;

                        if(type=='1')
                        {
                            $state.go('tab-ret.addproduct-ret');
                        }
                        if(type=='2')
                        {
                            $state.go('tab-dist.addproduct-dist');
                        }
                    });
                }
                // $ionicLoading.hide();
                // else if(type=='2')
                // {
                //   console.log(type);
                //   $ionicHistory.clearCache().then(function () {
                //   $state.go('tab-dist.addproduct-dist');
                //   });
                // }
            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })

        }

        $scope.click_me=function()
        {
            console.log("IN CLICK ME");
            $ionicLoading.hide();
        }

        $scope.bck_btn=0;
        $scope.ask_perm=function(type)
        {
            console.log(type+" "+$rootScope.retailers_id);
            if($scope.bck_btn==0)
            {
                $scope.bck_btn++;
                window.plugins.toast.showShortBottom('Order will Vanish once you go back!!!');
            }
            else
            {
                if(type==1)
                {
                    $scope.get_orders($rootScope.retailers_id,'1');
                }
                if(type==2)
                {
                    $scope.get_orders($rootScope.retailers_id,'2');
                }

            }
        }


        $scope.product_cat_data={};
        $rootScope.product_data={};
        $scope.segment_array=[];
        // $rootScope.dist_array=[];
        $scope.gst_array=[];
        // $scope.prod_feature={};
        $scope.prod_state_price=[];
        $scope.segment_comb_array=[];
        // $scope.data.disc_val=[];
        $scope.pass_seg_name;
        $scope.pass_prod_cat_val;
        $scope.product_cat_data= mySharedService.shareProductsCatdata;
        console.log($scope.product_cat_data);
        $scope.data.selectedValue4;
        $scope.data.selectedValue5;
        $scope.outstand_data=mySharedService.outstand_data;
        //$scope.product_data= mySharedService.shareProductsNamedata;
        //$scope.dist_array= mySharedService.shareDistributordata;
        // $scope.prod_feature= mySharedService.shareProdFeaturedata;
        // $scope.cat_val=mySharedService.shareCatValData;\
        console.log("******************** mySharedService.temp_default_category *******************************");
        console.log(mySharedService.temp_default_category);
        console.log("******************** $rootScope.default_category *******************************");
        console.log($rootScope.default_category);
        console.log("******************** mySharedService.default_category *******************************");
        console.log(mySharedService.default_category);
        console.log("******************** $rootScope.show_default_category *******************************");
        console.log($rootScope.show_default_category);
        console.log("******************** mySharedService.show_default_category *******************************");
        console.log(mySharedService.show_default_category);


        console.log($scope.data.cat_val);
        $scope.get_cat_no = function(all_val,seg_name,valn,type,search_var)
        {
            console.log(all_val);
            console.log("GET CAT NO"+" "+seg_name+" "+valn +" "+type);
            console.log($rootScope.conf_district_name);
            console.log($rootScope.conf_state_name);

            //---------------------- + --------------------
            console.log("Inserting rest data after selection");
            $rootScope.default_category=[];
            mySharedService.show_default_category = [];
            $rootScope.show_default_category = [];
            $rootScope.default_category=mySharedService.default_category;
            for(i=0;i<50;i++)
            {
                if(i<mySharedService.default_category.length)
                {
                    mySharedService.show_default_category.push(mySharedService.default_category[i]);
                    $rootScope.show_default_category.push(mySharedService.default_category[i]);
                }
            }
            //---------------------- + --------------------


            if(mySharedService.temp_default_category.length == 0)
            {
                mySharedService.temp_default_category=$rootScope.default_category;
            }

            if(mySharedService.temp_default_products.length == 0)
            {
                mySharedService.temp_default_products=$rootScope.default_products;
            }

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            $scope.segment_array.push({segment_name: $scope.data.selectedValue4});
            if(valn == 2 && type=='1')
            {
                $rootScope.pass_seg_name=all_val.seg_name;
                $rootScope.pass_prod_cat_val=all_val.cat_nos;

                mySharedService.show_default_category=[];
                $rootScope.show_default_category=[];
                mySharedService.default_category=[];
                $rootScope.default_category=[];

                mySharedService.show_default_product=[];
                $rootScope.show_default_product=[];
                mySharedService.default_products=[];
                $rootScope.default_products=[];

                angular.forEach(mySharedService.temp_default_category, function(value, key) {
                    if(value.seg_name==all_val.seg_name)
                    {
                        mySharedService.show_default_category.push(value);
                        mySharedService.default_category.push(value);
                        $rootScope.default_category.push(value);

                        mySharedService.show_default_product.push(value);
                        mySharedService.default_products.push(value);
                        $rootScope.default_products.push(value);
                    }
                });

                if(mySharedService.show_default_category.length>=50)
                {
                    for(i=0;i<50;i++)
                    {
                        $rootScope.show_default_category.push(mySharedService.show_default_category[i]);
                        $rootScope.show_default_product.push(mySharedService.show_default_product[i]);
                    }
                }
                else
                {
                    for(i=0;i<mySharedService.show_default_category.length;i++)
                    {
                        $rootScope.show_default_category.push(mySharedService.show_default_category[i]);
                        $rootScope.show_default_product.push(mySharedService.show_default_product[i]);
                    }
                }

                console.log(mySharedService.show_default_category);
                console.log($rootScope.show_default_category);
                console.log(mySharedService.default_category);
                console.log($rootScope.default_category);

                $rootScope.pass_seg_name=seg_name;
                console.log($rootScope.pass_seg_name);

                // $scope.prod_feature=[];
                $scope.prod_state_price=[];
                // console.log($scope.prod_feature);

                console.log("PIN");
                console.log($scope.retailer_det.pincode);
                console.log($scope.retailer_det.state_name);
                // $rootScope.product_data=[];

                if($rootScope.conf_district_name)
                {
                    console.log("DIST");
                    $scope.retailer_det.district_name=$rootScope.conf_district_name;
                    console.log($scope.retailer_det.district_name);
                }

                if($rootScope.conf_state_name)
                {
                    console.log("ST");
                    $scope.retailer_det.state_name=$rootScope.conf_state_name;
                    console.log($scope.retailer_det.state_name);
                }


                loginService.fetch_prod_cat_det_ret(seg_name,valn,type,$scope.retailer_det.district_name,'',$scope.retailer_det.state_name,$rootScope.retailers_id)
                .then(function (result)
                {
                    console.log(result);


                    $rootScope.dr_default_category=[];
                    $rootScope.default_category = [];
                    mySharedService.default_category = [];
                    $rootScope.show_default_category = [];
                    mySharedService.show_default_category = [];
                    for(j=0;j<result.data.length;j++)
                    {
                        // $rootScope.dr_default_category.push({'cat_nos':result.data[j].product_category_no,'seg_name':result.data[j].segment_name,'product':result.data[j].product_name,'id':result.data[j].id});

                        $rootScope.default_category.push({'cat_nos':result.data[j].product_category_no,'seg_name':result.data[j].segment_name,'product':result.data[j].product_name,'id':result.data[j].id});

                        // $rootScope.show_default_category
                        // $rootScope.default_category
                        // mySharedService.default_category
                        // mySharedService.show_default_category
                    }


                    mySharedService.default_category=$rootScope.default_category;
                    if($rootScope.default_category.length>50){
                      for(let i=0;i<50;i++){
                        $rootScope.show_default_category.push($rootScope.default_category[i]);
                        mySharedService.show_default_category.push($rootScope.default_category[i]);
                      }
                    }
                    else{
                      $rootScope.show_default_category=$rootScope.default_category;
                      mySharedService.show_default_category = $rootScope.default_category;
                    }
                    // mySharedService.dr_default_category=$rootScope.dr_default_category;
                    console.log("************selected $rootScope.default_category****************");
                    console.log($rootScope.default_category);
                    console.log("************selected mySharedService.default_category****************");
                    console.log(mySharedService.default_category);
                    console.log("************selected $rootScope.show_default_category****************");
                    console.log($rootScope.show_default_category);
                    console.log("************selected mySharedService.show_default_category****************");
                    console.log(mySharedService.show_default_category);


                    $rootScope.default_products = [];
                    mySharedService.default_products = [];
                    $rootScope.show_default_product = [];
                    mySharedService.show_default_product = [];
                    for(j=0;j<result.data.length;j++)
                    {

                        $rootScope.default_products.push({'cat_nos':result.data[j].product_category_no,'seg_name':result.data[j].segment_name,'product':result.data[j].product_name,'id':result.data[j].id});
                    }


                    mySharedService.default_products=$rootScope.default_products;
                    if($rootScope.default_products.length>50){
                      for(let i=0;i<50;i++){
                        $rootScope.show_default_product.push($rootScope.default_products[i]);
                        mySharedService.show_default_product.push($rootScope.default_products[i]);
                      }
                    }
                    else{
                      $rootScope.show_default_product=$rootScope.default_products;
                      mySharedService.show_default_product = $rootScope.default_products;
                    }

                    console.log("************selected $rootScope.default_products****************");
                    console.log($rootScope.default_products);
                    console.log("************selected mySharedService.default_products****************");
                    console.log(mySharedService.default_products);
                    console.log("************selected $rootScope.show_default_product****************");
                    console.log($rootScope.show_default_product);
                    console.log("************selected mySharedService.show_default_product****************");
                    console.log(mySharedService.show_default_product);

                    mySharedService.prepFoProductsCatDataBroadcast(result.data);
                    $scope.product_cat_data=result.data;
                    $scope.outstand_data=result.outstand_bal;
                    mySharedService.outstand_data=result.outstand_bal;

                    mySharedService.prepForDistributorNameBroadcast(result.distributor_data);
                    if($rootScope.dist_array.length)
                    {
                        console.log($rootScope.dist_array);
                        for(i=0;i<$rootScope.dist_array.length;i++)
                        {
                            if($rootScope.dist_array[i].segment_name == seg_name)
                            {
                                console.log("IF");
                                break;
                            }
                            else
                            {
                                console.log("ELSE");
                                console.log($rootScope.seg_amt);
                                if($rootScope.seg_amt.length==0)
                                {
                                    console.log("IIF");
                                    $rootScope.dist_array=[];
                                    console.log($rootScope.dist_array);
                                    $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                                }
                                else
                                {
                                    console.log("EEL");
                                    $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                                    if($rootScope.seg_amt.length==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.splice($rootScope.dist_array.length-1,1);
                                    }

                                    if(i==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                    }

                    if(result.disc_data.length)
                    {
                        for(i=0;i<result.disc_data.length;i++)
                        {
                            if(result.disc_data[i].segment_name)
                            {
                                $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].retailer;
                            }
                            else
                            {
                                $rootScope.disc_val[result.disc_data[i].segment_name]=0;
                            }
                        }
                    }
                    // }

                    console.log($rootScope.dist_array);
                    $ionicLoading.hide();
                },
                function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })
            }

            if(valn == 2 && type=='2')
            {
                // $scope.prod_feature=[];
                $scope.prod_state_price=[];
                // console.log($scope.prod_feature);

                $rootScope.pass_seg_name=all_val.seg_name;
                $rootScope.pass_prod_cat_val=all_val.cat_nos;

                mySharedService.show_default_category=[];
                $rootScope.show_default_category=[];
                mySharedService.default_category=[];
                $rootScope.default_category=[];

                mySharedService.show_default_product=[];
                $rootScope.show_default_product=[];
                mySharedService.default_products=[];
                $rootScope.default_products=[];



                angular.forEach(mySharedService.temp_default_category, function(value, key) {
                    if(value.seg_name==all_val.seg_name)
                    {
                        mySharedService.show_default_category.push(value);
                        mySharedService.default_category.push(value);
                        $rootScope.default_category.push(value);

                        mySharedService.show_default_product.push(value);
                        mySharedService.default_products.push(value);
                        $rootScope.default_products.push(value);
                    }
                });

                if(mySharedService.show_default_category.length>=50)
                {
                    for(i=0;i<50;i++)
                    {
                        $rootScope.show_default_category.push(mySharedService.show_default_category[i]);
                        $rootScope.show_default_product.push(mySharedService.show_default_product[i]);
                    }
                }
                else
                {
                    for(i=0;i<mySharedService.show_default_category.length;i++)
                    {
                        $rootScope.show_default_category.push(mySharedService.show_default_category[i]);
                        $rootScope.show_default_product.push(mySharedService.show_default_product[i]);
                    }
                }

                console.log(mySharedService.show_default_category);
                console.log($rootScope.show_default_category);
                console.log(mySharedService.default_category);
                console.log($rootScope.default_category);

                $rootScope.pass_seg_name=seg_name;
                console.log($rootScope.pass_seg_name);

                console.log("PIN");
                console.log($scope.retailer_det.pincode);
                // $rootScope.product_data=[];
                loginService.fetch_prod_cat_det_ret(seg_name,valn,type,$scope.retailer_det.district_name,'',$scope.retailer_det.state_name,$rootScope.retailers_id)
                .then(function (result)
                {
                    mySharedService.prepFoProductsCatDataBroadcast(result.data);
                    // $scope.data.segment_name=  {id : id, segment_name : $scope.data.selectedValue4};
                    $scope.product_cat_data=result.data;

                    $rootScope.default_category = [];
                    mySharedService.default_category = [];
                    $rootScope.show_default_category = [];
                    mySharedService.show_default_category = [];
                    for(j=0;j<result.data.length;j++)
                    {
                        $rootScope.default_category.push({'cat_nos':result.data[j].product_category_no,'seg_name':result.data[j].segment_name,'product':result.data[j].product_name,'id':result.data[j].id});
                    }


                    mySharedService.default_category=$rootScope.default_category;
                    if($rootScope.default_category.length>50){
                      for(let i=0;i<50;i++){
                        $rootScope.show_default_category.push($rootScope.default_category[i]);
                        mySharedService.show_default_category.push($rootScope.default_category[i]);
                      }
                    }
                    else{
                      $rootScope.show_default_category=$rootScope.default_category;
                      mySharedService.show_default_category = $rootScope.default_category;
                    }

                    console.log("************selected $rootScope.default_category****************");
                    console.log($rootScope.default_category);
                    console.log("************selected mySharedService.default_category****************");
                    console.log(mySharedService.default_category);
                    console.log("************selected $rootScope.show_default_category****************");
                    console.log($rootScope.show_default_category);
                    console.log("************selected mySharedService.show_default_category****************");
                    console.log(mySharedService.show_default_category);


                    $rootScope.default_products = [];
                    mySharedService.default_products = [];
                    $rootScope.show_default_product = [];
                    mySharedService.show_default_product = [];
                    for(j=0;j<result.data.length;j++)
                    {

                        $rootScope.default_products.push({'cat_nos':result.data[j].product_category_no,'seg_name':result.data[j].segment_name,'product':result.data[j].product_name,'id':result.data[j].id});
                    }


                    mySharedService.default_products=$rootScope.default_products;
                    if($rootScope.default_products.length>50){
                      for(let i=0;i<50;i++){
                        $rootScope.show_default_product.push($rootScope.default_products[i]);
                        mySharedService.show_default_product.push($rootScope.default_products[i]);
                      }
                    }
                    else{
                      $rootScope.show_default_product=$rootScope.default_products;
                      mySharedService.show_default_product = $rootScope.default_products;
                    }

                    console.log("************selected $rootScope.default_products****************");
                    console.log($rootScope.default_products);
                    console.log("************selected mySharedService.default_products****************");
                    console.log(mySharedService.default_products);
                    console.log("************selected $rootScope.show_default_product****************");
                    console.log($rootScope.show_default_product);
                    console.log("************selected mySharedService.show_default_product****************");
                    console.log(mySharedService.show_default_product);

                    mySharedService.prepForDistributorNameBroadcast(result.distributor_data);

                    if($rootScope.dist_array.length)
                    {
                        for(i=0;i<$rootScope.dist_array.length;i++)
                        {
                            if($rootScope.dist_array[i].segment_name == seg_name)
                            {
                                console.log("IF");
                                break;
                            }
                            else
                            {
                                console.log("ELSE");
                                console.log($rootScope.seg_amt);
                                if($rootScope.seg_amt.length==0)
                                {
                                    console.log("IIF");
                                    $rootScope.dist_array=[];
                                    console.log($rootScope.dist_array);
                                    $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                                }
                                else
                                {
                                    console.log("EEL");
                                    if($rootScope.seg_amt.length==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.splice($rootScope.dist_array.length-1,1);
                                    }

                                    if(i==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        $rootScope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
                    }

                    if(result.disc_data.length)
                    {
                        for(i=0;i<result.disc_data.length;i++)
                        {
                            if(result.disc_data[i].segment_name)
                            {
                                $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].distributor;
                            }
                            else
                            {
                                $rootScope.disc_val[result.disc_data[i].segment_name]=0;
                            }
                        }
                    }

                    console.log($rootScope.dist_array);
                    $ionicLoading.hide();
                },
                function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })
            }

            if(valn == 3)
            {
                $scope.default_segment_select = {
                    seg_name: all_val.seg_name
                };
                $rootScope.pass_seg_name=all_val.seg_name;
                $rootScope.pass_prod_cat_val=all_val.cat_nos;
                console.log($rootScope.pass_prod_cat_val);
                console.log(type);
                console.log(all_val);

                loginService.fetch_prod_cat_det_ret(seg_name,valn,type,$scope.retailer_det.district_name,all_val.seg_name,$scope.retailer_det.state_name,$rootScope.retailers_id)
                .then(function (result)
                {
                    console.log(result);
                    console.log(result.data);

                    mySharedService.prepFoProductsNameDataBroadcast(result.data);
                    $rootScope.product_data=result.data;
                    $rootScope.prod_feature=result.data_feat;
                    $scope.prod_state_price=result.prod_state_price;

                    if($rootScope.dist_array.length)  {
                        console.log($rootScope.dist_array);
                        for(i=0;i<$rootScope.dist_array.length;i++)
                        {
                            if($rootScope.dist_array[i].segment_name == all_val.seg_name) {
                                console.log("IF");
                                break;
                            }
                            else
                            {
                                console.log("ELSE");
                                console.log($rootScope.seg_amt);
                                if($rootScope.seg_amt.length==0) {
                                    console.log("IIF");
                                    $rootScope.dist_array=[];
                                    console.log($rootScope.dist_array);
                                    $rootScope.dist_array.push({ segment_name: all_val.seg_name, distributors: result.distributor_data});
                                } else {
                                    console.log("EEL");
                                    if($rootScope.seg_amt.length==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.splice($rootScope.dist_array.length-1,1);
                                    }

                                    if(i==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.push({ segment_name: all_val.seg_name, distributors: result.distributor_data});
                                    }
                                }
                                // break;
                            }
                        }

                    } else {

                        $rootScope.dist_array.push({ segment_name: all_val.seg_name, distributors: result.distributor_data});
                    }

                    console.log($rootScope.dist_array);

                    if(result.disc_data.length)
                    {
                        for(i=0;i<result.disc_data.length;i++)
                        {
                            if(result.disc_data[i].segment_name)
                            {
                                if($scope.type==1)
                                {
                                    $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].retailer;
                                }
                                if($scope.type==2)
                                {
                                    $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].distributor;
                                }
                                if($scope.type==3)
                                {
                                    if($scope.dr_type==1)
                                    {
                                        $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].retailer;
                                    }
                                    else
                                    {
                                        $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].distributor;
                                    }
                                }
                            }
                            else
                            {
                                $rootScope.disc_val[result.disc_data[i].segment_name]=0;
                            }
                        }
                    }

                    $ionicLoading.hide();
                },
                function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })
            }

            if(valn == 4)
            {
                $rootScope.pass_seg_name=all_val.seg_name;
                $rootScope.pass_prod_cat_val=all_val.cat_nos;
                console.log(all_val);
                console.log(type);

                console.log(all_val.cat_nos);
                loginService.fetch_prod_cat_det_ret(all_val.cat_nos,valn,type,$scope.retailer_det.district_name,all_val.seg_name,$scope.retailer_det.state_name,$rootScope.retailers_id)
                .then(function (result)
                {


                  $rootScope.default_products = [];
                  mySharedService.default_products = [];
                  $rootScope.show_default_product = [];
                  mySharedService.show_default_product = [];
                  for(j=0;j<result.data.length;j++)
                  {

                      $rootScope.default_products.push({'cat_nos':result.data[j].product_category_no,'seg_name':result.data[j].segment_name,'product':result.data[j].product_name,'id':result.data[j].id});
                  }


                  mySharedService.default_products=$rootScope.default_products;
                  if($rootScope.default_products.length>50){
                    for(let i=0;i<50;i++){
                      $rootScope.show_default_product.push($rootScope.default_products[i]);
                      mySharedService.show_default_product.push($rootScope.default_products[i]);
                    }
                  }
                  else{
                    $rootScope.show_default_product=$rootScope.default_products;
                    mySharedService.show_default_product = $rootScope.default_products;
                  }

                  console.log("************selected $rootScope.default_products****************");
                  console.log($rootScope.default_products);
                  console.log("************selected mySharedService.default_products****************");
                  console.log(mySharedService.default_products);
                  console.log("************selected $rootScope.show_default_product****************");
                  console.log($rootScope.show_default_product);
                  console.log("************selected mySharedService.show_default_product****************");
                  console.log(mySharedService.show_default_product);

                    console.log(result);
                    mySharedService.shareProductsNamedata = result.data;
                    $rootScope.product_data=result.data;
                    $rootScope.prod_feature=result.data_feat;
                    $scope.prod_state_price=result.prod_state_price;

                    if($rootScope.dist_array.length)  {
                        console.log($rootScope.dist_array);
                        for(i=0;i<$rootScope.dist_array.length;i++)
                        {
                            if($rootScope.dist_array[i].segment_name == all_val.seg_name) {
                                console.log("IF");
                                break;
                            }
                            else
                            {
                                console.log("ELSE");
                                console.log($rootScope.seg_amt);
                                if($rootScope.seg_amt.length==0) {
                                    console.log("IIF");
                                    $rootScope.dist_array=[];
                                    console.log($rootScope.dist_array);
                                    $rootScope.dist_array.push({ segment_name: all_val.seg_name, distributors: result.distributor_data});
                                } else {
                                    console.log("EEL");
                                    if($rootScope.seg_amt.length==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.splice($rootScope.dist_array.length-1,1);
                                    }

                                    if(i==$rootScope.dist_array.length-1)
                                    {
                                        $rootScope.dist_array.push({ segment_name: all_val.seg_name, distributors: result.distributor_data});
                                    }
                                }
                                // break;
                            }
                        }

                    } else {

                        $rootScope.dist_array.push({ segment_name: all_val.seg_name, distributors: result.distributor_data});
                    }

                    console.log($rootScope.dist_array);
                    console.log(mySharedService.int_typee);
                    console.log($scope.type);
                    console.log($scope.dr_type);

                    if(result.disc_data.length)
                    {
                        for(i=0;i<result.disc_data.length;i++)
                        {
                            if(result.disc_data[i].segment_name)
                            {
                                if($scope.type==1)
                                {
                                    $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].retailer;
                                }
                                if($scope.type==2)
                                {
                                    $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].distributor;
                                }
                                if($scope.type==3)
                                {
                                    if($scope.dr_type==1)
                                    {
                                        $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].retailer;
                                    }
                                    else
                                    {
                                        $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].distributor;
                                    }
                                }
                                // $rootScope.disc_val[result.disc_data[i].segment_name]=result.disc_data[i].distributor;
                            }
                            else
                            {
                                $rootScope.disc_val[result.disc_data[i].segment_name]=0;
                            }
                        }
                    }

                    $ionicLoading.hide();
                }, function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })

            }

        }

        $scope.idExists = function(id) {
            return $scope.cart_arr.some(function(el) {
                return el.feat_id === id;
            });
        }

        $scope.price_val_chg=[];
        $scope.cart_arr=[];
        // $scope.seg_amt=[];
        $scope.addtocart = function(qnty,product_name,product_amount,type,feat_id,feature)
        {
            console.log($scope.pass_seg_name);
            console.log($scope.pass_prod_cat_val);
            cat_no=$rootScope.pass_prod_cat_val;
            segment_name=$rootScope.pass_seg_name;
            $scope.data.prod_qty=1;
            console.log($scope.retailer_id);

            console.log(segment_name + cat_no + qnty + product_name + " "+product_amount+" "+feat_id);
            if($scope.cart_arr.length)
            {
                for(i=0;i<$scope.cart_arr.length;i++)
                {
                    if($scope.cart_arr[i].catg_no == cat_no)
                    {
                        if(!feat_id)
                        {
                            $scope.cart_arr[i].quantity = parseFloat($scope.cart_arr[i].quantity) + parseFloat(qnty);
                            break;
                        }
                        else
                        {
                            if($scope.idExists(feat_id))
                            {
                                $scope.ind_vals = $scope.cart_arr.findIndex(p => p.feat_id == feat_id);
                                console.log($scope.ind_vals);
                                $scope.cart_arr[$scope.ind_vals].quantity = parseFloat($scope.cart_arr[$scope.ind_vals].quantity) + parseFloat(qnty);
                                break;
                            }
                            else
                            {
                                console.log("ELSE FEAT");
                                $scope.cart_arr.push({ segment_name: segment_name, catg_no: cat_no, quantity: parseFloat(qnty).toFixed(2), product_name: product_name, amount: parseFloat(product_amount).toFixed(2), dist_id:0, feat_id: feat_id, feature:feature});
                                break;
                            }
                        }
                    }
                    else
                    {
                        if(i == $scope.cart_arr.length-1)
                        {
                            console.log("El IF");
                            $scope.cart_arr.push({ segment_name: segment_name, catg_no: cat_no, quantity: parseFloat(qnty).toFixed(2), product_name: product_name, amount: parseFloat(product_amount).toFixed(2), dist_id:0, feat_id: feat_id, feature: feature});
                            break;
                        }
                    }
                }
            }
            else
            {
                $scope.cart_arr.push({ segment_name: segment_name, catg_no: cat_no, quantity: parseFloat(qnty).toFixed(2), product_name: product_name, amount: parseFloat(product_amount).toFixed(2), dist_id:0, feat_id: feat_id, feature: feature});
            }
            console.log($scope.cart_arr);


            if($rootScope.seg_amt.length)
            {
                for(i=0;i<$rootScope.seg_amt.length;i++)
                {
                    console.log($rootScope.seg_amt[i].segment_name + segment_name);
                    if($scope.seg_amt[i].segment_name == segment_name)
                    {
                        $rootScope.seg_amt[i].price = (parseFloat($rootScope.seg_amt[i].price)+parseFloat(product_amount)*parseFloat(qnty)).toFixed(2);
                        break;
                    }
                    else
                    {
                        if(i == $rootScope.seg_amt.length-1)
                        {
                            $rootScope.seg_amt.push({segment_name: segment_name, price:(parseFloat(product_amount)*parseFloat(qnty)).toFixed(2)});
                            break;
                        }
                    }
                }
            }
            else
            {
                $rootScope.seg_amt.push({segment_name: segment_name, price:(parseFloat(product_amount)*parseFloat(qnty)).toFixed(2)});
            }

            if($rootScope.price_val_chg.length)
            {
                for(i=0;i<$rootScope.price_val_chg.length;i++)
                {
                    if($rootScope.price_val_chg[i].seg_name == segment_name)
                    {
                        $rootScope.price_val_chg[i].price_val = (parseFloat($rootScope.price_val_chg[i].price_val)+parseFloat(product_amount)*parseFloat(qnty)).toFixed(2);
                        break;
                    }
                    else
                    {
                        if(i == $rootScope.price_val_chg.length-1)
                        {
                            $rootScope.price_val_chg.push({seg_name: segment_name, price_val:(parseFloat(product_amount)*parseFloat(qnty)).toFixed(2)});
                            break;
                        }
                    }
                }
            }
            else
            {
                $rootScope.price_val_chg.push({seg_name: segment_name, price_val:(parseFloat(product_amount)*parseFloat(qnty)).toFixed(2)});
            }

            console.log($rootScope.seg_amt);
            console.log($rootScope.price_val_chg);

            var seg_len= $rootScope.seg_amt.length;
            console.log(seg_len);
            console.log($scope.segment_comb_array.length);



            console.log(mySharedService.share_seg_comb_data);
            if(mySharedService.share_seg_comb_data.length)
            {
                if(mySharedService.share_seg_comb_data.length!=seg_len)
                {
                    $rootScope.valid=false;
                }
                else
                {
                    $rootScope.valid=true;
                }
            }

            else
            {
                if($scope.segment_comb_array.length!=seg_len)
                {
                    $rootScope.valid=false;
                }
                else
                {
                    $rootScope.valid=true;
                }
            }
            console.log($rootScope.valid);

            $scope.default_segment=mySharedService.default_segment;
            $rootScope.default_product_select = {
                seg_name: "",
                cat_nos: "",
                id: "",
                product: ""
            };

            console.log(mySharedService.temp_default_category);
            console.log(mySharedService.show_default_category);
            console.log($rootScope.show_default_category);
            console.log($rootScope.default_category);

            mySharedService.show_default_category=[];
            $rootScope.show_default_category=[];
            $rootScope.default_category=[];
            $rootScope.default_category=mySharedService.default_category;
            for(i=0;i<50;i++)
            {
                if(i<mySharedService.temp_default_category.length)
                {
                    mySharedService.show_default_category.push(mySharedService.temp_default_category[i]);
                    $rootScope.show_default_category.push(mySharedService.temp_default_category[i]);

                }
            }
            $rootScope.default_category=mySharedService.temp_default_category;
            mySharedService.default_category=mySharedService.temp_default_category;

            console.log(mySharedService.temp_default_products);

            mySharedService.show_default_product=[];
            $rootScope.show_default_product=[];
            $rootScope.default_products=[];
            $rootScope.default_products=mySharedService.default_products;
            for(i=0;i<50;i++)
            {
                if(i<mySharedService.temp_default_products.length)
                {
                    mySharedService.show_default_product.push(mySharedService.temp_default_products[i]);
                    $rootScope.show_default_product.push(mySharedService.temp_default_products[i]);
                }
            }
            $rootScope.default_products=mySharedService.temp_default_products;
            mySharedService.default_products=mySharedService.temp_default_products;

            $scope.product_segment=[];
            $scope.product_cat_data=[];
            $rootScope.product_data=[];
            $rootScope.prod_feature=[];
            $scope.prod_state_price=[];
            $scope.ind_value=0;
            $scope.data.cat_val="";
            $scope.$broadcast('reset');
            $scope.add_product_ret(1,type);
        }

        $scope.del_cart = function(index)
        {
            if(mySharedService.share_seg_comb_data.length)
            {
                $scope.segment_comb_array=mySharedService.share_seg_comb_data;
            }
            console.log($scope.cart_arr);
            console.log($rootScope.seg_amt);
            console.log($scope.segment_comb_array);
            console.log($rootScope.dist_array);
            console.log($scope.price_val_chg);
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Item',
                template: 'Are you sure you want to delete this item?',
                cancelText: 'No',
                okText: 'Yes'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                    console.log($scope.cart_arr[index].amount);
                    if($rootScope.seg_amt.length)
                    {
                        for(i=0;i<$rootScope.seg_amt.length;i++)
                        {
                            if($rootScope.seg_amt[i].segment_name == $scope.cart_arr[index].segment_name)
                            {
                                $rootScope.seg_amt[i].price = (parseFloat($rootScope.seg_amt[i].price)-parseFloat($scope.cart_arr[index].amount)*parseFloat($scope.cart_arr[index].quantity)).toFixed(2);
                            }
                            else
                            {

                            }
                        }

                    }

                    function findOccurrences(arr, val) {
                        console.log(val);
                        var i, j,
                        count = 0;
                        for (i = 0, j = arr.length; i < j; i++) {
                            (arr[i].segment_name === val) && count++;
                        }
                        return count;
                    }

                    cnt = findOccurrences($scope.cart_arr, $scope.cart_arr[index].segment_name);

                    if(cnt==1)
                    {

                        for(i=0;i<$rootScope.seg_amt.length;i++)
                        {
                            if($rootScope.seg_amt[i].segment_name==$scope.cart_arr[index].segment_name)
                            {
                                $rootScope.seg_amt.splice(i,1);
                            }
                        }
                    }

                    $scope.cart_arr.splice(index,1);
                    console.log(cnt);
                    $scope.segment_comb_array.splice(index,1);
                    $rootScope.dist_array.splice(index,1);
                    $scope.price_val_chg.splice(index,1);

                    console.log($scope.cart_arr);
                    console.log($rootScope.seg_amt);
                    console.log($rootScope.dist_array);
                    console.log($scope.segment_comb_array);

                    var seg_len= $rootScope.seg_amt.length;
                    console.log(seg_len);

                    if(seg_len==0)
                    {
                        $rootScope.valid=false;
                    }

                    for(i=0;i<seg_len;i++)
                    {
                        if($scope.segment_comb_array[i].dist==undefined)
                        {
                            $rootScope.valid=false;
                        }
                        else
                        {
                            if(i==seg_len-1)
                            {
                                $rootScope.valid=true;
                            }
                        }
                    }

                } else {
                    console.log('You are not sure');
                }
            });

        }

        /*Retailer Order Listing function start*/

        $scope.ret_orders=[];
        $scope.retailer_id=mySharedService.shareRetIddata;
        $scope.ret_orders=mySharedService.shareRetOrdersdata;
        $scope.conf_ord=mySharedService.conf_ord;
        $scope.get_orders= function (ret_id,type,conf)
        {
            $rootScope.hide_plus=false;
            console.log(type);
            console.log(ret_id);
            console.log(conf);
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });

            loginService.ret_orders_list(ret_id)

            .then(function (result)
            {

                console.log(result);
                mySharedService.prepForRetOrdersBroadcast(result.data);
                $scope.ret_orders = result.data;
                mySharedService.prepForRetailerIdBroadcast(ret_id);
                $scope.conf_ord=result.seg_data;
                mySharedService.conf_ord=result.seg_data;
                $scope.retailer_id=ret_id;
                console.log($scope.ret_orders);
                console.log($scope.retailer_id);
                mySharedService.show_default_category=[];
                mySharedService.show_default_product=[];

                if(conf)
                {
                    mySharedService.lead_order=true;
                    mySharedService.default_segment=[];
                    for(i=0;i<mySharedService.store_default_segments.length;i++)
                    {
                        for(j=0;j<$scope.conf_ord.length;j++)
                        {
                            if(mySharedService.store_default_segments[i].seg_name==$scope.conf_ord[j])
                            {
                                mySharedService.default_segment.push({'seg_name':$scope.conf_ord[j]});
                            }
                            else
                            {

                            }
                        }
                    }
                    console.log(mySharedService.default_segment);

                    mySharedService.default_category=[];
                    for(i=0;i<mySharedService.store_default_category.length;i++)
                    {
                        for(j=0;j<$scope.conf_ord.length;j++)
                        {
                            if(mySharedService.store_default_category[i].seg_name==$scope.conf_ord[j])
                            {
                                mySharedService.default_category.push(mySharedService.store_default_category[i]);
                            }
                            else
                            {

                            }
                        }
                    }
                    console.log(mySharedService.default_category);

                    mySharedService.default_products=[];
                    for(i=0;i<mySharedService.store_default_products.length;i++)
                    {
                        for(j=0;j<$scope.conf_ord.length;j++)
                        {
                            if(mySharedService.store_default_products[i].seg_name==$scope.conf_ord[j])
                            {
                                mySharedService.default_products.push(mySharedService.store_default_products[i]);
                            }
                            else
                            {

                            }
                        }
                    }
                    console.log(mySharedService.default_products);

                    for(i=0;i<50;i++)
                    {
                        mySharedService.show_default_category.push(mySharedService.default_category[i]);
                    }
                    console.log(mySharedService.show_default_category);


                    for(i=0;i<50;i++)
                    {
                        mySharedService.show_default_product.push(mySharedService.default_products[i]);
                    }
                    console.log(mySharedService.show_default_product);

                }

                else {

                    mySharedService.lead_order=false;

                    for(i=0;i<50;i++)
                    {
                        mySharedService.show_default_category.push($rootScope.default_category[i]);
                    }

                    for(i=0;i<50;i++)
                    {
                        mySharedService.show_default_product.push($rootScope.default_products[i]);
                    }
                }

                if(type=='1')
                {
                    $state.go('tab-ret.tab-order-ret');
                }
                else
                {
                    $state.go('tab-dist.tab-order-dist');
                }
                $ionicLoading.hide();

            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })

            if(type==1)
            {
                console.log(mySharedService.selectedValue2 +" "+$rootScope.retailers_id);
                loginService.get_my_seg_dists($rootScope.retailers_id,mySharedService.selectedValue2)
                .then(function (result)
                {
                    console.log(result);
                    mySharedService.saved_seg_dist=result.data.distributor_data;
                },function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })
            }
        }
        /*Retailer Order Listing function end*/
        $scope.data.segment_name;
        $scope.search_result;
        $scope.search_res=[];
        $scope.items=[];
        $scope.search_req=function(id,search_value,type)
        {
            if($scope.search_result)
            {
                console.log($scope.search_result.search_val);
                loginService.get_search_res_val($scope.search_result.search_val)
                .then(function (result)
                {
                    console.log(result);
                    if(result.data.res == "seg")
                    {
                        $scope.data.cat_val='';
                        $scope.prod_feature=[];
                        $scope.prod_state_price=[];
                        console.log("SEG");
                        $scope.data.selectedValue4=$scope.search_result.search_val;
                        $scope.get_cat_no(id,$scope.search_result.search_val,2,type);
                    }
                    else
                    {
                        console.log("CAT");
                        $scope.data.selectedValue5=$scope.search_result.search_val;
                        $scope.get_cat_no(id,$scope.search_result.search_val,3,type,'1');
                    }

                },
                function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })

            }
            loginService.get_search(search_value,$rootScope.retailers_id)
            .then(function (result)
            {
                console.log(result);
                $scope.search_res=result.data;
            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.model="";
        $scope.callbackMethod = function (query, isInitializing) {
            console.log(query);
            if(query)
            {
                loginService.get_search(query)
                .then(function (result)
                {
                    $scope.items=result.data;
                    console.log($scope.items);
                },
                function (err) {
                    console.error(err);
                })
                console.log($scope.items.length);
                return $scope.items;
                // $timeout(function () { return $scope.items; }, 300);
                // return {
                //           items: [
                //               {id: "1", name: query + "1", view: "view: " + query + "1"},
                //               {id: "2", name: query + "2", view: "view: " + query + "2"},
                //               {id: "3", name: query + "3", view: "view: " + query + "3"}]
                //       };
            }
        }

        $scope.doSomthing = function(item) {
            console.log('The selected item is: '+item);
        }

        $scope.itemsClicked = function (query) {
            console.log(query);
        }

        $scope.counterr=0;
        $scope.save_qty_val=function(qty)
        {
            if($scope.counterr==0)
            {
                console.log(qty);
                mySharedService.saved_qty=qty;
                $scope.counterr++;
            }
        }

        $scope.save_qty=function(qty,cat_no,seg_name,amt)
        {
            $scope.counterr=0;
            console.log(qty+" "+cat_no+" "+seg_name+" "+amt);
            console.log($rootScope.seg_amt);
            console.log($rootScope.price_val_chg);
            console.log(mySharedService.saved_qty);
            if(mySharedService.saved_qty)
            {
                upd_qty=parseFloat(mySharedService.saved_qty)-parseFloat(qty);

                console.log(upd_qty);

                for(i=0;i<$rootScope.seg_amt.length;i++)
                {
                    console.log($rootScope.seg_amt[i].segment_name + seg_name);
                    if($rootScope.seg_amt[i].segment_name == seg_name)
                    {
                        $rootScope.seg_amt[i].price = (parseFloat($rootScope.seg_amt[i].price)-parseFloat(amt)*parseFloat(upd_qty)).toFixed(2);
                        break;
                    }
                    else
                    {
                        if(i == $rootScope.seg_amt.length-1)
                        {
                            $rootScope.seg_amt.push({segment_name: seg_name, price:(parseFloat(amt)*parseFloat(upd_qty)).toFixed(2)});
                            break;
                        }
                    }
                }

                if($rootScope.price_val_chg.length)
                {
                    console.log("IFFF");
                    for(i=0;i<$rootScope.price_val_chg.length;i++)
                    {
                        if($rootScope.price_val_chg[i].seg_name == seg_name)
                        {
                            $rootScope.price_val_chg[i].price_val = (parseFloat($rootScope.price_val_chg[i].price_val)-parseFloat(amt)*parseFloat(upd_qty)).toFixed(2);
                            break;
                        }
                        else
                        {
                            if(i == $rootScope.price_val_chg.length-1)
                            {
                                $rootScope.price_val_chg.push({seg_name: seg_name, price_val:(parseFloat(amt)*parseFloat(upd_qty)).toFixed(2)});
                                break;
                            }
                        }
                    }
                }
                else
                {
                    console.log("ELSEEE");
                    $rootScope.price_val_chg.push({seg_name: seg_name, price_val:(parseFloat(amt)*parseFloat(upd_qty)).toFixed(2)});
                }
                mySharedService.saved_qty='';

                console.log(mySharedService.share_seg_comb_data);
            }
            console.log($rootScope.seg_amt);
            console.log($rootScope.price_val_chg);
        }

        $scope.order_det=[];
        $scope.tot_order_det=[];

        $scope.seg_price_disc=0;
        $scope.push_details=function(seg_name,seg_price,discount,distributor,dist_img,dist_id,typee)
        {
            console.log(seg_name + seg_price + discount + distributor);
            if(discount==undefined)
            {
                discount=0;
            }

            console.log(mySharedService.share_seg_comb_data);

            if(mySharedService.share_seg_comb_data.length)
            {
                $scope.segment_comb_array=mySharedService.share_seg_comb_data;
            }

            $scope.seg_price_disc= (parseFloat(seg_price) - parseFloat((seg_price*discount)/100)).toFixed(2);


            if($scope.segment_comb_array.length)
            {
                console.log("IF");
                for(i=0;i<$scope.segment_comb_array.length;i++)
                {
                    console.log($scope.segment_comb_array[i].dist + " " + distributor);
                    if($scope.segment_comb_array[i].dist == distributor)
                    {
                        console.log("INSO IF"+i);

                        for(j=0;j<$scope.segment_comb_array.length;j++)
                        {
                            console.log(j+" "+$scope.segment_comb_array[j].disc+" "+discount);
                            if($scope.segment_comb_array[j].seg_name == seg_name)
                            {
                                console.log("DISC");
                                $scope.segment_comb_array[j].dist =  distributor;
                                $scope.segment_comb_array[j].disc = parseFloat(discount).toFixed(2);
                                $scope.segment_comb_array[j].segment_price_mrp = parseFloat(seg_price).toFixed(2);
                                $scope.segment_comb_array[j].seg_price_disc = parseFloat($scope.seg_price_disc).toFixed(2);
                                $scope.segment_comb_array[j].distr_img = dist_img;
                                $scope.segment_comb_array[j].dist_id = dist_id;
                                break;
                            }
                            else if($scope.segment_comb_array[j].seg_name != seg_name)
                            {
                                if(j == $scope.segment_comb_array.length-1)
                                {
                                    $scope.segment_comb_array.push({seg_name: seg_name, segment_price_mrp: parseFloat(seg_price).toFixed(2), seg_price_disc:parseFloat($scope.seg_price_disc).toFixed(2), disc: parseFloat(discount).toFixed(2), dist: distributor, distr_img: dist_img, dist_id:dist_id, gst: 0, gst_amt: 0, after_gst_amt: 0});
                                    break;
                                }

                            }
                        }
                        console.log($scope.segment_comb_array);
                        console.log($scope.tot_order_det);
                        break;
                    }
                    else if($scope.segment_comb_array[i].dist == undefined && $scope.segment_comb_array[i].seg_name == seg_name)
                    {
                        console.log("INSO UNDEFINED"+i);
                        $scope.segment_comb_array[i].dist =  distributor;
                        $scope.segment_comb_array[i].seg_name =  seg_name;
                        $scope.segment_comb_array[i].segment_price_mrp = parseFloat(seg_price).toFixed(2);
                        $scope.segment_comb_array[i].seg_price_disc = parseFloat($scope.seg_price_disc).toFixed(2);
                        $scope.segment_comb_array[i].disc = parseFloat(discount).toFixed(2);
                        $scope.segment_comb_array[i].distr_img = dist_img;
                        $scope.segment_comb_array[i].dist_id = dist_id;
                        break;
                    }
                    else if($scope.segment_comb_array[i].seg_name == seg_name && $scope.segment_comb_array[i].dist != distributor)
                    {
                        console.log("INSO DISC CHANGE"+i);
                        $scope.segment_comb_array[i].dist =  distributor;
                        $scope.segment_comb_array[i].seg_name =  seg_name;
                        $scope.segment_comb_array[i].segment_price_mrp = parseFloat(seg_price).toFixed(2);
                        $scope.segment_comb_array[i].seg_price_disc = parseFloat($scope.seg_price_disc).toFixed(2);
                        $scope.segment_comb_array[i].disc = parseFloat(discount).toFixed(2);
                        $scope.segment_comb_array[i].distr_img = dist_img;
                        $scope.segment_comb_array[i].dist_id = dist_id;
                        break;
                    }
                    else if($scope.segment_comb_array[i].seg_name != seg_name && $scope.segment_comb_array[i].dist == distributor)
                    {
                        console.log("INSO DISC CHANGE"+i);
                        $scope.segment_comb_array[i].dist =  distributor;
                        $scope.segment_comb_array[i].seg_name =  seg_name;
                        $scope.segment_comb_array[i].segment_price_mrp = parseFloat(seg_price).toFixed(2);
                        $scope.segment_comb_array[i].seg_price_disc = parseFloat($scope.seg_price_disc).toFixed(2);
                        $scope.segment_comb_array[i].disc = parseFloat(discount).toFixed(2);
                        $scope.segment_comb_array[i].distr_img = dist_img;
                        $scope.segment_comb_array[i].dist_id = dist_id;
                        break;
                    }
                    else
                    {
                        console.log("INSO ELSE");
                        if(i == $scope.segment_comb_array.length-1)
                        {
                            $scope.segment_comb_array.push({seg_name: seg_name, segment_price_mrp: parseFloat(seg_price).toFixed(2), seg_price_disc:parseFloat($scope.seg_price_disc).toFixed(2), disc: parseFloat(discount).toFixed(2), dist: distributor, distr_img: dist_img, dist_id:dist_id, gst: 0, gst_amt: 0, after_gst_amt: 0});
                            break;
                        }

                    }
                }
            }
            else
            {
                console.log("ELSE");
                $scope.segment_comb_array.push({seg_name: seg_name, segment_price_mrp: parseFloat(seg_price).toFixed(2), seg_price_disc:parseFloat($scope.seg_price_disc).toFixed(2), disc: parseFloat(discount).toFixed(2), dist: distributor, distr_img: dist_img, dist_id:dist_id, gst: 0, gst_amt: 0, after_gst_amt: 0});
            }

            console.log("ORDER DET");
            console.log($scope.order_det);
            console.log($scope.segment_comb_array);

            var seg_len= $rootScope.seg_amt.length;
            console.log(seg_len);
            for(i=0;i<seg_len;i++)
            {
                console.log("i="+i);
                if($scope.segment_comb_array[i].dist==undefined)
                {
                    console.log("if"+i);
                    $rootScope.valid=false;
                    break;
                }
                else
                {
                    console.log("Else="+i);
                    if(i==seg_len-1)
                    {
                        $rootScope.valid=true;
                    }
                }
            }
            console.log($rootScope.valid);


        }
        $scope.ind_value=0;
        $scope.value=function(val)
        {
            console.log(val);
            $scope.ind_value=val;
        }
        console.log($rootScope.valid);


        $scope.oid = mySharedService.shareLastOIDdata;
        $scope.distr_arr=[];
        $scope.distr_arr= mySharedService.shareDistListdata;
        $scope.order_lst=mySharedService.shareOrdDistListdata;
        $scope.total_order_val;

        function checkProperty(prop, newObj) {
            var result;
            Object.keys(newObj).forEach(function (key) {
                if (newObj[key]["dist"] === prop) {
                    result = key
                }
            });
            return result;
        }

        $scope.upload_url=upload_url;

        $scope.show_proceed_btn=mySharedService.show_proceed_btn;

        $scope.fetch_all=function(type,value)
        {
            $scope.tot_order_det=[];
            $scope.new_gst_arr=[];
            mySharedService.new_arrr=[];
            mySharedService.shareOrdDistListdata=[];

            console.log(mySharedService.share_seg_comb_data);

            if(mySharedService.share_seg_comb_data.length)
            {
                $scope.segment_comb_array=mySharedService.share_seg_comb_data;
            }

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });

            for(i=0;i<$rootScope.seg_amt.length;i++)
            {
                $scope.seg_price_discount= (parseFloat($rootScope.seg_amt[i].price) - (parseFloat($rootScope.seg_amt[i].price)*parseFloat($rootScope.disc_val[$rootScope.seg_amt[i].segment_name]))/100).toFixed(2);

                if(type=='1')
                {
                    var exists = checkProperty($scope.data.dist_name[$rootScope.seg_amt[i].segment_name].dr_name, $scope.tot_order_det);
                }
                if(type=='2')
                {
                    var exists = checkProperty($scope.data.dist_name[$rootScope.seg_amt[i].segment_name], $scope.tot_order_det);
                }

                console.log(typeof(exists));
                if ($scope.tot_order_det.length == 0 || !exists)
                {
                    console.log("IF");
                    if(type=='1')
                    {
                        $scope.tot_order_det.push({seg_name: $rootScope.seg_amt[i].segment_name, segment_price_mrp: parseFloat($rootScope.seg_amt[i].price).toFixed(2), seg_price_disc:parseFloat($scope.seg_price_discount).toFixed(2), disc: parseFloat($rootScope.disc_val[$rootScope.seg_amt[i].segment_name]).toFixed(2), dist: $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].dr_name, distr_img: $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].dr_image, dist_id: $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].id, gst: 0, gst_amt: 0, after_gst_amt: 0});
                    }
                    if(type=='2')
                    {
                        $scope.tot_order_det.push({seg_name: $rootScope.seg_amt[i].segment_name, segment_price_mrp: parseFloat($rootScope.seg_amt[i].price).toFixed(2), seg_price_disc:parseFloat($scope.seg_price_discount).toFixed(2), disc: parseFloat($rootScope.disc_val[$rootScope.seg_amt[i].segment_name]).toFixed(2), dist: $scope.data.dist_name[$rootScope.seg_amt[i].segment_name], distr_img: $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].dr_image, dist_id: $scope.data.dist_name[$rootScope.seg_amt[i].segment_name], gst: 0, gst_amt: 0, after_gst_amt: 0});
                    }


                }
                else {
                    console.log("ELSE");
                    if(type=='1')
                    {
                        $scope.tot_order_det[exists].dist =  $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].dr_name;
                        $scope.tot_order_det[exists].dist_id = $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].id;
                    }
                    if(type=='2')
                    {
                        $scope.tot_order_det[exists].dist =  $scope.data.dist_name[$rootScope.seg_amt[i].segment_name];
                        $scope.tot_order_det[exists].dist_id = $scope.data.dist_name[$rootScope.seg_amt[i].segment_name];
                    }
                    $scope.tot_order_det[exists].seg_name = $rootScope.seg_amt[i].segment_name;
                    $scope.tot_order_det[exists].segment_price_mrp = (parseFloat($scope.tot_order_det[exists].segment_price_mrp) + parseFloat($rootScope.seg_amt[i].price)).toFixed(2);
                    $scope.tot_order_det[exists].seg_price_disc = (parseFloat($scope.tot_order_det[exists].seg_price_disc) + parseFloat($scope.seg_price_disc)).toFixed(2);
                    $scope.tot_order_det[exists].disc = (parseFloat($scope.tot_order_det[exists].disc) + parseFloat($rootScope.disc_val[$rootScope.seg_amt[i].segment_name])).toFixed(2);
                    $scope.tot_order_det[exists].distr_img = $scope.data.dist_name[$rootScope.seg_amt[i].segment_name].dr_image;

                }
            }

            console.log($scope.tot_order_det);
            console.log($scope.segment_comb_array);

            console.log($rootScope.price_val_chg);


            if($scope.segment_comb_array.length)
            {
                $scope.total_order_val=0;
                for(i=0;i<$scope.segment_comb_array.length;i++)
                {
                    if($scope.segment_comb_array[i].seg_name==$rootScope.price_val_chg[i].seg_name && parseFloat($scope.segment_comb_array[i].segment_price_mrp).toFixed(2) != parseFloat($rootScope.price_val_chg[i].price_val).toFixed(2))
                    {
                        console.log($scope.segment_comb_array[i].segment_price_mrp +" "+ $rootScope.price_val_chg[i].price_val);
                        $scope.segment_comb_array[i].segment_price_mrp=parseFloat($rootScope.price_val_chg[i].price_val).toFixed(2);
                        $scope.chg_val=(parseFloat($rootScope.price_val_chg[i].price_val)-(parseFloat($scope.segment_comb_array[i].disc)*parseFloat($rootScope.price_val_chg[i].price_val))/100).toFixed(2);
                        $scope.segment_comb_array[i].seg_price_disc=parseFloat($scope.chg_val).toFixed(2);
                    }
                    $scope.segment_comb_array[i].gst_amt= ((parseFloat($scope.segment_comb_array[i].gst)*parseFloat($scope.segment_comb_array[i].seg_price_disc))/100).toFixed(2);

                    $scope.segment_comb_array[i].after_gst_amt= (parseFloat($scope.segment_comb_array[i].seg_price_disc) + (parseFloat($scope.segment_comb_array[i].gst)*parseFloat($scope.segment_comb_array[i].seg_price_disc))/100).toFixed(2);
                    $scope.total_order_val=(parseFloat($scope.total_order_val)+parseFloat($scope.segment_comb_array[i].after_gst_amt)).toFixed(2);
                    if(type=='1')
                    {
                        for(j=0;j<$scope.cart_arr.length;j++)
                        {
                            if($scope.cart_arr[j].segment_name==$scope.segment_comb_array[i].seg_name)
                            {
                                $scope.cart_arr[j].dist_id= $scope.segment_comb_array[i].dist_id;
                            }
                        }
                    }
                }
                console.log($scope.total_order_val);
                console.log($scope.tot_order_det);
                console.log($scope.segment_comb_array);
            }

            if($scope.tot_order_det.length)
            {
                $scope.total_order_val_final=0;
                for(i=0;i<$scope.tot_order_det.length;i++)
                {
                    console.log(i+"hi");
                    console.log($scope.tot_order_det[i].gst);

                    for(j=0;j<$scope.segment_comb_array.length;j++)
                    {
                        if($scope.tot_order_det[i].dist == $scope.segment_comb_array[j].dist)
                        {
                            console.log(i+" "+j);
                            console.log($scope.tot_order_det[i].dist + $scope.segment_comb_array[j].dist);
                            $scope.tot_order_det[i].gst_amt= ((parseFloat($scope.segment_comb_array[j].gst)*parseFloat($scope.segment_comb_array[j].seg_price_disc))/100).toFixed(2);

                            $scope.tot_order_det[i].after_gst_amt= (parseFloat($scope.tot_order_det[i].after_gst_amt) + parseFloat($scope.segment_comb_array[j].seg_price_disc) + (parseFloat($scope.segment_comb_array[j].gst)*parseFloat($scope.segment_comb_array[j].seg_price_disc))/100).toFixed(2);
                        }
                    }
                    $scope.total_order_val_final=(parseFloat($scope.total_order_val_final)+parseFloat($scope.tot_order_det[i].after_gst_amt)).toFixed(2);
                }
            }
            console.log($scope.tot_order_det);
            console.log($scope.segment_comb_array);
            console.log($rootScope.price_val_chg);

            console.log(mySharedService.saved_order_id);
            console.log($scope.cart_arr);
            console.log($scope.total_order_val_final);

            loginService.insert_in_order($scope.retailer_id,$scope.cart_arr,$scope.segment_comb_array,$scope.total_order_val_final,$scope.tot_order_det,type,value,mySharedService.saved_order_id,mySharedService.lead_order)
            .then(function (result)
            {
                console.log(result);
                $scope.oid=result.data.data;
                mySharedService.prepForLastOIDBroadcast(result.data.data);
                mySharedService.prepForDistListBroadcast($scope.segment_comb_array);
                mySharedService.prepForOrdDistListBroadcast($scope.tot_order_det);
                $scope.distr_arr=$scope.segment_comb_array;
                $scope.order_lst=$scope.tot_order_det;
                console.log($scope.order_lst);
                $ionicLoading.hide();
                if(value==2)
                {
                    mySharedService.show_proceed_btn=true;
                }
                if(type=='1')
                {
                    $state.go('tab-ret.orderdt-ret');
                }
                else
                {
                    $state.go('tab-dist.orderdt-dist');
                }
                $scope.tot_order_det=[];
                $scope.total_order_val_final=0;
            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }


        $scope.show_last_payment=function(type)
        {
            console.log(mySharedService.saved_order_id);
            console.log($scope.order_lst);
            console.log($rootScope.retailers_id);

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.show_last_payment($rootScope.retailers_id,mySharedService.saved_order_id,type)
            .then(function (result)
            {
                console.log(result);
                for(i=0;i<result.data.length;i++)
                {
                    mySharedService.payment_type[i]=result.data[i].order_payment_type;
                    mySharedService.payment_mode[i]=result.data[i].mode;
                    mySharedService.order_amt[i]=result.data[i].amount;
                    mySharedService.order_cno[i]=result.data[i].cheque_no;
                    mySharedService.order_ref[i]=result.data[i].transaction_id;
                    mySharedService.next_followup_date[i]=result.data[i].credit_followup;
                    mySharedService.distributor_idd[i]=result.data[i].distributor_id;
                    if(result.data[i].credit_followup)
                    {
                        mySharedService.payment_type[i]='Credit';
                    }

                    // if(result.data.length==$scope.order_lst.length)
                    // {
                    for(j=0;j<$scope.order_lst.length;j++)
                    {
                        if($scope.order_lst[j].dist_id==result.data[i].distributor_id)
                        {
                            mySharedService.new_arrr.push($scope.order_lst[j]);
                        }
                    }
                    // }
                }
                console.log(mySharedService.new_arrr);
                if(type==1)
                {
                    $state.go('tab-ret.confirmord-ret');
                }

                if(type==2)
                {
                    $state.go('tab-dist.confirmord-dist');
                }

                $ionicLoading.hide();
            },
            function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
            mySharedService.last_payment=true;
        }

        $scope.neew_tmp_arr=[];

        if(mySharedService.new_arrr.length)
        {
            console.log($scope.order_lst);
            console.log(mySharedService.shareOrdDistListdata);
            $scope.neew_tmp_arr=$scope.order_lst;
            console.log(mySharedService.new_arrr);

            if(mySharedService.new_arrr.length==$scope.order_lst.length)
            {
                $scope.order_lst=mySharedService.new_arrr;
                mySharedService.shareOrdDistListdata=mySharedService.new_arrr;
            }
            else
            {
                $scope.order_lst=[];
                for(i=0;i<$scope.neew_tmp_arr.length;i++)
                {
                    for(j=0;j<mySharedService.new_arrr.length;j++)
                    {
                        if($scope.neew_tmp_arr[i])
                        {
                            if(mySharedService.new_arrr[j].dist_id==$scope.neew_tmp_arr[i].dist_id)
                            {
                                $scope.order_lst.push(mySharedService.new_arrr[j]);
                                console.log($scope.order_lst);
                                mySharedService.shareOrdDistListdata.splice(i,1);
                            }
                        }
                    }
                }
                console.log($scope.order_lst);
                for(k=0;k<mySharedService.shareOrdDistListdata.length;k++)
                {
                    $scope.order_lst.push(mySharedService.shareOrdDistListdata[k]);
                }
                console.log($scope.order_lst);

            }
        }


        $scope.payment_data={};
        $scope.payment_data.payment_type=[];
        $scope.payment_data.payment_mode=[];
        $scope.payment_data.order_amt=[];
        $scope.payment_data.order_cno=[];
        $scope.payment_data.order_ref=[];
        $scope.payment_data.next_followup_date=[];
        $scope.payment_data.distributor_idd=[];
        if(mySharedService.payment_type.length)
        {
            console.log(mySharedService.payment_type);
            for(i=0;i<mySharedService.payment_type.length;i++)
            {
                $scope.payment_data.payment_type[i]=mySharedService.payment_type[i];
                $scope.payment_data.payment_mode[i]=mySharedService.payment_mode[i];
                $scope.payment_data.order_amt[i]=mySharedService.order_amt[i];
                $scope.payment_data.order_cno[i]=mySharedService.order_cno[i];
                $scope.payment_data.order_ref[i]=mySharedService.order_ref[i];
                $scope.payment_data.next_followup_date[i]=mySharedService.next_followup_date[i];
                $scope.payment_data.distributor_idd[i]=mySharedService.distributor_idd[i];
            }
        }

        $ionicModal.fromTemplateUrl('templates/ret-gst-info.html', {
            scope: $scope,
            animation: 'zoomIn'
        }).then(function(modal) {
            $scope.gst_modal = modal;
        });
        // ++++++++++++++++++ Open modal +++++++++++++++++++++++ //
        $scope.open_gst_modal = function(distributor_name) {
            $scope.distt_name=distributor_name;
            console.log($scope.distt_name);
            console.log($scope.distr_arr);
            $scope.gst_modal.show();
        };
        // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
        $scope.close_gst_modal = function() {
            $scope.gst_modal.hide();
        };

        $scope.orderDate;
        $scope.currentDate = new Date();
        $scope.orderDate = moment($scope.currentDate).format('YYYY-MM-DD');
        $scope.formatDate = function(date){
            return new Date(date)
        }

        $scope.sub_date = function()
        {
            $scope.currentDate = moment($scope.currentDate).subtract(1, 'days');
            $scope.orderDate = moment($scope.currentDate).format('YYYY-MM-DD');
            console.log($scope.orderDate);
        }

        $scope.today = new Date();
        $scope.add_date = function()
        {
            $scope.currentDate = moment($scope.currentDate).format('YYYY-MM-DD');
            $scope.today = moment($scope.today).format('YYYY-MM-DD');
            if($scope.currentDate < $scope.today)
            {
                console.log($scope.currentDate);
                $scope.currentDate = moment($scope.currentDate).add(1, 'days');
                $scope.orderDate = moment($scope.currentDate).format('YYYY-MM-DD');
                console.log($scope.orderDate);
            }
        }

        $scope.next_followup_dt;
        $scope.date_val=function(dt)
        {
            console.log(dt);
            $scope.next_followup_dt=dt;
        }

        $scope.payment_mode=[];
        $scope.payment_type=[];
        $scope.next_followup_date=[];
        $scope.order_amt=[];
        $scope.order_ref=[];
        $scope.order_cno=[];
        $scope.next_followup_dt=[];
        $scope.new_pay_type_arr=[];
        $scope.new_pay_mode_arr=[];
        $scope.new_type_id_arr=[];
        $scope.new_amt_arr=[];
        $scope.new_ref_arr=[];
        $scope.new_cno_arr=[];
        $scope.credit_arr=[];
        $scope.credit_date=[];
        $scope.new_credit_type_id_arr=[];

        $scope.confirm_order=function(type)
        {
            $scope.segment_comb_array=[];
            $scope.gst_array=[];
            $rootScope.dist_array=[];
            $rootScope.seg_amt=[];
            $scope.seg_det=[];
            $scope.cart_arr=[];
            $rootScope.price_val_chg=[];
            console.log($scope.order_lst);
            console.log($scope.payment_data);

            if($scope.order_lst.length<$scope.payment_data.distributor_idd.length)
            {
                console.log("IN IF");
                console.log($scope.order_lst.length);
                console.log($scope.payment_data.distributor_idd.length);
                for(k=0;k<$scope.order_lst.length;k++)
                {
                    for(l=0;l<$scope.payment_data.distributor_idd.length;l++)
                    {
                        console.log("CONS");
                        if($scope.order_lst[k].dist_id==$scope.payment_data.distributor_idd[l])
                        {
                            console.log("IF"+l);
                        }
                        else
                        {
                            console.log("ELSE"+l);
                            $scope.payment_data.distributor_idd.splice(l,1);
                            $scope.payment_data.next_followup_date.splice(l,1);
                            $scope.payment_data.order_amt.splice(l,1);
                            $scope.payment_data.order_cno.splice(l,1);
                            $scope.payment_data.order_ref.splice(l,1);
                            $scope.payment_data.payment_mode.splice(l,1);
                            $scope.payment_data.payment_type.splice(l,1);
                        }
                    }
                }
            }

            console.log($scope.order_lst);
            console.log($scope.payment_data);


            if($scope.payment_data.payment_mode=='Neft')
            {
                $scope.order_cno=[];
            }

            if($scope.payment_data.payment_mode=='Cheque')
            {
                $scope.order_ref=[];
            }

            if($scope.payment_data.next_followup_date.length)
            {
                for(i=0;i<$scope.payment_data.next_followup_date.length;i++)
                {
                    $scope.next_followup_dt[i]=moment($scope.payment_data.next_followup_date[i]).format('YYYY-MM-DD');
                }
            }

            console.log($scope.payment_data.payment_type)

            // for(i=0;i<$scope.payment_data.payment_type.length;i++)
            for(i=0;i<$scope.order_lst.length;i++)
            {

                console.log($scope.order_lst);

                if($scope.payment_data.payment_type[i]=='Advance')
                {
                    if(type=='1')
                    {
                        $scope.new_type_id_arr.push($scope.order_lst[i].dist_id);
                    }
                    if(type=='2')
                    {
                        $scope.new_type_id_arr.push($scope.order_lst[i].dist);
                    }
                    $scope.new_pay_type_arr.push($scope.payment_data.payment_type[i]);
                    $scope.new_pay_mode_arr.push($scope.payment_data.payment_mode[i]);
                    $scope.new_amt_arr.push($scope.payment_data.order_amt[i]);
                    $scope.new_ref_arr.push($scope.payment_data.order_ref[i]);
                    $scope.new_cno_arr.push($scope.payment_data.order_cno[i]);
                }
                else
                {
                    console.log($scope.order_lst)
                    console.log('type1',' ',type)


                    if(type=='1')
                    {
                        console.log('type1')
                        console.log($scope.order_lst[i].dist_id)
                        $scope.new_credit_type_id_arr.push($scope.order_lst[i].dist_id);
                        console.log($scope.order_lst[i].dist_id)

                        console.log($scope.new_credit_type_id_ar)

                    }
                    if(type=='2')
                    {
                        console.log("type2")
                        console.log($scope.order_lst[i].dist_id)
                        $scope.new_credit_type_id_arr.push($scope.order_lst[i].dist);
                    }

                    $scope.credit_arr.push($scope.payment_data.payment_type[i]);
                    // $scope.new_credit_type_id_arr.push($scope.order_lst[i].dist);
                    $scope.credit_date.push($scope.next_followup_dt[i]);
                }
            }
            console.log($scope.new_pay_type_arr);
            console.log($scope.new_pay_mode_arr);
            console.log($scope.new_type_id_arr);
            console.log($scope.new_amt_arr);
            console.log($scope.new_ref_arr);
            console.log($scope.new_cno_arr);
            console.log($scope.credit_arr);
            console.log($scope.new_credit_type_id_arr);
            console.log($scope.credit_date);
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            console.log($scope.oid);

            console.log($rootScope.retailers_id);
            console.log($scope.orderDate);
            console.log(mySharedService.last_payment);
            if(mySharedService.last_payment)
            {
                send_val=1;
            }
            else
            {
                send_val=0;
            }
            console.log($scope.payment_data.order_req);
            loginService.update_in_order($scope.oid,$scope.payment_data.order_req,$scope.credit_date,$scope.new_pay_type_arr,$scope.new_pay_mode_arr,$scope.orderDate,$rootScope.retailers_id,$scope.new_type_id_arr,$scope.new_amt_arr,$scope.new_ref_arr,$scope.new_cno_arr,$scope.credit_arr,$scope.new_credit_type_id_arr,type,send_val)
            .then(function (result)
            {
                console.log(result);
                console.log($rootScope.retailers_id);
                $scope.get_orders($rootScope.retailers_id,type);
                $ionicLoading.hide();
            },
            function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }

        /*Edit Order Function Start*/
        $scope.edit_order=function()
        {
            mySharedService.payment_type=[];
            mySharedService.payment_mode=[];
            mySharedService.order_amt=[];
            mySharedService.order_cno=[];
            mySharedService.order_ref=[];
            mySharedService.next_followup_date=[];
            mySharedService.distributor_idd=[];
            $scope.make_dist_arr=[];
            mySharedService.share_seg_comb_data=[];
            $rootScope.valid=true;

            console.log(mySharedService.type)
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            console.log($scope.myDistAllOrderDetail);
            mySharedService.type= $scope.myDistAllOrderDetail.type;
            console.log($scope.orderDists);
            $rootScope.seg_amt=[];
            $rootScope.disc_val=[];
            $rootScope.dist_array=[];
            mySharedService.cart_arr=[];
            mySharedService.dist_name=[];
            var j=0;
            if(mySharedService.type==1)
            {
                for(i=0;i<$scope.myDistAllOrderDetail.order_segment.length;i++)
                {
                    $rootScope.seg_amt.push({segment_name: $scope.myDistAllOrderDetail.order_segment[i].segment_name, price:$scope.myDistAllOrderDetail.order_segment[i].segment_total_mrp});

                    $rootScope.price_val_chg.push({seg_name: $scope.myDistAllOrderDetail.order_segment[i].segment_name, price_val:$scope.myDistAllOrderDetail.order_segment[i].segment_total_mrp});

                    for(k=0;k<mySharedService.saved_seg_dist.length;k++)
                    {
                        if(mySharedService.saved_seg_dist[k].segment_name==$scope.myDistAllOrderDetail.order_segment[i].segment_name)
                        {
                            $rootScope.dist_array.push(mySharedService.saved_seg_dist[k]);
                            console.log($rootScope.dist_array);

                            for(m=0;m<mySharedService.saved_seg_dist[k].distributors.length;m++)
                            if(mySharedService.saved_seg_dist[k].distributors[m].dr_name==$scope.myDistAllOrderDetail.order_segment[i].distributor)
                            {
                                mySharedService.dist_name[$scope.myDistAllOrderDetail.order_segment[i].segment_name]=mySharedService.saved_seg_dist[k].distributors[m];
                            }
                        }
                    }

                    mySharedService.share_seg_comb_data.push({seg_name: $scope.myDistAllOrderDetail.order_segment[i].segment_name, segment_price_mrp: $scope.myDistAllOrderDetail.order_segment[i].segment_total_mrp, seg_price_disc:$scope.myDistAllOrderDetail.order_segment[i].segment_total, disc: $scope.myDistAllOrderDetail.order_segment[i].segment_discount, dist: $scope.myDistAllOrderDetail.order_segment[i].distributor, distr_img: $scope.myDistAllOrderDetail.order_segment[i].dr_image, dist_id:$scope.myDistAllOrderDetail.order_segment[i].distributor_id, gst: $scope.myDistAllOrderDetail.order_segment[i].gst_percent, after_gst_amt: $scope.myDistAllOrderDetail.order_segment[i].segment_total_amount, gst_amt: $scope.myDistAllOrderDetail.order_segment[i].gst_amount});

                    $rootScope.disc_val[$scope.myDistAllOrderDetail.order_segment[i].segment_name]=$scope.myDistAllOrderDetail.order_segment[i].segment_discount;
                }
            }

            if(mySharedService.type==2)
            {
                for(i=0;i<$scope.myDistAllOrderDetail.order_segment.length;i++)
                {
                    $rootScope.seg_amt.push({segment_name: $scope.myDistAllOrderDetail.order_segment[i].segment_name, price:$scope.myDistAllOrderDetail.order_segment[i].segment_total_mrp});

                    $rootScope.price_val_chg.push({seg_name: $scope.myDistAllOrderDetail.order_segment[i].segment_name, price_val:$scope.myDistAllOrderDetail.order_segment[i].segment_total_mrp});

                    mySharedService.share_seg_comb_data.push({seg_name: $scope.myDistAllOrderDetail.order_segment[i].segment_name, segment_price_mrp: $scope.myDistAllOrderDetail.order_segment[i].segment_total_mrp, seg_price_disc:$scope.myDistAllOrderDetail.order_segment[i].segment_total, disc: $scope.myDistAllOrderDetail.order_segment[i].segment_discount, dist: $scope.myDistAllOrderDetail.order_segment[i].segment_delivery, distr_img: null, dist_id:$scope.myDistAllOrderDetail.order_segment[i].segment_delivery, gst: $scope.myDistAllOrderDetail.order_segment[i].gst_percent, after_gst_amt: $scope.myDistAllOrderDetail.order_segment[i].segment_total_amount, gst_amt: $scope.myDistAllOrderDetail.order_segment[i].gst_amount});

                    mySharedService.dist_name[$scope.myDistAllOrderDetail.order_segment[i].segment_name]=$scope.myDistAllOrderDetail.order_segment[i].segment_delivery;

                    $rootScope.disc_val[$scope.myDistAllOrderDetail.order_segment[i].segment_name]=$scope.myDistAllOrderDetail.order_segment[i].segment_discount;
                }
            }
            console.log(mySharedService.share_seg_comb_data);
            if($scope.myDistAllOrderDetail.order_item && $scope.myDistAllOrderDetail.order_item.length)
            {
                for(i=0;i<$scope.myDistAllOrderDetail.order_item.length;i++)
                {
                    mySharedService.cart_arr.push({ segment_name: $scope.myDistAllOrderDetail.order_item[i].segment_name, catg_no: $scope.myDistAllOrderDetail.order_item[i].cat_no, quantity: $scope.myDistAllOrderDetail.order_item[i].qty, product_name: $scope.myDistAllOrderDetail.order_item[i].product_name, amount: $scope.myDistAllOrderDetail.order_item[i].rate, dist_id:0, feat_id: $scope.myDistAllOrderDetail.order_item[i].feat_id, feature: $scope.myDistAllOrderDetail.order_item[i].feature});
                }

                mySharedService.edit_enable=true;
                mySharedService.edit_enable_button=true;
                mySharedService.temp_cart_arr=mySharedService.cart_arr;
            }



            $ionicHistory.clearCache().then(function () {
                // $state.go('tab.addorder');
                if(mySharedService.type=='1')
                {
                    $state.go('tab-ret.addproduct-ret');
                }
                if(mySharedService.type=='2')
                {
                    $state.go('tab-dist.addproduct-dist');
                }
                $ionicLoading.hide();
            });
        }
        /*Edit Order Function End*/

        $scope.cart_arr=mySharedService.cart_arr;
        $scope.data.dist_name=mySharedService.dist_name;
        $scope.edit_enable=mySharedService.edit_enable;
        $scope.edit_enable_button=mySharedService.edit_enable_button;
        console.log($scope.data.dist_name);
        console.log($rootScope.dist_array);


        $scope.ddate = new Date();
        if(!$scope.dwrdate)
        {
            console.log("IF NOT DWR DATE");
            $scope.dwrdate = moment($scope.ddate).format('YYYY-MM-DD');
        }

        $scope.sub_dwr = function()
        {
            if($scope.backdwrdate)
            {
                // $scope.back_backdwrdate=$scope.backdwrdate;
                $scope.currentDates = moment($scope.backdwrdate).subtract(1, 'days');
                $scope.dwrdate = moment($scope.currentDates).format('YYYY-MM-DD');
                console.log($scope.dwrdate);
                $scope.dwrlist($scope.dwrdate);
                $scope.backdwrdate='';
                mySharedService.backdwrdate='';
            }
            else
            {
                $scope.currentDates = moment($scope.dwrdate).subtract(1, 'days');
                $scope.dwrdate = moment($scope.currentDates).format('YYYY-MM-DD');
                console.log($scope.dwrdate);
                $scope.dwrlist($scope.dwrdate);
            }
        }

        $scope.today = new Date();
        $scope.add_dwr = function()
        {
            if($scope.backdwrdate)
            {
                // $scope.back_backdwrdate=$scope.backdwrdate;
                $scope.currentDates = moment($scope.backdwrdate).format('YYYY-MM-DD');
                $scope.today = moment($scope.today).format('YYYY-MM-DD');
                if($scope.currentDates < $scope.today)
                {
                    console.log($scope.currentDates);
                    $scope.currentDates = moment($scope.currentDates).add(1, 'days');
                    $scope.dwrdate = moment($scope.currentDates).format('YYYY-MM-DD');
                    console.log($scope.dwrdate);
                    $scope.dwrlist($scope.dwrdate);
                }
                $scope.backdwrdate='';
                mySharedService.backdwrdate='';
            }
            else
            {
                $scope.currentDates = moment($scope.dwrdate).format('YYYY-MM-DD');
                $scope.today = moment($scope.today).format('YYYY-MM-DD');
                if($scope.currentDates < $scope.today)
                {
                    console.log($scope.currentDates);
                    $scope.currentDates = moment($scope.currentDates).add(1, 'days');
                    $scope.dwrdate = moment($scope.currentDates).format('YYYY-MM-DD');
                    console.log($scope.dwrdate);
                    $scope.dwrlist($scope.dwrdate);
                }
            }
        }

        $scope.dwrdata=mySharedService.dwrdata;
        $scope.dwrpaydata=mySharedService.dwrpaydata;
        $scope.showdwrdate=mySharedService.showdwrdate;
        $scope.dwrretreqdata=mySharedService.dwrretreqdata;
        $scope.dwrdistreqdata=mySharedService.dwrdistreqdata;
        $scope.dwrsecord=mySharedService.dwrsecord;
        $scope.dwrprimord=mySharedService.dwrprimord;

        $scope.dwrlist=function(date,type)
        {
            console.log(date);
            if(type=='1')
            {
                console.log($scope.backdwrdate);
                $scope.showdwrdate=$scope.backdwrdate;
                mySharedService.showdwrdate=$scope.backdwrdate;
            }
            else
            {
                $scope.showdwrdate=$scope.dwrdate;
                mySharedService.showdwrdate=$scope.dwrdate;
            }
            console.log($scope.showdwrdate);
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.dwrlist($scope.showdwrdate)
            .then(function (result)
            {
                console.log(result);
                console.log(result.data.data);
                $scope.dwrdata=result.data.data;
                $scope.dwrpaydata=result.data.data1;
                mySharedService.dwrdata=result.data.data;
                mySharedService.dwrpaydata=result.data.data1;
                $scope.dwrretreqdata=result.data.data2;
                mySharedService.dwrretreqdata=result.data.data2;
                $scope.dwrdistreqdata=result.data.data3;
                mySharedService.dwrdistreqdata=result.data.data3;

                $scope.dwrsecord=result.data.data4;
                mySharedService.dwrsecord=result.data.data4;

                $scope.dwrprimord=result.data.data5;
                mySharedService.dwrprimord=result.data.data5;
                $state.go('tab.dwr');
                $ionicLoading.hide();
            },
            function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }

        $scope.ret_visit_lst=mySharedService.visitdata;
        $scope.backdwrdate=mySharedService.backdwrdate;

        console.log(mySharedService.backdwrdate);

        $scope.dwr_ret_visit=function(type,int_cont)
        {
            console.log(int_cont);
            if(mySharedService.backdwrdate)
            {
                $scope.dwrdate=mySharedService.backdwrdate;
            }
            console.log($scope.dwrdate);
            console.log(mySharedService.backdwrdate);
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.dwr_ret_visit(type,$scope.dwrdate)
            .then(function (result)
            {
                console.log(result);
                console.log(result.data);
                $scope.ret_visit_lst=result.data;
                mySharedService.visitdata=result.data;
                $scope.backdwrdate=$scope.dwrdate;
                mySharedService.backdwrdate=$scope.dwrdate;
                if(type=='3')
                {
                    $state.go('tab.dwr-pay');
                }
                if(type=='1' || type=='2' || type=='8')
                {
                    $state.go('tab.dwr-ret-dist');
                }
                if(int_cont=='Retailer')
                {
                    type=4;
                }
                if(int_cont=='Distributor')
                {
                    type=5;
                }
                if(type=='4' || type=='5')
                {
                    $state.go('tab.dwr-req');
                }
                if(type=='6')
                {
                    mySharedService.prepForRetOrdersBroadcast(result.data);
                    $scope.ret_orders = result.data;
                    $rootScope.hide_plus=true;
                    $state.go('tab-ret.tab-order-ret');
                }
                if(type=='7')
                {
                    mySharedService.prepForRetOrdersBroadcast(result.data);
                    $scope.ret_orders = result.data;
                    $rootScope.hide_plus=true;
                    $state.go('tab-dist.tab-order-dist');
                }
                $ionicLoading.hide();
            },
            function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }

        $scope.leave_lst=mySharedService.leavedata;

        $scope.leave_lsts=mySharedService.leave_lsts;
        $scope.national_holiday=mySharedService.national_holiday;
        $scope.show_hol=mySharedService.show_hol;
        $scope.leave_list=function()
        {
            $scope.show_hol=false;
            mySharedService.show_hol=false;
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.leave_list()
            .then(function (result)
            {
                console.log(result);
                $scope.leave_lst=result.data;
                mySharedService.leavedata=result.data;
                loginService.check_add_leave($scope.today_leave)
                .then(function (result)
                {
                    console.log(result);
                    for(j=0;j<$scope.leave_lst.length;j++)
                    {
                        for(i=0;i<result.data.leave_lst.length;i++)
                        {
                            if(result.data.leave_lst[i].leave_type == $scope.leave_lst[j].leave_type && $scope.leave_lst[j].status == 'Approved')
                            {
                                console.log(i+" "+j);
                                result.data.leave_lst[i].total_leave=parseInt(result.data.leave_lst[i].total_leave)-parseInt($scope.leave_lst[j].leave_req);
                            }
                        }
                    }
                    console.log(result.data.leave_lst);
                    $scope.leave_lsts=result.data.leave_lst;
                    mySharedService.leave_lsts=result.data.leave_lst;
                    $scope.national_holiday=result.data.nat_holiday;
                    mySharedService.national_holiday=result.data.nat_holiday;

                    $state.go('tab.leave');
                    $ionicLoading.hide();
                },
                function (err) {
                    console.error(err);
                    $ionicLoading.hide();
                })
            },
            function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }

        $scope.leave_date=function(l_date)
        {
            console.log(l_date);
            $scope.leave_to=moment(l_date).format('YYYY-MM-DD');
        }

        $scope.today_leave = new Date();
        $scope.today_leave=moment($scope.today_leave).format('YYYY-MM-DD');
        $scope.next_follow_act = moment($scope.today_leave).add(1, 'days');
        $scope.next_followup_act=moment($scope.next_follow_act).format('YYYY-MM-DD');
        console.log($scope.next_followup_act);

        // $scope.check_add_leave=function()
        // {
        //   console.log($scope.today_leave);
        //   console.log($scope.leave_lst);
        //   $ionicLoading.show
        //   ({
        //       template: '<span class="icon spin ion-loading-d"></span> Loading...'
        //   });
        //   loginService.check_add_leave($scope.today_leave)
        //   .then(function (result)
        //   {
        //     console.log(result);
        //     for(j=0;j<$scope.leave_lst.length;j++)
        //     {
        //       for(i=0;i<result.data.leave_lst.length;i++)
        //       {
        //         if(result.data.leave_lst[i].leave_type == $scope.leave_lst[j].leave_type)
        //         {
        //           console.log(i+" "+j);
        //           result.data.leave_lst[i].total_leave=parseInt(result.data.leave_lst[i].total_leave)-parseInt($scope.leave_lst[j].leave_req);
        //         }
        //       }
        //     }
        //     console.log(result.data.leave_lst);
        //     $scope.leave_lsts=result.data.leave_lst;
        //     mySharedService.leave_lsts=result.data.leave_lst;
        //     $scope.national_holiday=result.data.nat_holiday;
        //     mySharedService.national_holiday=result.data.nat_holiday;
        //     $scope.regional_holiday=result.data.reg_holiday;
        //     mySharedService.regional_holiday=result.data.reg_holiday;
        //     $state.go('tab.addleave');
        //     $ionicLoading.hide();
        //   },
        //    function (err) {
        //      console.error(err);
        //      $ionicLoading.hide();
        //   })
        // }
        var _MS_PER_DAY = 1000 * 60 * 60 * 24;

        function dateDiffInDays(a, b) {
            // Discard the time and time-zone information.
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        $scope.error_con=true;
        $scope.assigned_range=function()
        {
            // console.log($scope.data.leave_type);
            // console.log($scope.data.st_date);
            // console.log($scope.data.end_date);
            if($scope.data.st_date && $scope.data.end_date)
            {
                $scope.difference_val=dateDiffInDays($scope.data.st_date, $scope.data.end_date) + 1;
            }
            console.log($scope.difference_val);
            for(i=0;i<$scope.leave_lsts.length;i++)
            {
                if($scope.leave_lsts[i].leave_type==$scope.data.leave_type)
                {
                    val=$scope.leave_lsts[i].total_leave;
                }
            }


            if($scope.difference_val>=0 && $scope.data.subj && $scope.data.leave_type)
            {
                if($scope.difference_val>parseInt(val))
                {
                    $scope.error_con=true;
                }
                else
                {
                    $scope.error_con=false;
                }
                console.log($scope.error_con);

            }
        }

        $scope.add_leave=function()
        {
            console.log($scope.data.leave_type);
            console.log($scope.data.subj);
            $scope.sdate=moment($scope.data.st_date).format('YYYY-MM-DD');
            $scope.edate=moment($scope.data.end_date).format('YYYY-MM-DD');
            console.log($scope.sdate);
            console.log($scope.edate);
            $scope.date_diff=difference = dateDiffInDays($scope.data.st_date, $scope.data.end_date);
            $scope.date_diff=$scope.date_diff+1;
            console.log($scope.date_diff);
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.add_leave($scope.data.subj,$scope.sdate,$scope.edate,$scope.data.leave_type,$scope.date_diff)
            .then(function (result)
            {
                console.log(result);
                $scope.leave_list();
                $ionicLoading.hide();
            },
            function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }

        $scope.follow_lst=mySharedService.followupdata;
        $scope.last_follow_lst=mySharedService.lastfollowupdata;
        $scope.followup_list=function()
        {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.followup_list()
            .then(function (result)
            {
                console.log(result);
                $scope.follow_lst=result.data.data;
                mySharedService.followupdata=result.data.data;
                $scope.last_follow_lst=result.data.data1;
                mySharedService.lastfollowupdata=result.data.data1;
                $state.go('tab.followup');
                $ionicLoading.hide();
            },
            function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }



        $scope.myNoticeList= mySharedService.shareNoticeList;
        console.log($scope.myNoticeList);
        $scope.notice_list = function ()
        {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.notice_list()
            .then(function (result)
            {
                console.clear();
                mySharedService.shareNoticeList = result.data;
                $state.go('tab.announcement');
                $ionicLoading.hide();

            }, function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.myNoticeDet= mySharedService.shareNoticeDet;
        $scope.ann_id=mySharedService.ann_id;
        $scope.notice_detail = function (id)
        {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            mySharedService.ann_id=id;
            loginService.notice_detail(id)
            .then(function (result)
            {
                console.log(result);
                mySharedService.shareNoticeDet = result.data;
                $state.go('tab.announcement-detail');
                $ionicLoading.hide();

            }, function (err) {

                $ionicLoading.hide();
                console.error(err);
            })
        }


        $scope.notice_download = function (file_name)
        {
            var url = upload_url + file_name;
            var targetPath = cordova.file.externalRootDirectory+'Download/'  + file_name; //cordova.file.documentsDirectory(FOR IOS)
            var trustHosts = true;
            var options = {};
            console.log(targetPath);

            $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function(result) {
                // Success!
            }, function(err) {
                // Error
            }, function (progress) {
                $timeout(function () {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                    $ionicLoading.show({
                        template: "Downloaded：" + Math.floor($scope.downloadProgress) + "%"
                    });

                    if ($scope.downloadProgress == 100) {
                        $ionicLoading.hide();
                    }

                    console.log('Notice Download = ' + $scope.downloadProgress);
                });

            });
        }
        $scope.disp_edit1=true;
        $scope.disp_edit2=true;
        $scope.disp_edit3=true;
        $scope.disp_edit4=true;

        $scope.disp_edit5=true;
        $scope.disp_edit6=true;
        $scope.disp_edit7=true;
        $scope.disp_edit8=true;
        $scope.disp_edit9=true;
        // $scope.myProfileDetail.date_birth = mySharedService.date_birth;
        $scope.myProfileDetail = mySharedService.shareProfileDetail;
        $scope.state_data = mySharedService.state_data;
        $scope.district_data = mySharedService.district_data;
        $scope.pincode_data = mySharedService.pincode_data;
        $scope.city_data = mySharedService.city_data;
        $scope.area_data = mySharedService.area_data;
        console.log($scope.myProfileDetail);
        $scope.profile_detail = function()
        {
            console.log("PR");
            loginService.profile_detail()
            .then(function (result)
            {
                // console.clear();
                console.log(result);
                $scope.myProfileDetail=result.data.data;
                mySharedService.shareProfileDetail = result.data.data;
                $scope.myProfileDetail.date_birth = new Date(result.data.data.date_birth);
                mySharedService.date_birth = new Date(result.data.data.date_birth);
                $scope.state_data=result.data.state;
                mySharedService.state_data = result.data.state;
                $scope.district_data=result.data.dists;
                mySharedService.district_data = result.data.dists;
                $scope.pincode_data=result.data.pins;
                mySharedService.pincode_data = result.data.pins;
                $scope.city_data=result.data.city;
                mySharedService.city_data = result.data.city;
                $scope.area_data=result.data.area;
                mySharedService.area_data = result.data.area;

                $state.go('tab.profile');
                $timeout(function () { $ionicLoading.hide(); }, 300);

            }, function (err) {

                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.save_comp_info=function()
        {
            console.log($scope.retailer_det);
            loginService.save_comp_info($scope.retailer_det)
            .then(function (result)
            {
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.save_dr_pers_info=function()
        {
            console.log($scope.retailer_contact);
            $scope.retailer_contact.map(function(item){
                console.log(item.dob);

                item.dob = moment(item.dob).format('YYYY-MM-DD');
            });
            // $scope.ret_date_birth=moment($scope.retailer_det.dob).format('YYYY-MM-DD');
            console.log($scope.retailer_contact);
            loginService.save_dr_pers_info($scope.retailer_contact)
            .then(function (result)
            {
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.save_dr_add_info=function()
        {
            loginService.save_dr_add_info($scope.retailer_det)
            .then(function (result)
            {
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.save_ship_add_info=function()
        {
            loginService.save_ship_add_info($scope.retailer_det)
            .then(function (result)
            {
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.save_pers_info=function()
        {
            $scope.profile_date_birth=moment($scope.myProfileDetail.date_birth).format('YYYY-MM-DD');
            $scope.profile_date_join=moment($scope.myProfileDetail.date_joining).format('YYYY-MM-DD');

            loginService.save_pers_info($scope.myProfileDetail,$scope.profile_date_birth,$scope.profile_date_join)
            .then(function (result)
            {
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.save_add_info=function()
        {
            loginService.save_add_info($scope.myProfileDetail)
            .then(function (result)
            {
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.save_login_info=function()
        {
            loginService.save_login_info($scope.myProfileDetail)
            .then(function (result)
            {
                var query = "UPDATE "+dbTableName+" SET password='"+$scope.myProfileDetail.password+"'";
                console.log(query);

                $cordovaSQLite.execute(db, query).then(function(res) {
                    console.log(res);
                }, function (err) {
                    console.error(err);
                });
                console.log(result);
            }, function (err) {
                console.error(err);
            })
        }

        $scope.get_profile_districts=function(st_name,val)
        {
            console.log(st_name);
            loginService.get_profile_districts(st_name)
            .then(function (result)
            {
                console.log(result);
                if(val==1)
                {
                    $scope.ret_district_data=result.data.dists;
                    mySharedService.ret_district_data = result.data.dists;
                    $scope.retailer_det.district_name='';
                    $scope.retailer_det.city='';
                    $scope.retailer_det.area='';
                    $scope.retailer_det.pincode='';
                }
                else if(val==2)
                {
                    $scope.ship_district_data=result.data.dists;
                    mySharedService.ship_district_data = result.data.dists;
                    $scope.retailer_det.ship_district_data='';
                    $scope.retailer_det.ship_city_data='';
                    $scope.retailer_det.ship_area_data='';
                    $scope.retailer_det.ship_pincode='';
                }
                else
                {
                    $scope.district_data=result.data.dists;
                    mySharedService.district_data = result.data.dists;
                }
                $ionicLoading.hide();
            }, function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.get_profile_city=function(dist_name,st_name,val)
        {
            console.log(st_name);
            loginService.get_profile_city(dist_name,st_name)
            .then(function (result)
            {
                console.log(result);
                if(val==1)
                {
                    $scope.ret_city_data=result.data.city;
                    mySharedService.ret_city_data = result.data.city;
                    $scope.retailer_det.city='';
                    $scope.retailer_det.area='';
                    $scope.retailer_det.pincode='';
                }
                else if(val==2)
                {
                    $scope.ship_city_data=result.data.city;
                    mySharedService.ship_city_data = result.data.city;
                    $scope.retailer_det.ship_city_data='';
                    $scope.retailer_det.ship_area_data='';
                    $scope.retailer_det.ship_pincode='';
                }
                else
                {
                    $scope.city_data=result.data.city;
                    mySharedService.city_data = result.data.city;
                }
                $ionicLoading.hide();
            }, function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.get_profile_area=function(city,st_name,val)
        {
            console.log(st_name);
            loginService.get_profile_area(city,st_name)
            .then(function (result)
            {
                console.log(result);
                if(val==1)
                {
                    $scope.ret_area_data=result.data.area;
                    mySharedService.ret_area_data = result.data.area;
                    $scope.retailer_det.pincode_data=result.data.pincode;
                    $scope.retailer_det.area='';
                    $scope.retailer_det.pincode='';
                }
                else if(val==2)
                {
                    $scope.ship_area_data=result.data.area;
                    mySharedService.ship_area_data = result.data.area;
                    $scope.retailer_det.ship_pincode=result.data.pincode;
                    $scope.retailer_det.ship_area_data='';
                    $scope.retailer_det.ship_pincode='';
                }
                else
                {
                    $scope.area_data=result.data.area;
                    mySharedService.area_data = result.data.area;
                    $scope.pincode_data=result.data.pincode;
                    mySharedService.pincode_data = result.data.pincode;
                }
                $ionicLoading.hide();
            }, function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.get_profile_pincodes=function(area,st_name,val)
        {
            console.log(area+" "+st_name);
            loginService.get_profile_pincodes(area,st_name)
            .then(function (result)
            {
                console.log(result);
                if(val==1)
                {
                    $scope.retailer_det.pincode=result.data.pincode[0].pincode;
                }
                else if(val==2)
                {
                    $scope.retailer_det.ship_pincode=result.data.pincode[0].pincode;
                }
                else
                {
                    $scope.pincode_data=result.data.pincode;
                    mySharedService.pincode_data = result.data.pincode;
                    $scope.myProfileDetail.pincode=result.data.pincode[0].pincode;
                }

                $ionicLoading.hide();
            }, function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.toggle_val=1;

        $scope.same_ship_as_bill_add=function(tg_val)
        {
            console.log(tg_val);

            if(tg_val==1)
            {
                $scope.retailer_det.ship_street=$scope.retailer_det.street;
                $scope.retailer_det.ship_state_name=$scope.retailer_det.state_name;
                $scope.retailer_det.ship_district_name=$scope.retailer_det.district_name;
                $scope.retailer_det.ship_pincode=$scope.retailer_det.pincode;
                $scope.retailer_det.ship_city=$scope.retailer_det.city;
                $scope.retailer_det.ship_area=$scope.retailer_det.area;

                $scope.ship_state_data=$scope.ret_state_data;
                mySharedService.ship_state_data = mySharedService.ret_state_data;
                $scope.ship_district_data=$scope.ret_district_data;
                mySharedService.ship_district_data = mySharedService.ret_district_data;
                $scope.ship_city_data=$scope.ret_city_data;
                mySharedService.ship_city_data = mySharedService.ret_city_data;
                $scope.ship_area_data=$scope.ret_area_data;
                mySharedService.ship_area_data = mySharedService.ret_area_data;
                $scope.toggle_val=2;
            }
            else
            {
                $scope.toggle_val=1;
                $scope.retailer_det.ship_street=[];
                $scope.retailer_det.ship_state_name='';
                $scope.retailer_det.ship_district_name='';
                $scope.retailer_det.ship_pincode='';
                $scope.retailer_det.ship_city='';
                $scope.retailer_det.ship_area='';
                $scope.ship_district_data=[];
                mySharedService.ship_district_data = [];
                $scope.ship_city_data=[];
                mySharedService.ship_city_data = [];
                $scope.ship_area_data=[];
                mySharedService.ship_area_data = [];
            }
        }

        $scope.lead_toggle_val=1;
        $scope.show_ship=false;
        $scope.isShipAdd='';

        $scope.same_ship_as_bill_add_lead=function(l_tg_val)
        {
            console.log(l_tg_val);
            $scope.isShipAdd = l_tg_val;
            if(l_tg_val==1)
            {
                $scope.show_ship=false;

                $scope.ship_state_arr=$scope.state_arr;
                $scope.ship_dist_arr=$scope.dist_arr;
                $scope.ship_area_arr=$scope.area_arr;
                $scope.ship_city_arr=$scope.city_arr;
                $scope.ship_pin_arr=$scope.pin_arr;

                $scope.data.selectedValue12=$scope.data.selectedValue7;
                $scope.data.selectedValue13=$scope.data.selectedValue8;
                $scope.data.selectedValue14=$scope.data.selectedValue10;
                $scope.data.selectedValue15=$scope.data.selectedValue11;
                $scope.data.selectedValue16=$scope.data.selectedValue9;
                $scope.mydata.ship_street=$scope.mydata.street;

                $scope.lead_toggle_val=2;
            }
            else
            {
                $scope.lead_toggle_val=1;
                $scope.show_ship=true;

                $scope.data.selectedValue12=null;
                $scope.data.selectedValue13=null;
                $scope.data.selectedValue14=null;
                $scope.data.selectedValue15=null;
                $scope.data.selectedValue16=null;
                $scope.mydata.ship_street='';
            }
        }

        $scope.set_profile_area=function(pin,st_name)
        {
            console.log(pin);
            loginService.set_profile_area(pin,st_name)
            .then(function (result)
            {
                console.log(result);
                $scope.myProfileDetail.area=result.data.area[0].area;
                $ionicLoading.hide();
            }, function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.profile_update = function(type)
        {
            console.log("update profile")
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            if(type == 1) {

                $scope.myProfileDetail.date_birth = moment($scope.myProfileDetail.date_birth).format('YYYY-MM-DD');
                loginService.profile_update($scope.myProfileDetail)
                .then(function (result)
                {
                    console.log(result);
                    $timeout(function () {
                        $cordovaToast.show('Profile Updated Successfully!', 'short', 'bottom').then(function(success) { },
                        function (error) {
                        });

                    }, 500);
                    $scope.profile_detail();

                    $ionicLoading.hide();
                }, function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })
            }

            if(type == 2) {

                var options = {

                    fileKey: "file",
                    fileName: "image.jpg",
                    chunkedMode: false,
                    mimeType: "image/*",
                };

                $cordovaFileTransfer.upload(server_url+"/profile_update.php?exec_id="+salesexe_id, $scope.mediaData[0].src, options).then(function(result) {
                    $ionicLoading.hide();
                    $scope.mediaData=[];
                    console.log("SUCCESS: " + JSON.stringify(result));
                    $scope.profile_detail();

                }, function(err) {
                    $ionicLoading.hide();
                    console.log("ERROR: " + JSON.stringify(err));
                }, function (progress) {

                });
            }
        }

        /*Retailer's Distributor & All Order Detail Start*/
        $scope.myDistAllOrderDetail=mySharedService.shareDistAllOrderDetail;
        $scope.more_ord_details=mySharedService.more_ord_details;
        $scope.order_detail = function (dist_id, order_id,type)
        {
            mySharedService.saved_order_id=order_id;

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });

            loginService.order_detail(dist_id, order_id,type)
            .then(function (result)
            {
                $scope.myDistAllOrderDetail = result.data.data;
                mySharedService.shareDistAllOrderDetail = result.data.data;
                $scope.more_ord_details = result.data.data1;
                mySharedService.more_ord_details = result.data.data1;
                console.log(result);

                $state.go('tab-ret.order-details');

                $ionicLoading.hide();

            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }
        /*Retailer's Distributor & All Order Detail End*/

        $scope.latitude=mySharedService.lat;
        $scope.longitude=mySharedService.long;
        $scope.last_gps_add=mySharedService.last_gps;
        $scope.location=function()
        {
            loginService.get_gps_loc($rootScope.retailers_id)
            .then(function (result)
            {
                console.log(result);
                $scope.last_gps_add=result.data.gps_address;
                mySharedService.last_gps=result.data.gps_address;

                var options = {timeout: 10000, enableHighAccuracy: true};
                $cordovaGeolocation.getCurrentPosition(options).then(function(position){
                    console.log(position.coords.latitude+" "+position.coords.longitude);

                    $scope.latitude=position.coords.latitude;
                    $scope.longitude=position.coords.longitude;

                    mySharedService.lat=position.coords.latitude;
                    mySharedService.long=position.coords.longitude;
                    $state.go('map-ret');
                }, function(error){
                    console.log("Could not get location");
                });



            },function (err) {
                console.error(err);
            })

        }

        $scope.add_loc=function()
        {
            console.log($rootScope.retailers_id);
            console.log(locat+" "+$scope.latitude+" "+$scope.longitude);
            loginService.add_loc($rootScope.retailers_id,locat,$scope.latitude,$scope.longitude)
            .then(function (result)
            {
                $scope.retailerdetails($rootScope.retailers_id,$rootScope.type)
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.near_arr=mySharedService.near;
        $scope.nearest_store=function()
        {
            // var p1 = new google.maps.LatLng(45.463688, 9.18814);
            // var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);
            //
            // console.log(calcDistance(p1, p2));
            //
            // //calculates distance between two points in km's
            // function calcDistance(p1, p2) {
            //   return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
            // }
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            var options = {timeout: 10000, enableHighAccuracy: true};
            $cordovaGeolocation.getCurrentPosition(options).then(function(position){
                console.log(position.coords.latitude+" "+position.coords.longitude);

                $scope.latitude=position.coords.latitude;
                $scope.longitude=position.coords.longitude;

                mySharedService.lat=position.coords.latitude;
                mySharedService.long=position.coords.longitude;

                loginService.get_nearest(position.coords.latitude,position.coords.longitude)
                .then(function (result)
                {
                    console.log(result);
                    $scope.near_arr=result.data;
                    mySharedService.near=result.data;
                    $state.go('tab.nearest');
                    $ionicLoading.hide();
                },function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })
            }, function(error){
                $ionicLoading.hide();
                console.log("Could not get location");
            });

        }

        $scope.get_dir=function(lat,lng)
        {
            console.log(lat+" "+lng);
            console.log($scope.latitude+" "+$scope.longitude);
            launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function(isAvailable){
                var app;
                if(isAvailable){
                    app = launchnavigator.APP.GOOGLE_MAPS;
                }else{
                    console.warn("Google Maps not available - falling back to user selection");
                    app = launchnavigator.APP.USER_SELECT;
                }
                launchnavigator.navigate([lat, lng], {
                    // start: "{{$scope.latitude}}, {{$scope.longitude}}",
                    app: app
                });
            });

            // $state.go('nearest-map');
        }

        $scope.mydata=[];
        $scope.show_ret_det=mySharedService.show_ret_det;
        $scope.state_arr=[];
        $scope.state_arr=mySharedService.state_arr;
        $scope.ship_state_arr=[];
        $scope.ship_state_arr=mySharedService.ship_state_arr;
        $scope.mydata.mob=mySharedService.mobile1;
        $scope.mydata.gst=mySharedService.gst;
        $scope.segment_names = [];
        $scope.segment_names = mySharedService.segment_names;
        $scope.data.selectedValue7;
        $scope.data.selectedValue8;
        $scope.data.selectedValue9;
        $scope.data.selectedValue10;
        $scope.data.selectedValue11;
        $scope.data.selectedValue12;
        $scope.data.selectedValue13;
        $scope.data.selectedValue14;
        $scope.data.selectedValue15;
        $scope.data.selectedValue16;
        $scope.mobile_disable=mySharedService.mobile_disable;
        $scope.gst_disable=mySharedService.gst_disable;

        $scope.add_ret=function(val)
        {
            console.log(val);
            console.log($scope.mydata.num);
            if(val==1)
            {
                mySharedService.mobile1=$scope.mydata.num;
                mySharedService.mobile1=$scope.mydata.num;
                mySharedService.mobile_disable=true;
                mySharedService.gst_disable=false;
                mySharedService.gst='';
                $scope.mydata.gst='';
            }
            else
            {
                mySharedService.gst=$scope.mydata.num;
                mySharedService.mobile_disable=false;
                mySharedService.gst_disable=true;
                mySharedService.mobile1='';
                $scope.mydata.mob='';
            }

            loginService.add_ret($scope.mydata.num,$scope.dr_type)
            .then(function (result)
            {
                console.log(result);
                if(result.data[0])
                {
                    // $scope.closert();
                    $scope.show_ret_det=result.data[0];
                    mySharedService.show_ret_det=result.data[0];
                    $state.go('tab.user-detail');
                }
                else
                {
                    loginService.get_state()
                    .then(function (result)
                    {
                        console.log(result);
                        $scope.state_arr=result.data;
                        mySharedService.state_arr=result.data;
                        console.log($scope.state_arr);
                        $scope.ship_state_arr=result.data;
                        mySharedService.ship_state_arr=result.data;
                        console.log($scope.ship_state_arr);
                        $scope.segment_names=[];
                        mySharedService.segment_names=[];
                        loginService.get_segment_names()
                        .then(function (result)
                        {
                            console.log(result);
                            console.log(result.length);
                            for(i=0;i<result.length;i++)
                            {
                                console.log(i);
                                // $scope.segment_names.push(result[i].segment_name);
                                mySharedService.segment_names.push(result[i].segment_name);
                            }
                            console.log($scope.segment_names);
                        },
                        function (err) {
                            $ionicLoading.hide();
                            console.error(err);
                        })
                        // $scope.segment_names = ["PTMT", "CPVC PIPE", "CP", "HARDWARE", "COCKROACH TRAPS", "SINK", "UPVC", "SANITARY WARE"];
                        // mySharedService.segment_names = ["PTMT", "CPVC PIPE", "CP", "HARDWARE", "COCKROACH TRAPS", "SINK", "UPVC", "SANITARY WARE"];
                        // $scope.closert(); /
                        $state.go('become-partner');


                    },function (err) {
                        console.error(err);
                    })
                }
                $ionicLoading.hide();
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.distributors_name=mySharedService.distributors_name;
        $scope.dist_arr=[];
        $scope.dist_arr=mySharedService.dist_arr;
        $scope.pin_arr=[];
        $scope.pin_arr=mySharedService.pin_arr;
        $scope.city_arr=[];
        $scope.city_arr=mySharedService.city_arr;
        $scope.area_arr=[];
        $scope.area_arr=mySharedService.area_arr;
        $scope.taluk_arr=[];

        $scope.ship_dist_arr=[];
        $scope.ship_dist_arr=mySharedService.ship_dist_arr;
        $scope.ship_pin_arr=[];
        $scope.ship_pin_arr=mySharedService.ship_pin_arr;
        $scope.ship_city_arr=[];
        $scope.ship_city_arr=mySharedService.ship_city_arr;
        $scope.ship_area_arr=[];
        $scope.ship_area_arr=mySharedService.ship_area_arr;
        $scope.get_district=function(st_name,type,become_part)
        {
            console.log(st_name);
            if(become_part==1)
            {

                if(type=='1')
                {
                    $timeout(function () { console.log($scope.data.selectedValue7);
                        loginService.get_district($scope.data.selectedValue7)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.dist_arr=result.data;
                            mySharedService.dist_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    }, 500);
                }

                if(type=='2')
                {
                    $timeout(function () { console.log($scope.data.selectedValue8);
                        loginService.get_city($scope.data.selectedValue8,$scope.data.selectedValue7)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.city_arr=result.data;
                            mySharedService.city_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    }, 500);
                }

                if(type=='3')
                {
                    $timeout(function () { console.log($scope.data.selectedValue10);
                        loginService.get_area($scope.data.selectedValue10,$scope.data.selectedValue7)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.pin_arr=result.data;
                            mySharedService.pin_arr=result.data;
                            $scope.area_arr=result.data;
                            mySharedService.area_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='4')
                {
                    $timeout(function () { console.log($scope.data.selectedValue11);
                        loginService.set_pincode($scope.data.selectedValue11,$scope.data.selectedValue7)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.data.selectedValue9=result.data[0].pincode;
                            console.log($scope.data.selectedValue9);
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='5')
                {
                    $timeout(function () { console.log($scope.data.selectedValue9);
                        loginService.set_area($scope.data.selectedValue9,$scope.data.selectedValue7)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.data.selectedValue11=result.data[0].area;
                            console.log($scope.data.selectedValue11);
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='6')
                {
                    $timeout(function () { console.log($scope.data.selectedValue12);
                        loginService.get_district($scope.data.selectedValue12)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.ship_dist_arr=result.data;
                            mySharedService.ship_dist_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    }, 500);
                }

                if(type=='7')
                {
                    $timeout(function () { console.log($scope.data.selectedValue13);
                        loginService.get_city($scope.data.selectedValue13,$scope.data.selectedValue12)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.ship_city_arr=result.data;
                            mySharedService.ship_city_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    }, 500);
                }

                if(type=='8')
                {
                    $timeout(function () { console.log($scope.data.selectedValue14);
                        loginService.get_area($scope.data.selectedValue14,$scope.data.selectedValue12)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.ship_pin_arr=result.data;
                            mySharedService.ship_pin_arr=result.data;
                            $scope.ship_area_arr=result.data;
                            mySharedService.ship_area_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='9')
                {
                    $timeout(function () { console.log($scope.data.selectedValue15);
                        loginService.set_pincode($scope.data.selectedValue15,$scope.data.selectedValue12)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.data.selectedValue16=result.data[0].pincode;
                            console.log($scope.data.selectedValue16);
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='10')
                {
                    $timeout(function () { console.log($scope.data.selectedValue16);
                        loginService.set_area($scope.data.selectedValue16,$scope.data.selectedValue12)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.data.selectedValue15=result.data[0].area;
                            console.log($scope.data.selectedValue15);
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }
            }

            else
            {
                if(type=='1')
                {
                    $timeout(function () { console.log($scope.data.selectedValue);
                        loginService.get_district($scope.data.selectedValue)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.dist_arr=result.data;
                            mySharedService.dist_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    }, 500);
                    $scope.data.selectedValue2=null;
                    $scope.data.selectedValue1=null;
                    $scope.data.selectedValue3=null;
                    $scope.data.selectedValue6=null;
                    mySharedService.selectedValue2=null;
                    mySharedService.selectedValue1=null;
                    mySharedService.selectedValue3=null;
                    mySharedService.selectedValue6=null;
                }

                if(type=='2')
                {
                    $timeout(function () { console.log($scope.data.selectedValue2);
                        loginService.get_city($scope.data.selectedValue2,$scope.data.selectedValue)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.city_arr=result.data;
                            mySharedService.city_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    }, 500);
                }

                if(type=='3')
                {
                    $timeout(function () { console.log($scope.data.selectedValue3);
                        loginService.get_area($scope.data.selectedValue3,$scope.data.selectedValue)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.pin_arr=result.data;
                            mySharedService.pin_arr=result.data;
                            $scope.area_arr=result.data;
                            mySharedService.area_arr=result.data;
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='4')
                {
                    $timeout(function () { console.log($scope.data.selectedValue6);
                        loginService.set_pincode($scope.data.selectedValue6,$scope.data.selectedValue)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.data.selectedValue1=result.data[0].pincode;
                            console.log($scope.data.selectedValue1);
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

                if(type=='5')
                {
                    $timeout(function () { console.log($scope.data.selectedValue1);
                        loginService.set_area($scope.data.selectedValue1,$scope.data.selectedValue)
                        .then(function (result)
                        {
                            console.log(result);
                            $scope.data.selectedValue6=result.data[0].area;
                            console.log($scope.data.selectedValue6);
                        },function (err) {
                            console.error(err);
                        })
                    },500);
                }

            }
        }

        function checkDistArrProperty(prop, newObj) {
            var result;
            Object.keys(newObj).forEach(function (key) {
                if (newObj[key]["id"] === prop) {
                    result = key
                }
            });
            return result;
        }

        function checkArrProperty(prop, newObj) {
            var result;
            Object.keys(newObj).forEach(function (key) {
                if (newObj[key]["value"] === prop) {
                    result = key
                }
            });
            return result;
        }

        $scope.filter_data=[];
        $scope.seg_select=[];
        $scope.modifiedOrder=[];
        $scope.format=function(all,index){
            console.log(all);
            console.log(index);
            if(all==true)
            {
                $scope.modifiedOrder=[];
                loginService.get_segment_names()
                .then(function (result)
                {
                    console.log(result);
                    console.log(result.length);
                    for(i=0;i<result.length;i++)
                    {
                        $scope.modifiedOrder.push({'value':result[i].segment_name});
                    }
                    console.log($scope.modifiedOrder);
                },
                function (err) {
                    $ionicLoading.hide();
                    console.error(err);
                })

            }
            else if(all==false)
            {
                $scope.modifiedOrder=[];
            }
            else
            {
                console.log($scope.modifiedOrder);
                console.log(index);

                $scope.filter_data=$filter('filter')($scope.modifiedOrder, {value:$scope.segment_names[index]}, true);
                console.log($scope.filter_data);
                if($scope.filter_data.length)
                {
                    var ind_value = checkArrProperty($scope.segment_names[index],$scope.modifiedOrder);
                    console.log(ind_value);
                    if($scope.modifiedOrder[ind_value].value!='')
                    {
                        $scope.modifiedOrder.splice(ind_value,1);
                    }
                    else
                    {
                        $scope.modifiedOrder[ind_value].value=$scope.segment_names[index];
                    }
                }
                else
                {
                    $scope.modifiedOrder.push({'value':$scope.segment_names[index]});
                }
            }
            console.log($scope.modifiedOrder);
        }

        $scope.dist_select=[];
        $scope.modifiedDistOrder=[];

        $scope.format_dists=function(all,index){
            console.log(all);
            console.log(index);
            console.log($scope.distributors_name);
            if(all==true)
            {
                $scope.modifiedDistOrder=[];
                for(i=0;i<$scope.distributors_name.length;i++)
                {
                    $scope.modifiedDistOrder.push({'value':$scope.distributors_name[i].dr_name,'id':$scope.distributors_name[i].id});
                }
                console.log($scope.modifiedDistOrder);
            }
            else if(all==false)
            {
                $scope.modifiedDistOrder=[];
            }
            else
            {
                console.log($scope.modifiedDistOrder);
                console.log(index);

                $scope.filter_data=$filter('filter')($scope.modifiedDistOrder, {id:$scope.distributors_name[index].id}, true);
                console.log($scope.filter_data);
                if($scope.filter_data.length)
                {
                    var ind_value = checkDistArrProperty($scope.distributors_name[index].id,$scope.modifiedDistOrder);
                    console.log(ind_value);
                    if($scope.modifiedDistOrder[ind_value].id!='')
                    {
                        $scope.modifiedDistOrder.splice(ind_value,1);
                    }
                    else
                    {
                        $scope.modifiedDistOrder[ind_value].value=$scope.distributors_name[index].dr_name;
                        $scope.modifiedDistOrder[ind_value].id=$scope.distributors_name[index].id;
                    }
                }
                else
                {
                    $scope.modifiedDistOrder.push({'value':$scope.distributors_name[index].dr_name,'id':$scope.distributors_name[index].id});
                }
            }
            console.log($scope.modifiedDistOrder);
        }


        $scope.pageone=true;
        $scope.pagetwo=false;
        $scope.pagethree=false;
        $scope.go_one=function()
        {
            $scope.pageone=false;
            $scope.pagetwo=true;
            $scope.pagethree=false;
            console.log($scope.mydata);
            $ionicScrollDelegate.scrollTop();
        }

        $scope.go_two=function()
        {
            $scope.pageone=false;
            $scope.pagetwo=false;
            $scope.pagethree=true;
            console.log($scope.mydata);
            $ionicScrollDelegate.scrollTop();
        }


        $scope.last_dr_id=mySharedService.last_dr_id;
        $scope.submit_permission = true;
        $scope.add_dr=function()
        {
            val='';
            $scope.mydata.state=$scope.data.selectedValue7;
            $scope.mydata.district=$scope.data.selectedValue8;
            $scope.mydata.pincode=$scope.data.selectedValue9;
            $scope.mydata.city=$scope.data.selectedValue10;
            $scope.mydata.area=$scope.data.selectedValue11;

            $scope.mydata.ship_state=$scope.data.selectedValue12;
            $scope.mydata.ship_district=$scope.data.selectedValue13;
            $scope.mydata.ship_pincode=$scope.data.selectedValue16;
            $scope.mydata.ship_city=$scope.data.selectedValue14;
            $scope.mydata.ship_area=$scope.data.selectedValue15;
            console.log($scope.mydata);
            if($scope.mydata.lead_type=='Direct Dealer')
            {
                val='Yes';
            }
            if($scope.mydata.int_type=='Confirmed')
            {
                mySharedService.land_on_order=true;
                $rootScope.conf_district_name=$scope.mydata.district;
                $rootScope.conf_state_name=$scope.mydata.state;
                mySharedService.type=3;
            }
            else
            {
                mySharedService.land_on_order=false;
                $rootScope.conf_district_name='';
                $rootScope.conf_state_name='';
            }
            $scope.mydata.dob=moment($scope.mydata.dob).format('YYYY-MM-DD');
            if($scope.submit_permission)
            {
                $scope.submit_permission = false;
                loginService.add_dr($scope.mydata,$scope.dr_type,val)
                .then(function (result)
                {
                    console.log(result);
                    $scope.last_dr_id=result.data.id;
                    mySharedService.last_dr_id=result.data.id;
                    console.log($scope.segment_names);
                    var options = {
                        fileKey: "file",
                        fileName: "image.jpg",
                        chunkedMode: false,
                        mimeType: "image/*",
                    };
                    console.log($scope.mediaData);

                    if($scope.mediaData.length)
                    {
                        $cordovaFileTransfer.upload(server_url+"/lead_pic.php?id="+$scope.last_dr_id, $scope.mediaData[0].src, options).then(function(result) {
                            $ionicLoading.hide();
                            $scope.mediaData=[];
                            console.log("SUCCESS: " + JSON.stringify(result));
                        }, function(err) {
                            $ionicLoading.hide();
                            console.log("ERROR: " + JSON.stringify(err));
                        }, function (progress) {
                        });
                    }

                    loginService.get_distributors()
                    .then(function (result)
                    {
                        console.log(result);
                        $scope.distributors_name=result;
                        mySharedService.distributors_name=result;
                        $state.go('assign-segment');

                    },function (err) {
                        console.error(err);
                    })

                },function (err) {
                    console.error(err);
                });

            }
        }

        $scope.add_dr_seg=function()
        {
            console.log($scope.distributors_name);
            console.log($scope.modifiedOrder);

            console.log($scope.dr_type);
            console.log($scope.last_dr_id);
            loginService.add_dr_seg($scope.last_dr_id,$scope.modifiedOrder,1)
            .then(function (result)
            {
                console.log(result);

                if($scope.dr_type=='1')
                {
                    if($scope.distributors_name.length && mySharedService.land_on_order)
                    {
                        $state.go('assign-distributor');
                    }
                    else if(!$scope.distributors_name.length && mySharedService.land_on_order)
                    {
                        $scope.get_orders($scope.last_dr_id,'1',true);
                        $rootScope.retailers_id=$scope.last_dr_id;
                    }
                    else
                    {
                        $scope.awaitretailerlist();
                    }
                }
                if($scope.dr_type=='2')
                {
                    if(mySharedService.land_on_order)
                    {
                        $scope.get_orders($scope.last_dr_id,'2',true);
                        $rootScope.retailers_id=$scope.last_dr_id;
                    }
                    else
                    {
                        $scope.awaitdistributorlist();
                    }
                }

            },function (err) {
                console.error(err);
            })
        }

        $scope.add_dr_dists=function()
        {
            console.log($scope.modifiedDistOrder);

            console.log($scope.dr_type);
            console.log($scope.last_dr_id);
            loginService.add_dr_dists($scope.last_dr_id,$scope.modifiedDistOrder)
            .then(function (result)
            {
                console.log(result);
                if(mySharedService.land_on_order)
                {
                    $scope.get_orders($scope.last_dr_id,'1',true);
                    $rootScope.retailers_id=$scope.last_dr_id;
                }
                else
                {
                    $scope.awaitretailerlist();
                }

            },function (err) {
                console.error(err);
            })
        }

        $scope.skip_func=function()
        {
            console.log($scope.dr_type);
            if($scope.dr_type=='1')
            {
                $scope.retailerlist();
            }
            if($scope.dr_type=='2')
            {
                $scope.distributorlist();
            }
        }


        $scope.clickme = function($event){
            console.log($event);
            // alert("You've clicked upon "+$event[0].label);
        }

        $scope.hoverme = function ($event) {
            alert("You hovered over " + $event[0]._view.label);
        }

        dashboard();
        $scope.labels=[];
        $scope.data_dash=[];
        $scope.dash_data=[];
        $scope.dash_data=mySharedService.dash_data;
        $scope.dash_segments=mySharedService.dash_segments;
        $scope.show_dash_seg=[];
        console.log($scope.dash_segments);
        function dashboard()
        {
            console.log(mySharedService.salesexe_id)
            loginService.dashboard_det()
            .then(function (result)
            {

                console.log(result.data);
                $scope.dash_segments=result.data.segments_name;
                mySharedService.dash_segments=result.data.segments_name;

                // for(i=0;i<$scope.dash_segments.length;i++)
                // {
                //   $scope.labels.push($scope.dash_segments[i].segment_name);
                // $scope.data_dash.push(2);
                // }

                for (var key in result.data.data_seg) {
                    if (result.data.data_seg.hasOwnProperty(key)) {
                        console.log(key + " -> " + result.data.data_seg[key]);
                        if(key){
                            val=Math.round((parseInt(result.data.data_seg[key])/parseInt(result.data.qty_tot))*100);
                        }else{
                            val=0;
                        }
                        $scope.labels.push(key);

                        $scope.data_dash.push(val);

                    }
                }


                console.log($scope.dash_segments);
                console.log($scope.labels);
                console.log($scope.data_dash);

                if($scope.dash_segments)
                {
                    for(i=0;i<$scope.dash_segments.length;i++)
                    {
                        abx= $.inArray($scope.dash_segments[i].segment_name, $scope.labels);
                        console.log(abx);
                        if(abx == -1)
                        {
                            $scope.labels.push($scope.dash_segments[i].segment_name);
                            $scope.data_dash.push(0);
                        }
                    }
                }

                console.log($scope.labels);
                console.log($scope.data_dash);

                //     if(result.data.data_seg.PTMTSYMET){
                //      ptmt_val=Math.round((parseInt(result.data.data_seg.PTMTSYMET)/parseInt(result.data.qty_tot))*100);
                //    }else{
                //     ptmt_val=0;
                //   }

                //     if(result.data.data_seg.CP){
                //      cp_val=Math.round((parseInt(result.data.data_seg.CP)/parseInt(result.data.qty_tot))*100);
                //    }else{
                //     cp_val=0;
                //   }

                //     if(result.data.data_seg.SINK){
                //      sink_val=Math.round((parseInt(result.data.data_seg.SINK)/parseInt(result.data.qty_tot))*100);
                //    }else{
                //     sink_val=0;
                //   }

                //     if(result.data.data_seg.HARDWARE){
                //      hard_val=Math.round((parseInt(result.data.data_seg.HARDWARE)/parseInt(result.data.qty_tot))*100);
                //    }else{
                //     hard_val=0;
                //   }

                //   if(result.data.data_seg.COCKROACHTRAPSGRATINGS){
                //    cock_val=Math.round((parseInt(result.data.data_seg.COCKROACHTRAPSGRATINGS)/parseInt(result.data.qty_tot))*100);
                //  }else{
                //   cock_val=0;
                // }

                //   if(result.data.data_seg.QUAA){
                //    quaa_val=Math.round((parseInt(result.data.data_seg.QUAA)/parseInt(result.data.qty_tot))*100);
                //   }else{
                //     quaa_val=0;
                //   }

                // console.log(ptmt_val+" "+cp_val+" "+hard_val+" "+cock_val+" "+sink_val+" "+quaa_val);
                // $scope.labels = ["P.T.M.T. SYMET", "C.P.", "SINK", "COCKROACH TRAPS & GRATINGS", "HARDWARE", "QUAA"];
                // $scope.data_dash = [ptmt_val, cp_val, sink_val, cock_val, hard_val, quaa_val];
                // $scope.colorsPie = ['#4776B7', '#F5911D', '#3DB549', '#FDCE36', '#5DC5C6', '#F04F3D'];

                $scope.options = {
                    legend: {
                        display: true
                    },
                    tooltipEvents: [],
                    showTooltips: true,
                    tooltipCaretSize: 0,
                    onAnimationComplete: function () {
                        console.log(this.segments);
                        console.log(this.segments[0]);
                        console.log(this.segments[0].value);
                        this.segments = this.segments.filter(function( obj ) {
                            return obj.value !== 0;
                        });
                        console.log(this.segments.length);

                        for(i=0;i<this.segments.length;i++)
                        {
                            this.segments[i].label='';
                            if(this.segments[i].value==0)
                            {
                                console.log("I="+i);
                                this.segments.splice(i,1);
                            }
                            else
                            {
                                // var assign=this.segments[i].value;
                                this.segments[i]._saved.value=this.segments[i].value+"%";
                                console.log("ELSE"+i);
                            }
                        }
                        console.log(this.segments);
                        this.showTooltip(this.segments, true);
                    },
                };

                $scope.dash_data=result.data;
                mySharedService.dash_data=result.data;
                $ionicLoading.hide();
            },function (err) {
                console.error(err);
                $ionicLoading.hide();
            })
        }

        $scope.onClickSlice = function (points, evt) {
            console.log(points);
        }
        console.log($scope.data);


        $scope.regen_type=mySharedService.regen_type;
        /*Rejet Request Regenrate Function Start*/
        $ionicModal.fromTemplateUrl('templates/regen_lead_req.html', {
            scope: $scope,
            animation: 'zoomIn'
        }).then(function(modal) {
            $scope.searchregen = modal;
        });
        // ++++++++++++++++++ Open modal +++++++++++++++++++++++ //
        $scope.openregen = function(type) {
            console.log("REGEN");
            $scope.regen_type=type;
            mySharedService.regen_type=type;
            $scope.searchregen.show();
        };
        // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
        $scope.closeregen = function() {
            $scope.searchregen.hide();
        };

        /*Rejet Request Regenrate Function End*/

        $scope.exp_data=[];
        $scope.exp_data=mySharedService.exp_data;
        /*Expense Listing Function Start*/
        $scope.expense_list=function()
        {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.expense_list()
            .then(function (result)
            {
                console.log(result);
                $scope.exp_data=result.data;
                mySharedService.exp_data=result.data;
                console.log($scope.exp_data);
                $state.go('tab.expense');
                $ionicLoading.hide();
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }
        /*Expense Listing Function End*/

        $scope.exp_det=mySharedService.exp_det;
        $scope.expense_det=function(dt)
        {
            dt = moment(dt).format('YYYY-MM-DD');

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            loginService.expense_det(dt)
            .then(function (result)
            {
                console.log(result);
                $scope.exp_det=result.data;
                mySharedService.exp_det=result.data;
                $state.go('tab.expense-date');
                $ionicLoading.hide();
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }
        $scope.expense_data=[];
        $scope.expDate;
        console.log($scope.expcurrentDate);
        $scope.expcurrentDate=mySharedService.expcurrentDate;
        $scope.sub_exp_date = function()
        {
            $scope.expcurrentDate = moment($scope.expcurrentDate).subtract(1, 'days');
            $scope.expcurrentDate = moment($scope.expcurrentDate).format('YYYY-MM-DD');
            $scope.expDate = moment($scope.expcurrentDate).format('YYYY-MM-DD');
            console.log($scope.expDate);
            console.log($scope.expcurrentDate);
            $scope.exp_date_detail($scope.expDate);
        }

        $scope.add_exp_date = function()
        {
            $scope.expcurrentDate = moment($scope.expcurrentDate).add(1, 'days');
            $scope.expcurrentDate = moment($scope.expcurrentDate).format('YYYY-MM-DD');
            $scope.expDate = moment($scope.expcurrentDate).format('YYYY-MM-DD');
            $scope.exp_date_detail($scope.expDate);
        }

        // $scope.today = new Date();
        // $scope.add_exp_date = function()
        // {
        //   $scope.expcurrentDate = moment($scope.expcurrentDate).format('YYYY-MM-DD');
        //   $scope.today = moment($scope.today).format('YYYY-MM-DD');
        //   if($scope.expcurrentDate < $scope.today)
        //   {
        //     console.log($scope.expcurrentDate);
        //     $scope.expcurrentDate = moment($scope.expcurrentDate).add(1, 'days');
        //     $scope.expDate = moment($scope.expcurrentDate).format('YYYY-MM-DD');
        //     console.log($scope.expDate);
        //     $scope.exp_date_detail($scope.expDate);
        //   }
        // }

        $scope.exp_date_det=mySharedService.exp_date_det;
        $scope.bill_data=mySharedService.bill_data;
        $scope.exp_date_detail=function(date_val)
        {
            date_val = moment(date_val).format('YYYY-MM-DD');
            console.log(date_val);

            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });

            loginService.exp_date_detail(date_val)
            .then(function (result)
            {
                console.log(result);
                $scope.exp_date_det=result.data.data[0];
                mySharedService.exp_date_det=result.data.data[0];
                $scope.bill_data=result.data.data1;
                mySharedService.bill_data=result.data.data1;
                mySharedService.expcurrentDate=date_val;
                console.log($scope.expcurrentDate);
                if(result.data.data[0])
                {
                    $scope.expcurrentDate=$scope.exp_date_det.date_created;
                    mySharedService.expcurrentDate=$scope.exp_date_det.date_created;
                }
                console.log($scope.expcurrentDate);

                $state.go('tab.expense-day');
                $ionicLoading.hide();
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
        }

        $scope.del_expense_type=function(id,type,dt)
        {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Item',
                template: 'Are you sure you want to delete this item?',
                cancelText: 'No',
                okText: 'Yes'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                    loginService.delete_expense_type(id,type,dt)
                    .then(function (result)
                    {
                        $scope.exp_date_detail(dt);
                    },function (err) {
                        console.error(err);
                    })
                } else {
                    console.log('You are not sure');
                }
            });
        }
        $scope.exp_type;
        $scope.exp_val;
        $scope.add_expense_detail=function(dt)
        {
            console.log($scope.expense_data);
            if(!dt)
            {
                dt=$scope.expcurrentDate;
            }
            console.log($scope.expcurrentDate);
            console.log(dt);
            if($scope.expense_data.type_sel == 'mobile_recharge' || $scope.expense_data.type_sel == 'net_surfing' || $scope.expense_data.type_sel == 'courier' || $scope.expense_data.type_sel == 'photocopy' || $scope.expense_data.type_sel == 'stationary' || $scope.expense_data.type_sel == 'misc_expense')
            {
                $scope.exp_type = $scope.expense_data.type_sel;
            }

            if($scope.expense_data.mode_journey == 'bike' || $scope.expense_data.mode_journey == 'car' || $scope.expense_data.mode_journey == 'train' || $scope.expense_data.mode_journey == 'metro_train' || $scope.expense_data.mode_journey == 'taxi_registered' || $scope.expense_data.mode_journey == 'taxi_unregistered' || $scope.expense_data.mode_journey == 'local_conveyance')
            {
                $scope.exp_type = $scope.expense_data.mode_journey;
            }

            if($scope.expense_data.acc_type== 'hotel_registered' || $scope.expense_data.acc_type == 'hotel_unregistered')
            {
                $scope.exp_type = $scope.expense_data.acc_type;
            }

            if($scope.expense_data.food_type== 'food_registered' || $scope.expense_data.food_type == 'food_unregistered')
            {
                $scope.exp_type = $scope.expense_data.food_type;
            }

            if($scope.expense_data.amt)
            {
                $scope.exp_val=$scope.expense_data.amt;
            }

            if($scope.expense_data.distance)
            {
                $scope.exp_val=$scope.expense_data.distance;
            }

            loginService.add_expense_detail($scope.exp_type,$scope.exp_val,dt)
            .then(function (result)
            {
                $scope.expense_data=[];
                $scope.exp_date_detail(dt);
                $ionicLoading.hide();
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
            console.log($scope.expense_data);
        }
        $scope.newexpDate=$scope.currentDate;
        $scope.sub_new_exp_date = function()
        {
            $scope.currentDate = moment($scope.newexpDate).subtract(1, 'days');
            $scope.newexpDate = moment($scope.currentDate).format('YYYY-MM-DD');
            console.log($scope.newexpDate);
            $scope.exp_date_detail($scope.newexpDate);
        }

        $scope.add_new_exp_date = function(id,eid)
        {
            $scope.currentDate = moment($scope.newexpDate).add(1, 'days');
            $scope.newexpDate = moment($scope.currentDate).format('YYYY-MM-DD');
            console.log($scope.newexpDate);
            $scope.exp_date_detail($scope.newexpDate);
        }

        $scope.add_new_expense=function(date_val)
        {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });
            dt = moment(date_val).format('YYYY-MM-DD');
            if($scope.expense_data.type_sel == 'mobile_recharge' || $scope.expense_data.type_sel == 'net_surfing' || $scope.expense_data.type_sel == 'courier' || $scope.expense_data.type_sel == 'photocopy' || $scope.expense_data.type_sel == 'stationary' || $scope.expense_data.type_sel == 'misc_expense')
            {
                $scope.exp_type = $scope.expense_data.type_sel;
            }

            if($scope.expense_data.mode_journey == 'bike' || $scope.expense_data.mode_journey == 'car' || $scope.expense_data.mode_journey == 'train' || $scope.expense_data.mode_journey == 'metro_train' || $scope.expense_data.mode_journey == 'taxi_registered' || $scope.expense_data.mode_journey == 'taxi_unregistered' || $scope.expense_data.mode_journey == 'local_conveyance')
            {
                $scope.exp_type = $scope.expense_data.mode_journey;
            }

            if($scope.expense_data.acc_type== 'hotel_registered' || $scope.expense_data.acc_type == 'hotel_unregistered')
            {
                $scope.exp_type = $scope.expense_data.acc_type;
            }

            if($scope.expense_data.food_type== 'food_registered' || $scope.expense_data.food_type == 'food_unregistered')
            {
                $scope.exp_type = $scope.expense_data.food_type;
            }

            if($scope.expense_data.amt)
            {
                $scope.exp_val=$scope.expense_data.amt;
            }

            if($scope.expense_data.distance)
            {
                $scope.exp_val=$scope.expense_data.distance;
            }

            loginService.add_new_expense($scope.exp_type,$scope.exp_val,dt)
            .then(function (result)
            {
                $scope.expense_list();
                $ionicLoading.hide();
                $scope.expense_data=[];
                $ionicLoading.hide();
            },function (err) {
                $ionicLoading.hide();
                console.error(err);
            })
            console.log($scope.expense_data);
        }

        $scope.attach_bill=function()
        {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: "<i class='icon ion-android-image'></i> Take Picture From Gallery"},
                    { text: "<i class='icon ion-camera'></i> Open Camera" }
                ],
                cancelText: 'Cancel',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {

                    if(index === 0) { // Manual Button
                        $scope.perm_gallery();
                    }
                    else if(index === 1){
                        $scope.takePicture(3);
                    }

                    return true;
                }
            })
        }

        $scope.perm_gallery=function()
        {
            cordova.plugins.diagnostic.getCameraAuthorizationStatus({
                successCallback: function(status) {

                    console.log('1st'+status);

                    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){

                        $scope.getGallary(3);

                    } else {

                        cordova.plugins.diagnostic.requestCameraAuthorization({
                            successCallback: function(data_status) {

                                console.log('2nd'+data_status);

                                if(data_status != 'DENIED') {
                                    $scope.getGallary(3);
                                }
                            },
                            errorCallback: function(error){
                                console.error(error);
                            },
                            externalStorage: true
                        });
                    }
                },
                errorCallback: function(error){
                    console.error("The following error occurred: "+error);
                },
                externalStorage: true
            });
        }

        $scope.bill_upload = function()
        {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Loading...'
            });

            var options = {
                fileKey: "file",
                fileName: "image.jpg",
                chunkedMode: false,
                mimeType: "image/*",
            };

            $cordovaFileTransfer.upload(server_url+"/bill_upload.php?exec_id="+salesexe_id+"&date="+$scope.expcurrentDate, $scope.mediaData[0].src, options).then(function(result) {
                $ionicLoading.hide();
                console.log("SUCCESS: " + JSON.stringify(result));
                $scope.mediaData=[];
                $cordovaToast.show('Bill Uploaded Successfully', 'short', 'bottom').then(function(success) {
                }, function (error) {
                });
                $scope.exp_date_detail($scope.expcurrentDate);

            }, function(err) {
                $ionicLoading.hide();
                console.log("ERROR: " + JSON.stringify(err));
            }, function (progress) {

            });

        }

        $scope.del_bill=function(bill_img)
        {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Item',
                template: 'Do you want to delete this bill image ?',
                cancelText: 'No',
                okText: 'Yes'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                    $ionicLoading.show
                    ({
                        template: '<span class="icon spin ion-loading-d"></span> Loading...'
                    });
                    loginService.del_bill(bill_img)
                    .then(function (result)
                    {
                        $scope.exp_date_detail($scope.expcurrentDate);
                        $ionicLoading.hide();
                    },function (err) {
                        $ionicLoading.hide();
                        console.error(err);
                    })
                } else {
                    console.log('You are not sure');
                }
            });
        }









        $scope.showModal = function(templateUrl) {
            $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        }

        $scope.closeModal = function() {
            $scope.modal.remove()
        };


        $scope.zoomMin = 1;
        $scope.showImages = function(index,img_val) {
            $scope.activeSlide = index;
            $scope.img_val=img_val;
            $scope.showModal('templates/zoom.html');
        };

        $scope.range = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        }

        $scope.updateSlideStatus = function(slide) {
            var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
            if (zoomFactor == $scope.zoomMin) {
                $ionicSlideBoxDelegate.enableSlide(true);
            } else {
                $ionicSlideBoxDelegate.enableSlide(false);
            }
        };

        $scope.zoom= function(slide){
            $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).zoomBy(1.5,true);
        }
        $scope.myProfileDetail.image=mySharedService.image;
        console.log($scope.myProfileDetail.image);

        $scope.logout = function() {
            $ionicLoading.show
            ({
                template: '<span class="icon spin ion-loading-d"></span> Logging out...'
            });

            var query = "DELETE FROM "+dbTableName;
            $cordovaSQLite.execute(db, query, []).then(function(results) {
                $state.go('login');
                $ionicLoading.hide();
            }, function (err) {
                console.error(err);
            });
        }

        $scope.attach_image = function()
        {
            console.log("tfctftyft")
        }

        // ++++++++++++++++++ Birthday Modal Start +++++++++++++++++++++++ //
        $ionicModal.fromTemplateUrl('templates/birthday-modal.html', {
            scope: $scope,
            animation: 'zoomIn'
        }).then(function(modal) {
            $scope.birthdaysearch = modal;
        });
        // ++++++++++++++++++ Open modal +++++++++++++++++++++++ //
        $scope.openModal = function() {
            $scope.mydata.mob='';
            $scope.birthdaysearch.show();
        };
        // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
        $scope.closert = function() {
            $scope.birthdaysearch.hide();
        };
        // ++++++++++++++++++ Birthday modal End +++++++++++++++++++++++ //

        if($location.path() == "/tab-ret/addproduct-ret" || $location.path() == "/tab-dist/addproduct-dist" ||  $location.path() == "/tab/retailers-det" ){

          console.log($location.path() + "  ret order page");

          $scope.getAllProductinfo();

          // $scope.select_all_cat("",0);
        }

        console.log("****************** mySharedService.show_default_product *******************************");
        console.log(mySharedService.show_default_product);
        console.log("****************** $rootScope.show_default_product *******************************");
        console.log($rootScope.show_default_product);
        console.log("****************** mySharedService.default_products *******************************");
        console.log(mySharedService.default_products);
        console.log("****************** $rootScope.default_products *******************************");
        console.log($rootScope.default_products);


    });
