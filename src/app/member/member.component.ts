import { Observable } from 'rxjs';
import { MemberService } from './member.service';
import { Member } from './member.entity';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './member.component.html',
    providers: [MemberService]
})
export class MemberComponent implements OnInit {
    public members: Observable<Member[]>;
    constructor(private memberService: MemberService) {
    }

    public ngOnInit(): void {
        this.members = this.memberService.getMembers();
    }
}
