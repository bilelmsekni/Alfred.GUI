import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MemberComponent } from './member.component';
import { MemberDetailsComponent } from './member-details.component';
import { MemberDetailsHomeComponent } from './member-details-home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MemberComponent,
                children: [
                    {
                        path: '',
                        component: MemberDetailsHomeComponent
                    },
                    {
                        path: ':id',
                        component: MemberDetailsComponent
                    }
                ]
            }
        ]
        )
    ],
    exports: [
        RouterModule
    ]
})

export class MemberRoutingModule { }

