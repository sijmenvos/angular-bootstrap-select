angular.module('selectDemoApp', ['marked', 'angular-bootstrap-select', 'angular-bootstrap-select.extra']);

function SelectCtrl($scope) {
  $scope.form = undefined;
}


angular.module('marked', []).directive('marked', function () {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
      });

      marked(element.text(), function (err, content) {
        if (err) throw err;
        element.html(content);
      });
    }
  };
});

