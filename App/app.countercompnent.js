"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Decoretor 
var core_1 = require("@angular/core");
var AppCounterComponent = /** @class */ (function () {
    function AppCounterComponent() {
        this.colorValue = "red";
        this.result = 0;
    }
    AppCounterComponent.prototype.Increment = function () {
        this.result++;
    };
    AppCounterComponent.prototype.Decrement = function () {
        this.result--;
    };
    AppCounterComponent = __decorate([
        core_1.Component({
            selector: 'my-counter',
            encapsulation: core_1.ViewEncapsulation.Emulated,
            //styles:['css1 {color:red}'],
            template: "\n        <br />\n        <br />\n        <h1>Sample program for counter</h1>\n        <button [disabled] = \"result<=0\" (click)=\"Decrement()\">-</button>\n        <input type=\"text\" [(ngModel)]=\"result\"/>\n        <button [disabled] = \"result>=10\" (click)=\"Increment()\">+</button>\n\n        <h3> Style Binding</h3>\n        <span [ngStyle]=\"{color:colorValue}\"> Style one </span>\n        <span [style.color]=\"colorValue\"> Style Two</span>\n        <span bind-style.color=\"colorValue\"> Style Three</span>\n\n        <input type=\"text\" [(ngModel)]=\"colorValue\" />\n        <h3> Class (css) Binding </h3>\n        <span class=\"myClass\">Applying custom css class from index.html</span>\n        \n    "
        })
    ], AppCounterComponent);
    return AppCounterComponent;
}());
exports.AppCounterComponent = AppCounterComponent;
