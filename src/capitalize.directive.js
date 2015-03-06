;(function() {
  'use strict';
  /**
   * @ngdoc directive
   * @name capitalize
   * @module eha.capitalize.directive
   * @restrict A
   * @description
   *
   * String capitalization directive. Capitalizes a model value.
   * Leverages `$filter('capitalize')`.
   *
   * Supports 2 modes:
   *
   * - `capitalize="words"` capitalize all words in string (default)
   * - `capitalize="first"` capitialize the first word only
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
   * @example
   * <example module="capitalizeDirectiveExampleFirst">
   *  <file name="capitalizeDirectiveExampleFirst.js">
   *    angular.module('capitalizeDirectiveExampleFirst',[
   *      'eha.capitalize.directive'
   *    ])
   *    .controller('TestCtrl', function($scope) {
   *      $scope.str = 'i am a lowercase str';
   *    });
   *  </file>
   *  <file name="capitalizeDirectiveExampleFirst.html">
   *    <p capitalize="first" ng-bind="str"></p>
   *  </file>
   * </example>
   *
   * @example
   * <example module="capitalizeDirectiveExampleWords">
   *  <file name="capitalizeDirectiveExampleWords.js">
   *    angular.module('capitalizeDirectiveExampleWords',[
   *      'eha.capitalize.directive'
   *    ])
   *    .controller('TestCtrl', function($scope) {
   *      $scope.str = 'i am a lowercase str';
   *    });
   *  </file>
   *  <file name="capitalizeDirectiveExampleWords.html">
   *    <p capitalize="words" ng-bind="str"></p>
   *  </file>
   * </example>
   *
   */
  var ngModule = angular.module('eha.capitalize.directive', [])
    .directive('capitalize', function($filter) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

          var mode = attrs.capitalize || 'words';

          if (!ngModelCtrl) {
            return;
          }

          function format(val) {
            return $filter('capitalize')(val, mode);
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
