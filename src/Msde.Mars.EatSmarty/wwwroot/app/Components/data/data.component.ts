//---------Import Angular2------------
import { Component, ElementRef, OnInit,
    AfterViewInit, ViewChild, OnDestroy, Input }                    from '@angular/core';
import { Http, HttpModule }                                         from '@angular/http';
import { RouterLink, Router, ActivatedRoute, Params }               from '@angular/router';
import { Subscription }                                             from 'rxjs/Subscription';
import 'rxjs/Rx';
import { Observable }                                               from 'rxjs/Observable';

//---------Import External Components---------
import { MARS_Page }                                                from '../../models/mars_page.model';
import { MARS_PageText }                                            from '../../models/mars_pagetext.model';
import { MARS_QuickLinks }                                          from '../../models/mars_quicklinks.model';
import { MARS_Quicklinks_Links }                                    from '../../models/mars_quicklinks_links.model';
import { MARS_Page_TopText }                                        from '../../models/mars_page_toptext.model';
import { MARS_Breadcrumbs }                                         from '../../models/mars_breadcrumbs.model';
import { MARS_Breadcrumb_Links }                                    from '../../models/mars_breadcrumb_links.model';
import { MARS_Images }                                              from '../../models/mars_images.model';

import { MARS_PageService }                                         from '../../service/mars_page.service';
import { ConfigurationService }                                     from '../../service/configuration.service';
import { PageTexttip }                                              from '../../directives/pagetexttip.directive';
import { Linkstip }                                                 from '../../directives/linkstip.directive';
import { Pagetip }                                                  from '../../directives/pagetip.directive';
import { MainTextEditorComponent }                                  from '../../editor/maintexteditor.component';
import { LinksEditorComponent }                                     from '../../editor/linkseditor.component';
import { TopPageEditorComponent }                                   from '../../editor/toppageeditor.component';
import { FrontPage }                                                from '../../models/frontpage.model';
import { Program }                                                  from '../../models/program.model';
import { DataDashboards }                                           from '../../models/dataDashboards.model';
//---------Declare Components---------
declare var $: any;

@Component({
    selector: 'data-list',
    templateUrl: 'app/templates/data.view.html',
    styleUrls: ['css/bootstrap.css'],
    providers: [MARS_PageService]
})

//---------Export This Component Class---------
//export class Data implements OnInit, AfterViewInit {
//    @ViewChild('mainwrapper') mainwrapper: ElementRef;

//    confirmed = false;
//    announced = false;
//    public maintext: MARS_Page;
//    public resmessage: string;
//    public addmessage: string;
//    public listmessage: string;
//    public editId: any;

export class Data {
    @ViewChild('flexslider') flex: ElementRef;
    @ViewChild('body') body: ElementRef;
    @ViewChild('sidrmain') sidr: ElementRef;
    @ViewChild('tabs') tabs: ElementRef;
    imagePointer: number;
    index: number;
    //private NextPhotoInterval: number = 5000;
    //private loopSlides: boolean = true;
    slidesLoaded: boolean = false;
    front: FrontPage;
    data: DataDashboards;

    //Constructor
    constructor(
        private _router: Router,
        private config: ConfigurationService) {
        this.front = new FrontPage();
        this.data = new DataDashboards();
        this.front.BenefitsisHidden = true;
        this.front.BenefitsisEditHidden = true;
        this.front.ProgramisHidden = true;
        this.front.ProgramisEditHidden = true;
        this.front.SliderisHidden = true;
        this.front.SliderisEditHidden = true;

        this.loadFront();
        this.loadData();
    }

    loadFront() {
        this.front.pagename = "DATA - DASHBOARDS";
    };

    loadData() {
        this.data.id = 1;
        this.data.reportname = "This is test";
        this.data.reporttitle = "Test Report";
        this.data.reportlink = "#/TestReport";
    }
    //ngAfterViewInit() {
    //    this.resmessage = "";
    //    this.editId = 0;
    //    $(this.mainwrapper.nativeElement).css("background-color", "#ffffff");
    //    $(this.mainwrapper.nativeElement).show();
    //}

    //ngOnInit() {
    //    this.setData(true);
    //}

    //setData(t: any): void {
    //    this.pageService
    //        .getById(this.editId)
    //        .then(text => this.maintext = this.SetDefaults(text));
    //}

    //SetDefaults(page: MARS_Page): MARS_Page {
    //    for (let text of page.marS_PageTexts) {
    //        text.isEditHidden = true;
    //        text.isHidden = true;
    //    }
    //    for (let image of page.marS_Images) {
    //        image.isEditHidden = true;
    //        image.isHidden = true;
    //    }
    //    for (let quick of page.marS_Quicks) {
    //        quick.isEditHidden = true;
    //        quick.isHidden = true;
    //    }
    //    page.isEditHidden = true;
    //    page.isHidden = true;
    //    return page;
    //}

    //showEdit(e, t) {
    //    t.isEditHidden = false;
    //}

    //showDelete(e, t) {
    //    e.preventDefault();
    //    var IsConf = confirm('You are about to delete ' + t.headerText + '. Are you sure?');
    //    //if (IsConf) {
    //    //    this.pageService
    //    //        .delete(t.id)
    //    //        .then(() => {
    //    //            this.setData(true);
    //    //        });
    //    //}
    //}

    //reset() {
    //}
}