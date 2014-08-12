var myFunction = function () {
document.getElementById('writeHere').contentWindow.document.designMode="on";
console.log('hello2');
};
var jwApp = angular.module('jwApp', []);


jwApp.controller('jwController', function($scope) {

console.log('hello');

$scope.boldText = function ()
    {  
       var boldIt = document.getElementById("writeHere").contentWindow;
       boldIt.document.execCommand("bold", false, ""); 
       console.log("bold");
    }

$scope.italicizeText = function ()
     {  
        var italicizeIt = document.getElementById("writeHere").contentWindow;
        italicizeIt.document.execCommand("italic", false, ""); 
        console.log("bold");
     }
$scope.submit_form = function () {
  document.getElementById("project_text").value = document.getElementById('writeHere').contentWindow.document.body.innerHTML;
}

$scope.submit_form2 = function () {
  document.getElementById('writeHere').contentWindow.document.body.innerHTML = document.getElementById("project_text").value;
}

})