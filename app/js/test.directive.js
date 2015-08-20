/*jslint white: true*/

angular.module('myApp')

.directive('testDirective', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      foo: '=',
    },
    templateUrl: 'partials/test-directive.tmpl.html',
    link: function (scope, element, attrs) {
      // ...
      console.log('load directive');
    }
  }
});
