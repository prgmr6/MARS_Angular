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
//---------Import Angular2------------
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/Rx");
var mars_page_service_1 = require("../../service/mars_page.service");
var configuration_service_1 = require("../../service/configuration.service");
var frontpage_model_1 = require("../../models/frontpage.model");
var dataDashboards_model_1 = require("../../models/dataDashboards.model");
var Data = (function () {
    //Constructor
    function Data(_router, config) {
        this._router = _router;
        this.config = config;
        //private NextPhotoInterval: number = 5000;
        //private loopSlides: boolean = true;
        this.slidesLoaded = false;
        this.front = new frontpage_model_1.FrontPage();
        this.data = new dataDashboards_model_1.DataDashboards();
        this.front.BenefitsisHidden = true;
        this.front.BenefitsisEditHidden = true;
        this.front.ProgramisHidden = true;
        this.front.ProgramisEditHidden = true;
        this.front.SliderisHidden = true;
        this.front.SliderisEditHidden = true;
        this.loadFront();
        this.loadData();
    }
    Data.prototype.loadFront = function () {
        this.front.pagename = "DATA - DASHBOARDS";
    };
    ;
    Data.prototype.loadData = function () {
        this.data.id = 1;
        this.data.reportname = "This is test";
        this.data.reporttitle = "Test Report";
        this.data.reportlink = "#/TestReport";
    };
    return Data;
}());
__decorate([
    core_1.ViewChild('flexslider'),
    __metadata("design:type", core_1.ElementRef)
], Data.prototype, "flex", void 0);
__decorate([
    core_1.ViewChild('body'),
    __metadata("design:type", core_1.ElementRef)
], Data.prototype, "body", void 0);
__decorate([
    core_1.ViewChild('sidrmain'),
    __metadata("design:type", core_1.ElementRef)
], Data.prototype, "sidr", void 0);
__decorate([
    core_1.ViewChild('tabs'),
    __metadata("design:type", core_1.ElementRef)
], Data.prototype, "tabs", void 0);
Data = __decorate([
    core_1.Component({
        selector: 'data-list',
        templateUrl: 'app/templates/data.view.html',
        styleUrls: ['css/bootstrap.css'],
        providers: [mars_page_service_1.MARS_PageService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        configuration_service_1.ConfigurationService])
], Data);
exports.Data = Data;
//# sourceMappingURL=data.component.js.map