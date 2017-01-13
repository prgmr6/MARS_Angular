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
// imports
var configuration_service_1 = require("./service/configuration.service");
var pub_sub_service_1 = require("./service/pub-sub.service");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(config, pubsub) {
        this.config = config;
        this.pubsub = pubsub;
        this.history = [];
        this.title = 'Eat Smart Maryland';
        google.charts.load('current', { packages: ['corechart', 'bar', 'table'] });
        //config.load();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        //this.titleService.setTitle(newTitle);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/main.view.html',
        providers: [configuration_service_1.ConfigurationService, pub_sub_service_1.PubSubService]
    }),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService, pub_sub_service_1.PubSubService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map