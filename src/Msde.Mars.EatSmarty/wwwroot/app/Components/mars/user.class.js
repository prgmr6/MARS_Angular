"use strict";
var User = (function () {
    function User(name, firstname, lastname, email, claims, IsAdmin) {
        this.name = name;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.claims = claims;
        this.IsAdmin = IsAdmin;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.class.js.map