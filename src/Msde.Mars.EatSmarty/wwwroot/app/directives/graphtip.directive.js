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
var mars_report_model_1 = require("../models/mars_report.model");
var configuration_service_1 = require("../service/configuration.service");
var Graphtip = (function () {
    function Graphtip(config) {
        this.config = config;
    }
    Graphtip.prototype.ngAfterViewInit = function () {
    };
    Graphtip.prototype.show = function () {
        if (this.brief !== undefined && this.config.AdminUserLogged()) {
            this.brief.isHidden = false;
        }
    };
    Graphtip.prototype.release = function () {
        this.brief.isHidden = true;
    };
    Graphtip.prototype.showEdit = function () {
        this.brief.isEditHidden = false;
    };
    Graphtip.prototype.saveEdit = function () {
        this.brief.isEditHidden = true;
    };
    Graphtip.prototype.cancelEdit = function () {
        this.brief.isEditHidden = true;
    };
    return Graphtip;
}());
__decorate([
    core_1.Input('graphtooltip'),
    __metadata("design:type", mars_report_model_1.MARS_Reports)
], Graphtip.prototype, "brief", void 0);
Graphtip = __decorate([
    core_1.Directive({
        selector: '[graphtooltip]',
        host: {
            '(mouseover)': 'show()',
            '(mouseout)': 'release()'
        }
    }),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
], Graphtip);
exports.Graphtip = Graphtip;
//# sourceMappingURL=graphtip.directive.js.map