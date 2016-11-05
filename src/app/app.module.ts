import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreboardComponent } from './dashboard/scoreboard.component';
import { TaskboardComponent } from './dashboard/taskboard.component';
import { CommunityboardComponent } from './dashboard/communityboard.component';
import { DoneboardComponent } from './dashboard/doneboard.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo:'/dashboard',
                pathMatch:'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'communities',
                component: CommunityComponent
            }
        ])],
    declarations: [AppComponent,
        DashboardComponent,
        ScoreboardComponent,
        TaskboardComponent,
        CommunityboardComponent,
        DoneboardComponent,
        CommunityComponent],        
    bootstrap: [AppComponent]
})
export class AppModule { }