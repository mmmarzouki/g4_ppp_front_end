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

    private urlDoc = 'http://localhost:3333/showdoc';
    private urlMandate = 'http://localhost:3333/mandate/';
    private urlPid = 'http://localhost:3333/create/pid/';
    private urlBusinessCase = 'http://localhost:3333/create/businesscase/';

    constructor(private http: HttpClient) { }


    public viewDocument(doc: Doc): Observable<any> {
        let body = { path: doc.docPath };
        return this.http.post(this.urlDoc, body, httpOptions);
    }

    public openMandate(project: Project): Observable<any> {
        const fullUrl = this.urlMandate + project._id;
        return this.http.get(fullUrl, httpOptions);
    }

    public uploadPid(body, idProject, idProcess): Observable<Project> {
        const fullUrl = this.urlPid + idProject + '/' + idProcess;
        return this.http.post<Project>(fullUrl, body);

    }

    public uploadBusinessCase(body, idProject, idProcess): Observable<Project> {
        const fullUrl = this.urlBusinessCase + idProject + '/' + idProcess;
        return this.http.post<Project>(fullUrl, body);

    }
}
