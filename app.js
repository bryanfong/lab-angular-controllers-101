angular.module('museumApp',[])
.controller("ExhibitionController", ExhibitionController)
.controller("GeneralController", GeneralController)

function ExhibitionController($scope){
  $scope.artwork = "http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Ancient%20Egypt/AncientEgypt_Home_Page.jpg?mw=988";
  $scope.title = "Sagent Portraits and Friends";
  $scope.author = "By John Sagent";
}

function GeneralController($scope){
  $scope.time = [
    {day: "Monday", hours: "7:00-9:00pm"},
    {day: "Tuesday", hours: "7:00-9:00pm"},
    {day: "Wednesday", hours: "7:00-9:00pm"},
    {day: "Thursday", hours: "7:00-9:00pm"}
  ];
  $scope.price = [25, 17, 12];
}

