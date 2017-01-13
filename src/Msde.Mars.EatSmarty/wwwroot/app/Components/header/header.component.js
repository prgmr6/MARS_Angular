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
//---------Import External Components---------
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var user_class_1 = require("../mars/user.class");
var claim_class_1 = require("../mars/claim.class");
var loginuser_class_1 = require("../mars/loginuser.class");
var configuration_service_1 = require("../../service/configuration.service");
var login_service_1 = require("../../service/login.service");
var changepasswordviewmodel_model_1 = require("../../models/changepasswordviewmodel.model");
var HeaderComponent = (function () {
    function HeaderComponent(_router, _http, config, loginService) {
        this._router = _router;
        this._http = _http;
        this.config = config;
        this.loginService = loginService;
        //public login: LoginUser;
        this.showForgot = false;
        this.showChange = false;
        this.modalMessage = "";
        this.showForgot = false;
        this.user = new user_class_1.User("", "", "", "", null, false);
        this.login = new loginuser_class_1.LoginUser("", "", "", "");
        this.forgot = new loginuser_class_1.LoginUser("", "", "", "");
        this.change = new changepasswordviewmodel_model_1.ChangePasswordViewModel();
        if (localStorage.getItem("application") == "EatSmart") {
            this.user.name = localStorage.getItem("userName");
            this.user.firstname = localStorage.getItem("firstName");
            this.user.lastname = localStorage.getItem("lastName");
            this.user.email = localStorage.getItem("email");
            var claim = new claim_class_1.Claim("Eat Smart Admin", "Admin");
            this.user.claims = new Array();
            this.user.claims[0] = claim;
            this.user.IsAdmin = true;
            this.config.User(this.user);
        }
        else {
            this.user.name = "";
            this.user.firstname = "";
            this.user.lastname = "";
            this.user.email = "";
            this.user.claims = new Array();
            this.config.ClearUser();
        }
    }
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $(this.profilepopup.nativeElement).draggable({
            handle: ".modal-header"
        });
        $(this.adminmodal.nativeElement).draggable({
            handle: ".modal-header"
        });
        $(this.contactmodal.nativeElement).draggable({
            handle: ".modal-header"
        });
    };
    HeaderComponent.prototype.eventHandler = function (event, ul) {
        if (event.key == "Enter") {
            this.adminlogin(event, ul);
        }
    };
    HeaderComponent.prototype.adminlogout = function (event) {
        localStorage.setItem('access_token', '');
        localStorage.setItem('application', '');
        localStorage.setItem('expires_in', '');
        localStorage.setItem('token_type', '');
        localStorage.setItem('userName', '');
        localStorage.setItem('firstName', '');
        localStorage.setItem('lastName', '');
        localStorage.setItem('email', '');
        this.user.name = '';
        this.user.firstname = '';
        this.user.lastname = '';
        this.user.email = '';
        this.user.claims = new Array();
        this.config.ClearUser();
        $(this.profilepopup.nativeElement).toggle();
    };
    HeaderComponent.prototype.marslink = function (event) {
        event.preventDefault();
        window.location.href = 'http://localhost:5014/';
    };
    HeaderComponent.prototype.adminlogin = function (event, ul) {
        var _this = this;
        var url = "http://localhost:63345/token";
        var body = "username=" + this.login.username + "&password=" + this.login.password;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post(url, body, options).subscribe(function (response) {
            var getToken = JSON.parse(window.atob(response.json().access_token.split(".")[1]));
            localStorage.setItem('access_token', response.json().access_token);
            localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('token_type', response.json().token_type);
            localStorage.setItem('userName', response.json().userName);
            //this._router.navigate(['MARS']);
            localStorage.setItem('access_token', 'ad9g8ads0g89das809das8g90d9g8das08g0a8g0das89g0as');
            localStorage.setItem('application', 'EatSmart');
            localStorage.setItem('expires_in', '10/18/2016');
            localStorage.setItem('token_type', 'password');
            localStorage.setItem('userName', 'Randal Wilcox');
            localStorage.setItem('firstName', 'Randal');
            localStorage.setItem('lastName', 'Wilcox');
            localStorage.setItem('email', ul.username);
            _this.user.name = 'Randal Wilcox';
            _this.user.firstname = 'Randal';
            _this.user.lastname = 'Wilcox';
            _this.user.email = ul.username;
            var claim = new claim_class_1.Claim("Eat Smart Admin", "Admin");
            _this.user.claims = new Array();
            _this.user.claims[0] = claim;
            _this.config.User(_this.user);
            // show errors when call is going through correctly
            $(_this.adminerror.nativeElement).addClass("hidden");
            $(_this.adminmodal.nativeElement).modal('toggle');
        }, function (error) {
            //if (ul.username == "tcguser" && ul.password == "Hello123") {
            //    localStorage.setItem('access_token', 'ad9g8ads0g89das809das8g90d9g8das08g0a8g0das89g0as');
            //    localStorage.setItem('application', 'EatSmart');
            //    localStorage.setItem('expires_in', '10/18/2016');
            //    localStorage.setItem('token_type', 'password');
            //    localStorage.setItem('userName', 'Randal Wilcox');
            //    localStorage.setItem('firstName', 'Randal');
            //    localStorage.setItem('lastName', 'Wilcox');
            //    localStorage.setItem('email', ul.username);
            //    this.user.name = 'Randal Wilcox';
            //    this.user.firstname = 'Randal';
            //    this.user.lastname = 'Wilcox';
            //    this.user.email = ul.username;
            //    let claim = new Claim("Eat Smart Admin", "Admin");
            //    this.user.claims = new Array<Claim>();
            //    this.user.claims[0] = claim;
            //    this.config.User(this.user);
            //    // show errors when call is going through correctly
            //    $(this.adminerror.nativeElement).addClass("hidden");
            //    $(this.adminmodal.nativeElement).modal('toggle');
            //} else {
            var _errors = error._body.toString().split(";");
            var _err = "";
            for (var _i = 0, _errors_1 = _errors; _i < _errors_1.length; _i++) {
                var err = _errors_1[_i];
                if (err == "User Needs to Change Password") {
                    // show Change Password Div
                    _this.showChange = true;
                }
                if (err == "Passwords must have at least one non alphanumeric character.") {
                    _err += "User needs to change Password, password needs at least one non alphanumeric character";
                }
            }
            $(_this.adminerror.nativeElement).removeClass("hidden");
            $(_this.adminerrortext.nativeElement).html("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">" + error.statusText + ":</span>&nbsp;" + _err);
            //}
        });
        //let _errors = error._body;
        //$(this.adminerrortext.nativeElement).html("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">Error:</span>" + error.text());
        //    }
        //);
    };
    HeaderComponent.prototype.accountreset = function (event) {
        $(this.adminmodal.nativeElement).modal('toggle');
        this.modalMessage = "A message has been sent to the email associated with your User Name.<br />Please check your email and follow the instructions.";
        $(this.messagemodal.nativeElement).modal('toggle');
        this.showForgot = false;
    };
    HeaderComponent.prototype.GetUserData = function (m) {
        alert("I made it");
        $(this.adminmodal.nativeElement).modal('toggle');
        localStorage.setItem('access_token', m.json().access_token);
        localStorage.setItem('expires_in', m.json().expires_in);
        localStorage.setItem('token_type', m.json().token_type);
        localStorage.setItem('userName', m.json().userName);
        //this._router.navigate(['MARS']);
        localStorage.setItem('access_token', 'ad9g8ads0g89das809das8g90d9g8das08g0a8g0das89g0as');
        localStorage.setItem('application', 'EatSmart');
        localStorage.setItem('expires_in', '10/18/2016');
        localStorage.setItem('token_type', 'password');
        localStorage.setItem('userName', 'Randal Wilcox');
        localStorage.setItem('firstName', 'Randal');
        localStorage.setItem('lastName', 'Wilcox');
        localStorage.setItem('email', 'rwilcox');
        this.user.name = 'Randal Wilcox';
        this.user.firstname = 'Randal';
        this.user.lastname = 'Wilcox';
        this.user.email = 'rwilcox';
        var claim = new claim_class_1.Claim("Eat Smart Admin", "Admin");
        this.user.claims = new Array();
        this.user.claims[0] = claim;
        this.config.User(this.user);
        // show errors when call is going through correctly
        $(this.adminerror.nativeElement).addClass("hidden");
        $(this.adminmodal.nativeElement).modal('toggle');
        this.modalMessage = "Changed Password succeeded!, Welcome " + this.user.name;
        $(this.messagemodal.nativeElement).modal('toggle');
    };
    HeaderComponent.prototype.changePassword = function (event) {
        var _this = this;
        this.change.Email = this.login.username;
        this.change.OldPassword = this.login.password;
        this.loginService
            .changePassword(this.change)
            .then(function (text) { return _this.GetUserData(text); })
            .catch(this.handleLoginError);
        this.showChange = false;
    };
    HeaderComponent.prototype.accountDetails = function (event) {
        $(this.fullProfilePopup.nativeElement).toggle();
    };
    HeaderComponent.prototype.adminforgot = function (event, ul) {
        var _this = this;
        var url = "http://localhost:63345/Users/ChangePassword";
        var body = "username=" + this.login.username + "&password=" + this.login.password;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post(url, body, options).subscribe(function (response) {
            $(_this.adminmodal.nativeElement).modal('toggle');
            // must parse access_token
            //var header = JSON.parse(base64url.decode(components[0]));
            //var payload = JSON.parse(base64url.decode(components[1]));
            localStorage.setItem('access_token', response.json().access_token);
            localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('token_type', response.json().token_type);
            localStorage.setItem('userName', response.json().userName);
            //this._router.navigate(['MARS']);
            localStorage.setItem('access_token', 'ad9g8ads0g89das809das8g90d9g8das08g0a8g0das89g0as');
            localStorage.setItem('application', 'EatSmart');
            localStorage.setItem('expires_in', '10/18/2016');
            localStorage.setItem('token_type', 'password');
            localStorage.setItem('userName', 'Randal Wilcox');
            localStorage.setItem('firstName', 'Randal');
            localStorage.setItem('lastName', 'Wilcox');
            localStorage.setItem('email', ul.username);
            _this.user.name = 'Randal Wilcox';
            _this.user.firstname = 'Randal';
            _this.user.lastname = 'Wilcox';
            _this.user.email = ul.username;
            var claim = new claim_class_1.Claim("Eat Smart Admin", "Admin");
            _this.user.claims = new Array();
            _this.user.claims[0] = claim;
            _this.config.User(_this.user);
            // show errors when call is going through correctly
            $(_this.adminerror.nativeElement).addClass("hidden");
            $(_this.adminmodal.nativeElement).modal('toggle');
            _this.modalMessage = "Changed Password succeeded!, Welcome " + _this.user.name;
            $(_this.messagemodal.nativeElement).modal('toggle');
        }, function (error) {
            //if (ul.username == "tcguser" && ul.password == "Hello123") {
            //    localStorage.setItem('access_token', 'ad9g8ads0g89das809das8g90d9g8das08g0a8g0das89g0as');
            //    localStorage.setItem('application', 'EatSmart');
            //    localStorage.setItem('expires_in', '10/18/2016');
            //    localStorage.setItem('token_type', 'password');
            //    localStorage.setItem('userName', 'Randal Wilcox');
            //    localStorage.setItem('firstName', 'Randal');
            //    localStorage.setItem('lastName', 'Wilcox');
            //    localStorage.setItem('email', ul.username);
            //    this.user.name = 'Randal Wilcox';
            //    this.user.firstname = 'Randal';
            //    this.user.lastname = 'Wilcox';
            //    this.user.email = ul.username;
            //    let claim = new Claim("Eat Smart Admin", "Admin");
            //    this.user.claims = new Array<Claim>();
            //    this.user.claims[0] = claim;
            //    this.config.User(this.user);
            //    // show errors when call is going through correctly
            //    $(this.adminerror.nativeElement).addClass("hidden");
            //    $(this.adminmodal.nativeElement).modal('toggle');
            //} else {
            var _errors = error._body.toString().split(";");
            var _err = "";
            for (var _i = 0, _errors_2 = _errors; _i < _errors_2.length; _i++) {
                var err = _errors_2[_i];
                if (err == "User Needs to Change Password") {
                    // show Change Password Div
                    _this.showChange = true;
                }
                if (err == "Passwords must have at least one non alphanumeric character.") {
                    _err += "User needs to change Password, password needs at least one non alphanumeric character";
                }
            }
            $(_this.adminerror.nativeElement).removeClass("hidden");
            $(_this.adminerrortext.nativeElement).html("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">" + error.statusText + ":</span>&nbsp;" + _err);
            //}
        });
        this.showChange = false;
        this.showForgot = true;
    };
    HeaderComponent.prototype.cancelAccountEdit = function (event) {
        $(this.profilepopup.nativeElement).toggle();
    };
    HeaderComponent.prototype.cancelAccountDetails = function (event) {
        $(this.fullProfilePopup.nativeElement).toggle();
    };
    HeaderComponent.prototype.openPanel = function (event) {
        $(this.profilepopup.nativeElement).toggle();
    };
    HeaderComponent.prototype.marsaccount = function (event) {
        $(this.profilepopup.nativeElement).toggle();
        $(this.fullProfilePopup.nativeElement).toggle();
    };
    HeaderComponent.prototype.adminclose = function (event) {
        $(this.adminerror.nativeElement).addClass("hidden");
    };
    HeaderComponent.prototype.messageclose = function (event) {
        $(this.messagemodal.nativeElement).modal('toggle');
    };
    HeaderComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HeaderComponent.prototype.handleLoginError = function (error) {
        var _errors = error._body.toString().split(";");
        var _err = "";
        for (var _i = 0, _errors_3 = _errors; _i < _errors_3.length; _i++) {
            var err = _errors_3[_i];
            if (err == "User Needs to Change Password") {
                // show Change Password Div
                this.showChange = true;
            }
            if (err == "Passwords must have at least one non alphanumeric character.") {
                _err += "User needs to change Password, password needs at least one non alphanumeric character";
            }
        }
        $(this.adminerror.nativeElement).removeClass("hidden");
        $(this.adminerrortext.nativeElement).html("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">" + error.statusText + ":</span>&nbsp;" + _err);
    };
    return HeaderComponent;
}());
__decorate([
    core_1.ViewChild('profilePopup'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "profilepopup", void 0);
__decorate([
    core_1.ViewChild('fullProfilePopup'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "fullProfilePopup", void 0);
__decorate([
    core_1.ViewChild('adminmodal'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "adminmodal", void 0);
__decorate([
    core_1.ViewChild('contactmodal'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "contactmodal", void 0);
__decorate([
    core_1.ViewChild('adminerror'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "adminerror", void 0);
__decorate([
    core_1.ViewChild('adminerrortext'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "adminerrortext", void 0);
__decorate([
    core_1.ViewChild('messagemodal'),
    __metadata("design:type", core_1.ElementRef)
], HeaderComponent.prototype, "messagemodal", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'headerlist',
        templateUrl: 'app/templates/header.view.html',
        styleUrls: ['css/bootstrap.css'],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        configuration_service_1.ConfigurationService,
        login_service_1.LoginService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map