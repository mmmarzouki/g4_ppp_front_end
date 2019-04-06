import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:3333";

@Injectable()
export class ApiService {
  public classname: string;
  constructor(private http: HttpClient) {}

  getMany<T>(criteria = null): Observable<T[]> {

    const url = `${apiUrl}/${this.classname}`;
    return this.http.get<T[]>(url, { params: criteria}).pipe(
      catchError(this.handleError("getTs", []))
    );
  }

  getOne<T>(id: number): Observable<T> {
    const url = `${apiUrl}/${this.classname}/${id}`;
    return this.http.get<T>(url).pipe(
      catchError(this.handleError<T>(`getT id=${id}`))
    );
  }

  add<T>(user): Observable<T> {
    const url = `${apiUrl}/${this.classname}`;
    return this.http
      .post<T>(url, user, httpOptions)
      .pipe(catchError(this.handleError<T>("addT")));
  }

  update<T>(id, user): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      catchError(this.handleError<any>("updateT"))
    );
  }

  delete<T>(id): Observable<T> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<T>(url, httpOptions).pipe(
      catchError(this.handleError<T>("deleteT"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
