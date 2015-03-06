;(function() {
  'use strict';
  /**
   * @ngdoc filter
   * @name capitalize
   * @module eha.capitalize.filter
   * @function
   * @description
   *
   * Capitalize the first letter of a string
   *
   * @example
   * <example module="capitalizeFilterExampleDefault">
   *  <file name="capitalizeFilterExampleDefault.js">
   *    angular.module('capitalizeFilterExampleDefault',[
   *      'eha.capitalize.filter'
   *    ]);
   *  </file>
   *  <file name="capitalizeFilterExampleDefault.html">
   *    <p>{{ 'i am a lower case string' | capitalize }}</p>
   *  </file>
   * </example>
   *
   * @example
   * <example module="capitalizeFilterExampleFirst">
   *  <file name="capitalizeFilterExampleFirst.js">
   *    angular.module('capitalizeFilterExampleFirst',[
   *      'eha.capitalize.filter'
   *    ]);
   *  </file>
   *  <file name="capitalizeFilterExampleFirst.html">
   *    <p>{{ 'i am a lower case string' | capitalize:first }}</p>
   *  </file>
   * </example>
   *
   * @example
   * <example module="capitalizeFilterExampleWords">
   *  <file name="capitalizeFilterExampleWords.js">
   *    angular.module('capitalizeFilterExampleWords',[
   *      'eha.capitalize.filter'
   *    ]);
   *  </file>
   *  <file name="capitalizeFilterExampleWords.html">
   *    <p>{{ 'i am a lower case string' | capitalize:words }}</p>
   *  </file>
   * </example>
   *
   */
  var ngModule = angular.module('eha.capitalize.filter', [])
  .filter('capitalize', function() {

    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function capitalizeWords(str) {
      return str.replace(/\b./g, function(m) {
        return m.toUpperCase();
      });
    }

    return function(str, mode) {
      if (str) {
        switch (mode) {
          case 'words':
            str = capitalizeWords(str);
          break;
          case 'first':
            str = capitalizeFirstLetter(str);
          break;
          default:
            str = capitalizeFirstLetter(str);
          break;
        }
        return str;
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

}());
