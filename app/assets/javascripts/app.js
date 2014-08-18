
var jwApp = angular.module('jwApp', []);


jwApp.controller('jwController', function($scope, $timeout) {

  $scope.starting = 1;

  document.getElementById('writehere').focus();
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
    // else if ( keyEvent.keyCode == 9 && document.getElementById('writehere').hasFocus ) {
    //     keyEvent.preventDefault();
    //     console.log(keyEvent.keyCode); 
    // }
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
  if ( document.getElementById("project_text") ) {
    document.getElementById("project_text").value = document.getElementById('writehere').innerHTML;
  }
  else if ( document.getElementById("contact_message") ) {
    document.getElementById("contact_message").value = document.getElementById('writehere').innerHTML;
  }
}

if ( document.getElementById("project_text") ) {
  $scope.test = document.getElementById("project_text").value;
}

$timeout(function() {
  $scope.$watch('test', function (newValue, oldValue) {
    $scope.savetotfield();
    console.log('changed');
  }, true);
}, 0.00001);

$scope.showsecs = 59;
$scope.timeron = 0;
$scope.timerup = 0;

$scope.closetimerup = function () {
  $scope.timerup = 0;
}

$scope.timerstart = function () {
  $scope.timeron = 1;
  $scope.showmins = $scope.focustimer - 1;
  if ($scope.focustimer != 0 ) {
    $scope.countstart();
  }
  else {
    $scope.timeron = 0;
  }
}

$scope.countstart = function () {
  if ($scope.showmins == -1) {
  $scope.timeron = 0;
  $scope.timerup = 1;
  }
  else {
    $scope.showsecs--;
    if ($scope.showsecs == 0) {
      $scope.showsecs = 59;
      $scope.showmins--;
    }
    $timeout(function () {
      $scope.countstart()
    }, 1000)
  }
}

$scope.closestarting = function () {
  $scope.starting = 0;
}

if (document.getElementById("emailinput")) {
  document.getElementById("emailinput").focus();
}

$scope.saveemail = function () {
  var x = document.getElementById("emailinput").value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if ( atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= x.length) {
      $('#emailinput').popover('show');
      return false;
  }
  else {
    document.getElementById("contact_email").value = $scope.enteremail;
    $scope.starting = 0;
  }
}

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