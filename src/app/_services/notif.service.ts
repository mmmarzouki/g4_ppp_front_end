import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { User } from '../auth/_models/user';

@Injectable()
export class NotifService {
  private baseUrl = 'http://localhost:3333/notif';

  private baseUrl1 = 'http://localhost:3333/userByEmail';

  private processUrl = 'http://localhost:3333/process';

  private processUpdateUrl = 'http://localhost:3333/updateProcess';
 

  constructor(private http: HttpClient) { }
  public create(formData: FormData): Observable<Project> {
    return this.http.post<any>(this.baseUrl, formData);
}

  public getUserByEmail(email: string): Observable<User>{
    return this.http.post<User>(this.baseUrl1, {email : email});
  }

  public createProcess(formData1: FormData): Observable<Project> {
    return this.http.post<any>(this.processUrl, formData1);
}

public updateProcess(formData2: FormData): Observable<Project> {
  return this.http.post<any>(this.processUrl, formData2);

}

}
