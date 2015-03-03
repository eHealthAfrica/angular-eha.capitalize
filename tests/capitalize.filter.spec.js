describe('capitalize filter', function() {

  var filter;

  beforeEach(module('eha.capitalize.filter'));
  beforeEach(inject(function(_$filter_) {
    filter = _$filter_;
  }));

  it('should capitalize first character of string', function() {
    var input = 'this is a string';
    var expectedResult = 'This is a string';
    var result = filter('capitalize')(input);
    expect(result).to.eq(expectedResult);
  });
});
