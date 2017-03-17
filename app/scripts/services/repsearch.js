'use strict';

/**
 * @ngdoc service
 * @name wats4030CapstoneApp.repsearch
 * @description
 * # repsearch
 * Factory in the wats4030CapstoneApp.
 */
angular.module('wats4030CapstoneV2App')
  .factory('repsearch', function($resource) {
    // Service logic
    // ...
    //https://congress.api.sunlightfoundation.com/legislators/locate?latitude=42.96&longitude=-108.09
    //https://maps.googleapis.com/maps/api/geocode/json?address=:location&key=AIzaSyDHcLJvjxGIE2Z3Hk3jKN2WZhB73fXAt4c
    // Public API here
    return $resource('https://openstates.org/api/v1/legislators/geo/?lat=:lat&long=:lng', {}, {

//https://congress.api.sunlightfoundation.com/legislators/locate?latitude=:lat&longitude=:lng
//openstates.org/api/v1/legislators/geo/?lat=35.79&long=-78.78


      query: {
        method: 'GET',
        params: {
          lat: '42.96',
          lng: '-108.09'
        },
        isArray: true
      }
    });
  });
