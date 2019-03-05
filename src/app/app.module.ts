import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExplorerComponent } from './components/dashboard/ged/explorer/explorer.component';
import {HttpClientModule} from '@angular/common/http';
import { PdfViewerComponent } from './components/dashboard/ged/pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
