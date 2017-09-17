"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppConditionComponent = /** @class */ (function () {
    function AppConditionComponent() {
        this.ShowOne = true;
        this.ShowTwo = true;
        this.counter = 0;
        this.cars = ['one', 'two', 'three'];
        this.Employee = [
            { 'Name': 'Hardik', 'Address': 'wakad' },
            { 'Name': 'Viral', 'Address': 'wakad' },
            { 'Name': 'Ramesh', 'Address': 'wakad' }
        ];
    }
    AppConditionComponent.prototype.ClickOne = function () {
        this.ShowOne = !this.ShowOne;
    };
    AppConditionComponent.prototype.ClickTwo = function () {
        this.ShowTwo = !this.ShowTwo;
    };
    AppConditionComponent.prototype.ClickNext = function () {
        this.counter++;
    };
    AppConditionComponent = __decorate([
        core_1.Component({
            selector: 'my-condition',
            template: "\n        <h2> Condition </h2>\n        <button (click)=\"ClickOne()\">Click 1</button>\n        \n        <h3>1. If Condition with square bracket</h3>\n        <p [hidden]=\"ShowOne\">1. Say Hi</p>\n\n        <h3>2.If Condition with ngif </h3>\n        <p *ngIf=\"ShowOne\">2. Say Hi<p>\n\n        <h3>3. If Condition with ngif !condition</h3>\n        <p *ngIf=\"ShowOne\">3. Say Hi<p>\n\n        <h3>4. If Condition with ngif ==condition</h3>\n        <p *ngIf=\"ShowOne==true\">4. Say Hi<p>\n\n        <h3>5. If Condition with ngif condition</h3> <!-- use safly can be deprecated -->\n        <p template=\"ngIf ShowOne\"> 5. Say Hi </p>\n\n        <h3>6. If Condition with ng-template tag</h3> <!-- use safly can be deprecated -->\n        <ng-template [ngIf]=\"ShowOne\">6.Say Hi</ng-template>\n\n        <h1> If else</h1>\n        <button (click)=\"ClickTwo()\">Click 2</button>\n\n        <h3>7. If else condition with ifelse condition</h3>\n        <p *ngIf=\"ShowTwo; else e\"> 7. Say Hi </p>\n        <ng-template #e>7. Say Bye.</ng-template>\n\n        <h3>8. 9.  If else condition with template syntax</h3>    \n        <p *ngIf=\"ShowTwo;then thenBlock; else elseBlock\">testtesttest</p>\n        <ng-template #thenBlock>8. Say Hi.</ng-template>\n        <ng-template #elseBlock>9. Say Bye.</ng-template>\n\n        <h3> Condition with switch (using if condition)</h3>\n        <button (click)=\"ClickNext()\" >Click Switch</button>\n        {{counter}}\n\n        <p *ngIf=\"counter==1\">Tab1</p>\n        <p *ngIf=\"counter==2\">Tab2</p>\n        <p *ngIf=\"counter==3\">Tab3</p>\n        <p *ngIf=\"counter\">Tab (Default)</p>\n\n        <h3> Condition with switch </h3>\n        <p [ngSwitch]=\"counter\">\n            <span *ngSwitchCase=\"1\">Tab 1 </span>\n            <span *ngSwitchCase=\"2\">Tab 2 </span>\n            <span *ngSwitchCase=\"3\">Tab 3 </span>\n            <span *ngSwitchDefault>Tab (Default) </span>\n        </p>\n\n        <h3> For loop </h3>\n        {{cars}}\n        <ul *ngFor=\"let car of cars; let i = index;let f=first; let o=odd\">\n            <li>{{i+1}} {{car}} {{f}} {{o}}</li>\n        </ul>\n        <br />\n\n        index, first, last , odd , evern\n\n        <h3> For loop with table format </h3>\n        <table *ngFor=\"let emp of Employee;\">\n            <tr>\n                <td>{{emp.Name}}</td>\n                <td>{{emp.Address}}</td>\n            </tr>\n        </table>\n\n    "
        })
    ], AppConditionComponent);
    return AppConditionComponent;
}());
exports.AppConditionComponent = AppConditionComponent;
