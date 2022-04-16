angular.module('starter.services', [])

.service('loginService', function($q, $http,$state)
{
    return {

        /*Default Segment list start*/
        default_segment: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(root_url+"/index.php/master/getallproduct", {

            }).then(function (response)  {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });
            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };
            return promise;
        },
        /*Default Segment list end*/

        /*sales executive login function of service start*/
        loginuser: function(username, password)
        {

            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/login.php",
            {
                'username':username,
                'password':password,
                'src':'m'
            })
            .then(function (response) {

                console.log(response);
                if (response.data.data.sys_user_id) {
                    console.log("User 1st login successful: " + JSON.stringify(response.data));
                    deferred.resolve(response.data);
                } else {
                    console.log("User 1st login failed: Wrong Username And Password !");
                    deferred.reject(response.data);
                }
            }, function (error) {
                console.log("Server Error on 1st login: " + JSON.stringify(error));
                deferred.reject(error);
            });



            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*sales executive login function of service end*/

        /*Retailer listing function of service start*/

        retailerlist: function(len)
        {

            console.log("hello"+salesexe_id);

            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_new.php",
            {
                'salesexe_id':salesexe_id,
                'type':1,
                'salesexe_district':salesexe_district,
                'len':len,
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },


        orpPostServiceRequest: function(url,data)
        {
            // console.log(data);

            console.log("hello"+salesexe_id);

            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(root_url+url,JSON.stringify({
                "data":data
            }),{timeout:15000})
            // $http.post(root_url+url,
            //   {data:data},{timeout:15000})
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },


        get_ret_data: function(data)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_search_ret_data.php",
            {
                'salesexe_id':salesexe_id,
                'data':data
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Retailer listing function of service end*/

        get_today_birthday_info_data: function(type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_today_birthday_info.php",
            {
                'salesexe_id':salesexe_id,
                'type':type
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        birthday_detail: function(id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_birthday_detail.php",
            {
                'id':id,
                // 'type':type
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Await Retailer listing function of service start*/

        awaitretailerlist: function(len)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_awaiting_new.php",
            {
                'salesexe_id':salesexe_id,
                'type':1,
                'salesexe_district':salesexe_district,
                'len':len,
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Await Retailer listing function of service end*/

        /*DistrRetailer number search function of service start*/

        number_search: function(contact_2)
        {

            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_dr_numsearch.php",
            {
                'contact_2':contact_2,

            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*DistrRetailer number search function of service end*/

        // /*DistrRetailer become partner function of service start*/

        // become_partner: function(contact_2)
        //         {

        //             var deferred = $q.defer();
        //             var promise = deferred.promise;
        //             $http.post(server_url+"/put_become_partner_data.php",
        //             {
        //                 'contact_2':contact_2,

        //             })
        //                       .then(function (response) {

        //                         console.log(response);
        //                     deferred.resolve(response.data);
        //                }, function (error) {
        //                    console.log("Server Error on response: " + JSON.stringify(error));
        //                    deferred.reject(error);
        //                });

        //             promise.success = function (fn)
        //             {
        //                 promise.then(fn);
        //                 return promise;
        //             };
        //             promise.error = function (fn)
        //             {
        //                 promise.then(null, fn);
        //                 return promise;
        //             };

        //             return promise;
        //         },

        // /*DistrRetailer become partner function of service end*/




        /*Retailer details function of service start*/

        retailer_details: function(id,type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_details.php",
            {
                'ret_id':id,
                'type':type
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer details function of service end*/


        /*Retailer View & Edit function of service start*/

        view_edit_list: function(id,type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_details.php",
            {
                'ret_id':id,
                'type':type
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer details function of service end*/

        /*Retailer Segment Details function of service start*/

        edit_dr_seg: function(id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_segment_details.php",
            {
                'ret_id':id
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer Segment details function of service end*/

        /*Retailer details edit(update) function of service start*/

        retailer_view_edit: function(id,dr_name,email,contact_person,contact_2,street,state_name,district_name,pincode,city,area)
        {
            console.log(id+" "+dr_name+" "+email+" "+contact_person+" "+contact_2+" "+street+" "+state_name+" "+district_name+" "+pincode+" "+city+" "+area);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_view_edit.php",
            {
                'ret_id':id,
                'dr_name':dr_name,
                'email':email,
                'contact_person':contact_person,
                'contact_2':contact_2,
                'street':street,
                'state_name':state_name,
                'district_name':district_name,
                'pincode':pincode,
                'city':city,
                'area':area,
            })
            .then(function (response) {
                console.log("SERVICE SUCCESS");
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer details edit function of service end*/

        /*Retailer activity  history function of service start*/

        activity_ret_history: function(ret_id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_activity_history.php",
            {
                'ret_id':ret_id,
                'created_by':salesexe_id
            })
            .then(function (response) {
                console.log("SERVICE SUCCESS");
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer activity  history function of service end*/

        /*Retailer activity add function of service start*/

        activity_ret_service: function(ret_id,activity_date,activity_type,remark,next_followup)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/activity_ret.php",
            {
                'ret_id':ret_id,
                'created_by':salesexe_id,
                'activity_date':activity_date,
                'activity_type':activity_type,
                'remark':remark,
                'next_followup':next_followup,

            })
            .then(function (response) {
                console.log("SERVICE SUCCESS");
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer activity add function of service end*/

        /*Retailer img_doic list function of service start*/

        dr_img_doc_list: function(dr_id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            console.log(dr_id);
            $http.post(server_url+"/get_dr_imgdoc.php",
            {
                'dr_id':dr_id,


            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer img_doic list function of service end*/

        /* dr img_doc_details list function of service start*/
        dr_img_doc_details: function(dr_id,document_title)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            console.log(dr_id);
            $http.post(server_url+"/dr_img_doc_details.php",
            {
                'dr_id':dr_id,
                'document_title':document_title,

            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /* dr img_doc_details list function of service end*/

        /* Particular Retailer pop and gift listing function of service start*/

        ret_pop_gift_list: function(ret_id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_ret_pop_gift.php",
            {
                'ret_id':ret_id,
                'created_by':salesexe_id,

            })
            .then(function (response) {
                console.log("SERVICE SUCCESS");
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /* Particular Retailer pop and gift listing function of service end*/

        /*Executive Pop and Gift stock info and listing  for retailer
        service function start*/

        exe_pop_gift_stock_data: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_exepopgift_stock.php",
            {

                'created_by':salesexe_id,

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Executive Pop and Gift stock info and listing  for retailer
        service function start*/

        /*Assigning(giving)pop_gift to the retailer service function start*/

        assignpopgift_ret: function(ret_id,pop_gift_id,qty,delnote)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/insert_popgift_ret.php",
            {
                'ret_id':ret_id,
                'created_by':salesexe_id,
                'pop_gift_id':pop_gift_id,
                'qty':qty,
                'delnote':delnote
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Assigning pop_gift to the retailer service function start*/

        /*outstanding list of retailer start*/
        outstanding_list: function(type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_outstanding_list.php",
            {
                'created_by':salesexe_id,
                'type':type
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },


        /*outstanding list of retailer end*/

        /*Paymaster list of retailer start*/
        paymaster_lst: function(id,type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_paymaster_list.php",
            {
                'id':id,
                'type':type
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },


        /*Paymaster list of retailer end*/

        /*Paymaster Data of retailer start*/
        paymaster_data: function(id,r_id,type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_paymaster_data.php",
            {
                'id':id,
                'r_id':r_id,
                'type':type
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Paymaster Data of retailer end*/

        /*Distributor listing function of service start*/

        distributorlist: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer.php",
            {
                'salesexe_id':salesexe_id,
                'type':2,
                'salesexe_district':salesexe_district
            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Distributor listing function of service end*/

        /*Awaiting Distributor listing function of service start*/

        awaitdistributorlist: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_retailer_awaiting.php",
            {
                'salesexe_id':salesexe_id,
                'type':2,
                'salesexe_district':salesexe_district

            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Awaiting Distributor listing function of service end*/

        /*Distributor listing details function of service start*/

        distributorDetails: function(id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_distributor_details.php",
            {
                'distr':id,

            })
            .then(function (response) {

                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Distributor listing details function of service end*/


        /*Distributor activity add  function of service start*/

        activity_distr_service: function(distr_id,activity_date,activity_type,remark,next_followup)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/activity_ret.php",
            {
                'distr_id':distr_id,
                'created_by':salesexe_id,
                'activity_date':activity_date,
                'activity_type':activity_type,
                'remark':remark,
                'next_followup':next_followup,

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Distributor activity add function of service end*/

        /*Distributor details edit(update) function of service start*/

        distributor_view_edit: function(id,dr_name,contact_person,street,email,pincode,state_name,contact_02)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_distributor_view_edit.php",
            {
                'dr_name':dr_name,
                'contact_person':contact_person,
                'street':street,
                'email':email,
                'pincode':pincode,
                'state_name':state_name,
                'contact_02':contact_02,
                'distr_id':id,

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Distributor details edit function of service end*/

        /*sales executive profile function start*/
        salesexe_profile: function(salesexe_id)
        {

            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_salesexe_profile.php",
            {

                'salesexe_id':salesexe_id,

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*sales executive profile function end*/



        /*Product Segment Detaii Fetch For Retailer Order start*/

        fetch_prod_det_ret: function(val,id,salesexe_id)
        {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_product_details.php",
            {
                'val':val,
                'dr_id':id,
                'salesexe_id':salesexe_id,
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });
            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };
            return promise;
        },

        /*Product Segment Detaii Fetch For Retailer Order end*/


        get_segment_names: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_segments.php",
            {

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });
            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };
            return promise;
        },


        get_distributors: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_distributors.php",
            {
                'exec_id':salesexe_id
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });
            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };
            return promise;
        },


        /*Product Cat Detaii Fetch For Retailer Order start*/

        fetch_prod_cat_det_ret: function(seg,val,type,dis,seg_name,state_name,id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_product_details.php",
            {
                'seg':seg,
                'val':val,
                'district_name':dis,
                'state':state_name,
                'type':type,
                'seg_name':seg_name,
                'dr_id':id,
                'exec_id':salesexe_id
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });
            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };
            return promise;
        },

        /*Product Cat Detaii Fetch For Retailer Order end*/


        /*Retailer Order Listing function start*/

        ret_orders_list: function(ret_id)
        {
            console.log(salesexe_id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_ret_orders.php",
            {
                'ret_id':ret_id,
                'exec_id':salesexe_id

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Retailer Order Listing function end*/

        /*Search In Order function start*/

        get_search: function(s_val,id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_ret_order_search.php",
            {
                'search_val':s_val,
                'dr_id':id

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Search In Order function end*/


        /*Search for Segment/Category function start*/

        get_search_res_val: function(value)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_ret_order_search_val.php",
            {
                'value':value

            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Search for Segment/Category function end*/

        /*Insert Into Order,Order_Item,Segment Delivery function start*/

        insert_in_order: function(id,json_arr,seg_order_det,total_order,tot_order_det,type,value,oid,lead_ord)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/insert_in_order_new.php",
            {
                'created_by':salesexe_id,
                'dr_id':id,
                'json':json_arr,
                'order_seg':seg_order_det,
                'total_order':total_order,
                'tot_ord_child':tot_order_det,
                'type':type,
                'val':value,
                'oid':oid,
                'lead_ord':lead_ord
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Insert Into Order,Order_Item,Segment Delivery function end*/


        /*Update Into Order Table function start*/

        update_in_order: function(oid,ord_req,next_followup,payment_type,payment_mode,orderdate,dr_id,payee,amt,refno,ch_no,credit_type,credit_type_id,type,s_val)
        {
            console.log(oid+" "+next_followup+" "+payment_type+""+payment_mode+" "+orderdate);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/update_in_order.php",
            {
                'oid':oid,
                'ord_req':ord_req,
                'next_followup':next_followup,
                'payment_type':payment_type,
                'payment_mode':payment_mode,
                'orderdate':orderdate,
                'created_by':salesexe_id,
                'dr_id':dr_id,
                'type_id_name':payee,
                'amount':amt,
                'ref':refno,
                'ch_no':ch_no,
                'credit_type':credit_type,
                'credit_type_id':credit_type_id,
                'type':type,
                's_val':s_val
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Update Into Order Table function end*/

        /*Add Payment Paymaster function start*/

        add_payment: function(type,rid,did,tot_amt,mode,cheque_num,cheque_dt,pay_dt,trans_num,desc)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/addpaymasterpayment.php",
            {
                'created_by':salesexe_id,
                'rid':rid,
                'did':did,
                'mode':mode,
                'tot_amt':tot_amt,
                'cheque_num':cheque_num,
                'cheque_dt':cheque_dt,
                'pay_dt':pay_dt,
                'trans_num':trans_num,
                'desc':desc,
                'type':type
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Add Payment Paymaster function end*/

        /*DWR LIST function start*/

        dwrlist: function(date)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_dwrlist.php",
            {
                'created_by':salesexe_id,
                'date':date
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*DWR LIST function end*/

        /*LEAVE LIST function start*/

        leave_list: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_leave_list.php",
            {
                'created_by':salesexe_id
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*LEAVE LIST function end*/

        /*Check ADD LEAVE function start*/

        check_add_leave: function(tod_date)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/check_add_leave.php",
            {
                'exec_state':salesexe_state,
                'date':tod_date
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Check ADD LEAVE function end*/

        /*ADD LEAVE function start*/

        add_leave: function(subj,sdate,edate,type,diff)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_leave.php",
            {
                'created_by':salesexe_id,
                'subject':subj,
                'sdate':sdate,
                'edate':edate,
                'type':type,
                'req':diff
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*ADD LEAVE function end*/

        /*Follow Up function start*/

        followup_list: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_followup_list.php",
            {
                'created_by':salesexe_id
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*Follow Up LIST function end*/

        /*DWR RET DIST function start*/

        dwr_ret_visit: function(type,date)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_dwr_ret_visit.php",
            {
                'created_by':salesexe_id,
                'type':type,
                'date':date
            })
            .then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },

        /*DWR RET DIST LIST function end*/

        /*Notice function Start*/
        notice_list: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_notice_list.php", {

                'created_by':salesexe_id

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Notice function End*/

        /*Notice Detail function Start*/
        notice_detail: function(id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_notice_detail.php", {

                'id':id,
                'created_by':salesexe_id

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Notice Detail function End*/

        /*Executive's Profile Detail start*/
        profile_detail: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_profile_detail.php", {

                'exec_id':salesexe_id

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Executive's Profile Detail End*/

        /*Save Company Detail start*/
        save_comp_info: function(val)
        {
            console.log(val);
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'dr_id':val.id,
                'counter':val.dr_name,
                'email':val.email,
                'gst':val.gst_no,
                'landline':val.landline_no,
                'ret_type':'1'

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Save Company Detail End*/

        /*DR EDIT start*/
        save_dr_pers_info: function(value)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'value':value,
                'ret_type':'2',
                'multi_cont_person':1

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*DR Edit End*/

        /*Save Billing Company Detail start*/
        save_dr_add_info: function(val)
        {
            console.log(val);
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'dr_id':val.id,
                'street':val.street,
                'district_name':val.district_name,
                'state_name':val.state_name,
                'city':val.city,
                'area':val.area,
                'pincode':val.pincode,
                'ret_type':'3'

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Save Billing Company Detail End*/

        /*Save Shipping Company Detail start*/
        save_ship_add_info: function(val)
        {
            console.log(val);
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'dr_id':val.id,
                'street':val.ship_street,
                'district_name':val.ship_district_name,
                'state_name':val.ship_state_name,
                'city':val.ship_city,
                'area':val.ship_area,
                'pincode':val.ship_pincode,
                'ret_type':'4'

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Save Shipping Company Detail End*/

        /*Executive's Profile Edit start*/
        save_pers_info: function(val,date_birth,date_join)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'login_id':salesexe_id,
                'name':val.name,
                'email':val.email,
                'date_birth':date_birth,
                'date_join':date_join,
                'contact_1':val.contact_01,
                'contact_2':val.contact_02,
                'department':val.department,
                'designation':val.designation,
                'type':'1'

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Executive's Profile Edit End*/

        /*Save Company Detail start*/
        save_add_info: function(val)
        {
            console.log(val);
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'login_id':salesexe_id,
                'street':val.street,
                'district_name':val.district_name,
                'state_name':val.state_name,
                'taluk_name':val.taluk_name,
                'pincode':val.pincode,
                'type':'2'

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Save Company Detail End*/

        /*Save Login Detail start*/
        save_login_info: function(val)
        {
            console.log(val);
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/save_profile_detail.php", {

                'login_id':salesexe_id,
                // 'username':val.username,
                'password':val.password,
                'type':'3'

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Save Company Detail End*/

        /*GET Profile State Info Result Start*/
        get_profile_districts: function(st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_profile_state_info.php", {

                'st_name':st_name,
                'val':1

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /**GET Profile State Info Result End*/

        /*GET Profile State Info Result Start*/
        get_profile_city: function(dist_name,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_profile_state_info.php", {

                'dist_name':dist_name,
                'st_name':st_name

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /**GET Profile State Info Result End*/

        /*GET Profile State Info Result Start*/
        get_profile_area: function(city,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_profile_state_info.php", {

                'city':city,
                'st_name':st_name

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /**GET Profile State Info Result End*/

        /*GET Profile State Info Result Start*/
        get_profile_pincodes: function(area,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_profile_state_info.php", {

                'area':area,
                'st_name':st_name

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /**GET Profile State Info Result End*/

        /*GET Profile State Info Result Start*/
        set_profile_area: function(pin,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_profile_state_info.php", {

                'pin':pin,
                'st_name':st_name

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /**GET Profile State Info Result End*/


        /*Executive's Profile Update start*/
        profile_update: function(profile_data)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/profile_update.php", {

                'exec_id':salesexe_id,
                'profile_data': profile_data

            }).then(function (response)  {

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Executive's Profile Update End*/

        /*Order Detail function start*/
        order_detail: function(ret_dist_id, order_id,type)
        {
            console.log(ret_dist_id+" "+order_id+" "+type);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_order_detail.php",
            {
                'created_by':salesexe_id,
                'ret_dist_id':ret_dist_id,
                'order_id':order_id,
                'type':type

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Order Detail function End*/

        /*Add Location function start*/
        add_loc: function(dr_id,loc,lat,lng)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_loc.php",
            {
                'dr_id':dr_id,
                'loc':loc,
                'lat':lat,
                'lng':lng
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Add Location function End*/

        /*Get GPS Location function start*/
        get_gps_loc: function(dr_id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_gps_loc.php",
            {
                'dr_id':dr_id,
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get GPS Location function End*/

        /*Get Nearest Store function start*/
        get_nearest: function(lat,lng)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_nearest.php",
            {
                'created_by':salesexe_id,
                'district':salesexe_district,
                'lat':lat,
                'lng':lng
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get Nearest Store function End*/

        /*Search Retailer function start*/
        add_ret: function(mob,type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_ret.php",
            {
                'created_by':salesexe_id,
                'mobile':mob,
                'type':type
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Search Retailer function End*/

        /*Get States function start*/
        get_state: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'state'
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get States function End*/

        /*Get District function start*/
        get_district: function(st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'district',
                'state':st_name
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get District function End*/

        /*Get City function start*/
        get_city: function(dist_name,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'city',
                'district':dist_name,
                'state_name':st_name
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get City function End*/

        /*Set Pincode function start*/
        set_pincode: function(area,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'pincode',
                'area':area,
                'state_name':st_name
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Set Pincode function End*/

        /*Set Area function start*/
        set_area: function(pin,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'set_area',
                'pin':pin,
                'state_name':st_name
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Set Area function End*/

        /*Get Area function start*/
        get_area: function(city,st_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'area',
                'city':city,
                'state_name':st_name
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get Area function End*/

        /*Get Pincode function start*/
        get_pincode: function(dist_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'pincode',
                'district':dist_name
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get District function End*/

        /*Get District function start*/
        get_taluk: function(pin_val)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/get_state.php",
            {
                'type':'taluk',
                'pin':pin_val
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Get District function End*/

        /*Add DR function start*/
        add_dr: function(dr_array,dr_type,val)
        {
            console.log(dr_array);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_dr.php",
            {
                'counter_name':dr_array.counter_name,
                'contact_person':dr_array.name,
                'contact_1':dr_array.mob,
                'contact_2':dr_array.mob2,
                'landline_no':dr_array.landline,
                'gst':dr_array.gst,
                'email':dr_array.email,
                'street':dr_array.street,
                'state':dr_array.state,
                'district':dr_array.district,
                'pincode':dr_array.pincode,
                'city':dr_array.city,
                'area':dr_array.area,
                'ship_street':dr_array.ship_street,
                'ship_state':dr_array.ship_state,
                'ship_district':dr_array.ship_district,
                'ship_pincode':dr_array.ship_pincode,
                'ship_city':dr_array.ship_city,
                'ship_area':dr_array.ship_area,
                'created_by':salesexe_id,
                'dr_type':dr_type,
                'lead_type':dr_array.lead_type,
                'int_type':dr_array.int_type,
                'dob':dr_array.dob,
                'desc':dr_array.desc,
                'val':val

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Add DR function End*/

        /*Add DR Segment function start*/
        add_dr_seg: function(last_dr_id,seg_name_arr,type)
        {
            console.log(seg_name_arr);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_dr_seg.php",
            {
                'last_id':last_dr_id,
                'seg_arr':seg_name_arr,
                'type':type

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Add DR Segment function End*/

        /*Add DR Distributor function start*/
        add_dr_dists: function(last_dr_id,dr_name_arr)
        {
            console.log(dr_name_arr);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_dr_dists.php",
            {
                'last_id':last_dr_id,
                'dist_arr':dr_name_arr,
                'exec_id':salesexe_id

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Add DR Distributor function End*/

        /*DR Request Regenerate function start*/
        req_reg: function(dr_id)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/req_reg.php",
            {
                'dr_id':dr_id

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*DR Request Regenerate function End*/

        /*Dashboard Details function start*/
        dashboard_det: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/dashboard.php",
            {
                'created_by':salesexe_id,

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Dashboard Details function End*/

        /*Expense Listing function start*/
        expense_list: function()
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/expense_list.php",
            {
                'id':salesexe_id,

            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Expense Listing function End*/

        /*Expense Detail function start*/
        expense_det: function(dt)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/expense_detail.php",
            {
                'id':salesexe_id,
                'date':dt
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Expense Detail function End*/

        /*Expense Date Detail function start*/
        exp_date_detail: function(dt)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/expense_date_detail.php",
            {
                'exec_id':salesexe_id,
                'date':dt
            }).then(function (response) {
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Expense Date Detail function End*/


        /*Delete Expense Type function start*/
        delete_expense_type: function(id,type,dt)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/delete_expense_type.php",
            {
                'id':id,
                'type':type,
                'exec_id':salesexe_id,
                'dt':dt
            }).then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Delete Expense Type function End*/

        /*Add Expense Type function start*/
        add_expense_detail: function(exp_type,exp_val,dt)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_expense_detail.php",
            {
                'exp_type':exp_type,
                'exp_status':exp_type+'_status',
                'exp_val':exp_val,
                'dt':dt,
                'exec_id':salesexe_id,
                'category':salesexe_category
            }).then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Add Expense Type function End*/

        /*Add New Expense Type function start*/
        add_new_expense: function(exp_type,exp_val,dt)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post(server_url+"/add_new_expense.php",
            {
                'exp_type':exp_type,
                'exp_status':exp_type+'_status',
                'exp_val':exp_val,
                'dt':dt,
                'exec_id':salesexe_id
            }).then(function (response) {
                console.log(response);
                deferred.resolve(response);
            }, function (error) {
                console.log("Server Error on response: " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Add New Expense Type function End*/

        /*GET Search Result Start*/
        get_my_seg_dists: function(dr_id,dist_name)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_seg_dists.php", {

                'dr_id':dr_id,
                'district_name':dist_name

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*GET Search Result End*/

        /*GET Search Result Start*/
        show_last_payment: function(dr_id,oid,type)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/get_last_payment.php", {

                'login_id':dr_id,
                'oid':oid,
                'type':type

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*GET Search Result End*/

        /*Delete Bill Start*/
        del_bill: function(bill_img)
        {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.post(server_url+"/delete_bill.php", {

                'bill_img':bill_img,
                'exec_id':salesexe_id

            }).then(function (response)  {
                console.log(response);

                deferred.resolve(response);

            }, function (error) {

                console.log("Server Error : " + JSON.stringify(error));
                deferred.reject(error);
            });

            promise.success = function (fn)
            {
                promise.then(fn);
                return promise;
            };
            promise.error = function (fn)
            {
                promise.then(null, fn);
                return promise;
            };

            return promise;
        },
        /*Delete Bill End*/
    }


})

.factory('mySharedService', function() {
    var mySharedService = {};

    mySharedService.shareRetailerdata = '';
    mySharedService.prepForRetailerDataBroadcast = function(msg) {
        this.shareRetailerdata = msg;

    };


    mySharedService.shareDRNumSearchdata = '';
    mySharedService.prepForDrNUmSearchDataBroadcast = function(msg) {
        this.shareDRNumSearchdata = msg;
    };




    mySharedService.shareRetailerDetaildata = '';
    mySharedService.prepForRetailerDetailDataBroadcast = function(msg) {
        this.shareRetailerDetaildata = msg;

    };

    mySharedService.shareRetailerViewEditdata = '';
    mySharedService.prepForRetailerDetailViewEditBroadcast = function(msg) {
        this.shareRetailerViewEditdata = msg;

    };

    mySharedService.shareActivityRetHistorydata = '';
    mySharedService.prepForActivityRetHistoryBroadcast = function(msg) {
        this.shareActivityRetHistorydata = msg;

    };

    mySharedService.shareDr_imagDoc = '';
    mySharedService.prepForDRImgDocBroadcast = function(msg) {
        this.shareDr_imagDoc = msg;

    };

    mySharedService.shareDrimagDocDetails = '';
    mySharedService.prepForDRImgDocDetailsBroadcast = function(msg) {
        this.shareDrimagDocDetails = msg;

    };


    mySharedService.shareRetPopGiftdata = '';
    mySharedService.prepForRetPopGiftBroadcast = function(msg) {
        this.shareRetPopGiftdata = msg;

    };



    mySharedService.shareExePopGiftStockdata = '';
    mySharedService.prepForExePopGiftStockInfoBroadcast = function(msg) {
        this.shareExePopGiftStockdata = msg;

    };


    mySharedService.shareAssignPopGiftRet = '';
    mySharedService.prepForAssignPopGiftRetInfoBroadcast = function(msg) {
        this.shareAssignPopGiftRet = msg;

    };



    mySharedService.shareDistributorListdata = '';
    mySharedService.prepForDistributorListDataBroadcast = function(msg) {
        this.shareDistributorListdata = msg;
    };

    mySharedService.shareDistributorDetailsdata = '';
    mySharedService.prepForDistributorDetailsDataBroadcast = function(msg) {
        this.shareDistributorDetailsdata = msg;

    };

    mySharedService.shareDistributorViewEditdata = '';
    mySharedService.prepForDistributorDetailViewEditBroadcast = function(msg) {
        this.shareDistributorViewEditdata = msg;

    };


    mySharedService.shareProductsdata = [];
    mySharedService.prepFoProductsDataBroadcast = function(msg) {
        this.shareProductsdata = msg;
    };

    mySharedService.shareProductsCatdata = [];
    mySharedService.prepFoProductsCatDataBroadcast = function(msg) {
        this.shareProductsCatdata = msg;
    };

    mySharedService.shareProductsNamedata = '';
    mySharedService.prepFoProductsNameDataBroadcast = function(msg) {
        this.shareProductsNamedata = msg;
    };

    mySharedService.shareDistributordata = '';
    mySharedService.prepForDistributorNameBroadcast = function(msg) {
        this.shareDistributordata = msg;
    };

    mySharedService.shareProdFeaturedata = '';
    mySharedService.prepForProdFeatureBroadcast = function(msg) {
        this.shareProdFeaturedata = msg;
    };

    mySharedService.shareRetOrdersdata = '';
    mySharedService.prepForRetOrdersBroadcast = function(msg) {
        this.shareRetOrdersdata = msg;
    };

    mySharedService.shareRetIddata = '';
    mySharedService.prepForRetailerIdBroadcast = function(msg) {
        this.shareRetIddata = msg;
    };

    mySharedService.shareDistListdata = [];
    mySharedService.prepForDistListBroadcast = function(msg) {
        this.shareDistListdata = msg;
    };

    mySharedService.shareOrdDistListdata = [];
    mySharedService.prepForOrdDistListBroadcast = function(msg) {
        this.shareOrdDistListdata = msg;
    };

    mySharedService.shareGstdata = '';
    mySharedService.prepForGstBroadcast = function(msg) {
        this.shareGstdata = msg;
    };

    mySharedService.shareLastOIDdata = '';
    mySharedService.prepForLastOIDBroadcast = function(msg) {
        this.shareLastOIDdata = msg;
    };

    mySharedService.sharePaymasterListdata = [];
    mySharedService.prepForPaymasterListBroadcast = function(msg) {
        this.sharePaymasterListdata = msg;
    };

    mySharedService.sharePaymasterdata = [];
    mySharedService.prepForPaymasterDataBroadcast = function(msg) {
        this.sharePaymasterdata = msg;
    };


    mySharedService.shareDistName='';
    mySharedService.shareBaldata='';
    mySharedService.shareR_ID='';
    mySharedService.shareD_ID='';
    mySharedService.sharePaymasterTypedata='';
    mySharedService.dwrdata=[];
    mySharedService.dwrpaydata=[];
    mySharedService.leavedata=[];
    mySharedService.followupdata=[];
    mySharedService.lastfollowupdata=[];
    mySharedService.visitdata=[];
    mySharedService.sharebckvaldata='';
    mySharedService.sharebckneardata='';
    mySharedService.shareCatValData='';
    mySharedService.shareDistAllOrderDetail = [];
    mySharedService.lat='';
    mySharedService.long='';
    mySharedService.last_gps='';
    mySharedService.near='';
    mySharedService.backdwrdate='';
    mySharedService.dwrdt='';
    mySharedService.showdwrdate='';
    mySharedService.show_ret_det=[];
    mySharedService.type='';
    mySharedService.state_arr=[];
    mySharedService.pin_arr=[];
    mySharedService.area_arr=[];
    mySharedService.dist_arr=[];
    mySharedService.city_arr=[];
    mySharedService.ship_state_arr=[];
    mySharedService.ship_pin_arr=[];
    mySharedService.ship_area_arr=[];
    mySharedService.ship_dist_arr=[];
    mySharedService.ship_city_arr=[];

    mySharedService.mobile1='';
    mySharedService.dr_type='';
    mySharedService.date_birth='';
    mySharedService.dash_data='';
    mySharedService.segment_names=[];
    mySharedService.dwrretreqdata=[];
    mySharedService.dwrdistreqdata=[];
    mySharedService.dwrsecord=[];
    mySharedService.dwrprimord=[];
    mySharedService.last_dr_id='';
    mySharedService.shareAwaitRetailerdata=[];
    mySharedService.shareAwaitDistributorListdata =[];
    mySharedService.dr_status='';
    mySharedService.regen_type='';
    mySharedService.outstand_data=[];
    mySharedService.selectedValue='';
    mySharedService.selectedValue1='';
    mySharedService.selectedValue2='';
    mySharedService.selectedValue3='';
    mySharedService.selectedValue6='';
    mySharedService.leave_lsts=[];
    mySharedService.national_holiday=[];
    mySharedService.regional_holiday=[];
    mySharedService.show_hol='';
    mySharedService.out_data='';
    mySharedService.exp_data=[];
    mySharedService.exp_det=[];
    mySharedService.exp_date_det=[];
    mySharedService.exp_id=[];
    mySharedService.expcurrentDate='';
    mySharedService.more_ord_details=[];
    mySharedService.retailer_segs=[];
    mySharedService.store_default_segments=[];
    mySharedService.shareProfileDetail=[];


    mySharedService.company_name = '';
    mySharedService.default_segment=[];
    mySharedService.default_category=[];
    mySharedService.default_products=[];
    mySharedService.show_default_category=[];
    mySharedService.show_default_product=[];
    mySharedService.temp_default_category=[];
    mySharedService.temp_default_products=[];
    mySharedService.cart_arr=[];
    mySharedService.temp_cart_arr=[];
    mySharedService.dist_name=[];
    mySharedService.edit_enable='';
    mySharedService.edit_enable_button='';
    mySharedService.saved_qty='';
    mySharedService.share_seg_comb_data=[];
    mySharedService.saved_order_id='';
    mySharedService.show_proceed_btn='';
    mySharedService.payment_type=[];
    mySharedService.payment_mode=[];
    mySharedService.order_amt=[];
    mySharedService.order_cno=[];
    mySharedService.order_ref=[];
    mySharedService.next_followup_date=[];
    mySharedService.last_payment='';
    mySharedService.distributor_idd=[];
    mySharedService.new_arrr=[];
    mySharedService.new_result_arr=[];
    mySharedService.state_data=[];
    mySharedService.district_data=[];
    mySharedService.pincode_data=[];
    mySharedService.city_data=[];
    mySharedService.area_data=[];
    mySharedService.ship_state_data=[];
    mySharedService.ship_district_data=[];
    mySharedService.ship_pincode_data=[];
    mySharedService.orderDists=[];
    mySharedService.retail_segs=[];
    mySharedService.hide_distributor='';
    mySharedService.ecex_name='';
    mySharedService.saved_seg_dist=[];
    mySharedService.bill_data=[];
    mySharedService.image='';
    mySharedService.img_val='';
    mySharedService.gst='';
    mySharedService.shareNoticeList=[];
    mySharedService.shareNoticeDet=[];
    mySharedService.ann_id='';
    mySharedService.mysegments=[];
    mySharedService.ret_state_data=[];
    mySharedService.ret_district_data=[];
    mySharedService.ret_pincode_data=[];
    mySharedService.ret_city_data=[];
    mySharedService.ret_area_data=[];
    mySharedService.ship_state_data=[];
    mySharedService.ship_district_data=[];
    mySharedService.ship_city_data=[];
    mySharedService.ship_area_data=[];
    mySharedService.ship_pincode_data=[];
    mySharedService.dash_segments=[];
    mySharedService.land_on_order='';
    mySharedService.conf_ord=[];
    mySharedService.int_typee='';
    mySharedService.valid='';
    mySharedService.mobile_disable='';
    mySharedService.gst_disable='';
    mySharedService.distributors_name=[];
    mySharedService.lead_order='';
    mySharedService.birthday_list=[];
    mySharedService.retailer_contact = [];
    mySharedService.dr_default_segment = [];
    mySharedService.dr_default_category = [];

    return mySharedService;
})

// Old
// .factory('BackgroundGeolocationService', ['$q', '$http', function ($q, $http) {

//     var callbackFn = function(location) {
//         console.log(location);

//         console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);

//         BackgroundGeolocation.finish();
//     },

//     failureFn = function(error) {
//         console.log('BackgroundGeoLocation error ' + JSON.stringify(error));
//     },

//     start = function (id) {
//         console.log(id);
//         window.localStorage.setItem('bgGPS', 1);

//         BackgroundGeolocation.configure({
//             desiredAccuracy: 0,
//             stationaryRadius: 0,
//             distanceFilter: 0,
//             startOnBoot: true,
//             interval: 150000,
//             activitiesInterval: 1000,
//             url: server_url+'/update_location.php?location='+location+"&salesexe_id="+id,
//             method: 'POST',
//             headers: { "X-FOO": "bar" },
//             notificationTitle: 'Prayag Sales',
//             notificationText: 'Location Tracking!',
//             locationService: 'ANDROID_DISTANCE_FILTER',
//             debug: false,
//             stopOnTerminate: false,
//         });

//         BackgroundGeolocation.on('location', function(location) {
//             console.log(location);
//             $http.post(server_url+'/update_location.php?location='+location+"&salesexe_id="+id, {})
//             .then(function (response) {
//                 console.log(response);
//             }, function (error) {
//                 console.log("Server Error on response: " + JSON.stringify(error));
//             });
//         });
//         BackgroundGeolocation.start();
//     };

//     return {
//         start: start,
//         // Initialize service and enable background geolocation by default
//         init: function (id) {
//             // var bgGPS = window.localStorage.getItem('bgGPS');
//             var bgGPS = 1;
//             if (bgGPS == 1 || bgGPS == null) {
//                 start(id);
//             }
//         },

//         // Stop data tracking
//         stop: function () {
//             window.localStorage.setItem('bgGPS', 0);
//             BackgroundGeolocation.stop();
//         }
//     }
// }])



.factory('BackgroundGeolocationService', ['$q', '$http', function ($q, $http) {
    var callbackFn = function(location) {
        console.log(location);
        // start(login_id);
        console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
        backgroundGeoLocation.finish();
    },

    failureFn = function(error) {
        console.log('BackgroundGeoLocation error ' + JSON.stringify(error));
    },

    //Enable background geolocation
    start = function (id) {
        console.log(id);
        window.localStorage.setItem('bgGPS', 1);
        backgroundGeoLocation.configure({
            locationProvider: backgroundGeoLocation.ACTIVITY_PROVIDER,
            desiredAccuracy: backgroundGeoLocation.HIGH_ACCURACY,
            stationaryRadius: 50,
            distanceFilter: 50,
            startOnBoot: true,
            notificationTitle: 'Prayag Sales',
            notificationText: 'Location Tracking!',
            debug: true,
            interval: 150000,
            fastestInterval: 300000,
            locationService: 'ANDROID_DISTANCE_FILTER',
            activitiesInterval: 1000,
            method: 'POST',
            url: server_url+'/update_location.php?salesexe_id='+id+"&location="+location,
            httpHeaders: {
                'X-FOO': 'bar'
            },
            // customize post properties
            stopOnTerminate: false,
            postTemplate: {
                lat: '@latitude',
                lon: '@longitude',
                foo: 'bar' // you can also add your own properties
            }
        });

        // commented
        // BackgroundGeolocation.on('location', function(location) {
        //     console.log(location);
        //     $http.post(server_url+'/update_location.php?location='+location+"&salesexe_id="+id, {})
        //     .then(function (response) {
        //         console.log(response);
        //     }, function (error) {
        //         console.log("Server Error on response: " + JSON.stringify(error));
        //     });
        // });
        backgroundGeoLocation.start();
    };

    return {
        start: start,
        // Initialize service and enable background geolocation by default
        init: function (id) {
            var bgGPS = window.localStorage.getItem('bgGPS');
            console.log(id);
            var bgGPS = 1;
            if (bgGPS == 1 || bgGPS == null) {
                start(id);
            }
        },

        // Stop data tracking
        stop: function () {
            window.localStorage.setItem('bgGPS', 0);
            backgroundGeoLocation.stop();
        }
    }
}])

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})

/*image and document section of pariticularretailer start*/

.factory('Camera', function($q) {

    return{
        getPicture: function(options) {
            var q = $q.defer();

            navigator.camera.getPicture(function(result) {
                q.resolve(result);
            }, function(err) {
                q.reject(err);
            }, options);

            return q.promise;
        }
    }
})

.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
})

.filter('trustUrl', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
});



/*image and document section of pariticularretailer end*/
