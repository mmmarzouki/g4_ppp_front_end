import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { Process } from '../models/process';
import { Doc } from '../models/doc';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DocumentService {

  private baseUrl = 'http://localhost:3333/doc/'

  constructor(private http: HttpClient) { }

  public viewDocument(project: Project, process: Process, doc: Doc): Observable<any> {
    const fullUrl = this.baseUrl + project.name +'/' + process.name + '/' + doc.docName ;
    return this.http.get(fullUrl, httpOptions);
  }

}
