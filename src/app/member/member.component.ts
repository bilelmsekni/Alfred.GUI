import { Component, OnInit } from "@angular/core";
import { MemberService } from "./member.service";
import { MemberModel } from "./member.model";
@Component({
    providers: [MemberService],
    templateUrl: "./member/member.component.html"
})
export class MemberComponent implements OnInit {
    private model: MemberModel;
    constructor(private _memberService: MemberService) {
        this.model = new MemberModel();
    }

    public ngOnInit() {
        this._memberService.getMembers()
            .subscribe(members => this.model.members = members, error => this.model.errorMessage = <any>error);
    }

}
