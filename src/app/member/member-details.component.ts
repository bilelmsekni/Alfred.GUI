import { Component, OnInit } from "@angular/core";
import { Member } from "./member.entity";
import { ActivatedRoute } from "@angular/router";
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
        let url = +this._route.snapshot.params[this._id];
        this._memberService.getMember(url)
            .subscribe((member: Member) => this.model = member);
    }
}
