import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doc } from '../models/doc';
import { Observable } from 'rxjs';


const httpOptionsFile = {
  headers: new HttpHeaders({ 'responseType': 'application/pdf' })
};


@Injectable()
export class DocumentService {

  private baseUrl = 'http://localhost:3333/showdoc'

  constructor(private http: HttpClient) { }


  public viewDocument(doc: Doc): Observable<any> {
    let body = {path: doc.docPath};
    return this.http.post(this.baseUrl,body, httpOptionsFile);
  }

}
