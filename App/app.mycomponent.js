"use strict";
//app.mycomponent.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Decoretor 
var core_1 = require("@angular/core");
var AppMyComponent = /** @class */ (function () {
    function AppMyComponent() {
    }
    AppMyComponent.prototype.ChangeData = function () {
        this.message = new Date();
    };
    AppMyComponent = __decorate([
        core_1.Component({
            selector: 'myapp',
            template: "\n    <h1>My App</h1>\n    <h3> Binding</h3>\n    <h4>One Way : Source to HTML (Property Binding)</h4>\n    <div>{{message}}</div>                      <!-- Interpolition style -->\n    <div bind-innerHTML=\"message\"></div>        <!-- Bind style can be depreced in new versions -->\n    <div [innerHTML]=\"message\"></div>           <!-- Box style -->\n\n    <h4> Event Binding : HTML to source </h4>\n    <button on-click=\"ChangeData()\">Click 1</button>\n    <button (click)=\"ChangeData()\">Click 2</button>     <!-- Bannana Style -->\n\n    <h4>Two way binding : Source to HTML / HTML to Source</h4>\n\n    <input type=\"text\" bindon-ngModel=\"message\"/>\n    <input type=\"text\" [(ngModel)]=\"message\"/>\n\n\n\n    <my-counter></my-counter>\n\n    \n    <h1> Emulated Component </h1>\n    <my-styleone></my-styleone>\n    <my-styletwo></my-styletwo>\n    "
        })
    ], AppMyComponent);
    return AppMyComponent;
}());
exports.AppMyComponent = AppMyComponent;
