app = angular.module('TodoApplication', []);

app.controller('TodoAppController', function($scope) {

    $scope.today = new Date();

    $scope.events = [
        { text: 'learn node', done: true },
        { text: 'develop corner using MEAN', done: false }
    ];

    $scope.addTodoEvent = function() {
        $scope.events.push({ text: $scope.newEventText, done: false });
        document.getElementById('add-item-popup').classList.add('close-modal-on-submit');
    }

});