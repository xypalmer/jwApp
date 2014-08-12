var jwApp = angular.module('jwApp', []);


jwApp.controller('jwController', function($scope) {

$scope.boldText = function ()
    {  
        document.execCommand("bold", false, ""); 
        console.log("bold");
    }

$scope.italicizeText = function ()
     {  
        document.execCommand("italic", false, ""); 
        console.log("italicize");
     }
$scope.underlineText = function ()
     {  
        document.execCommand("underline", false, ""); 
        console.log("underline");
     }
$scope.submit_form = function () {
  document.getElementById("project_text").value = document.getElementById('writeHere').contentWindow.document.body.innerHTML;
}

$scope.submit_form2 = function () {
  document.getElementById('writeHere').contentWindow.document.body.innerHTML = document.getElementById("project_text").value;
}

// $scope.iframeW = document.getElementById('writeHere').contentWindow.document.body.innerHTML;

// $scope.$watch('iframeW', function (newValue, oldValue) {
//   $scope.submit_form();
//   console.log('changed');
// }, true);

})


jwApp.directive("hello", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attrs, ngModel) {

        function read() {
          ngModel.$setViewValue(element.html());
        }

        ngModel.$render = function() {
          element.html(ngModel.$viewValue || "");
        };

        element.bind("blur keyup change", function() {
          scope.$apply(read);
        });
      }
    };
  });