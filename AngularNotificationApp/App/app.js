/**
 * Created by Goku on 29-01-2017.
 */

var notificationApp = angular.module('notificationApp',['angularNotification']);

notificationApp.controller('mainController',['$scope','$rootScope','$notification',function ($scope,$rootScope,$notification) {

    var mess = '<div>Password :- <input type="password" id="pswd" style="color:#000000;margin-bottom:4px;margin-top:5px"/></div>' +
        '<div style="margin-left:70px;"><button id="acceptbtn" type="button" class="btn btn-primary">Accept</button>' +
        '<button type="button" class="btn btn-info" id="rejectbtn" style="margin: 0 8px 0 8px">Reject</button></div>';

    var ent = '<div>&nbsp; Document send for Review' +
        '<div style="float:left">Approve :- </div>' +
        '<div style="margin-left:70px">' +
        '<div class="btn btn-xs btn-primary" ng-click="approve(\'yes\')" style="margin-right:10px;margin-left:10px">Yes</div>' +
        '<div class="btn btn-xs btn-warning" ng-click="approve(\'no\')">No</div>'   +
        '</div>' +
        '</div>';

    $scope.advancelaunch = function(){
        var result= $notification.open(
            {
                position:"bottom-left",
                title:'Document Approve',
                message:mess,
                notificationType:$notification.notificationType.success,
                color:'white',
                closebutton:true,
                showspeed:1000,
                hidespeed:20000
            });

        var jobj = result.jObjectContainer;

        jobj.find('#acceptbtn').click(function () {
            var password = $('#pswd').val();
            console.log('Password is : '+password);
            console.log('Accepted');

        });

        jobj.find('#rejectbtn').click(function () {
            var password = $('#pswd').val();
            console.log('Password is :'+password);
            console.log('Rejected');
        });

        console.log(result);
    }


    $scope.eventlaunch = function () {
        var result = $notification.open(
            {
                position:"bottom-right",
                title:'Verification',
                message:ent,
                notificationType:$notification.notificationType.information,
                color:'white',
                closebutton:true,
                hidespeed:40000
            });

        var $retscope = result.messageScope;

        $retscope.approve = function (data) {
            console.log(result);
            console.log(data);
        };

    };

    $scope.noclosebtn = function () {
        var result=  $notification.open(
            {
                position:"bottom-left",
                title:'No Close Button',
                message:'There is no correct way of declaring a object',
                notificationType:$notification.notificationType.dark,
                color:'white',
                closebutton:false,
                showspeed:2000,
                hidespeed:40000,
                showeasing:'linear'
            });

    };

    $scope.notitle  = function () {
        var result=  $notification.open(
            {
                position:"bottom-left",
                title:'',
                message:'Sample text to show the message of user',
                notificationType:$notification.notificationType.error,
                color:'white',
                closebutton:true,
                showspeed:500,
                hidespeed:40000,
                showeasing:'linear'
            });
    };

    $scope.launch = function () {
        var result=  $notification.open(
            {
                position:"bottom-left",
                title:'',
                message:'Data is update correctly sampel code testi sas aggh .',
                notificationType:$notification.notificationType.warning,
                color:'white',
                closebutton:false,
                showspeed:200,
                hidespeed:400000,
                showeasing:'linear'
            });
        console.log(result);
    }


}]);


