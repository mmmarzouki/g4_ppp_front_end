import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { ProjectResolver } from '../_resolvers/project-resolver';

const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': '',
                'loadChildren': '.\/pages\/default\/blank\/blank.module#BlankModule',
            },

        ],
    },
    {
        'path': '**',
        'redirectTo': '',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProjectResolver]
})
export class ThemeRoutingModule { }