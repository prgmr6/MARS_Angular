//---------Import @angular------------
import { Directive, Input, ElementRef, AfterViewInit, ViewChild }       from '@angular/core';
import { Http }                                                         from '@angular/http';
import { RouterLink  }                                                  from '@angular/router';
import { Benefits  }                                                    from '../models/benefits.model';
import { BenefitsItem }                                                 from '../models/benefitsitem.model';
import { FrontPage }                                                    from '../models/frontpage.model';
import { ConfigurationService }                                         from '../service/configuration.service';

// declarations
declare var $: any;

@Directive({
    selector: '[benefittooltip]',
    host: {
        '(mouseover)': 'show()',
        '(mouseout)': 'release()'
    }
})

export class Benefitstip implements AfterViewInit {
    @Input('benefittooltip') front: FrontPage;

    constructor(private config: ConfigurationService) {

    }

    ngAfterViewInit() {

    }

    show() {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = false;
        }
    }

    release() {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = true;
        }
    }

    showEdit() {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = false;
        }
    }

    saveEdit() {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = true;
        }
    }

    cancelEdit() {
        if (this.front !== undefined && this.config.AdminUserLogged()) {
            this.front.BenefitsisHidden = true;
        }
    }
}