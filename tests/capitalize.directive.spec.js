describe('Capitalize Directive', function() {
  'use strict';
  var element;
  var scope;

  beforeEach(module('eha.capitalize.filter'));
  beforeEach(module('eha.capitalize.directive', function($provide) {
    $provide.value('$state', {
      go: sinon.spy()
    });
  }));

  describe('default behaviour', function() {
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
  });

  describe('capitalize words', function() {
    beforeEach(inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      element = angular.element('<input ' +
                                '  ng-model="thing" ' +
                                '  type="text" ' +
                                '  capitalize="words">');

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
  });

  describe('capitalize first', function() {
    beforeEach(inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      element = angular
                  .element('<input ng-model="thing" type="text" ' +
                           'capitalize="first">');

      scope.thing = 'name nachname';
      $compile(element)(scope);
      scope.$apply();
    }));

    it('should format the initial value', function() {
      expect(element[0].value).to.equal('Name nachname');
    });

    it('should format a name on blur', function() {
      element[0].value = 'surname';
      element.triggerHandler('blur');
      expect(element[0].value).to.equal('Surname');
    });

    it('should format a name with spaces', function() {
      element[0].value = 'then glenn';
      element.triggerHandler('blur');
      expect(element[0].value).to.equal('Then glenn');
    });

    it('should format a name with a dash', function() {
      element[0].value = 'then glenn - svenn';
      element.triggerHandler('blur');
      expect(element[0].value).to.equal('Then glenn - svenn');
    });
  });
});
