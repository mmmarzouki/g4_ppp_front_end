import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "../../../layouts/layout.module";
import { DefaultComponent } from "../default.component";
import { BlankComponent } from "./blank.component";
import { NotificationsComponent } from "./notifications/notifications/notifications.component";
import { DocumentsComponent } from "./documents/documents/documents.component";
import { StatusComponent } from "./status/status/status.component";
import { ProjectResolver } from "../../../../_resolvers/project-resolver";
import { ApiService } from "../../../../_services/api.service";

const routes: Routes = [

    {
    path: "project",
    component: DefaultComponent,
    children: [
      {
        path: ":projectid/status",
        component: StatusComponent,

        resolve: { project: ProjectResolver }
      },
      {
        path: ":projectid/documents",
        component: DocumentsComponent,
        resolve: { project: ProjectResolver }
      },
      {
        path: ":projectid/notifications",
        component: NotificationsComponent,
        resolve: { project: ProjectResolver }
      },
      {
        path: "",
        redirectTo: "status",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [
    BlankComponent,
    NotificationsComponent,
    DocumentsComponent,
    StatusComponent,
    
  ],
  providers: []
})
export class BlankModule {}
