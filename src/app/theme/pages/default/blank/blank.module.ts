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
import { ProcessesComponent } from './documents/processes/processes.component';
import { ModalComponent } from './documents/creation/modal/modal.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PidComponent } from './documents/creation/pid/pid.component';
import { SendnotifComponent } from "./notifications/sendnotif/sendnotif.component";

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
                path: ":projectid/processes",
                component: ProcessesComponent,
                resolve: { project: ProjectResolver }
            },
            {
                path: ":projectid/document/:idprocess",
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
    imports: [CommonModule, RouterModule.forChild(routes), LayoutModule, NgbModule, FormsModule,
        ReactiveFormsModule],
    exports: [RouterModule],
    declarations: [
        BlankComponent,
        NotificationsComponent,
        DocumentsComponent,
        StatusComponent,
        ProcessesComponent,
        ModalComponent,
        PidComponent,
        SendnotifComponent

    ],
    providers: [],
    entryComponents: [ModalComponent, SendnotifComponent]
})
export class BlankModule { }
