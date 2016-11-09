import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommunityComponent } from './community/community.component';
import { MemberComponent } from './member/member.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
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
                component: MemberComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }