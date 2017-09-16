"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StyleOneComponent = /** @class */ (function () {
    function StyleOneComponent() {
    }
    StyleOneComponent = __decorate([
        core_1.Component({
            selector: 'my-styleone',
            encapsulation: core_1.ViewEncapsulation.Native,
            styles: ['.css1 {color:yellow}'],
            template: "\n        <span class=\"css1\">Style one</span>\n    ",
        })
    ], StyleOneComponent);
    return StyleOneComponent;
}());
exports.StyleOneComponent = StyleOneComponent;
var StyleTwoComponent = /** @class */ (function () {
    function StyleTwoComponent() {
    }
    StyleTwoComponent = __decorate([
        core_1.Component({
            selector: 'my-styletwo',
            encapsulation: core_1.ViewEncapsulation.Native,
            styles: ['.css1 {color:blue}'],
            template: "\n        <span class=\"css1\">Style two</span>\n    ",
        })
    ], StyleTwoComponent);
    return StyleTwoComponent;
}());
exports.StyleTwoComponent = StyleTwoComponent;
