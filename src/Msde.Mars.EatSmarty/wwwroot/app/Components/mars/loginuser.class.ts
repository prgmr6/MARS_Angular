
export class LoginUser {
    constructor(
        public username: string,
        public password: string,
        public newpassword: string,
        public repeatnewpassword: string) { }
}