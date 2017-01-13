//---------Import @angular------------
import {Component, ElementRef, AfterViewInit, ViewChild}            from '@angular/core';
import { Http, HttpModule}                                          from '@angular/http';

//---------Import External Components---------
import { MARS_Page }                                                from '../../models/mars_page.model';
import { MARS_PageService}                                          from '../../service/mars_page.service';
import {PageTexttip}                                                from '../../directives/pagetexttip.directive';
import {Linkstip}                                                   from '../../directives/linkstip.directive';
import {Pagetip}                                                    from '../../directives/pagetip.directive';
//---------Declare Components---------
declare var $: any;

@Component({
    selector: 'Mars-list',
    templateUrl: 'app/templates/detailpage.view.html',
    styleUrls: ['css/bootstrap.css'],
    providers: [MARS_PageService]
})

//---------Export This Component Class---------
export class MarsMain implements AfterViewInit {
    @ViewChild('mainwrapper') mainwrapper: ElementRef;
    public maintext: MARS_Page;

    public resmessage: string;
    public addmessage: string;
    public listmessage: string;
    public editId: any;
    public isRequesting: boolean;

    //Constructor
    constructor(
        private pageService: MARS_PageService) {
        this.addmessage = "Added New Mars";
        this.listmessage = "Retrieved All Mars";
        this.getMainText();
        this.getTopPage();
    }

    ngAfterViewInit() {
        this.resmessage = "";
        this.editId = 0;
        $(this.mainwrapper.nativeElement).show();
    }

    getMainText() {

    }


    getTopPage() {

    }

    showEdit(e, brief) {
    }

    showDelete(e, brief) {
    }

    showLinksEdit(e, links) {
    }

    showTopPageEdit(e, toppage) {
    }

    private stopRefreshing() {
    }

    reset() {
    }
}