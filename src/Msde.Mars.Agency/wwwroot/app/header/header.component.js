System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, HeaderComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            //---------Export This Component Class---------
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngAfterViewInit = function () {
                    $(this.marsmodal.nativeElement).draggable({
                        handle: ".modal-header"
                    });
                    $(this.adminmodal.nativeElement).draggable({
                        handle: ".modal-header"
                    });
                    $(this.contactmodal.nativeElement).draggable({
                        handle: ".modal-header"
                    });
                };
                HeaderComponent.prototype.marslogin = function (event) {
                    event.preventDefault();
                    $(this.marserror.nativeElement).removeClass("hidden");
                };
                HeaderComponent.prototype.adminlogin = function (event) {
                    event.preventDefault();
                    $(this.adminerror.nativeElement).removeClass("hidden");
                };
                HeaderComponent.prototype.marsclose = function (event) {
                    $(this.marserror.nativeElement).addClass("hidden");
                };
                HeaderComponent.prototype.adminclose = function (event) {
                    $(this.adminerror.nativeElement).addClass("hidden");
                };
                return HeaderComponent;
            }());
            __decorate([
                core_1.ViewChild('marsmodal'),
                __metadata("design:type", core_1.ElementRef)
            ], HeaderComponent.prototype, "marsmodal", void 0);
            __decorate([
                core_1.ViewChild('adminmodal'),
                __metadata("design:type", core_1.ElementRef)
            ], HeaderComponent.prototype, "adminmodal", void 0);
            __decorate([
                core_1.ViewChild('contactmodal'),
                __metadata("design:type", core_1.ElementRef)
            ], HeaderComponent.prototype, "contactmodal", void 0);
            __decorate([
                core_1.ViewChild('marserror'),
                __metadata("design:type", core_1.ElementRef)
            ], HeaderComponent.prototype, "marserror", void 0);
            __decorate([
                core_1.ViewChild('adminerror'),
                __metadata("design:type", core_1.ElementRef)
            ], HeaderComponent.prototype, "adminerror", void 0);
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'headerlist',
                    templateUrl: "app/Header/header.view.html",
                    styleUrls: ['css/bootstrap.css']
                }),
                __metadata("design:paramtypes", [])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    };
});
//# sourceMappingURL=header.component.js.map