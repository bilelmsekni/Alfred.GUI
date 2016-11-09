import { Component, OnInit } from '@angular/core';
import { IMember } from './member';
import { MemberService } from './member.service';

@Component({
    templateUrl: './member/member.component.html',
    providers: [MemberService]
})
export class MemberComponent implements OnInit {
    members: IMember[] = [];
    listFilter: string = '';
    errorMessage: string = '';
    constructor(private _memberService: MemberService) {
    }

    ngOnInit() {
        this._memberService.getMembers()
        .subscribe(members => this.members = members, error=> this.errorMessage = <any>error );
    }

}