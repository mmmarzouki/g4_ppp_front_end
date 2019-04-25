import { Injectable, resolveForwardRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { tap, shareReplay, catchError, concatMap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLogged() {
        return localStorage.getItem("authToken")
    }
    get isLoggedIn() {
        if (localStorage.getItem("authToken")) {
            this.loggedIn.next(true);
        }
        else {
            this.router.navigate(['login'])

        }
        return this.loggedIn.asObservable();
    }
    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        return this.http
            .post("http://localhost:3333/login", {
                email,
                password
            })
            .pipe(
            concatMap(res => {
                this.setSession(res);
                return this.http.get("http://localhost:3333/users/profile");
            }
            )
            );
    }

    private setSession(authResult) {
        localStorage.setItem("authToken", authResult.token);
        this.loggedIn.next(true);
    }

    logout() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        this.loggedIn.next(false);
        this.router.navigate(['login']);
    }
}
