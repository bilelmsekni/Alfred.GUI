import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { MemberModel } from './member.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    providers: [MemberService],
    templateUrl: './member.component.html'
})
export class MemberComponent implements OnInit {
    private model: MemberModel;
    constructor(private _memberService: MemberService,
        private _route: ActivatedRoute) {
        this.model = new MemberModel();
    }

    public ngOnInit() {
        let queryParams = this._route.snapshot.queryParams;
        this._memberService.getMembersWithQueryParams(queryParams)
            .subscribe(members => this.model.members = members, error => this.model.errorMessage = <any>error);
    }

}
