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
//---------Import External Components---------
var mars_page_model_1 = require("../../models/mars_page.model");
var mars_page_service_1 = require("../../service/mars_page.service");
var configuration_service_1 = require("../../service/configuration.service");
var News = (function () {
    //Constructor
    function News(pageService, config, route, router) {
        this.pageService = pageService;
        this.config = config;
        this.route = route;
        this.router = router;
        this.confirmed = false;
        this.announced = false;
        this.maintext = new mars_page_model_1.MARS_Page();
        this.editId = this.route.snapshot.data["routeName"];
    }
    News.prototype.ngAfterViewInit = function () {
        this.resmessage = "";
        this.editId = 0;
        $(this.mainwrapper.nativeElement).css("background-color", "#ffffff");
        $(this.mainwrapper.nativeElement).show();
    };
    News.prototype.ngOnInit = function () {
        this.setData(true);
    };
    News.prototype.setData = function (t) {
        var _this = this;
        this.pageService
            .getById(this.editId)
            .then(function (text) { return _this.maintext = _this.SetDefaults(text); });
    };
    News.prototype.SetDefaults = function (page) {
        for (var _i = 0, _a = page.marS_PageTexts; _i < _a.length; _i++) {
            var text = _a[_i];
            text.isEditHidden = true;
            text.isHidden = true;
        }
        for (var _b = 0, _c = page.marS_Images; _b < _c.length; _b++) {
            var image = _c[_b];
            image.isEditHidden = true;
            image.isHidden = true;
        }
        for (var _d = 0, _e = page.marS_Quicks; _d < _e.length; _d++) {
            var quick = _e[_d];
            quick.isEditHidden = true;
            quick.isHidden = true;
        }
        page.isEditHidden = true;
        page.isHidden = true;
        return page;
    };
    News.prototype.showEdit = function (e, t) {
        t.isEditHidden = false;
    };
    News.prototype.showDelete = function (e, t) {
        e.preventDefault();
        var IsConf = confirm('You are about to delete ' + t.headerText + '. Are you sure?');
        //if (IsConf) {
        //    this.pageService
        //        .delete(t.id)
        //        .then(() => {
        //            this.setData(true);
        //        });
        //}
    };
    News.prototype.reset = function () {
    };
    return News;
}());
__decorate([
    core_1.ViewChild('mainwrapper'),
    __metadata("design:type", core_1.ElementRef)
], News.prototype, "mainwrapper", void 0);
News = __decorate([
    core_1.Component({
        selector: 'news-list',
        templateUrl: 'app/templates/news.view.html',
        styleUrls: ['css/bootstrap.css'],
        providers: [mars_page_service_1.MARS_PageService]
    }),
    __metadata("design:paramtypes", [mars_page_service_1.MARS_PageService,
        configuration_service_1.ConfigurationService,
        router_1.ActivatedRoute,
        router_1.Router])
], News);
exports.News = News;
//# sourceMappingURL=news.component.js.map