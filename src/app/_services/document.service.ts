import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doc } from '../models/doc';
import { Observable } from 'rxjs';
import { Project } from '../models/project';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable()
export class DocumentService {

  private urlDoc = 'http://localhost:3333/showdoc'
  private urlMandate = 'http://localhost:3333/mandate/'

  constructor(private http: HttpClient) { }


  public viewDocument(doc: Doc): Observable<any> {
    let body = {path: doc.docPath};
    return this.http.post(this.urlDoc,body, httpOptions);
  }

  public openMandate(project: Project): Observable<any> {
    const fullUrl = this.urlMandate+project._id;
    return this.http.get(fullUrl, httpOptions);
  }

}
