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
var AppPersonList = (function () {
    function AppPersonList() {
        this.mode = 'Observable';
    }
    //constructor (private personService: PersonService) {}
    AppPersonList.prototype.ngOnInit = function () { this.getList(); };
    AppPersonList.prototype.getList = function () {
        return [];
        /*
        this.personService.getList()
                     .subscribe(
                       person_list => this.person_list = person_list,
                       error =>  this.errorMessage = <any>error);
                       */
    };
    AppPersonList = __decorate([
        core_1.Component({
            selector: 'app-person-list',
            template: "\n    <div class=\"row\">\n        <div class=\"col-md-6\">[{{mode}}]\n            <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Who are you looking for?\"/>\n            <br/>\n            \n            <table class=\"table table-condensed\">\n                <thead>\n                    <tr>\n                        <th>Name...</th>\n                        <th>Birth</th>\n                        <th>Dead</th>\n</tr>\n</thead>\n                <tbody>\n                <tr>\n                    <td><a routerLink=\"/person-list/1\" routerLinkActive=\"active\">Micha\u0142</a></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td><a routerLink=\"/person-list/2\" routerLinkActive=\"active\">Franek</a></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                \n                <template ngFor let-item [ngForOf]=\"person_list\" let-i=\"index\" [ngForTrackBy]=\"trackByFn\">\n                \t<tr>\n\t\t                <td><a routerLink=\"/person-list/{{person.id}}\" routerLinkActive=\"active\">{{person.fist_name}}</a></td>\n\t\t                <td></td>\n\t\t                <td></td>\n\t\t            </tr>\n                </template>\n                \n                </tbody>\n            </table>\n        \n        </div>\n        <div class=\"col-md-6\">Tree</div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppPersonList);
    return AppPersonList;
}());
exports.AppPersonList = AppPersonList;
//# sourceMappingURL=app.personlist.js.map