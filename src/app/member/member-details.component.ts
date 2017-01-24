import { Member } from './member.entity';
import { Observable } from 'rxjs/Observable';
import { MemberService } from './member.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './member-details.component.html'
})
export class MemberDetailsComponent implements OnInit {
    public member: Observable<Member>;
    public communityNames: Observable<string[]>;
    constructor(private route: ActivatedRoute,
        private memberService: MemberService) { }

    public ngOnInit(): void {
        this.member = this.route.params
        .switchMap(p => this.memberService.getMember(+p['id'])).share();
        this.communityNames = this.member.map(m => m.communities.map(com => com.name));
    }
}
