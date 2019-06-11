app = angular.module('TodoApplication', []);

app.controller('TodoAppController', function($scope) {

    $scope.today = new Date();

    $scope.events = [
        { text: 'learn node', done: 'true' },
        { text: 'develop corner using MEAN', done: 'false' }
    ];

    // $scope.getAllEvents = function() {}

});