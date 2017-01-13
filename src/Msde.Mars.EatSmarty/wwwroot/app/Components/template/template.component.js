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
/// <reference path="../../models/graph.interface.ts" />
//---------Import Angular2------------
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/Rx");
//---------Import Models---------
var mars_page_model_1 = require("../../models/mars_page.model");
//---------Import Services---------
var mars_page_service_1 = require("../../service/mars_page.service");
var mars_pagetext_service_1 = require("../../service/mars_pagetext.service");
var mars_quicklinks_service_1 = require("../../service/mars_quicklinks.service");
var report_service_1 = require("../../service/report.service");
var configuration_service_1 = require("../../service/configuration.service");
var pub_sub_service_1 = require("../../service/pub-sub.service");
var Template = (function () {
    function Template(pageService, pagetextService, pageQuickLinks, reportService, config, route, router, pubSubService) {
        this.pageService = pageService;
        this.pagetextService = pagetextService;
        this.pageQuickLinks = pageQuickLinks;
        this.reportService = reportService;
        this.config = config;
        this.route = route;
        this.router = router;
        this.pubSubService = pubSubService;
        this.confirmed = false;
        this.announced = false;
        this.LinksSubscription = null;
        this.PageTextSubscription = null;
        this.GraphSubscription = null;
        this.graphsLoaded = false;
        this.maintext = new mars_page_model_1.MARS_Page();
        this.editId = this.route.snapshot.data["routeName"];
    }
    Template.prototype.ngAfterViewInit = function () {
        this.resmessage = "";
        $(this.mainwrapper.nativeElement).css("background-color", "#ffffff");
        $(this.mainwrapper.nativeElement).show();
    };
    Template.prototype.ngAfterViewChecked = function () {
        if (document.getElementsByClassName("chart_div").length > 0 && this.graphsLoaded == false) {
            this.chart = this.reportService.createBarChart(document.getElementsByClassName('chart_div')[0]);
            if (document.getElementsByClassName('chart_table').length > 0) {
                this.table = this.reportService.createTable(document.getElementsByClassName('chart_table')[0]);
                this.data[0].TableData.setCell(6, 0, '15', this.data[0].TableData.getValue(6, 0), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(6, 1, '15', this.data[0].TableData.getValue(6, 1), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(6, 2, '15', this.data[0].TableData.getValue(6, 2), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(7, 0, '15', this.data[0].TableData.getValue(7, 0), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(7, 1, '15', this.data[0].TableData.getValue(7, 1), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(7, 2, '15', this.data[0].TableData.getValue(7, 2), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(8, 0, '15', this.data[0].TableData.getValue(8, 0), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(8, 1, '15', this.data[0].TableData.getValue(8, 1), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(8, 2, '15', this.data[0].TableData.getValue(8, 2), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].isAddHidden = true;
                this.data[0].isEditHidden = true;
                this.data[0].isHidden = true;
                var formatter = new google.visualization.NumberFormat({
                    prefix: '$', negativeColor: 'red', negativeParens: true
                });
                formatter.format(this.data[0].GraphData, 1);
                formatter.format(this.data[0].TableData, 1);
                this.chart.draw(this.data[0].GraphData, this.reportService.graph.options);
                this.table.draw(this.data[0].TableData, this.reportService.graph.tableOptions);
            }
            ;
            this.graphsLoaded = true;
        }
        ;
    };
    Template.prototype.ngOnInit = function () {
        var _this = this;
        this.setData(true);
        this.LinksSubscription = this.pubSubService.LinksStream.subscribe(function (q) { return _this.processLinks(q); });
        this.PageTextSubscription =
            this.pubSubService.PageTextStream.subscribe(function (pt) { return _this.processPageText(pt); });
        this.GraphSubscription = this.pubSubService.GraphStream.subscribe(function (g) { return _this.processGraphs(g); });
    };
    Template.prototype.ngOnDestroy = function () {
        this.stopProcessing();
    };
    Template.prototype.GotoApply = function () {
        this.router.navigate(["Apply"]);
    };
    Template.prototype.processLinks = function (q) {
        this.maintext.marS_Quicks = q;
    };
    Template.prototype.processPageText = function (pt) {
        this.maintext.marS_PageTexts = pt;
    };
    Template.prototype.processGraphs = function (g) {
    };
    Template.prototype.stopProcessing = function () {
        this.LinksSubscription.unsubscribe();
    };
    Template.prototype.setData = function (t) {
        var _this = this;
        this.editId = this.route.snapshot.data["routeName"];
        this.pageService
            .getById(this.editId)
            .then(function (text) { return _this.maintext = _this.pageService.setDefaults(text); });
        this.reportService
            .getByID(this.editId)
            .then(function (text) { return _this.getGraphData(text); });
    };
    Template.prototype.getGraphData = function (data) {
        switch (this.editId) {
            case "FedFunds":
                this.data = this.reportService.CreateGraphData(data, this.editId);
                break;
            case "SMFunding":
                this.data = this.reportService.CreateSMFundingGraph(data);
                break;
            case "SMLunchServed":
                this.data = this.reportService.CreateSMLunchServedGraph(data);
                break;
            case "SMBKServed":
                this.data = this.reportService.CreateSMBKServedGraph(data);
                break;
            case "BKvLNTrend":
                this.data = this.reportService.CreateBKvLNTrendGraph(data);
                break;
            case "BKPartFMElig":
                this.data = this.reportService.CreateBKPartFMEligGraph(data);
                break;
            case "LNPartFMElig":
                this.data = this.reportService.CreateLNPartFMEligGraph(data);
                break;
            case "TrendReimburse":
                this.data = this.reportService.CreateTrendReimburseGraph(data);
                break;
            case "TrendFARMElig":
                this.data = this.reportService.CreateTrendFARMEligGraph(data);
                break;
            case "MMFAPart":
                this.data = this.reportService.CreateMMFAPartGraph(data);
                break;
            case "FFVPPart":
                this.data = this.reportService.CreateFFVPPartGraph(data);
                break;
        }
        ;
        this.graphsLoaded = false;
    };
    Template.prototype.setDefaultQuickLinks = function (text) {
        text.isEditHidden = true;
        text.isHidden = true;
        // need to turn it into an Array
        var quicks = new Array();
        quicks[0] = text;
        return quicks;
    };
    Template.prototype.showEdit = function (e, t) {
        t.isEditHidden = false;
    };
    Template.prototype.createReports = function (e, t) {
        this.reportService.CreateReports(t);
    };
    Template.prototype.refreshGraph = function (e, t) {
        t.isEditHidden = false;
    };
    Template.prototype.publishReport = function (e, t, status) {
        t.status = status;
        var displayDate = new Date().toLocaleDateString();
        var timeDate = new Date().toLocaleTimeString();
        this.reportService
            .update(t)
            .then(function (g) { return t.date = displayDate + " " + timeDate; });
    };
    Template.prototype.UpdatePage = function ($event, t) {
        switch ($event) {
            case "pagetext":
                this.setData(true);
                break;
            case "links":
                this.setData(true);
                break;
            default: this.setData(true);
        }
    };
    Template.prototype.showAddEdit = function (e, t) {
        t.isAddTextHidden = false;
    };
    Template.prototype.textDown = function (e, t) {
        var _this = this;
        e.preventDefault();
        var i = 1;
        for (var _i = 0, _a = this.maintext.marS_PageTexts; _i < _a.length; _i++) {
            var text = _a[_i];
            if (text.id == t.id) {
                if (i == this.maintext.marS_PageTexts.length) {
                    //Its already at the bottom
                    return;
                }
                else {
                    var newpage = i - 1;
                    var oldpage = i;
                    var newText = this.maintext.marS_PageTexts[newpage].supportingText;
                    var newheader = this.maintext.marS_PageTexts[newpage].headerText;
                    var oldText = this.maintext.marS_PageTexts[oldpage].supportingText;
                    var oldheader = this.maintext.marS_PageTexts[oldpage].headerText;
                    this.maintext.marS_PageTexts[newpage].headerText = oldheader;
                    this.maintext.marS_PageTexts[newpage].supportingText = oldText;
                    this.maintext.marS_PageTexts[oldpage].headerText = newheader;
                    this.maintext.marS_PageTexts[oldpage].supportingText = newText;
                    this.pagetextService
                        .update(this.maintext.marS_PageTexts[newpage])
                        .then(function () {
                        _this.pagetextService
                            .update(_this.maintext.marS_PageTexts[oldpage])
                            .then(function () {
                            _this.setData(true);
                        });
                    });
                }
            }
            i = i + 1;
        }
    };
    Template.prototype.textUp = function (e, t) {
        var _this = this;
        e.preventDefault();
        var i = 1;
        for (var _i = 0, _a = this.maintext.marS_PageTexts; _i < _a.length; _i++) {
            var text = _a[_i];
            if (text.id == t.id) {
                if (i == 1) {
                    //Its already at the top
                    return;
                }
                else {
                    var newpage = i - 1;
                    var oldpage = i - 2;
                    var newText = this.maintext.marS_PageTexts[newpage].supportingText;
                    var newheader = this.maintext.marS_PageTexts[newpage].headerText;
                    var oldText = this.maintext.marS_PageTexts[oldpage].supportingText;
                    var oldheader = this.maintext.marS_PageTexts[oldpage].headerText;
                    this.maintext.marS_PageTexts[newpage].headerText = oldheader;
                    this.maintext.marS_PageTexts[newpage].supportingText = oldText;
                    this.maintext.marS_PageTexts[oldpage].headerText = newheader;
                    this.maintext.marS_PageTexts[oldpage].supportingText = newText;
                    this.pagetextService
                        .update(this.maintext.marS_PageTexts[newpage])
                        .then(function () {
                        _this.pagetextService
                            .update(_this.maintext.marS_PageTexts[oldpage])
                            .then(function () {
                            _this.setData(true);
                        });
                    });
                }
            }
            i = i + 1;
        }
    };
    Template.prototype.textDelete = function (e, t) {
        var _this = this;
        e.preventDefault();
        this.pagetextService
            .delete(t.id.toString())
            .then(function (response) {
            _this.setData(true);
        });
    };
    Template.prototype.changeYear = function (e) {
        var _this = this;
        this.reportService.graph.year = e.target.value;
        this.reportService
            .changeByID(this.editId)
            .then(function (text) { return _this.getGraphData(text); });
    };
    return Template;
}());
__decorate([
    core_1.ViewChild('mainwrapper'),
    __metadata("design:type", core_1.ElementRef)
], Template.prototype, "mainwrapper", void 0);
__decorate([
    core_1.ViewChild('briefText'),
    __metadata("design:type", core_1.ElementRef)
], Template.prototype, "toptext", void 0);
Template = __decorate([
    core_1.Component({
        selector: 'Template-list',
        templateUrl: 'app/templates/detailpage.view.html',
        styleUrls: ['css/bootstrap.css'],
        providers: [report_service_1.MARS_ReportService, mars_page_service_1.MARS_PageService, mars_pagetext_service_1.MARS_PagetextService, mars_quicklinks_service_1.MARS_QuickLinksService]
    }),
    __metadata("design:paramtypes", [mars_page_service_1.MARS_PageService,
        mars_pagetext_service_1.MARS_PagetextService,
        mars_quicklinks_service_1.MARS_QuickLinksService,
        report_service_1.MARS_ReportService,
        configuration_service_1.ConfigurationService,
        router_1.ActivatedRoute,
        router_1.Router,
        pub_sub_service_1.PubSubService])
], Template);
exports.Template = Template;
//# sourceMappingURL=template.component.js.map