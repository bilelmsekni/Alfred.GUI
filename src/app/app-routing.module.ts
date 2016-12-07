import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommunityComponent } from "./community/community.component";
import { MemberComponent } from "./member/member.component";
import { ArtifactComponent } from "./artifact/artifact.component";
import { CommunityDetailsComponent} from "./community/communitydetails.component";
import { ArtifactDetailsComponent } from "./artifact/artifactdetails.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "",
                redirectTo: "/dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                component: DashboardComponent
            },
            {
                path: "communities",
                component: CommunityComponent
            },
            {
                path: "members",
                component: MemberComponent
            },
            {
                path: "artifacts",
                component: ArtifactComponent
            },
            {
                path: "communities/:id",
                component: CommunityDetailsComponent
            },
            {
                path: "artifacts/:id",
                component: ArtifactDetailsComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
