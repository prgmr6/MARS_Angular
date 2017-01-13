//---------Import @angular------------
import { Directive, Input, ElementRef, AfterViewInit, ViewChild }       from '@angular/core';
import { Http }                                                         from '@angular/http';
import { RouterLink }                                                   from '@angular/router';
import { MARS_Page }                                                    from '../models/mars_page.model';
import { MARS_Breadcrumbs }                                             from '../models/mars_breadcrumbs.model';
import { ConfigurationService }                                         from '../service/configuration.service';

// declarations
declare var $: any;

@Directive({
    selector: '[breadcrumbtooltip]',
    host: {
        '(mouseover)': 'show()',
        '(mouseout)': 'release()'
    }
})

export class BreadCrumbtip implements AfterViewInit {
    @Input('breadcrumbtooltip') crumbs: MARS_Breadcrumbs;

    constructor(private config: ConfigurationService) {

    }

    ngAfterViewInit() {

    }

    show() {
        if (this.crumbs !== undefined && this.config.AdminUserLogged()) {
            this.crumbs.isHidden = false;
        }
    }

    release() {
        this.crumbs.isHidden = true;
    }

    /// Show Editor
    showEdit() {
        this.crumbs.isEditHidden = false;
    }

    /// Hide Editor
    saveEdit() {
        this.crumbs.isEditHidden = true;
    }

    /// Hide Editor
    cancelEdit() {
        this.crumbs.isEditHidden = true;
    }
}