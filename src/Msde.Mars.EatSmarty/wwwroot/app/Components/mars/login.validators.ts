
export class Validators {

    static emailValidator(control: any) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control: any) {
        if (!control.value.match("password")) {
            return { 'invalidpassword': true };
        }
    }

    static usernameValidator(control: any) {
        if (!control.value.match("username")) {
            return { 'invalidusername': true };
        }
    }

}
