import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,
    DashboardComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }