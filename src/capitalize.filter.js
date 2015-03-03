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
   * <example module="capitalizeFilterExample">
   *  <file name="capitalizeFilterExample.js">
   *    angular.module('capitalizeFilterExample',[
   *      'eha.capitalize.filter'
   *    ]);
   *  </file>
   *  <file name="capitalizeFilterExample.html">
   *    <p>{{ 'i am a lower case string' | capitalize }}</p>
   *  </file>
   * </example>
   *
   */
  var ngModule = angular.module('eha.capitalize.filter', [])
  .filter('capitalize', function() {
    // Capitalize the first letter of a string
    return function(str) {
      if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

}());
