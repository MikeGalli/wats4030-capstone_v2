# wats4030-capstone-v2

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


# wats4030-capstone

/**
 * @license AngularJS v1.6.1
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.
This project also uses Bower Sass and Grunt.

## Instalation:

bower install angularjs-socialshare --save

Create a Git repository. Clone it to your development environment.
In your development environment:
Run `yo angular`
Run `npm install --save-dev grunt-sass`
Run `npm install grunt-build-controll --save-dev`

## Google Analyitics Installation (https://angulartics.github.io/)

Download Angulartics and the Angulartics plugin for your vendor. Note: All plugins list Angulartics as a dependency, so they will be downloaded together.

$ bower install angulartics-google-analytics --save
Load the relevant files in your applications html (or include them in your build script).

<script src="/bower_components/angulartics/dist/angulartics.min.js"></script>
<script src="/bower_components/angulartics-google-analytics/dist/angulartics-ga.min.js"></script>
In your application dependencies, inject Angulartics and the Angulartics plugin for your vendor.

angular.module('myApp', ['angulartics', 'angulartics.google.analytics'])
Make sure you delete any automatic tracking line from your vendor snippet code!

// Google Analytics example
ga('send', 'pageview'); // <---- delete this line!


## Build
Run `grunt build` and `grunt buildcontrol` for building.

## Development
Run `grunt serve` for preview.

## Testing
Running `grunt test` will run the unit tests with karma.
