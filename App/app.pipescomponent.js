"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppPipesComponent = /** @class */ (function () {
    function AppPipesComponent() {
        this.name = "This is from String pipes.";
        this.amount = 100.234;
        this.todayDate = new Date();
    }
    AppPipesComponent = __decorate([
        core_1.Component({
            selector: 'my-pipes',
            template: "\n        <h3>Pipes </h3>\n        <h2>String</h2>\n        <p>{{name}}</p>\n        <p>Upper case - {{name|uppercase}}</p>\n        <p>Lower case - {{name|lowercase}}</p>\n        <p>Title case - {{name|titlecase}}</p>\n        <h2>DateTime</h2>\n        <p>{{todayDate}}</p>\n        <p>With date format - {{todayDate|date}}</p>\n        <p>With date format - {{todayDate|date:\"dd/mm/yy\"}}</p>\n        <p>With date format - {{todayDate|date:\"dd/MMM/yyyy\"|lowercase}}</p>\n\n        <h2>Number</h2>\n            <p>{{amount}}</p>\n            <p>{{amount|currency}}</p>\n            <p>{{amount|currency:'INR'}}</p>\n            <p>{{amount|percent}}</p>\n            <p>{{amount|number}}</p>\n            <p>{{amount|number:'3.1-2'}}</p>\n            <p>{{amount|number:'9.1-2'}}</p>\n\n    "
        })
    ], AppPipesComponent);
    return AppPipesComponent;
}());
exports.AppPipesComponent = AppPipesComponent;
