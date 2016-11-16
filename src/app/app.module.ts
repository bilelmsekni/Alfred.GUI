import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreboardComponent } from './dashboard/scoreboard.component';
import { ArtifactboardComponent } from './dashboard/artifactboard.component';
import { CommunityboardComponent } from './dashboard/communityboard.component';
import { DoneboardComponent } from './dashboard/doneboard.component';
import { CommunityComponent } from './community/community.component';
import { AppRoutingModule } from './app-routing.module';
import { CommunityFilterPipe } from './community/community-filter.pipe';
import { LeaderFilterPipe } from './member/leader-filter.pipe';
import { MemberComponent } from './member/member.component';
import { MemberFilterPipe } from './member/member-filter.pipe';
import { ArtifactComponent } from './artifact/artifact.component';
import { ArtifactFilterPipe } from './artifact/artifact-filter.pipe';
import { ConfigurationService } from './common/configuration.service';
import { APP_CONFIG_ENV, CONFIG_ENV } from './config/env.config';

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
        ArtifactboardComponent,
        CommunityboardComponent,
        DoneboardComponent,
        CommunityComponent,
        CommunityFilterPipe,
        LeaderFilterPipe,
        MemberFilterPipe,
        MemberComponent,
        ArtifactComponent,
        ArtifactFilterPipe],
    bootstrap: [AppComponent],
    providers: [
        ConfigurationService,
        { provide: APP_CONFIG_ENV, useValue: CONFIG_ENV }
    ]
})
export class AppModule { }