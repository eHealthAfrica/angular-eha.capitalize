;(function() {
  'use strict';
  /**
   * @ngdoc directive
   * @name capitalize
   * @module eha.capitalize.directive
   * @restrict A
   * @description
   *
   * Capitalize the first letter of a string
   *
   * @example
   * <example module="capitalizeDirectiveExample">
   *  <file name="capitalizeDirectiveExample.js">
   *    angular.module('capitalizeDirectiveExample',[
   *      'eha.capitalize.directive'
   *    ])
   *    .controller('TestCtrl', function($scope) {
   *      $scope.str = 'i am a lowercase str';
   *    });
   *  </file>
   *  <file name="capitalizeDirectiveExample.html">
   *    <p capitalize ng-bind="str"></p>
   *  </file>
   * </example>
   *
   */
  angular.module('eha.capitalize.directive', [])
    .directive('capitalize', function() {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          var nameSplitter = /[\s-–]+/g;
          if (!ngModelCtrl) {
            return;
          }

          function format(val) {
            val = String.prototype.trim.call(val || '');
            if (!val) {
              return;
            }

            var splits = val.split(nameSplitter);
            var dividers = val.match(nameSplitter) || [];
            return splits.reduce(function(ret, name, index) {
              var init = name[0];
              var rest = name.substr(1);
              name = init.toUpperCase() + rest;
              // dividers is expected to be one step shorter than splits
              return ret + name + (dividers[index] || '');
            }, '');
          }

          ngModelCtrl.$formatters.push(format);

          element.bind('blur', function(event) {
            var formatted = format(event.target.value);
            ngModelCtrl.$setViewValue(formatted);
            ngModelCtrl.$render();
          });
        }
      };
    });
  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

}());

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

;(function() {
  'use strict';

  angular.module('eha.capitalize', [
    'eha.capitalize.directive',
    'eha.capitalize.filter'
  ]);

})();
