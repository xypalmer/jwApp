var jwApp = angular.module('jwApp', []);


jwApp.controller('jwController', function($scope) {

console.log('hello');

// $scope.myFunction = function () {
// document.getElementById('writeHere').contentWindow.document.designMode="on";
// console.log('hello2');
// };

$scope.boldText = function ()
    {  
       var boldIt = document.getElementById("writeHere");
       boldIt.document.execCommand("bold", false, ""); 
       console.log("bold");
    }

$scope.italicizeText = function ()
     {  
        var italicizeIt = document.getElementById("writeHere");
        italicizeIt.document.execCommand("italic", false, ""); 
        console.log("bold");
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