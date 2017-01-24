import { MemberRoutingModule } from './member-routing.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberDetailsComponent } from './member-details.component';
import { MemberCreateComponent } from './member-create.component';
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
    providers: [],
})
export class MemberModule { }
