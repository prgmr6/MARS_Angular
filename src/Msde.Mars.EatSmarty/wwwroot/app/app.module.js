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
require("./extensions/rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var template_component_1 = require("./components/template/template.component");
var data_component_1 = require("./components/data/data.component");
var datagraph_component_1 = require("./components/data/datagraph.component");
var news_component_1 = require("./components/news/news.component");
var apply_component_1 = require("./components/apply/apply.component");
var maintexteditor_component_1 = require("./editor/maintexteditor.component");
var maingrapheditor_component_1 = require("./editor/maingrapheditor.component");
var linkseditor_component_1 = require("./editor/linkseditor.component");
var toppageeditor_component_1 = require("./editor/toppageeditor.component");
var imageeditor_component_1 = require("./editor/imageeditor.component");
var addlinkeditor_component_1 = require("./editor/addlinkeditor.component");
var addcrumbeditor_component_1 = require("./editor/addcrumbeditor.component");
var maintextaddeditor_component_1 = require("./editor/maintextaddeditor.component");
var grapheditor_component_1 = require("./editor/grapheditor.component");
var breadcrumbeditor_component_1 = require("./editor/breadcrumbeditor.component");
var homecarouseleditor_component_1 = require("./editor/homecarouseleditor.component");
var programeditor_component_1 = require("./editor/programeditor.component");
var pagetexttip_directive_1 = require("./directives/pagetexttip.directive");
var pagetip_directive_1 = require("./directives/pagetip.directive");
var linkstip_directive_1 = require("./directives/linkstip.directive");
var breadcrumbtip_directive_1 = require("./directives/breadcrumbtip.directive");
var graphtip_directive_1 = require("./directives/graphtip.directive");
var benefits_directive_1 = require("./directives/benefits.directive");
var program_directive_1 = require("./directives/program.directive");
var slidertip_directive_1 = require("./directives/slidertip.directive");
var header_component_1 = require("./components/header/header.component");
var tab_component_1 = require("./components/tabs/tab.component");
var tabs_component_1 = require("./components/tabs/tabs.component");
var carousel_component_1 = require("./directives/carousel.component");
var homecarousel_component_1 = require("./directives/homecarousel.component");
var slide_component_1 = require("./directives/slide.component");
var homeslide_component_1 = require("./directives/homeslide.component");
//
//  imports: Angular System level include files needed
//  declarations: User created modules used in routing, mainly components.
//  providers:  Angular Modules in use by the application
//  bootstrap:  the first component loaded when application starts, usually the app.component
//
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.AppRoutingModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.Home, template_component_1.Template, data_component_1.Data, datagraph_component_1.DataGraph, apply_component_1.Apply, news_component_1.News, maintexteditor_component_1.MainTextEditorComponent,
            linkseditor_component_1.LinksEditorComponent, toppageeditor_component_1.TopPageEditorComponent, imageeditor_component_1.ImageEditorComponent, addlinkeditor_component_1.AddLinkEditorComponent,
            addcrumbeditor_component_1.AddCrumbEditorComponent, programeditor_component_1.ProgramEditorComponent, maingrapheditor_component_1.MainGraphEditorComponent, grapheditor_component_1.GraphEditorComponent,
            maintextaddeditor_component_1.MainTextAddEditorComponent, breadcrumbeditor_component_1.BreadCrumbEditorComponent, pagetexttip_directive_1.PageTexttip, linkstip_directive_1.Linkstip, pagetip_directive_1.Pagetip,
            breadcrumbtip_directive_1.BreadCrumbtip, benefits_directive_1.Benefitstip, program_directive_1.Programtip, slidertip_directive_1.Slidertip, graphtip_directive_1.Graphtip, header_component_1.HeaderComponent, tab_component_1.Tab, tabs_component_1.Tabs,
            carousel_component_1.CarouselComponent,
            homecarousel_component_1.HomeCarouselComponent, slide_component_1.SlideComponent, homeslide_component_1.HomeSlideComponent, homecarouseleditor_component_1.HomeCarouselEditorComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map