import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode, provide, ViewChild, ElementRef, AfterViewInit} from 'angular2/core';
declare var $: any;

@Component({
    selector: 'home',
    templateUrl: `app/home/home.view.html`
})

export class Home implements AfterViewInit {
    //@ViewChild('flexslider') flex: ElementRef;
    //@ViewChild('body') body: ElementRef;
    //@ViewChild('sidrmain') sidr: ElementRef;
    //@ViewChild('accordion') acc: ElementRef;
    //@ViewChild('tabs') tabs: ElementRef;

    ngAfterViewInit() {
        //$(this.flex.nativeElement).flexslider({
        //    animation: "fade",
        //    pauseOnHover: "true",
        //});

        //$(this.sidr.nativeElement).sidr({
        //    name: 'sidr-main',
        //    source: '#navigation',
        //    side: 'left'
        //});

        //$(this.acc.nativeElement).accordion({
        //    collapsible: true,
        //    heightStyle: "content"
        //});
        //$(this.body.nativeElement).addClass("front");
        //$(this.tabs.nativeElement).tabs({});
    }
}