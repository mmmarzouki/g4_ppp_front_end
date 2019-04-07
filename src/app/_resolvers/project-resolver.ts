import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable()
export class ProjectResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {
    this.apiService.classname = "project";
  }


  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getMany({id:  route.paramMap.get("projectid")});

  }
}