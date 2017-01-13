import { Claim }                                                        from './claim.class'

export class User {
    constructor(
        public name: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public claims: Claim[],
        public IsAdmin: boolean) { }
}
