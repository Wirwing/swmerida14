angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('mainCtrl', function($scope, JobService) {
  JobService.findAll().then(function (jobs) {
    $scope.jobs = jobs;
  });
})

.controller('JobCtrl', function($scope, $stateParams, JobService) {
  JobService.findById($stateParams.jobId).then(function(job) {
    $scope.job = job;
  });
})

.controller('ManagerCtrl', function($scope, $stateParams, ManagerService) {
  ManagerService.findById($stateParams.managerId).then(function(manager) {
    $scope.manager = manager;
  });
})

.controller('ResultCtrl', function($scope, $stateParams, JobService) {
  JobService.findAll().then(function (jobs) {
    $scope.jobs = jobs;
  });
})

.controller('ProfileCtrl', function($scope, ProfileService) {
  ProfileService.get().then(function(profile) {
    $scope.profile = profile;
  });
});