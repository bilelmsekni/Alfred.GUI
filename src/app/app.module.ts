import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreboardComponent } from './dashboard/scoreboard.component';
import { TaskboardComponent } from './dashboard/taskboard.component';
import { CommunityboardComponent } from './dashboard/communityboard.component';
import { DoneboardComponent } from './dashboard/doneboard.component';
import { CommunityComponent } from './community/community.component';
import { AppRoutingModule } from './app-routing.module';
import { CommunityFilterPipe} from './community/community-filter.pipe';
import { LeaderFilterPipe } from './member/leader-filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ScoreboardComponent,
        TaskboardComponent,
        CommunityboardComponent,
        DoneboardComponent,
        CommunityComponent,
        CommunityFilterPipe,
        LeaderFilterPipe],        
    bootstrap: [AppComponent]
})
export class AppModule { }