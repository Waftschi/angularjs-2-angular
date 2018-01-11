import * from 'angular';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { HeroDetailComponent } from './hero-detail.component';


const m = angular.module('heroApp', []);
m.controller('MainCtrl', function () {
    this.message = 'Hello world!';
});

m.directive('appRoot', downgradeComponent({component: AppComponent}));
m.directive(
    'heroDetail',
    downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory
);



@NgModule({
  imports:      [ BrowserModule, UpgradeModule ],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ],
    entryComponents: [
        HeroDetailComponent
    ]
})
export class AppModule { }

