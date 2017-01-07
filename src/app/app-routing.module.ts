import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { CommunityDetailsComponent, CommunityComponent } from './community';
import { ArtifactDetailsComponent, ArtifactComponent } from './artifact';
//import { MemberComponent } from "./member/member.component";
//import { MemberDetailsComponent } from "./member/member-details.component";
//import { MemberDetailsHomeComponent } from "./member/member-details-home.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'communities',
                component: CommunityComponent
            },
            {
                path: 'members',
                loadChildren: './member/member.module#MemberModule'
                // component: MemberComponent,
                //  children: [
                //      {
                //          path: "",
                //          component: MemberDetailsHomeComponent
                //      },
                //     {
                //         path: ":id",
                //         component: MemberDetailsComponent
                //     }
                // ]
            },
            {
                path: 'artifacts',
                component: ArtifactComponent
            },
            {
                path: 'communities/:id',
                component: CommunityDetailsComponent
            },
            {
                path: 'artifacts/:id',
                component: ArtifactDetailsComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
