
describe('Capitalize Directive', function() {
  'use strict';
  var element;
  var scope;

  beforeEach(module('eha.capitalize.directive', function($provide) {
    $provide.value('$state', {
      go: sinon.spy()
    });
  }));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular
                .element('<input ng-model="thing" type="text" capitalize>');
    scope.thing = 'nachname';
    $compile(element)(scope);
    scope.$apply();
  }));

  it('should format the initial value', function() {
    expect(element[0].value).to.equal('Nachname');
  });

  it('should format a name on blur', function() {
    element[0].value = 'surname';
    element.triggerHandler('blur');
    expect(element[0].value).to.equal('Surname');
  });

  it('should format a name with spaces', function() {
    element[0].value = 'then glenn';
    element.triggerHandler('blur');
    expect(element[0].value).to.equal('Then Glenn');
  });

  it('should format a name with a dash', function() {
    element[0].value = 'then glenn - svenn';
    element.triggerHandler('blur');
    expect(element[0].value).to.equal('Then Glenn - Svenn');
  });

  it('should deal with a space at the end', function() {
    element[0].value = 'then glenn - svenn ';
    element.triggerHandler('blur');
    expect(element[0].value).to.equal('Then Glenn - Svenn');
  });
});
