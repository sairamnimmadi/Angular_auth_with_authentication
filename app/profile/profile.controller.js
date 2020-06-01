(function () {
  angular.module("app").controller("ProfileController", profileController);

  profileController.$inject["authService"];

  function profileController(authService) {
    var vm = this;
    vm.auth = authService;
    console.log(JSON.parse(localStorage.getItem("profile")));
    vm.profile = JSON.parse(localStorage.getItem("profile"));
  }
})();
