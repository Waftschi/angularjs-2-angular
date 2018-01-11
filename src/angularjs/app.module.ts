// import * as angular from 'angular' ;

// import { downgradeComponent } from '@angular/upgrade/static';
// import { AppComponent } from '../app/app.component';


// const m = angular.module('heroApp', []);
//
// m.controller('MainCtrl', function () {
//     this.message = 'Hello world!';
// });

// m.directive('appRoot', downgradeComponent({component: AppComponent}));
// angular.bootstrap(document.body, ['heroApp'], {strictDi: true});
 console.dir('boostrapped');
const m = angular.module('heroApp', []);
m.controller('MainCtrl', function () {
    this.message = 'Hello world!';
});