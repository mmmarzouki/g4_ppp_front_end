import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';


@Injectable()
export class ProjectService {

  private baseUrl= 'http://localhost:3333/projects';
  
  constructor(private http: HttpClient) { }

  public create(formData: FormData): Observable<Project> {
    return this.http.post<Project>(this.baseUrl,formData);
  }

}
