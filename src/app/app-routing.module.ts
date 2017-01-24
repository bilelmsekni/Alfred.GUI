import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { CommunityDetailsComponent, CommunityComponent } from './community';
import { ArtifactDetailsComponent, ArtifactComponent } from './artifact';

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
                path: 'members',
                loadChildren: './member/member.module#MemberModule'
            },
            {
                path: 'communities',
                component: CommunityComponent
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
