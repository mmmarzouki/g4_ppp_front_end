import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ApiService } from './_services/api.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HomeComponent } from './theme/pages/default/blank/home/home.component';
@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        HomeComponent
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HttpClientModule,
    ],
    providers: [ScriptLoaderService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }