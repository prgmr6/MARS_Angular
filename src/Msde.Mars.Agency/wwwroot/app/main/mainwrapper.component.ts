import {Component, ElementRef, ViewChild, AfterViewInit, Renderer}                                     from 'angular2/core';
// declarations
declare var $: any;
//---------Declare Components---------
@Component({
    selector: 'mainwrapper',
    templateUrl: `app/main/mainwrapper.view.html`
})

//---------Export This Component Class---------
export class MainWrapperComponent implements AfterViewInit{
    @ViewChild('flexslider') flex: ElementRef;
    @ViewChild('tabs') tabs: ElementRef;


    constructor(private renderer: Renderer) { }
   
    ngAfterViewInit() {
        $(this.flex.nativeElement).flexslider({
            animation: "fade",
            pauseOnHover: "true",
        });
        $(this.tabs.nativeElement).tabs({});
    }

   
}