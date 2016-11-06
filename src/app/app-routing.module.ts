import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
    imports: [
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
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}