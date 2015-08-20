/*jslint white: true*/

angular.module('myApp')

.controller('testCtrl', function ($rootScope, $scope) { 
  "use strict";

  console.log('tst Ctrl');

  var self = this;
  self.foo = 'bar';
  self.showText = false;

});