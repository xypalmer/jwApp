var jwApp = angular.module('jwApp', []);


jwApp.controller('jwController', function($scope, $timeout) {

  $scope.changeS = 1;

  $scope.bluestyle = function () {
    $scope.changeS = 0;
  }

  $scope.orangestyle = function () {
    console.log("orange");
    $scope.changeS = 1;
    console.log($scope.changeS);
  }
  

  if (document.queryCommandSupported('insertBrOnReturn') == true) {
    console.log('working');
    document.execCommand('insertBrOnReturn', false, false)
  }

  function returnparagraph(keyEvent) {
    if (keyEvent.keyCode == 13) {
      console.log('return');
    
      document.execCommand('formatBlock', false, 'p');
    }
    else if (keyEvent.keyCode == 9) {
      keyEvent.preventDefault();
      console.log(keyEvent.keyCode); 
    }
  }

  document.onkeydown = returnparagraph;

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
$scope.savetotfield = function () {
  document.getElementById("project_text").value = document.getElementById('writehere').innerHTML;
}

// $scope.submit_form2 = function () {
//   document.getElementById('writeHere').contentWindow.document.body.innerHTML = document.getElementById("project_text").value;
// }

$scope.test = document.getElementById("project_text").value;

  $timeout(function() {
    $scope.$watch('test', function (newValue, oldValue) {
      $scope.savetotfield();
      console.log('changed');
    }, true);
  }, 0.00001);


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