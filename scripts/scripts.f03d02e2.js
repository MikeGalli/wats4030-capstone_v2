"use strict";angular.module("wats4030CapstoneV2App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","720kb.socialshare","angulartics","angulartics.google.analytics"]).config(["$routeProvider","$sceDelegateProvider",function(a,b){b.resourceUrlWhitelist(["self","https://congress.api.sunlightfoundation.com/**"]),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main",title:"Main View"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about",title:"About View"}).when("/contactdetails",{templateUrl:"views/contactdetails.html",controller:"ContactdetailsCtrl",controllerAs:"contactdetails",title:"Contact Details"}).otherwise({redirectTo:"/"})}]),angular.module("wats4030CapstoneV2App").controller("MainCtrl",["$scope","current","repsearchfed","repsearch",function(a,b,c,d){a.current=b.query(),a.refreshCurrent=function(e){a.IsVisible=a.IsVisible?!1:!0,a.current=b.query({location:e}),a.current.$promise.then(function(){a.refreshCurrent=function(){window.scrollTo(0,500),a.refreshCurrent.$setUntouched(),a.refreshCurrent.$setPristine(),a.repsearch={},a.repsearchfed={},a.current=b.query({location:e})}}),a.current.$promise.then(function(b){a.repsearchfed=c.query({lat:b.results[0].geometry.location.lat,lng:b.results[0].geometry.location.lng}).then(function(b){a.repdata=b.data})}),a.current.$promise.then(function(b){a.repsearch=d.query({lat:b.results[0].geometry.location.lat,lng:b.results[0].geometry.location.lng})})}}]),angular.module("wats4030CapstoneV2App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4030CapstoneV2App").factory("current",["$resource",function(a){return a("https://maps.googleapis.com/maps/api/geocode/json?address=:location&key=AIzaSyDHcLJvjxGIE2Z3Hk3jKN2WZhB73fXAt4c",{},{query:{method:"GET",params:{location:"Seattle University, 12th Avenue, Seattle, WA"},isArray:!1}})}]),angular.module("wats4030CapstoneV2App").factory("repsearch",["$resource",function(a){return a("https://openstates.org/api/v1/legislators/geo/?lat=:lat&long=:lng",{},{query:{method:"GET",params:{lat:"42.96",lng:"-108.09"},isArray:!0}})}]),angular.module("wats4030CapstoneV2App").factory("repsearchfed",["$http",function(a){var b="https://congress.api.sunlightfoundation.com/legislators/locate";return{query:function(c){return a.jsonp(b,{jsonpCallbackParam:"callback",params:{latitude:c.lat,longitude:c.lng}})}}}]),angular.module("wats4030CapstoneV2App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<body ng-app="wats4030CapstoneV2App"> <!--START Social Share Buttons/////////////////////////////////////////////////////////////////////--> <div class="container-fluid sidebar"> <div class="row is-flex" id="sidebar"> <div class="col-sm-12"> <div class="btn-group"> <strong>Share this website!</strong> <p></p> <!--START Facebook Share/////////////////////////////////////////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="facebook" socialshare-type="share" socialshare-via="145634995501895" socialshare-media="http://imgur.com/a/HKHL3" socialshare-quote="Find out how your reps are and let them know what you think they should be doing. Go to:  ThisIsOurGov.com" socialshare-hashtags="#MJG, #thisisourgov.com" socialshare-title="This is Our Government" socialshare-mobileiframe="true" socialshare-caption="Calling our Legislators is ann easy way to help keep our country on track" socialshare-url="http://thisisourgov.com" socialshare-popup-height="300" socialshare-popup-width="400" socialshare-trigger="click"><img ng-src="images/Facebook.252ba2ed.png"> </button> <!--END Facebook Share/////////////////////////////////////////////////////////////////////--> <!--START Twitter Share/////////////////////////////////////////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="twitter" socialshare-hashtags="" socialshare-via="twitter" socialshare-text="Find out how your reps are and let them know what you think they should be doing. Go to:    " socialshare-url="http://ThisIsOurGov.com" socialshare-popup-height="300" socialshare-popup-width="400" socialshare-trigger="click"><img ng-src="images/Twitter.72736a69.png"> </button> <!--END Twitter Share/////////////////////////////////////////////////////////////////////--> <!--START LinkedIn Share/////////////////////////////////////////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="linkedin" socialshare-text="{{test.testValue}}" socialshare-url="http://imgur.com/a/HKHL3" socialshare-description="ThisIsOurGov.com will tell you who your repesenatives are" socialshare-source="thisisourgov.com" socialshare-popup-height="300" socialshare-popup-width="400" socialshare-trigger="click"> <img ng-src="images/LinkedIn.8435861c.png"> </button> <!--END LinkedIn Share/////////////////////////////////////////////////////////////////////--> <!--START email Share/////////////////////////////////////////////////////////////////////--> <button class="socialbutton" socialshare socialshare-provider="email" socialshare-body="Hello! http://thisisourgov.com" socialshare-to="test@test.ing" socialshare-cc="test@test.ing" socialshare-media="https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" socialshare-subject="Very important email" socialshare-popup-height="300" socialshare-popup-width="400"> <img ng-src="images/Email.158e8e6c.png"> </button> <!--END email Share/////////////////////////////////////////////////////////////////////--> </div> </div> </div> </div> <!--END Social Share Buttons/////////////////////////////////////////////////////////////////////--> <!--START Header/////////////////////////////////////////////////////////////////////--> <div id="header"><img class="headlineimage" src="images/OurGovsLogo.e98d1d28.png"> <span display:inline><h1 id="headlinetext"> Who&nbsp;represents&nbsp;me?</h1></span> </div> <!--END Header/////////////////////////////////////////////////////////////////////--> <!--START Click Here/////////////////////////////////////////////////////////////////////--> <div class="container-fluid"> <div class="row is-flex"> <div class="col-sm-12 findReps map"> <form role="form" class="form"> <div id="form" class="form-group bs-float-label"> <h3>Find out, who represents you in Congress and the Senate:<br><br></h3> <input id="float-input-1" type="text" name="location" ng-model="location" value="" class="form-control float-input col-sm-6" placeholder="Street Address"> <label for="float-input-1" class="float-label">Put your address in the box:</label> <h5 class="bigline" style="display:inline">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Then click the button: <button analytics-on analytics-action="clicked" analytics-category="findReps" class="btn btn-xs btn-primary" ng-click="refreshCurrent(location)">Show me my Reps</button> </h5><span class="disclaimerText"> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;*Is&nbsp;it&nbsp;safe?</span> </div> </form> </div> </div> </div> <!--END Click Here/////////////////////////////////////////////////////////////////////--> <span><h4>You can make a difference, just call once a week!</h4> <h5>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Start your own campaign! Get your friends to call! &emsp;&emsp;&emsp;Use those "Share" buttons!</h5></span> <span>The time to act is now. Make yourself <strong>heard</strong> and hold your reps accountable to the values that got you to vote for them.</span> <span><br>Not sure what to say? Click here: <input type="checkbox" ng-model="script"></span> <span ng-show="script"><h5>&emsp;&emsp;&emsp;This is script to help you get your message to legislators about important issues:</h5> <i>Hello, my name is __________, and I’m calling today from __(city)__ to urge Senator/Congressman __________ to support/oppose____________. This is an important issue to me as one of his/her constituents and I hope that they will continue to uphold my values so that I can vote for him/her. Thank you for sharing my message.</i></span><br> <!--START test data lat and long/////////////////////////////////////////////////////////////////////--> <!--  <dl>\n            <dt>Lat</dt>\n            <dd>{{current.results[0].geometry.location.lat}}</dd>\n            <dt>Lng</dt>\n            <dd>{{current.results[0].geometry.location.lng}}</dd>\n          </dl>  --> <!--END test data lat and long/////////////////////////////////////////////////////////////////////--> <!--START explaination looping through variables/////////////////////////////////////////////////////////////////////--> <!--////////////////////////////////////\nTThis note refers to 2 variables that are used in the code below. (and created here in the html)\nIt’s a reminder of how to perform a basic function on a site, looping through data.\n	1) var repinfo\n	2) var role\nThe data that is returned from the API can be looped through and any data they contain\ncan be pulled out to show on the site.\nSETP ONE:\nData returned from the API : repsearch - (an array containing a bunch of objects).\n<dl ng-repeat="repinfo in repsearch”…..\n	means: Go through the array (repsearch) and pull out anything you find inside that array.\n		Each thing found will be added to the variable repinfo.\n\n	So..  <dd>{{repinfo.last_name}}….:\n		Means: Go through repsearch and add all the last_name values to repinfo.\n		The double curlies means print it out on the site.\nNEXT STEP\nThere is an array inside this array, called roles.\nRoles, is (also) the whole array (of roles). We want to pull out parts of\nthat array and deal with them the way we want. Some parts we don’t care about,\nsome parts get put here, others go there. The procedure is the same as above.\nMake a variable to hold the parts of the array we are interested in.\n\nData returned from the API : repsearch - (is an array that also contains an array called: roles).\n		We are already looping through repsearch and adding data to repinfo (step one).\n		While doing this: When the site gets to the array roles:\n		let’s loop through that and add any data found to another variable: role.\n\n<dl ng-repeat="role in repinfo.roles”….\n	means: Go through the array (roles) and pull out anything you find inside that array.\n		Each thing found will be added to the variable role.\n\n	So..  <dd>{{role.term}}….:\n		Means: Go through (repsearch.roles??????) and add all the term values to role.\n		The double curlies means print it out on the site.\n\nRINSE AND REPEATE\n////////////////////////////////////--> <!--END explaination looping through variables/////////////////////////////////////////////////////////////////////--> <!--START Rep Search/////////////////////////////////////////////////////////////////////--> <!--<script>\n  $scope.refreshCurrent = function scrollWin() {\n      window.scrollTo(300, 500);\n  }\n</script>--> <div ng-show="IsVisible" class="container-fluid {{repinfofed.state}}" id="statereps" ng-init="repsearchfed" ng-repeat="repinfofed in repdata.results | limitTo:1"> <div class="X"> <h1 class="headertext">Your Reps</h1> </div> <div class="row is-flex" ng-init="repsearch"> <dl class="col-sm-12 col-md-4 col-lg-4 reps" ng-repeat="repinfo in repsearch"> <dd ng-switch="repinfo.photo_url"> <img class="img-responsive" ng-src="{{repinfo.photo_url}}"></dd> <!--Data supplies chamber: upper or lower to designate House or Senate\nUpper & Lower are meaningless to the public so we\'ll translate them here.--> <dd ng-switch="repinfo.chamber"> <span ng-switch-when="lower">HOUSE</span> <span ng-switch-when="upper">SENATE</span> </dd> <dd ng-switch="repinfo.party">{{repinfo.first_name}} {{repinfo.last_name}} <span ng-switch-when="Democratic">Democrat</span> <span ng-switch-when="Republican">Republican</span> </dd> <dl ng-repeat="office in repinfo.offices"> <dd>Ph: <a href="tel:+1{{office.phone}}">{{office.phone}}</a></dd> <span ng-show="contactDetails"> <dd ng-if="office.fax">Fx: {{office.fax}}</dd> <dd ng-if="office.email">email: {{office.email}}</dd> <p></p> <dd> {{office.name}}</dd> <dd>Address: {{office.address}}</dd> </span> <dl ng-repeat="role in repinfo.roles" ng-show="$first"> <!--Term is reported more than 1x in the data--> <dd>Term of Service: {{role.term | limitTo:4}} - {{role.term | limitTo:-4}}</dd> </dl> </dl> </dl> </div> <div ng-show="IsVisible"> <div class="col-sm-12 col-md-6"> <span>Show More Contact Details: <input type="checkbox" ng-model="contactDetails"></span> </div> <div class="call col-sm-12 col-md-6">You can call your reps by simply clicking on the phone numbers! </div> </div> </div> <!--END Rep Search/////////////////////////////////////////////////////////////////////--> <!--START Rep Search FED/////////////////////////////////////////////////////////////////////--> <div ng-show="IsVisible" class="container-fluid" id="fedreps"> <div class="X"> <h1 class="headertext">Your FED Reps</h1> </div> <div class="row is-flex" ng-init="repsearchfed"> <dl class="col-sm-6 col-md-4 col-lg-4 reps" ng-repeat="repinfofed in repdata.results"> <dd><img class="img-responsive" ng-src="https://raw.githubusercontent.com/unitedstates/images/gh-pages/congress/225x275/{{repinfofed.bioguide_id}}.jpg"> </dd> <dd>{{repinfofed.chamber | uppercase}}</dd> <dd ng-switch="repinfofed.party">{{repinfofed.first_name}} {{repinfofed.last_name}} <span ng-switch-when="D">Democrat</span> <span ng-switch-when="R">Republican</span> </dd> <dd>Ph: <a href="tel:+1{{repinfofed.phone}}">{{repinfofed.phone}}</a></dd> <span ng-show="contactDetails"> <dd ng-if="repinfofed.fax">Fx: {{repinfofed.fax}}</dd> <dd ng-if="repinfofed.oc_email">email: {{repinfofed.oc_email}}</dd> <p></p> <dd>{{repinfofed.office}}</dd> </span> <dd>Term of Service {{repinfofed.term_start}}, {{repinfofed.term_end}} </dd> </dl> </div> <div ng-show="IsVisible"> <div class="col-sm-12 col-md-6"> <span>Show More Contact Details: <input type="checkbox" ng-model="contactDetails"></span> </div> <div class="call col-sm-12 col-md-6">You can call your reps by simply clicking on the phone numbers! </div> </div> </div> <!--END Rep Search FED/////////////////////////////////////////////////////////////////////--> </body>')}]);