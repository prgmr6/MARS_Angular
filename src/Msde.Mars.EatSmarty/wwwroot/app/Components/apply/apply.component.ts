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
//---------Declare Components---------
declare var $: any;

@Component({
    selector: 'apply-list',
    templateUrl: 'app/templates/apply.view.html',
    styleUrls: ['css/bootstrap.css'],
    providers: [MARS_PageService]
})

//---------Export This Component Class---------
export class Apply implements OnInit, AfterViewInit {
    @ViewChild('mainwrapper') mainwrapper: ElementRef;

    confirmed = false;
    announced = false;
    public maintext: MARS_Page;
    public resmessage: string;
    public addmessage: string;
    public listmessage: string;
    public editId: any;


    //Constructor
    constructor(
        private pageService: MARS_PageService,
        private config: ConfigurationService,
        private route: ActivatedRoute,
        private router: Router) {
        this.maintext = new MARS_Page();
        this.editId = this.route.snapshot.data["routeName"];
    }

    ngAfterViewInit() {
        this.resmessage = "";
        this.editId = 0;
        $(this.mainwrapper.nativeElement).css("background-color", "#ffffff");
        $(this.mainwrapper.nativeElement).show();
    }

    ngOnInit() {
        this.setData(true);
    }

    setData(t: any): void {
        this.pageService
            .getById(this.editId)
            .then(text => this.maintext = this.SetDefaults(text));
    }

    SetDefaults(page: MARS_Page): MARS_Page {
        for (let text of page.marS_PageTexts) {
            text.isEditHidden = true;
            text.isHidden = true;
        }
        for (let image of page.marS_Images) {
            image.isEditHidden = true;
            image.isHidden = true;
        }
        for (let quick of page.marS_Quicks) {
            quick.isEditHidden = true;
            quick.isHidden = true;
        }
        page.isEditHidden = true;
        page.isHidden = true;
        return page;
    }

    showEdit(e, t) {
        t.isEditHidden = false;
    }

    showDelete(e, t) {
        e.preventDefault();
        var IsConf = confirm('You are about to delete ' + t.headerText + '. Are you sure?');
        //if (IsConf) {
        //    this.pageService
        //        .delete(t.id)
        //        .then(() => {
        //            this.setData(true);
        //        });
        //}
    }

    reset() {

    }
}