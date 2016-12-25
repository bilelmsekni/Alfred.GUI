import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MemberComponent } from "./member.component";
import { MemberDetailsComponent } from "./member-details.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "member",
                component: MemberComponent,
                children: [
                    {
                        path: "",
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

