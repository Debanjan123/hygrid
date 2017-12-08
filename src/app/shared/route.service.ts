import { Injectable, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';

@Injectable()

export class RouteService implements OnInit {
    constructor() {

    }
    ngOnInit() {
    }

    topMenues() {
        return [
            { title: 'Sources', name: 'hfaDatabase', isActive: false, href: '/hfaDatabase', iconClass: 'fa fa-lg fa-fw fa-database' },
            { title: 'Reports', name: 'report', isActive: false, href: '/report', iconClass: 'fa fa-lg fa-fw fa-th' },
            { title: 'Reports Users', name: 'serviceRepUser', isActive: false, href: '/serviceRepUser', iconClass: 'fa fa-lg fa-fw fa-user' },
            { title: 'Category', name: 'category', isActive: false, href: '/category', iconClass: 'fa fa-lg fa-fw fa-tags' },
            { title: 'System Setting', name: 'colFormatting', isActive: false, href: '/colFormatting', iconClass: 'fa fa-lg fa-fw fa-gear' },
            { title: 'User', name: 'User', isActive: false, href: '/mapview', iconClass: 'fa fa-lg fa-fw fa-user' },
            { title: 'Application', name: 'Application', isActive: false, href: '/project', iconClass: 'fa fa-lg fa-fw fa-group' },
            { title: 'Company', name: 'Company', isActive: false, href: '/property', iconClass: 'fa fa-lg fa-fw fa-building' },
        ]

    }

    selectTopMenu(selectedTpMenu) {
        const menus = this.topMenues();
        if (selectedTpMenu.length != 0) {
            menus.map(res => {
                if (res.name === selectedTpMenu[0].path) {
                    res.isActive = true;
                } else {
                    res.isActive = false;
                }
            });
        }
        return menus;
    }


}
