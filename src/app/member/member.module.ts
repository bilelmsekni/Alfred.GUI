import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MemberRoutingModule } from "./member-routing.modules";
import { MemberService } from "./member.service";
import { MemberDetailsHomeComponent } from "./member-details-home.component";
import { MemberDetailsComponent } from "./member-details.component";
import { MemberComponent } from "./member.component";
import { HttpModule } from "@angular/http";
//import { RouterModule} from "@angular/router";

@NgModule(
    {
        imports: [
            CommonModule,
            HttpModule,
            MemberRoutingModule
        ],
        declarations: [
            MemberComponent,
            MemberDetailsComponent,
            MemberDetailsHomeComponent
        ],
        providers: [
            MemberService
        ]
    })
export class MemberModule { }
