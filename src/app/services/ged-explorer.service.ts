import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Folder} from '../models/folder';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class GedExplorerService {

  apiEndpoint = environment.ApiEndPoint + '/ged/';

  constructor(private http: HttpClient) { }

  public getFolderContent(folder: Folder): Observable<Folder> {
    return this.http.get<Folder>(this.apiEndpoint + folder.id, httpOptions);
  }
}
