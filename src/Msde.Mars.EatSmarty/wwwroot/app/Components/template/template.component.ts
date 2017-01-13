/// <reference path="../../models/graph.interface.ts" />
//---------Import Angular2------------
import { Component, ElementRef, OnInit, AfterViewChecked, 
    AfterViewInit, ViewChild, OnDestroy, Input }                    from '@angular/core';
import { Http, HttpModule }                                         from '@angular/http';
import { RouterLink, Router, ActivatedRoute, Params }               from '@angular/router';
import { Subscription }                                             from 'rxjs/Subscription';
import 'rxjs/Rx';
import { Observable }                                               from 'rxjs/Observable';

//---------Import Models---------
import { MARS_Page }                                                from '../../models/mars_page.model';
import { MARS_PageText }                                            from '../../models/mars_pagetext.model';
import { MARS_QuickLinks }                                          from '../../models/mars_quicklinks.model';
import { MARS_Quicklinks_Links }                                    from '../../models/mars_quicklinks_links.model';
import { MARS_Page_TopText }                                        from '../../models/mars_page_toptext.model';
import { MARS_Breadcrumbs }                                         from '../../models/mars_breadcrumbs.model';
import { MARS_Breadcrumb_Links }                                    from '../../models/mars_breadcrumb_links.model';
import { MARS_Images }                                              from '../../models/mars_images.model';
import { MARS_Reports }                                             from '../../models/mars_report.model';
import { Graph }                                                    from '../../models/graph.interface';
//---------Import Services---------
import { MARS_PageService }                                         from '../../service/mars_page.service';
import { MARS_PagetextService }                                     from '../../service/mars_pagetext.service';
import { MARS_QuickLinksService }                                   from '../../service/mars_quicklinks.service';
import { MARS_ReportService }                                       from '../../service/report.service';
import { ConfigurationService }                                     from '../../service/configuration.service';
//---------Import Directives---------
import { PageTexttip }                                              from '../../directives/pagetexttip.directive';
import { Linkstip }                                                 from '../../directives/linkstip.directive';
import { Pagetip }                                                  from '../../directives/pagetip.directive';
import { BreadCrumbtip }                                            from '../../directives/breadcrumbtip.directive';
import { MainTextEditorComponent }                                  from '../../editor/maintexteditor.component';
import { LinksEditorComponent }                                     from '../../editor/linkseditor.component';
import { TopPageEditorComponent }                                   from '../../editor/toppageeditor.component';
import { ImageEditorComponent }                                     from '../../editor/imageeditor.component';
import { MainTextAddEditorComponent }                               from '../../editor/maintextaddeditor.component';
import { BreadCrumbEditorComponent }                                from '../../editor/breadcrumbeditor.component';
import { PubSubService }                                            from '../../service/pub-sub.service';

//---------Declare Components---------
declare var $: any;
declare var google: any;

@Component({
    selector: 'Template-list',
    templateUrl: 'app/templates/detailpage.view.html',
    styleUrls: ['css/bootstrap.css'],
    providers: [MARS_ReportService, MARS_PageService, MARS_PagetextService, MARS_QuickLinksService]
})

//---------Export This Component Class---------
export class Template implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
    @ViewChild('mainwrapper') mainwrapper: ElementRef;
    @ViewChild('briefText') toptext: ElementRef;
   
    confirmed = false;
    announced = false;
    public maintext: MARS_Page;
    public resmessage: string;
    public addmessage: string;
    public listmessage: string;
    public graphsLoaded: boolean;
    public editId: any;
    public data: MARS_Reports[];
    public tableData: any;
    private chart;
    private table;
    public graph: Graph;
    LinksSubscription = null; 
    PageTextSubscription = null;
    GraphSubscription = null;
  
    constructor(
        private pageService: MARS_PageService,
        private pagetextService: MARS_PagetextService,
        private pageQuickLinks: MARS_QuickLinksService,
        private reportService: MARS_ReportService,
        private config: ConfigurationService,
        private route: ActivatedRoute,
        private router: Router,
        private pubSubService: PubSubService) {
        this.graphsLoaded = false;
        this.maintext = new MARS_Page();
        this.editId = this.route.snapshot.data["routeName"];       
    }

    ngAfterViewInit() {
        this.resmessage = "";
        $(this.mainwrapper.nativeElement).css("background-color", "#ffffff");
        $(this.mainwrapper.nativeElement).show();
    }

    ngAfterViewChecked() {
        if (document.getElementsByClassName("chart_div").length > 0 && this.graphsLoaded == false) {
            this.chart = this.reportService.createBarChart(document.getElementsByClassName('chart_div')[0]);
            if (document.getElementsByClassName('chart_table').length > 0) {
                this.table = this.reportService.createTable(document.getElementsByClassName('chart_table')[0]);
                this.data[0].TableData.setCell(6, 0, '15', this.data[0].TableData.getValue(6, 0), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(6, 1, '15', this.data[0].TableData.getValue(6, 1), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(6, 2, '15', this.data[0].TableData.getValue(6, 2), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(7, 0, '15', this.data[0].TableData.getValue(7, 0), { style: 'font-style:italic; font-size:14px;' });              
                this.data[0].TableData.setCell(7, 1, '15', this.data[0].TableData.getValue(7, 1), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(7, 2, '15', this.data[0].TableData.getValue(7, 2), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(8, 0, '15', this.data[0].TableData.getValue(8, 0), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(8, 1, '15', this.data[0].TableData.getValue(8, 1), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].TableData.setCell(8, 2, '15', this.data[0].TableData.getValue(8, 2), { style: 'font-style:italic; font-size:14px;' });
                this.data[0].isAddHidden = true;
                this.data[0].isEditHidden = true;
                this.data[0].isHidden = true;

                var formatter = new google.visualization.NumberFormat({
                    prefix: '$', negativeColor: 'red', negativeParens: true
                });

                formatter.format(this.data[0].GraphData, 1);
                formatter.format(this.data[0].TableData, 1);

                this.chart.draw(this.data[0].GraphData, this.reportService.graph.options);
                this.table.draw(this.data[0].TableData, this.reportService.graph.tableOptions);
            };
            this.graphsLoaded = true;
        };
        
    }
    ngOnInit() {
        this.setData(true);
        this.LinksSubscription = this.pubSubService.LinksStream.subscribe(q => this.processLinks(q));
        this.PageTextSubscription =
            this.pubSubService.PageTextStream.subscribe(pt => this.processPageText(pt));
        this.GraphSubscription = this.pubSubService.GraphStream.subscribe(g => this.processGraphs(g));
    }

    ngOnDestroy() {
        this.stopProcessing();
    }

    GotoApply() {
        this.router.navigate(["Apply"]);
    }

    processLinks(q) {
        this.maintext.marS_Quicks = q;
    }

    processPageText(pt) {
        this.maintext.marS_PageTexts = pt;
    }

    processGraphs(g) {
        
    }

    stopProcessing() {
        this.LinksSubscription.unsubscribe();
    }

    setData(t: any): void {
        this.editId = this.route.snapshot.data["routeName"];
        this.pageService
            .getById(this.editId)
            .then(text => this.maintext = this.pageService.setDefaults(text));

        this.reportService
            .getByID(this.editId)
            .then(text => this.getGraphData(text));   
    }

    getGraphData(data: any) {
        switch (this.editId) {
            case "FedFunds":
                this.data = this.reportService.CreateGraphData(data, this.editId);
                break;
            case "SMFunding":
                this.data = this.reportService.CreateSMFundingGraph(data);
                break;
            case "SMLunchServed":
                this.data = this.reportService.CreateSMLunchServedGraph(data);
                break;
            case "SMBKServed":
                this.data = this.reportService.CreateSMBKServedGraph(data);
                break;
            case "BKvLNTrend":
                this.data = this.reportService.CreateBKvLNTrendGraph(data);
                break;
            case "BKPartFMElig":
                this.data = this.reportService.CreateBKPartFMEligGraph(data);
                break;
            case "LNPartFMElig":
                this.data = this.reportService.CreateLNPartFMEligGraph(data);
                break;
            case "TrendReimburse":
                this.data = this.reportService.CreateTrendReimburseGraph(data);
                break;
            case "TrendFARMElig":
                this.data = this.reportService.CreateTrendFARMEligGraph(data);
                break;
            case "MMFAPart":
                this.data = this.reportService.CreateMMFAPartGraph(data);
                break;
            case "FFVPPart":
                this.data = this.reportService.CreateFFVPPartGraph(data);
                break;
        };
        this.graphsLoaded = false;
    }

    setDefaultQuickLinks(text: MARS_QuickLinks): MARS_QuickLinks[] {
        text.isEditHidden = true;
        text.isHidden = true;
        // need to turn it into an Array
        var quicks = new Array<MARS_QuickLinks>();
        quicks[0] = text;
        return quicks;
    }

    showEdit(e, t) {
        t.isEditHidden = false;
    }

    createReports(e, t) {
        this.reportService.CreateReports(t);
    }

    refreshGraph(e, t) {
        t.isEditHidden = false;
    }

    publishReport(e, t, status) {
        t.status = status;
        var displayDate = new Date().toLocaleDateString();
        var timeDate = new Date().toLocaleTimeString();
        this.reportService
            .update(t)
            .then(g => t.date = displayDate + " " + timeDate);
        
    }

    UpdatePage($event, t) {
        switch ($event) {
            case "pagetext":
                this.setData(true);
                break;
            case "links":
                this.setData(true);
                break;
            default: this.setData(true);
        }
    }

    showAddEdit(e, t) {
        t.isAddTextHidden = false;
    }

    textDown(e, t) {
        e.preventDefault();
        var i = 1;
        for (let text of this.maintext.marS_PageTexts) {
            if (text.id == t.id) {
                if (i == this.maintext.marS_PageTexts.length) {
                    //Its already at the bottom
                    return;
                } else {
                    var newpage = i - 1;
                    var oldpage = i;
                    var newText = this.maintext.marS_PageTexts[newpage].supportingText;
                    var newheader = this.maintext.marS_PageTexts[newpage].headerText;
                    var oldText = this.maintext.marS_PageTexts[oldpage].supportingText;
                    var oldheader = this.maintext.marS_PageTexts[oldpage].headerText;
                    this.maintext.marS_PageTexts[newpage].headerText = oldheader;
                    this.maintext.marS_PageTexts[newpage].supportingText = oldText;
                    this.maintext.marS_PageTexts[oldpage].headerText = newheader;
                    this.maintext.marS_PageTexts[oldpage].supportingText = newText;
                    this.pagetextService
                        .update(this.maintext.marS_PageTexts[newpage])
                        .then(() => {
                            this.pagetextService
                                .update(this.maintext.marS_PageTexts[oldpage])
                                .then(() => {
                                    this.setData(true);
                                });
                        });
                }
            }
            i = i + 1;
        }
    }

    textUp(e, t) {
        e.preventDefault();
        var i = 1;
        for (let text of this.maintext.marS_PageTexts) {
            if (text.id == t.id) {
                if (i == 1){
                    //Its already at the top
                    return;
                } else {
                    var newpage = i - 1;
                    var oldpage = i - 2;
                    var newText = this.maintext.marS_PageTexts[newpage].supportingText;
                    var newheader = this.maintext.marS_PageTexts[newpage].headerText;
                    var oldText = this.maintext.marS_PageTexts[oldpage].supportingText;
                    var oldheader = this.maintext.marS_PageTexts[oldpage].headerText;
                    this.maintext.marS_PageTexts[newpage].headerText = oldheader;
                    this.maintext.marS_PageTexts[newpage].supportingText = oldText;
                    this.maintext.marS_PageTexts[oldpage].headerText = newheader;
                    this.maintext.marS_PageTexts[oldpage].supportingText = newText;
                    this.pagetextService
                        .update(this.maintext.marS_PageTexts[newpage])
                        .then(() => {
                            this.pagetextService
                                .update(this.maintext.marS_PageTexts[oldpage])
                                .then(() => {
                                    this.setData(true);
                                });
                        });
                }
            }
            i = i + 1;
        }
    }

    textDelete(e, t) {
        e.preventDefault();
        this.pagetextService
            .delete(t.id.toString())
            .then(response => {
                this.setData(true);
            });
    }

    changeYear(e) {
        this.reportService.graph.year = e.target.value;
        this.reportService
            .changeByID(this.editId)
            .then(text => this.getGraphData(text));   
    }
}