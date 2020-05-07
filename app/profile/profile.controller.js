(function () {
  angular.module("app").controller("ProfileController", profileController);

  function profileController() {
    var vm = this;
    console.log(JSON.parse(localStorage.getItem("profile")));
    vm.profile = JSON.parse(localStorage.getItem("profile"));
  }
})();
