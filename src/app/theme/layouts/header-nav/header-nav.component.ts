import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ProjectResolver } from '../../../_resolvers/project-resolver';
import { Project } from '../../../models/project';


declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    project: Project;
    constructor(private projectResolver: ProjectResolver) {

    }
    ngOnInit() {
        this.project = this.projectResolver.project;
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

}