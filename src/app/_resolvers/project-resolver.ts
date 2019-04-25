import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class ProjectResolver implements Resolve<any> {

    project: Project;
    constructor(private apiService: ApiService) {
        this.apiService.classname = "projects";
    }


    resolve(route: ActivatedRouteSnapshot) {
        return this.apiService.getMany({ _id: route.paramMap.get("projectid") }).pipe(tap(project => {
            this.project = project[0] as Project;
        }));

    }
}