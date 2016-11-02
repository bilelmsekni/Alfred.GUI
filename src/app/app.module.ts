import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreboardComponent } from './dashboard/scoreboard.component';
import { TaskboardComponent } from './dashboard/taskboard.component';
import { CommunityboardComponent } from './dashboard/communityboard.component';
import { DoneboardComponent } from './dashboard/doneboard.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,
        DashboardComponent,
        ScoreboardComponent,
        TaskboardComponent,
        CommunityboardComponent,
        DoneboardComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }