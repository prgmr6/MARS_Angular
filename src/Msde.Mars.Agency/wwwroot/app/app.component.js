System.register(["angular2/core", "angular2/router", "./home/home.component", "./footer/footer.component", "./header/header.component", "./menu/menu.component"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, home_component_1, footer_component_1, header_component_1, menu_component_1, MainComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            }
        ],
        execute: function () {
            //---------Export This Component Class---------
            MainComponent = (function () {
                function MainComponent() {
                    this.title = 'Eat Smart Maryland';
                }
                return MainComponent;
            }());
            MainComponent = __decorate([
                core_1.Component({
                    selector: 'spa-app',
                    directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.FooterComponent, header_component_1.HeaderComponent, menu_component_1.MenuComponent],
                    templateUrl: 'app/main.view.html',
                    providers: [
                        router_1.ROUTER_PROVIDERS
                    ]
                }),
                router_1.RouteConfig([
                    { path: '/', name: 'Home', component: home_component_1.Home, useAsDefault: true },
                ]),
                __metadata("design:paramtypes", [])
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map