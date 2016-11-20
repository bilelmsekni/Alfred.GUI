import { Component, OnInit } from '@angular/core';
import { Member } from './member.entity';
import { MemberService } from './member.service';
import { MemberModel } from './member.model';
@Component({
    templateUrl: './member/member.component.html',
    providers: [MemberService]
})
export class MemberComponent implements OnInit {
    listFilter: string = '';
    model: MemberModel;
    constructor(private _memberService: MemberService) {
        this.model = new MemberModel();
    }

    ngOnInit() {
        this._memberService.getMembers()
            .subscribe(members => this.model.members = members, error => this.model.errorMessage = <any>error);
    }

}