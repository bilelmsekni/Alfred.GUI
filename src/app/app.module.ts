import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ScoreboardComponent } from "./dashboard/scoreboard.component";
import { ArtifactboardComponent } from "./artifact/artifactboard.component";
import { CommunityboardComponent } from "./dashboard/communityboard.component";
import { DoneboardComponent } from "./dashboard/doneboard.component";
import { CommunityComponent } from "./community/community.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommunityFilterPipe } from "./community/community-filter.pipe";
import { LeaderFilterPipe } from "./member/leader-filter.pipe";
import { MemberComponent } from "./member/member.component";
import { MemberFilterPipe } from "./member/member-filter.pipe";
import { ArtifactComponent } from "./artifact/artifact.component";
import { ArtifactFilterPipe } from "./artifact/artifact-filter.pipe";
import { ArtifactStatusPipe } from "./artifact/artifact-status.pipe";
import { ArtifactTypePipe } from "./artifact/artifact-type.pipe";
import { ArtifactLabelPipe } from "./artifact/artifact-label.pipe";
import { ArtifactPieComponent } from "./artifact/artifactpie.component";
import { ConfigurationService } from "./common/configuration.service";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { APP_CONFIG_ENV, CONFIG_ENV } from "./config/env.config";

@NgModule({
    bootstrap: [AppComponent],
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
        ArtifactFilterPipe,
        ArtifactStatusPipe,
        ArtifactTypePipe,
        ArtifactLabelPipe,
        ArtifactPieComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ChartsModule
    ],

    providers: [
        ConfigurationService,
        { provide: APP_CONFIG_ENV, useValue: CONFIG_ENV }
    ]
})
export class AppModule { }
