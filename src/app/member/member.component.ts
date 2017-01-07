import { Member } from './member.entity';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/services';
import { MemberService } from './member.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    providers: [MemberService],
    templateUrl: './member.component.html'
})
export class MemberComponent implements OnInit {
    public listFilter: string = '';
    public members: Member[] = [];
    constructor(private _memberService: MemberService,
        private _loggingService: LoggingService,
        private _route: ActivatedRoute) {
    }

    public ngOnInit() {
        this._route.queryParams
            .switchMap((params: Params) => this._memberService.getMembersWithQueryParams(params))
            .subscribe(members => this.members = members, error => this._loggingService.logError(error));
    }

}
