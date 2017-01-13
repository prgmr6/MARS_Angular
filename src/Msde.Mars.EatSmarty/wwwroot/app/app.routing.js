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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var template_component_1 = require("./components/template/template.component");
var news_component_1 = require("./components/news/news.component");
var apply_component_1 = require("./components/apply/apply.component");
var data_component_1 = require("./components/data/data.component");
var routes = [
    {
        path: '', redirectTo: 'Home', pathMatch: 'full'
    },
    {
        path: 'Home', component: home_component_1.Home, data: { routeName: "Home" }
    },
    {
        path: 'About', component: template_component_1.Template, data: { routeName: "About" }
    },
    {
        path: 'MealPrograms', component: template_component_1.Template, data: { routeName: "MealPrograms" }
    },
    {
        path: 'About/GeneralInformation', component: template_component_1.Template, data: { routeName: "GeneralInformation" }
    },
    {
        path: 'About/SupportingAcademics', component: template_component_1.Template, data: { routeName: "SupportingAcademics" }
    },
    {
        path: 'About/WhatWeDo', component: template_component_1.Template, data: { routeName: "WhatWeDo" }
    },
    {
        path: 'MealPrograms/SchoolMeals', component: template_component_1.Template, data: { routeName: "SchoolMeals" }
    },
    {
        path: 'MealPrograms/ChildAndAdultCare', component: template_component_1.Template, data: { routeName: "ChildAndAdultCare" }
    },
    {
        path: 'MealPrograms/SummerFoods', component: template_component_1.Template, data: { routeName: "SummerFoods" }
    },
    {
        path: 'MealPrograms/SpecialMilk', component: template_component_1.Template, data: { routeName: "SpecialMilk" }
    },
    {
        path: 'MealPrograms/USDA', component: template_component_1.Template, data: { routeName: "USDA" }
    },
    {
        path: 'MealPrograms/MMFA', component: template_component_1.Template, data: { routeName: "MMFA" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives', component: template_component_1.Template, data: { routeName: "SpecialInitiatives" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives/FarmToSchool', component: template_component_1.Template, data: { routeName: "FarmToSchool" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives/Wellness', component: template_component_1.Template, data: { routeName: "Wellness" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives/Training', component: template_component_1.Template, data: { routeName: "Training" }
    },
    {
        path: 'Data', component: data_component_1.Data, data: { routeName: "Data" }
    },
    {
        path: 'Data/FedFunds', component: template_component_1.Template, data: { routeName: "FedFunds" }
    },
    {
        path: 'Data/SMFunding', component: template_component_1.Template, data: { routeName: "SMFunding" }
    },
    {
        path: 'Data/SMLunchServed', component: template_component_1.Template, data: { routeName: "SMLunchServed" }
    },
    {
        path: 'Data/SMBKServed', component: template_component_1.Template, data: { routeName: "SMBKServed" }
    },
    {
        path: 'Data/BKvLNTrend', component: template_component_1.Template, data: { routeName: "BKvLNTrend" }
    },
    {
        path: 'Data/BKPartFMElig', component: template_component_1.Template, data: { routeName: "BKPartFMElig" }
    },
    {
        path: 'Data/LNPartFMElig', component: template_component_1.Template, data: { routeName: "LNPartFMElig" }
    },
    {
        path: 'Data/TrendReimburse', component: template_component_1.Template, data: { routeName: "TrendReimburse" }
    },
    {
        path: 'Data/TrendFARMElig', component: template_component_1.Template, data: { routeName: "TrendFARMElig" }
    },
    {
        path: 'Data/MMFAPart', component: template_component_1.Template, data: { routeName: "MMFAPart" }
    },
    {
        path: 'Data/FFVPPart', component: template_component_1.Template, data: { routeName: "FFVPPart" }
    },
    {
        path: 'Apply', component: apply_component_1.Apply, data: { routeName: "Data" }
    },
    {
        path: 'News', component: news_component_1.News, data: { routeName: "Data" }
    },
    {
        path: 'MARS', component: home_component_1.Home, data: { routeName: "Data" }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map