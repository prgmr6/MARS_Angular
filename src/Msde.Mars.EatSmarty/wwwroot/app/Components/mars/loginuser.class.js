"use strict";
var LoginUser = (function () {
    function LoginUser(username, password, newpassword, repeatnewpassword) {
        this.username = username;
        this.password = password;
        this.newpassword = newpassword;
        this.repeatnewpassword = repeatnewpassword;
    }
    return LoginUser;
}());
exports.LoginUser = LoginUser;
//# sourceMappingURL=loginuser.class.js.map