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
var mars_page_service_1 = require("../../service/mars_page.service");
var MarsMain = (function () {
    //Constructor
    function MarsMain(pageService) {
        this.pageService = pageService;
        this.addmessage = "Added New Mars";
        this.listmessage = "Retrieved All Mars";
        this.getMainText();
        this.getTopPage();
    }
    MarsMain.prototype.ngAfterViewInit = function () {
        this.resmessage = "";
        this.editId = 0;
        $(this.mainwrapper.nativeElement).show();
    };
    MarsMain.prototype.getMainText = function () {
    };
    MarsMain.prototype.getTopPage = function () {
    };
    MarsMain.prototype.showEdit = function (e, brief) {
    };
    MarsMain.prototype.showDelete = function (e, brief) {
    };
    MarsMain.prototype.showLinksEdit = function (e, links) {
    };
    MarsMain.prototype.showTopPageEdit = function (e, toppage) {
    };
    MarsMain.prototype.stopRefreshing = function () {
    };
    MarsMain.prototype.reset = function () {
    };
    return MarsMain;
}());
__decorate([
    core_1.ViewChild('mainwrapper'),
    __metadata("design:type", core_1.ElementRef)
], MarsMain.prototype, "mainwrapper", void 0);
MarsMain = __decorate([
    core_1.Component({
        selector: 'Mars-list',
        templateUrl: 'app/templates/detailpage.view.html',
        styleUrls: ['css/bootstrap.css'],
        providers: [mars_page_service_1.MARS_PageService]
    }),
    __metadata("design:paramtypes", [mars_page_service_1.MARS_PageService])
], MarsMain);
exports.MarsMain = MarsMain;
//# sourceMappingURL=mars.component.js.map