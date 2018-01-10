

angular.module('heroApp', [])
    .controller('MainCtrl', function () {
        this.message = 'Hello world!';
    });

angular.bootstrap(document.body, ['heroApp'], {strictDi: true});
