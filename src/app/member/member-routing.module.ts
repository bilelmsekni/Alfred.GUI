import { MemberDetailsComponent } from './member-details.component';
import { MemberCreateComponent } from './member-create.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';

@NgModule({
    imports: [RouterModule.forChild(
        [{
            path: '',
            component: MemberComponent,
            children: [
                {
                    path: 'create',
                    component: MemberCreateComponent
                },
                {
                    path: ':id',
                    component: MemberDetailsComponent
                }
            ]
        },
        ])],
    exports: [RouterModule]
})
export class MemberRoutingModule { }