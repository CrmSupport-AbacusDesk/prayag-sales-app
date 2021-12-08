angular.module('starter.controllers', ['ionic','ngMaterial'])

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



.controller('PrayagCtrl',function($scope,$ionicModal,$timeout,loginService,$state,$ionicLoading,$cordovaSQLite,$ionicPopup,mySharedService,Camera,$ionicActionSheet,$cordovaFileTransfer,$cordovaImagePicker,$ionicHistory,$rootScope,$ionicHistory,$cordovaToast,$cordovaFile, $cordovaGeolocation)
{

  $scope.data={};

  $scope.activeButton='1';

  $scope.doTheBack = function() {
    $rootScope.cache_val=true;
    window.history.back();
  };

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
  $scope.openrt = function() {
    $scope.searchrtt.show();
  };
  // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
  $scope.closert = function() {
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
             salesexe_pincode = result.data.pincode;

             console.log("INSERT USERNAME -> " + username);
             console.log("INSERT PASSWORD -> " + password);
             console.log("INSERT ID -> " + salesexe_id);
             console.log("INSERT PIN -> " + salesexe_pincode);

             $state.go('dashboard');
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

     $scope.retailer_list={};
     $scope.retailer_list= mySharedService.shareRetailerdata;
     $scope.retailerlist= function ()
     {
       $scope.bckval='';
       mySharedService.sharebckvaldata='';
       $scope.backnear='';
       mySharedService.sharebckneardata='';
         $ionicLoading.show
         ({
             template: '<span class="icon spin ion-loading-d"></span> Loading...'
         });

         loginService.retailerlist()
         .then(function (result)
         {

             $scope.retailer_list = result;
             $scope.contact_person=result.contact_person;

             console.log($scope.retailer_list);

             mySharedService.prepForRetailerDataBroadcast(result);
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

     /*Retailer listing function of controller prayag end*/

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
     $scope.bckval=mySharedService.sharebckvaldata;
     $scope.backnear=mySharedService.sharebckneardata;
     $scope.retailerdetails= function (id,type,bckval,backnear)
     {
       console.log($scope.bckval);
       console.log($scope.backnear);
       $rootScope.type=type;
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

         loginService.retailer_details(id,type)
         .then(function (result)
         {
             console.log($scope.retailer_det.contact_2);
             $scope.retailer_det = result;
             console.log( $scope.retailer_det);
             $scope.retail_id=result.id;
             $rootScope.retailers_id=result.id;
             $scope.contact_person=result.contact_person;
             $scope.dr_name = result.dr_name;
             console.log($scope.retailer_det);
             console.log($rootScope.retailers_id);

             mySharedService.prepForRetailerDetailDataBroadcast(result);
             if(type=='1')
             {
               $state.go('tab.retailers-details');
             }
             if(type=='2')
             {
               $state.go('tab.distributor-details');
             }
             $timeout(function () { $ionicLoading.hide(); }, 200);


         },
              function (err) {
                $ionicLoading.hide();
                console.error(err);
             })
     }
     /*Retailer detail function of prayag ctrl end*/

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

         loginService.retailer_view_edit(id,$scope.retailer_det.dr_name,$scope.retailer_det.email,$scope.retailer_det.contact_person,$scope.retailer_det.contact_2,$scope.retailer_det.street,$scope.retailer_det.state_name,$scope.retailer_det.district_name,$scope.retailer_det.taluk_name,$scope.retailer_det.pincode
           )
         .then(function (result)
         {

            mySharedService.prepForRetailerDetailViewEditBroadcast(result);
            if(type=='1')
            {
              $state.go('tab.retailers-details');
            }
            else
            {
              $state.go('tab.distributor-details');
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

     /*Function to provide option either gallery or Camera start*/
     $scope.camera_click = function(src)
     {

       if(src == 1) {
          var val = 'remove-pic';
        } else {
          var val = '';
        }
           // Show the action sheet
           var hideSheet = $ionicActionSheet.show({
             buttons: [
               { text: "<i class='icon ion-android-image'></i> Take Picture From Gallery"},
               { text: "<i class='icon ion-camera'></i> Open Camera" },
               { text: "<i class='icon ion-android-delete orange'></i> Remove Photo", className: val}
             ],
             cancelText: 'Cancel',
             cancel: function() {
                  // add cancel code..
                },
             buttonClicked: function(index) {
                   //return true;

                if(index === 0) { // Manual Button
                  $scope.getGallary(src);
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
     $scope.takePicture = function (src,options) {

               var options = {
               quality : 70,
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

                 $scope.mediaData.push({
                                 src: imageData

                               });

                 console.log(imageData);

              if(src == 2) {
                 $scope.profile_update(2);
              }

              }, function(err) {

              })
     };

     $scope.uploadurl=upload_url;

     $scope.getGallary = function(src) {
                               if(src == 2) {

                                var options = {
                                 maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
                                 width: 500,
                                 height: 500,
                                 quality: 70  // Higher is better
                                };

                           } else  {

                               var options = {
                                 maximumImagesCount: 10, // Max number of selected images, I'm using only one for this example
                                 width: 500,
                                 height: 500,
                                 quality: 70  // Higher is better
                               };
                           }

                           $cordovaImagePicker.getPictures(options).then(function (results) {
                             console.log(results);
                             //Loop through acquired images
                             for (var i = 0; i < results.length; i++) {
                               $scope.mediaData.push({
                                 src: results[i]
                               });
                             }

                            console.log($scope.mediaData);


                          if(src == 2) {
                             $scope.profile_update(2);
                          }

                           }, function(error) {
                             console.log('Error: ' + JSON.stringify(error));    // In case of error
                           });
     }

         /* Profile Delete Function Start*/
           $scope.deletePicture = function(src) {

             if(src == 2) {
                $scope.myProfileDetail.image = '';
                $scope.profile_update(1);
             }
           }
           /*Profile Delete Function End*/


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
     $scope.assignpopgift_ret= function (ret_id,pop_gift_id,qty,type)
     {

         $ionicLoading.show
         ({
             template: '<span class="icon spin ion-loading-d"></span> Loading...'
         });

         loginService.assignpopgift_ret(ret_id,pop_gift_id,qty)
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
     /*Outstanding retailer listing fuction start*/
     $scope.outstanding_list= function (type)
     {
       console.log(type);
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

     $scope.distributor_list={};
     $scope.distributor_list= mySharedService.shareDistributorListdata;
     $scope.distributorlist= function ()
     {
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
             $state.go('tab.distributor-details');
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
     //         $state.go('tab.distributor-details');
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
             $state.go('tab.distributor-details');
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



      $scope.add_product_ret = function(val,type)
      {
        loginService.fetch_prod_det_ret(val)
        .then(function (result)
        {
          mySharedService.prepFoProductsDataBroadcast(result);
          $scope.product_segment=result;
          console.log($scope.product_segment);
          // $ionicHistory.clearHistory();
          // $ionicHistory.clearCache();


            $ionicHistory.clearCache().then(function () {
            if(type=='1')
            {
              $state.go('tab-ret.addproduct-ret');
            }
            if(type=='2')
            {
              $state.go('tab-dist.addproduct-dist');
            }
            });
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

      $scope.product_cat_data={};
      $scope.product_data={};
      $scope.segment_array=[];
      $scope.dist_array=[];
      $scope.gst_array=[];
      $scope.prod_feature={};
      $scope.segment_comb_array=[];

      $scope.product_cat_data= mySharedService.shareProductsCatdata;
      console.log($scope.product_cat_data);
      //$scope.product_data= mySharedService.shareProductsNamedata;
      //$scope.dist_array= mySharedService.shareDistributordata;
      // $scope.prod_feature= mySharedService.shareProdFeaturedata;
      // $scope.cat_val=mySharedService.shareCatValData;\
      console.log($scope.data.cat_val);
      $scope.get_cat_no = function(id,seg_name,valn,type,search_var)
      {

        console.log($scope.data.segment_name);
        // $scope.segment_name=  {"id" : "5", "segment_name" : "CPVC PIPE"};
        // return false;
        if(seg_name)
        {
        console.log(type+" "+id+" "+seg_name+" "+valn+" "+search_var);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });
        $scope.segment_array.push({segment_name: seg_name});
        if(valn == 2 && type=='1')
        {
          $scope.prod_feature=[];
          console.log($scope.prod_feature);

          console.log(seg_name);
          console.log("PIN");
          console.log($scope.retailer_det.pincode);
          $scope.product_data=[];


        loginService.fetch_prod_cat_det_ret(seg_name,valn,type,$scope.retailer_det.pincode)
        .then(function (result)
        {
          console.log(result);
          mySharedService.prepFoProductsCatDataBroadcast(result.data);
          // mySharedService.shareCatValData=result.data[0].id;
          $scope.data.segment_name=  {id : id, segment_name : seg_name};
          $scope.product_cat_data=result.data;

          mySharedService.prepForDistributorNameBroadcast(result.distributor_data);
          if($scope.dist_array.length)
          {
            console.log($scope.dist_array);
            for(i=0;i<$scope.dist_array.length;i++)
            {
            if($scope.dist_array[i].segment_name == seg_name)
            {
                  console.log("IF");
            //    $scope.dist_array[i].distributors= result.distributor_data;
                break;
            }
            else
            {
              console.log("ELSE");
              console.log($scope.seg_amt);
              if($scope.seg_amt.length==0)
              {
                console.log("IIF");
                $scope.dist_array=[];
                console.log($scope.dist_array);
                $scope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
              }
              else
              {
                console.log("EEL");
                $scope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
              }
              break;
              // $scope.dist_array=result.distributor_data;
            }
          }
          }
          else
          {
            $scope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
          }

          // mySharedService.prepForGstBroadcast(result.gst_data);
          // if($scope.gst_array.length)
          // {
          //   for(i=0;i<$scope.gst_array.length;i++)
          //   {
          //   if($scope.gst_array[i].segment_name == seg_name)
          //   {
          //   //    $scope.dist_array[i].distributors= result.distributor_data;
          //       break;
          //   }
          //   else
          //   {
          //     $scope.gst_array.push({ segment_name: seg_name, gst: result.gst_data});
          //     break;
          //     // $scope.dist_array=result.distributor_data;
          //   }
          // }
          // }
          // else
          // {
          //   $scope.gst_array.push({ segment_name: seg_name, gst: result.gst_data});
          // }

          console.log($scope.dist_array);
          // console.log($scope.gst_array);
            $ionicLoading.hide();
          // $state.go('tab-ret.addproduct-ret');
        },
         function (err) {
           $ionicLoading.hide();
           console.error(err);
        })
      }

      if(valn == 2 && type=='2')
      {
        $scope.prod_feature=[];
        console.log($scope.prod_feature);

        console.log(seg_name);
        console.log("PIN");
        console.log($scope.retailer_det.pincode);
        $scope.product_data=[];
        $scope.prod_feature=[];
      loginService.fetch_prod_cat_det_ret(seg_name,valn,type,$scope.retailer_det.pincode)
      .then(function (result)
      {
        mySharedService.prepFoProductsCatDataBroadcast(result.data);
        $scope.data.segment_name=  {id : id, segment_name : seg_name};
        $scope.product_cat_data=result.data;

        mySharedService.prepForDistributorNameBroadcast(result.distributor_data);
        if($scope.dist_array.length)
        {
          console.log($scope.dist_array);
          for(i=0;i<$scope.dist_array.length;i++)
          {
          if($scope.dist_array[i].segment_name == seg_name)
          {
                console.log("IF");
          //    $scope.dist_array[i].distributors= result.distributor_data;
              break;
          }
          else
          {
            console.log("ELSE");
            console.log($scope.seg_amt);
            if($scope.seg_amt.length==0)
            {
              console.log("IIF");
              $scope.dist_array=[];
              console.log($scope.dist_array);
              $scope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
            }
            else
            {
              console.log("EEL");
              $scope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
            }
            break;
            // $scope.dist_array=result.distributor_data;
          }
        }
        }
        else
        {
          $scope.dist_array.push({ segment_name: seg_name, distributors: result.distributor_data});
        }

        // mySharedService.prepForGstBroadcast(result.gst_data);
        // if($scope.gst_array.length)
        // {
        //   for(i=0;i<$scope.gst_array.length;i++)
        //   {
        //   if($scope.gst_array[i].segment_name == seg_name)
        //   {
        //   //    $scope.dist_array[i].distributors= result.distributor_data;
        //       break;
        //   }
        //   else
        //   {
        //     $scope.gst_array.push({ segment_name: seg_name, gst: result.gst_data});
        //     break;
        //     // $scope.dist_array=result.distributor_data;
        //   }
        // }
        // }
        // else
        // {
        //   $scope.gst_array.push({ segment_name: seg_name, gst: result.gst_data});
        // }

        console.log(result);
        console.log($scope.dist_array);
        // console.log($scope.gst_array);
          $ionicLoading.hide();
        // $state.go('tab-dist.addproduct-dist');
      },
       function (err) {
         $ionicLoading.hide();
         console.error(err);
      })
    }

      if(valn == 3)
      {
        console.log(seg_name);
      loginService.fetch_prod_cat_det_ret(seg_name,valn,'',$scope.retailer_det.pincode,search_var)
      .then(function (result)
      {
        console.log(result.data);
        if(search_var=='1')
        {
         $scope.data.segment_name=  {id : id, segment_name : result.data[0].segment_name};

          $scope.data.cat_val={id : id, product_category_no : result.data[0].product_category_no};
          $scope.product_cat_data=result.data;
          console.log( $scope.product_cat_data);
          console.log($scope.data.segment_name);
          console.log($scope.data.cat_val);

          if($scope.dist_array.length)
          {
            console.log($scope.dist_array);
            for(i=0;i<$scope.dist_array.length;i++)
            {
            if($scope.dist_array[i].segment_name == result.data[0].segment_name)
            {
                  console.log("IF");
            //    $scope.dist_array[i].distributors= result.distributor_data;
                break;
            }
            else
            {
              console.log("ELSE");
              console.log($scope.seg_amt);
              if($scope.seg_amt.length==0)
              {
                console.log("IIF");
                $scope.dist_array=[];
                console.log($scope.dist_array);
                $scope.dist_array.push({ segment_name: result.data[0].segment_name, distributors: result.distributor_data});
              }
              else
              {
                console.log("EEL");
                $scope.dist_array.push({ segment_name: result.data[0].segment_name, distributors: result.distributor_data});
              }
              break;
              // $scope.dist_array=result.distributor_data;
            }
          }
          }
          else
          {
            $scope.dist_array.push({ segment_name: result.data[0].segment_name, distributors: result.distributor_data});
          }

          // mySharedService.prepForGstBroadcast(result.gst_data);
          // if($scope.gst_array.length)
          // {
          //   for(i=0;i<$scope.gst_array.length;i++)
          //   {
          //   if($scope.gst_array[i].segment_name == result.data[0].segment_name)
          //   {
          //   //    $scope.dist_array[i].distributors= result.distributor_data;
          //       break;
          //   }
          //   else
          //   {
          //     $scope.gst_array.push({ segment_name: result.data[0].segment_name, gst: result.gst_data});
          //     break;
          //     // $scope.dist_array=result.distributor_data;
          //   }
          // }
          // }
          // else
          // {
          //   $scope.gst_array.push({ segment_name: result.data[0].segment_name, gst: result.gst_data});
          // }
          console.log($scope.dist_array);
          // console.log($scope.gst_array);

        }

        mySharedService.prepFoProductsNameDataBroadcast(result.data);
        $scope.product_data=result.data;
        $scope.prod_feature=result.data_feat;

        // mySharedService.prepForProdFeatureBroadcast(result.product_feature);
        // $scope.prod_feature=result;

        console.log(result);
          $ionicLoading.hide();
          if(type=='1')
          {
            console.log(type);
            // $state.go('tab-ret.addproduct-ret');
          }
          else
          {
            console.log(type);
            // $state.go('tab-dist.addproduct-dist');
          }
      },
       function (err) {
         $ionicLoading.hide();
         console.error(err);
      })
    }
    console.log($scope.prod_feature);
      }
    }

      $scope.price_val_chg=[];
      $scope.cart_arr=[];
      $scope.seg_amt=[];
      $scope.addtocart = function(segment_name,cat_no,qnty,product_name,product_amount,type)
      {
        $scope.data.prod_qty=1;
        console.log($scope.retailer_id);
        console.log(segment_name + cat_no + qnty + product_name + product_amount);
        if($scope.cart_arr.length)
        {
          for(i=0;i<$scope.seg_amt.length;i++)
          {
            if($scope.cart_arr[i].catg_no == cat_no)
            {
              $scope.cart_arr[i].quantity = parseInt($scope.cart_arr[i].quantity) + parseInt(qnty);
              break;
            }
            else
            {
              if(i == $scope.cart_arr.length-1)
              {
                console.log("El IF");
                $scope.cart_arr.push({ segment_name: segment_name, catg_no: cat_no, quantity: qnty, product_name: product_name, amount: product_amount});
                break;
              }
            }
          }
        }
        else
        {
          $scope.cart_arr.push({ segment_name: segment_name, catg_no: cat_no, quantity: qnty, product_name: product_name, amount: product_amount});
        }
        console.log($scope.cart_arr);


        if($scope.seg_amt.length)
        {
          for(i=0;i<$scope.seg_amt.length;i++)
          {
            console.log($scope.seg_amt[i].segment_name + segment_name);
            if($scope.seg_amt[i].segment_name == segment_name)
            {
              $scope.seg_amt[i].price += parseInt(product_amount)*parseInt(qnty);
              break;
            }
            else
              {
                if(i == $scope.seg_amt.length-1)
                {
                  $scope.seg_amt.push({segment_name: segment_name, price:parseInt(product_amount)*parseInt(qnty)});
                  break;
                }
              }
          }
        }
        else
        {
          $scope.seg_amt.push({segment_name: segment_name, price:parseInt(product_amount)*parseInt(qnty)});
        }

        if($scope.price_val_chg.length)
        {
          for(i=0;i<$scope.price_val_chg.length;i++)
          {
            if($scope.price_val_chg[i].seg_name == segment_name)
            {
              $scope.price_val_chg[i].price_val += parseInt(product_amount)*parseInt(qnty);
              break;
            }
            else
            {
              if(i == $scope.price_val_chg.length-1)
              {
                $scope.price_val_chg.push({seg_name: segment_name, price_val:parseInt(product_amount)*parseInt(qnty)});
                break;
              }
            }
          }
        }
        else
        {
          $scope.price_val_chg.push({seg_name: segment_name, price_val:parseInt(product_amount)*parseInt(qnty)});
        }

        console.log($scope.seg_amt);
        console.log($scope.price_val_chg);

        var seg_len= $scope.seg_amt.length;
        console.log(seg_len);

          if($scope.segment_comb_array.length!=seg_len)
          {
            $scope.valid=false;
          }
          else
          {
            $scope.valid=true;
          }



        $scope.product_segment=[];
        $scope.product_cat_data=[];
        $scope.product_data=[];
        $scope.prod_feature=[];
        $scope.ind_value=0;
        $scope.data.cat_val="";

        $scope.add_product_ret(1,type);
      }

      $scope.del_cart = function(index)
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
        console.log($scope.cart_arr[index].amount);
        if($scope.seg_amt.length)
        {
          for(i=0;i<$scope.seg_amt.length;i++)
          {
            if($scope.seg_amt[i].segment_name == $scope.cart_arr[index].segment_name)
            {
              $scope.seg_amt[i].price -= parseInt($scope.cart_arr[index].amount*$scope.cart_arr[index].quantity);
            }
            else
              {

              }
          }

        }

        $scope.cart_arr.splice(index,1);
        $scope.seg_amt.splice(index,1);
        $scope.segment_comb_array.splice(index,1);
        // $scope.gst_array.splice(index,1);
        $scope.dist_array.splice(index,1);
        $scope.price_val_chg.splice(index,1);

        console.log($scope.seg_amt);
        console.log($scope.dist_array);
        console.log($scope.segment_comb_array);

        var seg_len= $scope.seg_amt.length;
        console.log(seg_len);

        if(seg_len==0)
        {
          $scope.valid=false;
        }

        for(i=0;i<seg_len;i++)
        {
          if($scope.segment_comb_array[i].dist==undefined)
          {
            $scope.valid=false;
          }
          else
          {
            if(i==seg_len-1)
            {
              $scope.valid=true;
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
       $scope.get_orders= function (ret_id,type)
       {
         console.log(type);
        // $ionicLoading.show
        // ({
        //     template: '<span class="icon spin ion-loading-d"></span> Loading...'
        // });

        loginService.ret_orders_list(ret_id)
        .then(function (result)
        {
            mySharedService.prepForRetOrdersBroadcast(result.data);
            $scope.ret_orders = result.data;
            mySharedService.prepForRetailerIdBroadcast(ret_id);
            $scope.retailer_id=ret_id;
            console.log($scope.ret_orders);
            console.log($scope.retailer_id);
            if(type=='1')
            {
              $state.go('tab-ret.tab-order-ret');
            }
            else
            {
              $state.go('tab-dist.tab-order-dist');
            }
            // $timeout(function () { $ionicLoading.hide(); }, 200);

          },
             function (err) {
               $ionicLoading.hide();
               console.error(err);
            })
        }
      /*Retailer Order Listing function end*/
      $scope.data.segment_name;
      $scope.search_result;
      $scope.search_res=[];
      $scope.search_req=function(id,search_value,type)
      {
        // $scope.segment_name=$scope.product_segment[1];
        // console.log($scope.segment_name);
        // $scope.product_segment=[];
        // $scope.product_segment= mySharedService.shareProductsdata;
        if($scope.search_result)
        {

          loginService.get_search_res_val($scope.search_result.search_val)
          .then(function (result)
          {
            if(result.data.res == "seg")
            {
              $scope.data.cat_val='';
              $scope.prod_feature=[];
              console.log("SEG");
              // $scope.segment_name=  {id : id, segment_name : $scope.search_result.search_val};
              // console.log($scope.segment_name);
              //  $('#seg_id option').attr("selected",false);
              // $('#seg_id').find('option[value="5"]').attr("selected",true);
              $scope.get_cat_no(id,$scope.search_result.search_val,2,type);
            }
            else
            {
              console.log("CAT");
              $scope.get_cat_no(id,$scope.search_result.search_val,3,type,'1');
            }

          },
           function (err) {
             $ionicLoading.hide();
             console.error(err);
          })

        }
        loginService.get_search(search_value)
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

      $scope.order_det=[];
      $scope.tot_order_det=[];
      $scope.valid=false;

      $scope.seg_price_disc=0;
      $scope.push_details=function(seg_name,seg_price,discount,distributor,dist_img,dist_id,typee)
      {
        console.log(seg_name + seg_price + discount + distributor);
        $scope.seg_price_disc= seg_price - (seg_price*discount)/100;

        // if($scope.order_det.length)
        // {
        //   for(i=0;i<$scope.order_det.length;i++)
        //   {
        //     console.log($scope.order_det[i].seg_name + " " + seg_name);
        //     if($scope.order_det[i].seg_name == seg_name)
        //     {
        //       $scope.order_det[i].segment_price_mrp = seg_price;
        //       $scope.order_det[i].seg_price_disc = $scope.seg_price_disc;
        //       $scope.order_det[i].disc = discount;
        //       $scope.order_det[i].distr_img = dist_img;
        //       break;
        //     }
        //     else
        //       {
        //         if(i == $scope.order_det.length-1)
        //         {
        //           $scope.order_det.push({seg_name: seg_name, segment_price_mrp: seg_price, seg_price_disc:$scope.seg_price_disc, disc: discount, dist: distributor, distr_img: dist_img});
        //           break;
        //         }
        //       }
        //   }
        // }
        // else
        // {
        //   $scope.order_det.push({seg_name: seg_name, segment_price_mrp: seg_price, seg_price_disc:$scope.seg_price_disc, disc: discount, dist: distributor, distr_img: dist_img});
        // }
        // $scope.order_det.push({seg_name: seg_name, segment_price_mrp: seg_price, seg_price_disc:$scope.seg_price_disc, disc: discount, dist: distributor});



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
                // if($scope.segment_comb_array[j].dist == undefined && $scope.segment_comb_array[j].seg_name == seg_name)
                // {
                //   console.log(j+" "+$scope.segment_comb_array[j].seg_name);
                //   console.log("SEG ARRAY UNDEF");
                //   $scope.segment_comb_array[j].dist =  distributor;
                //   $scope.segment_comb_array[j].disc = discount;
                //   $scope.segment_comb_array[j].segment_price_mrp = seg_price;
                //   $scope.segment_comb_array[j].seg_price_disc = $scope.seg_price_disc;
                //   $scope.segment_comb_array[j].distr_img = dist_img;
                //   $scope.segment_comb_array[j].dist_id = dist_id;
                //   break;
                // }
               if($scope.segment_comb_array[j].seg_name == seg_name)
                {
                  console.log("DISC");
                  $scope.segment_comb_array[j].dist =  distributor;
                  $scope.segment_comb_array[j].disc = discount;
                  $scope.segment_comb_array[j].segment_price_mrp = seg_price;
                  $scope.segment_comb_array[j].seg_price_disc = $scope.seg_price_disc;
                  $scope.segment_comb_array[j].distr_img = dist_img;
                  $scope.segment_comb_array[j].dist_id = dist_id;
                  break;
                }
                else if($scope.segment_comb_array[j].seg_name != seg_name)
                {
                    if(j == $scope.segment_comb_array.length-1)
                    {
                      $scope.segment_comb_array.push({seg_name: seg_name, segment_price_mrp: seg_price, seg_price_disc:$scope.seg_price_disc, disc: discount, dist: distributor, distr_img: dist_img, dist_id:dist_id, gst: 18, gst_amt: 0, after_gst_amt: 0});
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
              $scope.segment_comb_array[i].segment_price_mrp = seg_price;
              $scope.segment_comb_array[i].seg_price_disc = $scope.seg_price_disc;
              $scope.segment_comb_array[i].disc = discount;
              $scope.segment_comb_array[i].distr_img = dist_img;
              $scope.segment_comb_array[i].dist_id = dist_id;
              break;
            }
            else if($scope.segment_comb_array[i].seg_name == seg_name && $scope.segment_comb_array[i].dist != distributor)
            {
              console.log("INSO DISC CHANGE"+i);
              $scope.segment_comb_array[i].dist =  distributor;
              $scope.segment_comb_array[i].seg_name =  seg_name;
              $scope.segment_comb_array[i].segment_price_mrp = seg_price;
              $scope.segment_comb_array[i].seg_price_disc = $scope.seg_price_disc;
              $scope.segment_comb_array[i].disc = discount;
              $scope.segment_comb_array[i].distr_img = dist_img;
              $scope.segment_comb_array[i].dist_id = dist_id;
              break;
            }
            else if($scope.segment_comb_array[i].seg_name != seg_name && $scope.segment_comb_array[i].dist == distributor)
            {
              console.log("INSO DISC CHANGE"+i);
              $scope.segment_comb_array[i].dist =  distributor;
              $scope.segment_comb_array[i].seg_name =  seg_name;
              $scope.segment_comb_array[i].segment_price_mrp = seg_price;
              $scope.segment_comb_array[i].seg_price_disc = $scope.seg_price_disc;
              $scope.segment_comb_array[i].disc = discount;
              $scope.segment_comb_array[i].distr_img = dist_img;
              $scope.segment_comb_array[i].dist_id = dist_id;
              break;
            }
            else
              {
                console.log("INSO ELSE");
                if(i == $scope.segment_comb_array.length-1)
                {
                  $scope.segment_comb_array.push({seg_name: seg_name, segment_price_mrp: seg_price, seg_price_disc:$scope.seg_price_disc, disc: discount, dist: distributor, distr_img: dist_img, dist_id:dist_id, gst: 18, gst_amt: 0, after_gst_amt: 0});
                  break;
                }

              }
          }
        }
        else
        {
          console.log("ELSE");
          $scope.segment_comb_array.push({seg_name: seg_name, segment_price_mrp: seg_price, seg_price_disc:$scope.seg_price_disc, disc: discount, dist: distributor, distr_img: dist_img, dist_id:dist_id, gst: 18, gst_amt: 0, after_gst_amt: 0});
        }

        console.log("ORDER DET");
        console.log($scope.order_det);
        console.log($scope.segment_comb_array);

        var seg_len= $scope.seg_amt.length;
        console.log(seg_len);
        for(i=0;i<seg_len;i++)
        {
          console.log("i="+i);
          if($scope.segment_comb_array[i].dist==undefined)
          {
            console.log("if"+i);
            $scope.valid=false;
            break;
          }
          else
          {
            console.log("Else="+i);
            if(i==seg_len-1)
            {
              $scope.valid=true;
            }
          }
        }

      }
      $scope.ind_value=0;
      $scope.value=function(val)
      {
        console.log(val);
        $scope.ind_value=val;
      }


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

      $scope.fetch_all=function(type)
      {
        // mySharedService.shareCARTdata = $scope.cart_arr;
        // mySharedService.shareSEGdata= $scope.seg_amt;
        // mySharedService.shareDISdata= $scope.data.disc_val;
        // mySharedService.shareDISTdata= $scope.data.dist_name;
        $scope.tot_order_det=[];
        $scope.new_gst_arr=[];
        console.log($scope.data.disc_val);
        console.log($scope.data.dist_name);
        console.log($scope.cart_arr);
        console.log($scope.order_det);
        console.log($scope.segment_comb_array);
        console.log($scope.retailer_id);
        console.log($scope.price_val_chg);
        console.log($scope.tot_order_det);

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });

          for(i=0;i<$scope.seg_amt.length;i++)
          {
            $scope.seg_price_discount= $scope.seg_amt[i].price - ($scope.seg_amt[i].price*$scope.data.disc_val[$scope.seg_amt[i].segment_name])/100;

              if(type=='1')
              {
                var exists = checkProperty($scope.data.dist_name[$scope.seg_amt[i].segment_name].dr_name, $scope.tot_order_det);
              }
              if(type=='2')
              {
                var exists = checkProperty($scope.data.dist_name[$scope.seg_amt[i].segment_name], $scope.tot_order_det);
              }

                    console.log(typeof(exists));
                  if ($scope.tot_order_det.length == 0 || !exists)
                    {
                      console.log("IF");
                      if(type=='1')
                      {
                        $scope.tot_order_det.push({seg_name: $scope.seg_amt[i].segment_name, segment_price_mrp: $scope.seg_amt[i].price, seg_price_disc:$scope.seg_price_discount, disc: $scope.data.disc_val[$scope.seg_amt[i].segment_name], dist: $scope.data.dist_name[$scope.seg_amt[i].segment_name].dr_name, distr_img: $scope.data.dist_name[$scope.seg_amt[i].segment_name].dr_image, dist_id: $scope.data.dist_name[$scope.seg_amt[i].segment_name].id, gst: 18, gst_amt: 0, after_gst_amt: 0});
                      }
                      if(type=='2')
                      {
                        $scope.tot_order_det.push({seg_name: $scope.seg_amt[i].segment_name, segment_price_mrp: $scope.seg_amt[i].price, seg_price_disc:$scope.seg_price_discount, disc: $scope.data.disc_val[$scope.seg_amt[i].segment_name], dist: $scope.data.dist_name[$scope.seg_amt[i].segment_name], distr_img: $scope.data.dist_name[$scope.seg_amt[i].segment_name].dr_image, dist_id: $scope.data.dist_name[$scope.seg_amt[i].segment_name], gst: 18, gst_amt: 0, after_gst_amt: 0});
                      }


                    }
                  else {
                    console.log("ELSE");
                    if(type=='1')
                    {
                      $scope.tot_order_det[exists].dist =  $scope.data.dist_name[$scope.seg_amt[i].segment_name].dr_name;
                    }
                    if(type=='2')
                    {
                      $scope.tot_order_det[exists].dist =  $scope.data.dist_name[$scope.seg_amt[i].segment_name];
                    }
                    $scope.tot_order_det[exists].seg_name = $scope.seg_amt[i].segment_name;
                    $scope.tot_order_det[exists].segment_price_mrp = $scope.tot_order_det[exists].segment_price_mrp + parseInt($scope.seg_amt[i].price);
                    $scope.tot_order_det[exists].seg_price_disc = $scope.tot_order_det[exists].seg_price_disc + $scope.seg_price_disc;
                    $scope.tot_order_det[exists].disc = $scope.tot_order_det[exists].disc + parseInt($scope.data.disc_val[$scope.seg_amt[i].segment_name]);
                    $scope.tot_order_det[exists].distr_img = $scope.data.dist_name[$scope.seg_amt[i].segment_name].dr_image;
                    $scope.tot_order_det[exists].dist_id = $scope.data.dist_name[$scope.seg_amt[i].segment_name];
                  }
          }

          console.log($scope.tot_order_det);
          // console.log($scope.gst_array);

        // if($scope.gst_array.length)
        // {
        //   for(a=0;a<$scope.segment_comb_array.length;a++)
        //   {
        //     for(b=0;b<$scope.gst_array.length;b++)
        //     {
        //       if($scope.segment_comb_array[a].seg_name == $scope.gst_array[b].segment_name)
        //       {
        //         $scope.new_gst_arr[a]=$scope.gst_array[b];
        //       }
        //     }
        //   }
        //
        //   console.log($scope.new_gst_arr);
        //
        //   for(i=0;i<$scope.new_gst_arr.length;i++)
        //   {
        //     if($scope.segment_comb_array[i].seg_name==$scope.new_gst_arr[i].segment_name)
        //     {
        //       console.log($scope.new_gst_arr[i].gst);
        //       console.log($scope.new_gst_arr[i].gst.length);
        //       for(j=0;j<$scope.new_gst_arr[i].gst.length;j++)
        //       {
        //         if($scope.new_gst_arr[i].gst[j].cgst)
        //         {
        //           $scope.segment_comb_array[i].cgst=$scope.new_gst_arr[i].gst[j].cgst;
        //           $scope.segment_comb_array[i].sgst=$scope.new_gst_arr[i].gst[j].sgst;
        //
        //           $scope.segment_comb_array[i].cgst_amt=(parseInt($scope.new_gst_arr[i].gst[j].cgst)*$scope.segment_comb_array[i].seg_price_disc)/100;
        //           $scope.segment_comb_array[i].sgst_amt=(parseInt($scope.new_gst_arr[i].gst[j].sgst)*$scope.segment_comb_array[i].seg_price_disc)/100;
        //           $scope.tot_gst=parseInt($scope.new_gst_arr[i].gst[j].cgst)+parseInt($scope.new_gst_arr[i].gst[j].sgst);
        //           console.log($scope.tot_gst);
        //         }
        //         else
        //         {
        //           $scope.segment_comb_array[i].igst=$scope.new_gst_arr[i].gst[j].igst;
        //           $scope.tot_gst=parseInt($scope.new_gst_arr[i].gst[j].igst);
        //           console.log($scope.tot_gst);
        //         }
        //       }
        //       $scope.segment_comb_array[i].gst=$scope.tot_gst;
        //     }
        //
        //
        //     for(k=0;k<$scope.tot_order_det.length;k++)
        //     {
        //       if($scope.tot_order_det[k].seg_name==$scope.new_gst_arr[i].segment_name)
        //       {
        //         console.log(k+ " " + i);
        //         console.log($scope.tot_order_det[k].seg_name+" "+$scope.new_gst_arr[i].segment_name);
        //        for(l=0;l<$scope.new_gst_arr[k].gst.length;l++)
        //        {
        //          console.log($scope.new_gst_arr);
        //          console.log(k+ " " + l);
        //         if($scope.new_gst_arr[k].gst[l].cgst)
        //         {
        //           $scope.tot_order_det[k].cgst=$scope.new_gst_arr[k].gst[l].cgst;
        //           $scope.tot_order_det[k].sgst=$scope.new_gst_arr[k].gst[l].sgst;
        //
        //           $scope.tot_order_det[k].cgst_amt=(parseInt($scope.new_gst_arr[k].gst[l].cgst)*$scope.tot_order_det[k].seg_price_disc)/100;
        //           $scope.tot_order_det[k].sgst_amt=(parseInt($scope.new_gst_arr[k].gst[l].sgst)*$scope.tot_order_det[k].seg_price_disc)/100;
        //           //$scope.tot_order_det[k].gst=$scope.tot_order_det[k].gst;
        //           $scope.tot_gst_final=parseInt($scope.new_gst_arr[k].gst[l].cgst)+parseInt($scope.new_gst_arr[k].gst[l].sgst);
        //           console.log($scope.tot_gst_final);
        //         }
        //         else
        //         {
        //           $scope.tot_gst[k].igst=$scope.new_gst_arr[k].gst[l].igst;
        //           $scope.tot_gst_final=parseInt($scope.new_gst_arr[k].gst[l].igst);
        //           console.log($scope.tot_gst_final);
        //         }
        //        }
        //       }
        //         $scope.tot_order_det[k].gst=$scope.tot_gst_final;
        //         console.log($scope.tot_order_det[k].gst+" "+k);
        //     }
        //
        //
        //   }
        //           console.log($scope.segment_comb_array);
        //           console.log($scope.tot_order_det);
        // }

        console.log($scope.price_val_chg);

        if($scope.segment_comb_array.length)
        {
          $scope.total_order_val=0;
          for(i=0;i<$scope.segment_comb_array.length;i++)
          {
            if($scope.segment_comb_array[i].seg_name==$scope.price_val_chg[i].seg_name && $scope.segment_comb_array[i].segment_price_mrp != $scope.price_val_chg[i].price_val)
            {
              console.log($scope.segment_comb_array[i].segment_price_mrp +" "+ $scope.price_val_chg[i].price_val);
              $scope.segment_comb_array[i].segment_price_mrp=$scope.price_val_chg[i].price_val;
              $scope.chg_val=$scope.price_val_chg[i].price_val-($scope.segment_comb_array[i].disc*$scope.price_val_chg[i].price_val)/100;
              $scope.segment_comb_array[i].seg_price_disc=$scope.chg_val;
            }
            $scope.segment_comb_array[i].gst_amt= ($scope.segment_comb_array[i].gst*$scope.segment_comb_array[i].seg_price_disc)/100;

            $scope.segment_comb_array[i].after_gst_amt= $scope.segment_comb_array[i].seg_price_disc + ($scope.segment_comb_array[i].gst*$scope.segment_comb_array[i].seg_price_disc)/100;
            $scope.total_order_val=$scope.total_order_val+$scope.segment_comb_array[i].after_gst_amt;
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
                $scope.tot_order_det[i].gst_amt= ($scope.segment_comb_array[j].gst*$scope.segment_comb_array[j].seg_price_disc)/100;

                $scope.tot_order_det[i].after_gst_amt= $scope.tot_order_det[i].after_gst_amt + $scope.segment_comb_array[j].seg_price_disc + ($scope.segment_comb_array[j].gst*$scope.segment_comb_array[j].seg_price_disc)/100;
              }
            }
            // $scope.tot_order_det[i].after_gst_amt= $scope.tot_order_det[i].seg_price_disc + ($scope.tot_order_det[i].gst*$scope.tot_order_det[i].seg_price_disc)/100;
            $scope.total_order_val_final=$scope.total_order_val_final+$scope.tot_order_det[i].after_gst_amt;
          }
            console.log($scope.total_order_val_final);
            console.log($scope.tot_order_det);
            console.log($scope.segment_comb_array);
        }

        loginService.insert_in_order($scope.retailer_id,$scope.cart_arr,$scope.segment_comb_array,$scope.total_order_val_final,$scope.tot_order_det,type)
        .then(function (result)
        {
          console.log(result);
          $scope.oid=result.data.data;
          mySharedService.prepForLastOIDBroadcast(result.data.data);
          mySharedService.prepForDistListBroadcast($scope.segment_comb_array);
          mySharedService.prepForOrdDistListBroadcast($scope.tot_order_det);
          $scope.distr_arr=$scope.segment_comb_array;
          $scope.order_lst=$scope.tot_order_det;
          $ionicLoading.hide();
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


      $ionicModal.fromTemplateUrl('templates/ret-gst-info.html', {
        scope: $scope,
        animation: 'zoomIn'
      }).then(function(modal) {
        $scope.gst_modal = modal;
      });
      // ++++++++++++++++++ Open modal +++++++++++++++++++++++ //
      $scope.open_gst_modal = function(distributor_name) {
        $scope.distt_name=distributor_name;
        $scope.gst_modal.show();
      };
      // ++++++++++++++++++ Close modal +++++++++++++++++++++++ //
      $scope.close_gst_modal = function() {
        $scope.gst_modal.hide();
      };

      $scope.orderDate;
      $scope.currentDate = new Date();
      $scope.orderDate = moment($scope.currentDate).format('YYYY-MM-DD HH:MM:SS');
      $scope.formatDate = function(date){
     return new Date(date)
       }

       $scope.sub_date = function()
       {
         $scope.currentDate = moment($scope.currentDate).subtract(1, 'days');
         $scope.orderDate = moment($scope.currentDate).format('YYYY-MM-DD HH:MM:SS');
         console.log($scope.orderDate);
       }

       $scope.today = new Date();
       $scope.add_date = function()
       {
         $scope.currentDate = moment($scope.currentDate).format('YYYY-MM-DD HH:MM:SS');
         $scope.today = moment($scope.today).format('YYYY-MM-DD HH:MM:SS');
         if($scope.currentDate < $scope.today)
         {
           console.log($scope.currentDate);
           $scope.currentDate = moment($scope.currentDate).add(1, 'days');
           $scope.orderDate = moment($scope.currentDate).format('YYYY-MM-DD HH:MM:SS');
           console.log($scope.orderDate);
         }
       }
       $scope.next_followup_dt;
       $scope.date_val=function(dt)
       {
         console.log(dt);
         $scope.next_followup_dt=dt;
       }

      $scope.confirm_order=function(payment_type,type)
      {
        // $scope.distr_arr=[];
        $scope.segment_comb_array=[];
        $scope.gst_array=[];
        $scope.dist_array=[];
        $scope.seg_amt=[];
        $scope.seg_det=[];
        $scope.cart_arr=[];
        $scope.price_val_chg=[];
        console.log($scope.segment_comb_array);
        console.log($scope.gst_array);
        console.log($scope.dist_array);
        console.log($scope.seg_amt);
        console.log($scope.seg_det);
        console.log($scope.cart_arr);
        console.log($scope.price_val_chg);

        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });
        console.log($scope.oid);
        console.log($scope.next_followup_dt);
        if($scope.next_followup_dt)
        {
          $scope.next_followup_dt=moment($scope.next_followup_dt).format('YYYY-MM-DD');
        }
        console.log($scope.next_followup_dt);
        console.log(payment_type+" "+$scope.orderDate);
        loginService.update_in_order($scope.oid,$scope.next_followup_dt,payment_type,$scope.orderDate)
        .then(function (result)
        {
          console.log($rootScope.retailers_id);
          $scope.get_orders($rootScope.retailers_id,type);
          $ionicLoading.hide();
        },
         function (err) {
           console.error(err);
           $ionicLoading.hide();
        })
      }

      $scope.ddate = new Date();
      if(!$scope.dwrdate)
      {
        $scope.dwrdate = moment($scope.ddate).format('YYYY-MM-DD');
      }

       $scope.sub_dwr = function()
       {
         $scope.currentDate = moment($scope.dwrdate).subtract(1, 'days');
         $scope.dwrdate = moment($scope.currentDate).format('YYYY-MM-DD');
         console.log($scope.dwrdate);
         $scope.dwrlist($scope.dwrdate);
       }

       $scope.today = new Date();
       $scope.add_dwr = function()
       {
         $scope.currentDate = moment($scope.dwrdate).format('YYYY-MM-DD');
         $scope.today = moment($scope.today).format('YYYY-MM-DD');
         if($scope.currentDate < $scope.today)
         {
           console.log($scope.currentDate);
           $scope.currentDate = moment($scope.currentDate).add(1, 'days');
           $scope.dwrdate = moment($scope.currentDate).format('YYYY-MM-DD');
           console.log($scope.dwrdate);
           $scope.dwrlist($scope.dwrdate);
         }
       }

      $scope.dwrdata=mySharedService.dwrdata;
      $scope.dwrpaydata=mySharedService.dwrpaydata;
      $scope.showdwrdate=mySharedService.showdwrdate;

      $scope.dwrlist=function(date,type)
      {
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

      $scope.dwr_ret_visit=function(type,ret_type)
      {
        console.log($scope.dwrdate);
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
          if(type=='1' || type=='2')
          {
            $state.go('tab.dwr-ret-dist');
          }
          if(ret_type=='1')
          {
            type=4;
          }
          if(ret_type=='2')
          {
            type=5;
          }
          if(type=='4' || type=='5')
          {
            $state.go('tab.dwr-req');
          }
          $ionicLoading.hide();
        },
         function (err) {
           console.error(err);
           $ionicLoading.hide();
        })
      }

      $scope.leave_lst=mySharedService.leavedata;
      $scope.leave_list=function()
      {
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
          $state.go('tab.leave');
          $ionicLoading.hide();
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

      $scope.add_leave=function()
      {
        console.log($scope.data.subj);
        $scope.sdate=moment($scope.data.st_date).format('YYYY-MM-DD');
        $scope.edate=moment($scope.data.end_date).format('YYYY-MM-DD');
        console.log($scope.sdate);
        console.log($scope.edate);
        $ionicLoading.show
        ({
            template: '<span class="icon spin ion-loading-d"></span> Loading...'
        });
        loginService.add_leave($scope.data.subj,$scope.sdate,$scope.edate)
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

        loginService.notice_list()
        .then(function (result)
        {
          console.clear();
          mySharedService.shareNoticeList = result.data;
          $state.go('tab.announcement');
          $timeout(function () { $ionicLoading.hide(); }, 300);

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

        $scope.myProfileDetail = mySharedService.shareProfileDetail;
        console.log($scope.myProfileDetail);
        $scope.profile_detail = function()
        {
          console.log("PR");
            loginService.profile_detail()
            .then(function (result)
            {
              // console.clear();
              console.log(result.data);
              $scope.myProfileDetail=result.data;
              mySharedService.shareProfileDetail = result.data;
              $state.go('tab.profile');
              $timeout(function () { $ionicLoading.hide(); }, 300);

            }, function (err) {

                $ionicLoading.hide();
                console.error(err);
            })
        }


        $scope.profile_update = function(type)
        {
          $ionicLoading.show
          ({
              template: '<span class="icon spin ion-loading-d"></span> Loading...'
          });
          if(type == 1) {

                loginService.profile_update($scope.myProfileDetail)
                .then(function (result)
                {
                    console.log(result);
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
    console.log($scope.myDistAllOrderDetail);
    $scope.order_detail = function (dist_id, order_id,type)
    {
        // $ionicLoading.show
        // ({
        //     template: '<span class="icon spin ion-loading-d"></span> Loading...'
        // });

        loginService.order_detail(dist_id, order_id,type)
        .then(function (result)
        {
            $scope.myDistAllOrderDetail = result.data;
            mySharedService.shareDistAllOrderDetail = result.data;
            console.log($scope.myDistAllOrderDetail);

              $state.go('tab-ret.order-details');

            // $timeout(function () { $ionicLoading.hide(); }, 200);

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
        $state.go('nearest-map');
      }

      $scope.my_data=[];
      $scope.show_ret_det=mySharedService.show_ret_det;
      $scope.add_ret=function()
      {
        console.log($scope.my_data.mob);
        loginService.add_ret($scope.my_data.mob)
        .then(function (result)
        {
          console.log(result);
          if(result.data[0])
          {
            $scope.show_ret_det=result.data[0];
            mySharedService.show_ret_det=result.data[0];
            $state.go('tab.user-detail');
          }
          else
          {
            $state.go('become-partner');
          }
          $ionicLoading.hide();
          },function (err) {
               $ionicLoading.hide();
               console.error(err);
          })
      }

      });
