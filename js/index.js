app = angular.module('TodoApplication', []);

app.controller('TodoAppController', function($scope) {

    $scope.today = new Date();

    $scope.modalOpen = false;

    $scope.events = [
        { text: 'learn node', done: true },
        { text: 'develop corner using MEAN', done: false }
    ];

    $scope.addTodoEvent = function() {
        $scope.events.push({ text: $scope.newEventText, done: false });
        $scope.newEventText = "";
        $scope.modalOpen = false;
    }
});