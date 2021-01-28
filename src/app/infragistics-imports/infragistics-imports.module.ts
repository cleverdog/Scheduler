import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	IgxComboModule,
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule
} from 'igniteui-angular';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IgxComboModule,
        IgxButtonModule,
        IgxIconModule,
        IgxRippleModule
    ],
    exports: [
        IgxComboModule,
        IgxButtonModule,
        IgxIconModule,
        IgxRippleModule
    ]
})
export class InfragisticsImportsModule {
}
