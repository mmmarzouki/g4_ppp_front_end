import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable()
export class ProjectService {

  private baseUrl: 'http://localhost:3333/project'
  
  constructor(private http: HttpClient) { }

  public create(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl,formData, httpOptions);
  }

}
