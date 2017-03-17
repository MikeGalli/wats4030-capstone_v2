'use strict';

/**
 * @ngdoc overview
 * @name wats4030CapstoneV2App
 * @description
 * # wats4030CapstoneV2App
 *
 * Main module of the application.
 */
angular
  .module('wats4030CapstoneV2App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    '720kb.socialshare',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://congress.api.sunlightfoundation.com/**'
    ]);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Main View'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        title: 'About View'
      })
      .when('/contactdetails', {
        templateUrl: 'views/contactdetails.html',
        controller: 'ContactdetailsCtrl',
        controllerAs: 'contactdetails',
        title: 'Contact Details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
