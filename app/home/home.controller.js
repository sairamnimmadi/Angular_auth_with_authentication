(function () {
  angular.module("app").controller("HomeController", homeController);

  // homeController.$inject = ["$http"];
  // function homeController($http) {
  //   var vm = this;
  //   vm.message = "";
  //   vm.getMessage = function () {
  //     $http.get("http://localhost:8080/authorized").then(
  //       function (result) {
  //         vm.message = result.data;
  //       },
  //       function (err) {
  //         console.log(err);
  //       }
  //     );
  //   };
  //

  function homeController() {}
})();
