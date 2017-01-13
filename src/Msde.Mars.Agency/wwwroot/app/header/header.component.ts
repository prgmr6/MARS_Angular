import {Component, provide, ElementRef, AfterViewInit, ViewChild}                                 from 'angular2/core';

//---------Import External Components---------
declare var $: any;

//---------Declare Components---------
@Component({
    selector: 'headerlist',
    templateUrl: `app/Header/header.view.html`,
    styleUrls: ['css/bootstrap.css']
})

//---------Export This Component Class---------
export class HeaderComponent implements AfterViewInit {
    @ViewChild('marsmodal') marsmodal: ElementRef;
    @ViewChild('adminmodal') adminmodal: ElementRef;
    @ViewChild('contactmodal') contactmodal: ElementRef;

    @ViewChild('marserror') marserror: ElementRef;
    @ViewChild('adminerror') adminerror: ElementRef;
    constructor() {
    }

    ngAfterViewInit() {
        $(this.marsmodal.nativeElement).draggable({
            handle: ".modal-header"
        });

        $(this.adminmodal.nativeElement).draggable({
            handle: ".modal-header"
        });

        $(this.contactmodal.nativeElement).draggable({
            handle: ".modal-header"
        });

    }

    marslogin(event) {
        event.preventDefault();
        $(this.marserror.nativeElement).removeClass("hidden");
    }

   adminlogin(event) {
        event.preventDefault();
        $(this.adminerror.nativeElement).removeClass("hidden");
    }

   marsclose(event) {
       $(this.marserror.nativeElement).addClass("hidden");
   }

   adminclose(event) {
       $(this.adminerror.nativeElement).addClass("hidden");
   }

}