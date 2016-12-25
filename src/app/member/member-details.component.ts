import { Component, OnInit } from "@angular/core";
import { Member } from "./member.entity";
import { ActivatedRoute, Params } from "@angular/router";
import { MemberService } from "./member.service";

@Component({
    templateUrl: "./member/member-details.component.html"
})
export class MemberDetailsComponent implements OnInit {
    private model: Member;
    private _id: string = "id";
    constructor(private _memberService: MemberService,
        private _route: ActivatedRoute) {
            this.model = new Member();
    }

    public ngOnInit() {
        this._route.params
        .switchMap((params: Params) => this._memberService.getMember(+params[this._id]))
        .subscribe((member: Member) => this.model = member, error => console.log(<any>error));
    }
}
