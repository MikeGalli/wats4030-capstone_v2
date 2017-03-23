'use strict';

/**
 * @ngdoc function
 * @name wats4030CapstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4030CapstoneApp
 */
angular.module('wats4030CapstoneV2App')
  .controller('MainCtrl', function($scope, current, repsearchfed, repsearch) {
    $scope.current = current.query();
    $scope.refreshCurrent = function(location) {
      $scope.current = current.query({
        location: location
      });

      //// Start Make the div visiable /////////////////
      $scope.IsVisible = $scope.IsVisible ? false : true;
      //// End Make the div visiable /////////////////

      //// Start repsearch /////////////////
      $scope.current.$promise.then(function(data) {
        $scope.repsearch = repsearch.query({
          lat: data.results[0].geometry.location.lat, //This is the Google search
          lng: data.results[0].geometry.location.lng
        });
      });
      //// End repsearch /////////////////

      //// Start repsearchfed /////////////////
      $scope.current.$promise.then(function(data) {
        $scope.repsearchfed = repsearchfed.query({
          lat: data.results[0].geometry.location.lat, //This is the Google search
          lng: data.results[0].geometry.location.lng
        }).then(function(repdata) {
          $scope.repdata = repdata.data;
        });
      });
      //// End repsearchfed /////////////////

      //// Start Scroll to div /////////////////
      $scope.current.$promise.then(function scrollWin() {
        window.scrollTo(0, 500);
        $scope.refreshCurrent.$setUntouched();
        $scope.refreshCurrent.$setPristine();
      });
      //// End Scroll to div /////////////////

    };
  });
