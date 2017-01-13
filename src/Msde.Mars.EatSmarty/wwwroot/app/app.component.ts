// imports
import { ConfigurationService }         from './service/configuration.service';
import { PubSubService }                from './service/pub-sub.service';
import { Component, OnInit }            from '@angular/core';

// declarations
declare var $: any;
declare var google: any;
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/main.view.html',
    providers: [ConfigurationService, PubSubService]
})
export class AppComponent {
    title: string;
    history: string[] = [];
    configFile: any;
    LinksUrl: string;
    public constructor(
        public config: ConfigurationService, public pubsub: PubSubService) {
        this.title = 'Eat Smart Maryland';
        google.charts.load('current', { packages: ['corechart', 'bar', 'table'] });
        //config.load();
    }
    ngOnInit(): void {
        
    }
    public setTitle(newTitle: string) {
        //this.titleService.setTitle(newTitle);
    }
}
