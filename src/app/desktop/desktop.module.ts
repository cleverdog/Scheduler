import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfragisticsImportsModule } from '../infragistics-imports/infragistics-imports.module';
import { DesktopRoutingModule } from './desktop-routing.module';

@NgModule({
    declarations: [DesktopComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        InfragisticsImportsModule,
        DesktopRoutingModule
    ],
    exports: [
        DesktopComponent
    ]
})
export class DesktopModule {
}
