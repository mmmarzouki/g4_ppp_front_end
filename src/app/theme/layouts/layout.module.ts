import { NgModule } from '@angular/core';
import { DefaultComponent } from '../pages/default/default.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideLeftDisplayDisabledComponent } from '../pages/aside-left-display-disabled/aside-left-display-disabled.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        DefaultComponent,
        HeaderNavComponent,
        AsideLeftDisplayDisabledComponent,
        FooterComponent,
        ScrollTopComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
    ],
    exports: [
        DefaultComponent,
        HeaderNavComponent,
        AsideLeftDisplayDisabledComponent,
        FooterComponent,
        ScrollTopComponent,
        HrefPreventDefaultDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule.forRoot()
    ]
})
export class LayoutModule {
}
