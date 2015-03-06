describe('capitalize filter', function() {
  'use strict';

  var filter;

  beforeEach(module('eha.capitalize.filter'));

  describe('$filter(\'capitalize\')', function() {
    beforeEach(inject(function(_$filter_) {
      filter = _$filter_;
    }));

    it('should capitalize first character of string by default', function() {
      var input = 'this is a string';
      var expectedResult = 'This is a string';
      var result = filter('capitalize')(input);
      expect(result).to.eq(expectedResult);
    });

    it('should capitalize first character of string ' +
       'when called with \'first\'', function() {

         var input = 'this is a string';
         var expectedResult = 'This is a string';
         var result = filter('capitalize')(input, 'first');
         expect(result).to.eq(expectedResult);

       });

    it('should capitalize (title case) every word in a string', function() {
      var input = 'this is a line of text';
      var expectedResult = 'This Is A Line Of Text';
      var result = filter('capitalize')(input, 'words');
      expect(result).to.eq(expectedResult);
    });
  });

  describe('filter expression', function() {
    var el;
    var $el;
    var compile;
    var scope;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
      compile = _$compile_;
      scope = _$rootScope_;
    }));

    it('should capitalize first letter by default', function() {
      el = '<p>{{ "i am a lower case string" | capitalize }}</p>';
      $el = compile(el)(scope);
      scope.$digest();
      expect($el.text()).to.equal('I am a lower case string');
    });

    it('should capitalize first letter when \'first\' ' +
       'is passed as a parameter', function() {

         el = '<p>{{ "i am a lower case string" | capitalize:"first" }}</p>';
         $el = compile(el)(scope);
         scope.$digest();
         expect($el.text()).to.equal('I am a lower case string');
       });

    it('should capitalize all words when \'words\' ' +
       'is passed as a parameter', function() {

         el = '<p>{{ "i am a lower case string" | capitalize:"words" }}</p>';
         $el = compile(el)(scope);
         scope.$digest();
         expect($el.text()).to.equal('I Am A Lower Case String');
       });
  });
});
