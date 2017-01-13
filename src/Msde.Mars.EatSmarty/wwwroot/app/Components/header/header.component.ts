//---------Import External Components---------
import { Component, ElementRef, AfterViewInit, ViewChild, Input }   from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions }                from '@angular/http';
import { Router }                                                   from '@angular/router';
import { User }                                                     from '../mars/user.class';
import { Claim }                                                    from '../mars/claim.class';
import { LoginUser }                                                from '../mars/loginuser.class';
import { ConfigurationService }                                     from '../../service/configuration.service';
import { LoginService }                                             from '../../service/login.service';
import { ChangePasswordViewModel }                                  from '../../models/changepasswordviewmodel.model';

//---------Declare Components---------
declare var $: any;
@Component({
    selector: 'headerlist',
    templateUrl: 'app/templates/header.view.html',
    styleUrls: ['css/bootstrap.css'],
    providers: [LoginService]
})

//---------Export This Component Class---------
export class HeaderComponent implements AfterViewInit {
    @ViewChild('profilePopup') profilepopup: ElementRef;
    @ViewChild('fullProfilePopup') fullProfilePopup: ElementRef;
    @ViewChild('adminmodal') adminmodal: ElementRef;
    @ViewChild('contactmodal') contactmodal: ElementRef;
    @ViewChild('adminerror') adminerror: ElementRef;
    @ViewChild('adminerrortext') adminerrortext: ElementRef;
    @ViewChild('messagemodal') messagemodal: ElementRef;
    //public login: LoginUser;
    public showForgot: boolean = false;
    public showChange: boolean = false;
    public user: User;
    public login: LoginUser;
    public forgot: LoginUser;
    public change: ChangePasswordViewModel;
    public base64: WindowBase64;
    modalMessage: string = "";
    constructor(
        private _router: Router,
        private _http: Http,
        private config: ConfigurationService,
        private loginService: LoginService) {
        this.showForgot = false;
        this.user = new User("", "", "", "", null, false);
        this.login = new LoginUser("", "","","");
        this.forgot = new LoginUser("", "", "", "");
        this.change = new ChangePasswordViewModel();
        
        if (localStorage.getItem("application") == "EatSmart") {
            this.user.name = localStorage.getItem("userName");
            this.user.firstname = localStorage.getItem("firstName");
            this.user.lastname = localStorage.getItem("lastName");
            this.user.email = localStorage.getItem("email");
            let claim = new Claim("Eat Smart Admin", "Admin");
            this.user.claims = new Array<Claim>();
            this.user.claims[0] = claim;
            this.user.IsAdmin = true;
            this.config.User(this.user);
        } else {
            this.user.name = "";
            this.user.firstname = "";
            this.user.lastname = "";
            this.user.email = "";
            this.user.claims = new Array<Claim>();
            this.config.ClearUser();
        }
    }


    ngAfterViewInit() {
        $(this.profilepopup.nativeElement).draggable({
            handle: ".modal-header"
        });

        $(this.adminmodal.nativeElement).draggable({
            handle: ".modal-header"
        });

        $(this.contactmodal.nativeElement).draggable({
            handle: ".modal-header"
        });
    }
    eventHandler(event, ul: LoginUser) {
        if (event.key == "Enter") {
            this.adminlogin(event, ul);
        }
        
    } 
    adminlogout(event) {
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
        this.user.claims = new Array<Claim>();
        this.config.ClearUser();
        $(this.profilepopup.nativeElement).toggle();
    }

    marslink(event) {
        event.preventDefault();
        window.location.href = 'http://localhost:5014/';
    }
    adminlogin(event, ul: LoginUser) {
        let url = "http://localhost:63345/token";
        let body = "username=" + this.login.username + "&password=" + this.login.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        this._http.post(url, body, options).subscribe(
            response => {

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

                this.user.name = 'Randal Wilcox';
                this.user.firstname = 'Randal';
                this.user.lastname = 'Wilcox';
                this.user.email = ul.username;
                let claim = new Claim("Eat Smart Admin", "Admin");
                this.user.claims = new Array<Claim>();
                this.user.claims[0] = claim;
                this.config.User(this.user);
                // show errors when call is going through correctly
                $(this.adminerror.nativeElement).addClass("hidden");
                $(this.adminmodal.nativeElement).modal('toggle');
            },
            error => {
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
                var _errors: string[] = error._body.toString().split(";");
                var _err: string = "";
                for (let err of _errors) {
                    if (err == "User Needs to Change Password") {
                        // show Change Password Div
                        this.showChange = true;
                    }
                    if (err == "Passwords must have at least one non alphanumeric character."){
                        _err += "User needs to change Password, password needs at least one non alphanumeric character";
                    }

                }
                $(this.adminerror.nativeElement).removeClass("hidden");
                $(this.adminerrortext.nativeElement).html("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">" + error.statusText  + ":</span>&nbsp;" + _err);
                //}
            });
        //let _errors = error._body;
        //$(this.adminerrortext.nativeElement).html("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span><span class=\"sr-only\">Error:</span>" + error.text());
        //    }
        //);
    }


    accountreset(event) {
        $(this.adminmodal.nativeElement).modal('toggle');
        this.modalMessage = "A message has been sent to the email associated with your User Name.<br />Please check your email and follow the instructions."
        $(this.messagemodal.nativeElement).modal('toggle');
        this.showForgot = false;
    }

    GetUserData(m: any) {
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
        let claim = new Claim("Eat Smart Admin", "Admin");
        this.user.claims = new Array<Claim>();
        this.user.claims[0] = claim;
        this.config.User(this.user);
        // show errors when call is going through correctly
        $(this.adminerror.nativeElement).addClass("hidden");
        $(this.adminmodal.nativeElement).modal('toggle');

        this.modalMessage = "Changed Password succeeded!, Welcome " + this.user.name;
        $(this.messagemodal.nativeElement).modal('toggle');
    }
    changePassword(event) {
        this.change.Email = this.login.username;
        this.change.OldPassword = this.login.password;
        this.loginService
            .changePassword(this.change)
            .then(text => this.GetUserData(text))
            .catch(this.handleLoginError);
        this.showChange = false;
    }

    accountDetails(event) {
        $(this.fullProfilePopup.nativeElement).toggle();
    }

    adminforgot(event, ul: LoginUser) {
        let url = "http://localhost:63345/Users/ChangePassword";
        let body = "username=" + this.login.username + "&password=" + this.login.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        this._http.post(url, body, options).subscribe(
            response => {
                $(this.adminmodal.nativeElement).modal('toggle');

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

                this.user.name = 'Randal Wilcox';
                this.user.firstname = 'Randal';
                this.user.lastname = 'Wilcox';
                this.user.email = ul.username;
                let claim = new Claim("Eat Smart Admin", "Admin");
                this.user.claims = new Array<Claim>();
                this.user.claims[0] = claim;
                this.config.User(this.user);
                // show errors when call is going through correctly
                $(this.adminerror.nativeElement).addClass("hidden");
                $(this.adminmodal.nativeElement).modal('toggle');

                this.modalMessage = "Changed Password succeeded!, Welcome " + this.user.name;
                $(this.messagemodal.nativeElement).modal('toggle');
            },
            error => {
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
                var _errors: string[] = error._body.toString().split(";");
                var _err: string = "";
                for (let err of _errors) {
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
                //}
            });

        this.showChange = false;
        this.showForgot = true;
    }

    cancelAccountEdit(event) {
        $(this.profilepopup.nativeElement).toggle();
    }
    cancelAccountDetails(event) {
        $(this.fullProfilePopup.nativeElement).toggle();
    }
    openPanel(event) {
        $(this.profilepopup.nativeElement).toggle();
    }
    marsaccount(event) {
        $(this.profilepopup.nativeElement).toggle();
        $(this.fullProfilePopup.nativeElement).toggle();
    }
   
    adminclose(event) {
        $(this.adminerror.nativeElement).addClass("hidden");
    }

    messageclose(event) {
        $(this.messagemodal.nativeElement).modal('toggle');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }

    private handleLoginError(error: any) {

        var _errors: string[] = error._body.toString().split(";");
        var _err: string = "";
        for (let err of _errors) {
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
    }
}