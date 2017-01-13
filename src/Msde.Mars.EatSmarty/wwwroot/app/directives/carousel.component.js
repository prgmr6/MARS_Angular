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
var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction = exports.Direction || (exports.Direction = {}));
// todo:
// (ng-swipe-right)="prev()" (ng-swipe-left)="next()"
/**
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be "disabled" class on the nav buttons.
 */
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.slides = [];
        this.destroyed = false;
    }
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBS4", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    CarouselComponent.prototype.select = function (nextSlide, direction) {
        if (direction === void 0) { direction = Direction.UNKNOWN; }
        var nextIndex = nextSlide.index;
        if (direction === Direction.UNKNOWN) {
            direction = nextIndex > this.getCurrentIndex()
                ? Direction.NEXT
                : Direction.PREV;
        }
        // Prevent this user-triggered transition from occurring if there is
        // already one in progress
        if (nextSlide && nextSlide !== this.currentSlide) {
            this.goNext(nextSlide, direction);
        }
    };
    CarouselComponent.prototype.play = function () {
        //if (!this.isPlaying) {
        //  this.isPlaying = true;
        //  this.restartTimer();
        //}
    };
    CarouselComponent.prototype.pause = function () {
        //if (!this.noPause) {
        //  this.isPlaying = false;
        //  this.resetTimer();
        //}
    };
    CarouselComponent.prototype.next = function () {
        var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
        //if (newIndex === 0 && this.noWrap) {
        //  this.pause();
        //  return;
        //}
        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    };
    CarouselComponent.prototype.prev = function () {
        var newIndex = this.getCurrentIndex() - 1 < 0
            ? this.slides.length - 1
            : this.getCurrentIndex() - 1;
        //if (this.noWrap && newIndex === this.slides.length - 1) {
        //  this.pause();
        //  return;
        //}
        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    };
    CarouselComponent.prototype.addSlide = function (slide) {
        slide.index = this.slides.length;
        this.slides.push(slide);
        if (this.slides.length === 1 || slide.active) {
            this.select(this.slides[this.slides.length - 1]);
            if (this.slides.length === 1) {
                this.play();
            }
        }
        else {
            slide.active = false;
        }
    };
    CarouselComponent.prototype.removeSlide = function (slide) {
        this.slides.splice(slide.index, 1);
        if (this.slides.length === 0) {
            this.currentSlide = void 0;
            return;
        }
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].index = i;
        }
    };
    CarouselComponent.prototype.goNext = function (slide, direction) {
        if (this.destroyed) {
            return;
        }
        slide.direction = direction;
        slide.active = true;
        if (this.currentSlide) {
            this.currentSlide.direction = direction;
            this.currentSlide.active = false;
        }
        this.currentSlide = slide;
        // every time you change slides, reset the timer
        this.restartTimer();
    };
    CarouselComponent.prototype.getSlideByIndex = function (index) {
        var len = this.slides.length;
        for (var i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
        return void 0;
    };
    CarouselComponent.prototype.getCurrentIndex = function () {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    };
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.next();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    return CarouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "noWrap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "noPause", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "noTransition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], CarouselComponent.prototype, "interval", null);
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel',
        template: "\n    <div class=\"carousel slide\" style=\"position:relative;\">\n        <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1\">\n            <li *ngFor=\"let slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\" style=\"cursor:pointer;\"></li>\n        </ol>\n        <div class=\"carousel-inner\" style=\"overflow:hidden;\">\n            <ng-content></ng-content>\n        </div>\n        <div style=\"position:absolute;top:45%;left:-45px;\">\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Previous\" (click)=\"prev()\">\n                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n        <div style=\"position:absolute;top:45%;right:-45px;\">\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Next\" (click)=\"next()\">\n                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map