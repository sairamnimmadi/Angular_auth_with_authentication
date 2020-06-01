(function () {
  angular
    .module("app", ["auth0.auth0", "ui.router", "angular-jwt"])
    .config(config);

  config.$inject = [
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
    "angularAuth0Provider",
    "$httpProvider",
    "jwtOptionsProvider",
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    angularAuth0Provider,
    $httpProvider,
    jwtOptionsProvider
  ) {
    $stateProvider
      .state("home", {
        url: "/",
        controller: "HomeController",
        templateUrl: "app/home/home.html",
        controllerAs: "vm",
      })
      .state("callback", {
        url: "/callback",
        controller: "CallbackController",
        templateUrl: "app/callback/callback.html",
        controllerAs: "vm",
      })
      .state("profile", {
        url: "/profile",
        controller: "ProfileController",
        templateUrl: "app/profile/profile.html",
        controllerAs: "vm",
      });

    jwtOptionsProvider.config({
      tokenGetter: function () {
        return localStorage.getItem("access_token");
      },
      whiteListedDomains: ["localhost"],
    });

    angularAuth0Provider.init({
      clientID: "h9n0vAUGQeneyvmFvIy1XJP1sj8YcT3u",
      domain: "learning-angular-js.auth0.com",
      responseType: "token id_token",
      redirectUri: "http://localhost:3000/callback",
      scope: "openid profile",
      audience: "https://learning-angular-js.com/api",
    });

    $httpProvider.interceptors.push("jwtInterceptor");

    $urlRouterProvider.otherwise("/");

    $locationProvider.hashPrefix("");

    $locationProvider.html5Mode(true);
  }
})();
