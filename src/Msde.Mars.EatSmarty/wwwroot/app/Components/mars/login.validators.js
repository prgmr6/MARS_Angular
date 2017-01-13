"use strict";
var Validators = (function () {
    function Validators() {
    }
    Validators.emailValidator = function (control) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    };
    Validators.passwordValidator = function (control) {
        if (!control.value.match("password")) {
            return { 'invalidpassword': true };
        }
    };
    Validators.usernameValidator = function (control) {
        if (!control.value.match("username")) {
            return { 'invalidusername': true };
        }
    };
    return Validators;
}());
exports.Validators = Validators;
//# sourceMappingURL=login.validators.js.map