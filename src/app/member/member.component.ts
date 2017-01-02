import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/logging.service';
import { MemberService } from './member.service';
import { MemberModel } from './member.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    providers: [MemberService],
    templateUrl: './member.component.html'
})
export class MemberComponent implements OnInit {
    private model: MemberModel;
    constructor(private _memberService: MemberService,
    private _loggingService: LoggingService,
        private _route: ActivatedRoute) {
        this.model = new MemberModel();
    }

    public ngOnInit() {
        this._route.queryParams
        .switchMap((params: Params) => this._memberService.getMembersWithQueryParams(params))
        .subscribe(members => this.model.members = members, error => this._loggingService.logError(error));
    }

}
