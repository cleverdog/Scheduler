import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DesktopModule } from './desktop/desktop.module';
const routes: Routes = [];
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        DesktopModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        RouterModule
    ]
})
export class AppModule {
}
