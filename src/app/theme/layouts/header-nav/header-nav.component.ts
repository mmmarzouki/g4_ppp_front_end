import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ProjectResolver } from '../../../_resolvers/project-resolver';
import { Project } from '../../../models/project';
import { AuthService } from '../../../_services/auth.service';
import {User} from "../../../auth/_models";
import {ApiService} from "../../../_services/api.service";


declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    project: Project;
    projects: Project[];
    constructor(private projectResolver: ProjectResolver, private authService: AuthService,private api: ApiService) {

    }
    ngOnInit() {
        this.project = this.projectResolver.project;

        const user = JSON.parse(localStorage.getItem("user"));

        this.api.getMany<Project>({ collaborators: { $elemMatch: { collaboratorId: user._id } } }).subscribe(projects => {
            this.projects = projects;
        });
        console.log(this.projects);
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }
    logout() {
        this.authService.logout();
    }

}
