"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_mycomponent_1 = require("./app.mycomponent");
var app_countercompnent_1 = require("./app.countercompnent");
var app_stylecomponent_1 = require("./app.stylecomponent");
var app_conditioncomponent_1 = require("./app.conditioncomponent");
var app_pipescomponent_1 = require("./app.pipescomponent");
var MyModule = /** @class */ (function () {
    function MyModule() {
    }
    MyModule = __decorate([
        core_1.NgModule({
            declarations: [app_mycomponent_1.AppMyComponent, app_countercompnent_1.AppCounterComponent, app_stylecomponent_1.StyleOneComponent, app_stylecomponent_1.StyleTwoComponent, app_conditioncomponent_1.AppConditionComponent, app_pipescomponent_1.AppPipesComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            bootstrap: [app_mycomponent_1.AppMyComponent]
        })
    ], MyModule);
    return MyModule;
}());
exports.MyModule = MyModule;
