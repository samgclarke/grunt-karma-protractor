describe('Test Directive', function () {
  var elm, scope, value;

  beforeEach(module('myApp'));
  beforeEach(module('templates'));

  beforeEach(inject( function ($rootScope, $compile) {
    // instantiate directive
    elm = angular.element(
      '<div test-directive foo="foo"></div>'
    );
    value = 'Hello Karma';
    // new isolate scope
    scope = $rootScope.$new();
    scope.foo = value;
    elm = $compile(elm)(scope);
    scope.$digest();
  }));

  it('Should contain value', function () {
    expect(elm.html()).toContain(value);
  });

});