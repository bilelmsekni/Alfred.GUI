import { MemberService } from './common';
import { MemberRoutingModule } from './member-routing.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberCreateComponent } from './create';
import { MemberDetailsComponent } from './details';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        MemberRoutingModule
    ],
    exports: [],
    declarations: [
        MemberComponent,
        MemberCreateComponent,
        MemberDetailsComponent
    ],
    providers: [MemberService],
})
export class MemberModule { }
