import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { BlankComponent } from './blank.component';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { DocumentsComponent } from './documents/documents/documents.component';
import { StatusComponent } from './status/status/status.component';

const routes: Routes = [
    {
        'path': 'project/:projectid',
        'component': DefaultComponent,
        'children': [
            {
                'path': 'status',
                'component': StatusComponent,
            },
            {
                'path': 'documents',
                'component': DocumentsComponent,
            },
            {
                'path': 'notifications',
                'component': NotificationsComponent,
            },
            {
                'path': '',
                'redirectTo': 'status',
                'pathMatch': 'full',
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        BlankComponent,
        NotificationsComponent,
        DocumentsComponent,
        StatusComponent,
    ],
})
export class BlankModule {
}