import './extensions/rxjs-extensions';

import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { HashLocationStrategy,
    LocationStrategy }                  from '@angular/common';
import { AppRoutingModule }             from './app.routing';
import { AppComponent }                 from './app.component';
import { Home }                         from './components/home/home.component';
import { Template }                     from './components/template/template.component';
import { Data }                         from './components/data/data.component';
import { DataGraph }                    from './components/data/datagraph.component';
import { News }                         from './components/news/news.component';
import { Apply }                        from './components/apply/apply.component';
import { MainTextEditorComponent }      from './editor/maintexteditor.component';
import { MainGraphEditorComponent }     from './editor/maingrapheditor.component';
import { LinksEditorComponent }         from './editor/linkseditor.component';
import { TopPageEditorComponent }       from './editor/toppageeditor.component';
import { ImageEditorComponent }         from './editor/imageeditor.component';
import { AddLinkEditorComponent }       from './editor/addlinkeditor.component';
import { AddCrumbEditorComponent }      from './editor/addcrumbeditor.component';
import { MainTextAddEditorComponent }   from './editor/maintextaddeditor.component';
import { GraphEditorComponent }         from './editor/grapheditor.component';

import { BreadCrumbEditorComponent }    from './editor/breadcrumbeditor.component';
import { BenefitsEditorComponent }      from './editor/benefitseditor.component';
import { HomeCarouselEditorComponent }  from './editor/homecarouseleditor.component';
import { ProgramEditorComponent }       from './editor/programeditor.component';
import { PageTexttip }                  from './directives/pagetexttip.directive';
import { Pagetip }                      from './directives/pagetip.directive';
import { Linkstip }                     from './directives/linkstip.directive';
import { BreadCrumbtip }                from './directives/breadcrumbtip.directive';
import { Graphtip }                     from './directives/graphtip.directive';
import { Benefitstip }                  from './directives/benefits.directive';
import { Programtip }                   from './directives/program.directive';
import { Slidertip }                    from './directives/slidertip.directive';
import { HeaderComponent }              from './components/header/header.component';
import { Tab }                          from './components/tabs/tab.component';
import { Tabs }                         from './components/tabs/tabs.component';
import { CarouselComponent }            from './directives/carousel.component';
import { HomeCarouselComponent }        from './directives/homecarousel.component';
import { SlideComponent }               from './directives/slide.component';
import { HomeSlideComponent }           from './directives/homeslide.component';
//import { GoogleChartComponent }         from './components/data/googlechart.component';
//import { EvolutionComponent }           from './components/data/evolution.component';
//
// jquery pointer
//
declare var $: any;
//
//  imports: Angular System level include files needed
//  declarations: User created modules used in routing, mainly components.
//  providers:  Angular Modules in use by the application
//  bootstrap:  the first component loaded when application starts, usually the app.component
//
@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, Home, Template, Data, DataGraph, Apply, News, MainTextEditorComponent,
        LinksEditorComponent, TopPageEditorComponent, ImageEditorComponent, AddLinkEditorComponent,
        AddCrumbEditorComponent, ProgramEditorComponent, MainGraphEditorComponent, GraphEditorComponent, 
        MainTextAddEditorComponent, BreadCrumbEditorComponent, PageTexttip, Linkstip, Pagetip,
        BreadCrumbtip, Benefitstip, Programtip, Slidertip, Graphtip, HeaderComponent, Tab, Tabs,
        CarouselComponent,
        HomeCarouselComponent, SlideComponent, HomeSlideComponent, HomeCarouselEditorComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
