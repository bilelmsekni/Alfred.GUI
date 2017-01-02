import { NgModule } from '@angular/core';
import { LoggingService } from './common/logging.service';
import { ArtifactService } from './artifact/artifact.service';
// import { MemberModule } from "./member/member.module";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreboardComponent } from './dashboard/scoreboard.component';
import { ArtifactboardComponent } from './artifact/artifactboard.component';
import { CommunityComponent } from './community/community.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { ArtifactPieComponent } from './artifact/artifactpie.component';
import { NavigationComponent } from './common/navigation.component';
import { CommunityDetailsComponent } from './community/communitydetails.component';
import { ArtifactDetailsComponent } from './artifact/artifactdetails.component';
// import { MemberComponent } from "./member/member.component";
// import { MemberDetailsComponent } from "./member/member-details.component";
// import { MemberDetailsHomeComponent } from "./member/member-details-home.component";

import { ConfigurationService } from './common/configuration.service';
import { CommunityService } from './community/community.service';

import { CommunityFilterPipe } from './community/community-filter.pipe';
import { ArtifactFilterPipe } from './artifact/artifact-filter.pipe';
import { ArtifactStatusPipe } from './artifact/artifact-status.pipe';
import { ArtifactTypePipe } from './artifact/artifact-type.pipe';
import { ArtifactLabelPipe } from './artifact/artifact-label.pipe';
import { MemberFilterPipe } from './member/member-filter.pipe';
import { LeaderFilterPipe } from './member/leader-filter.pipe';
import { CommunityLabelPipe } from './community/community-label.pipe';
import { APP_CONFIG_ENV, CONFIG_ENV } from './config/env.config';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        DashboardComponent,
        ScoreboardComponent,
        ArtifactboardComponent,
        CommunityComponent,
        CommunityFilterPipe,
        LeaderFilterPipe,
        MemberFilterPipe,
        // MemberComponent,
        // MemberDetailsHomeComponent,
        // MemberDetailsComponent,
        ArtifactComponent,
        ArtifactFilterPipe,
        ArtifactStatusPipe,
        ArtifactTypePipe,
        ArtifactLabelPipe,
        CommunityLabelPipe,
        ArtifactPieComponent,
        NavigationComponent,
        CommunityDetailsComponent,
        ArtifactDetailsComponent,
        ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        // MemberModule,
        ChartModule
    ],

    providers: [
        ConfigurationService,
        { provide: APP_CONFIG_ENV, useValue: CONFIG_ENV },
        CommunityService,
        ArtifactService,
        LoggingService
    ]
})
export class AppModule { }
