app.controller("FlipkartCtrl", function($scope, $state,fakedataFactory) {

  console.log("inside Flipkart controller");
  $scope.fakeData = fakedataFactory.getFakeData();

});
