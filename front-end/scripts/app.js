'use strict';
window.angular.module('StarterApp', [
	'ngMaterial',
	'ui.router',
	require('./modules').name
]);

 function bootstrapApplication() {
     angular.element(document).ready(function() {
         angular.bootstrap(document, ["StarterApp"]);
     });
 }
 bootstrapApplication();