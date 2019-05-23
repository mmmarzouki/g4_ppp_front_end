import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ApiService } from './_services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './theme/pages/default/blank/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { AuthInterceptor } from './_interceptors/authinterceptor';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DocumentService } from './_services/document.service';
import { ProjectService } from './_services/project.service';

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    providers: [ProjectService, DocumentService, HttpClientModule, ScriptLoaderService, ApiService, AuthService, AuthGuardService,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
