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
//---------Import @angular------------
var core_1 = require("@angular/core");
var frontpage_model_1 = require("../models/frontpage.model");
var configuration_service_1 = require("../service/configuration.service");
var Benefitstip = (function () {
    function Benefitstip(config) {
        this.config = config;
    }
    Benefitstip.prototype.ngAfterViewInit = function () {
    };
    Benefitstip.prototype.show = function () {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = false;
        }
    };
    Benefitstip.prototype.release = function () {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = true;
        }
    };
    Benefitstip.prototype.showEdit = function () {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = false;
        }
    };
    Benefitstip.prototype.saveEdit = function () {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = true;
        }
    };
    Benefitstip.prototype.cancelEdit = function () {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = true;
        }
    };
    return Benefitstip;
}());
__decorate([
    core_1.Input('benefittooltip'),
    __metadata("design:type", frontpage_model_1.FrontPage)
], Benefitstip.prototype, "front", void 0);
Benefitstip = __decorate([
    core_1.Directive({
        selector: '[benefittooltip]',
        host: {
            '(mouseover)': 'show()',
            '(mouseout)': 'release()'
        }
    }),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
], Benefitstip);
exports.Benefitstip = Benefitstip;
//# sourceMappingURL=benefits.directive.js.map