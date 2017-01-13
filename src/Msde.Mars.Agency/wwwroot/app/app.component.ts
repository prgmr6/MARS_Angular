/*Component Default view For SpaRoute */
//---------Import Angular2------------
import {Component, provide} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

//---------Import External Components---------
import {Home} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';

declare var $: any;

@Component({
    selector: 'spa-app',
    directives: [ROUTER_DIRECTIVES, FooterComponent, HeaderComponent, MenuComponent],
    templateUrl: 'app/main.view.html',
    providers: [
        ROUTER_PROVIDERS
    ]
})

//---------Declare Route Config---------
@RouteConfig([
        { path: '/', name: 'Home', component: Home, useAsDefault: true },
        //{ path: '/Contact/...', name: 'Contact', component: Contact }
])


//---------Export This Component Class---------
export class MainComponent {
    title: string;
    constructor() {
        this.title = 'Eat Smart Maryland';
    }
}