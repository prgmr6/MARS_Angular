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
var mars_breadcrumbs_model_1 = require("../models/mars_breadcrumbs.model");
var configuration_service_1 = require("../service/configuration.service");
var BreadCrumbtip = (function () {
    function BreadCrumbtip(config) {
        this.config = config;
    }
    BreadCrumbtip.prototype.ngAfterViewInit = function () {
    };
    BreadCrumbtip.prototype.show = function () {
        if (this.crumbs !== undefined && this.config.AdminUserLogged()) {
            this.crumbs.isHidden = false;
        }
    };
    BreadCrumbtip.prototype.release = function () {
        this.crumbs.isHidden = true;
    };
    /// Show Editor
    BreadCrumbtip.prototype.showEdit = function () {
        this.crumbs.isEditHidden = false;
    };
    /// Hide Editor
    BreadCrumbtip.prototype.saveEdit = function () {
        this.crumbs.isEditHidden = true;
    };
    /// Hide Editor
    BreadCrumbtip.prototype.cancelEdit = function () {
        this.crumbs.isEditHidden = true;
    };
    return BreadCrumbtip;
}());
__decorate([
    core_1.Input('breadcrumbtooltip'),
    __metadata("design:type", mars_breadcrumbs_model_1.MARS_Breadcrumbs)
], BreadCrumbtip.prototype, "crumbs", void 0);
BreadCrumbtip = __decorate([
    core_1.Directive({
        selector: '[breadcrumbtooltip]',
        host: {
            '(mouseover)': 'show()',
            '(mouseout)': 'release()'
        }
    }),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
], BreadCrumbtip);
exports.BreadCrumbtip = BreadCrumbtip;
//# sourceMappingURL=breadcrumbtip.directive.js.map