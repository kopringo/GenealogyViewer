"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_home_1 = require('./app.home');
var app_personlist_1 = require('./app.personlist');
var app_person_1 = require('./app.person');
var app_options_1 = require('./app.options');
var app_person_details_1 = require("./app.person-details");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: app_home_1.AppHome },
                    { path: 'person-list', component: app_personlist_1.AppPersonList },
                    { path: 'person-list/:id', component: app_person_1.AppPerson },
                    { path: 'options', component: app_options_1.AppOptions }
                ])],
            declarations: [app_component_1.AppComponent, app_home_1.AppHome, app_personlist_1.AppPersonList, app_person_1.AppPerson, app_options_1.AppOptions, app_person_details_1.AppPersonDetails],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map