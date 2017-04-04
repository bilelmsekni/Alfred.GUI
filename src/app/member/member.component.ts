import { MemberService, Member } from './common';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MemberState } from './state';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './member.component.html'
})
export class MemberComponent implements OnInit {
    public members: Observable<Member[]>;
    constructor(private memberService: MemberService,
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<MemberState>) {
        this.members = store.select('members');
    }

    public ngOnInit(): void {
        this.route.queryParams
            .filter(qp => qp['role'] >= 0)
            .switchMap(qp => this.memberService.getMembers(qp))
            .subscribe(res => this.store.dispatch({
                type: 'LOAD_MEMBERS',
                payload: res
            }));
    }

    public onCreate(): void {
        this.router.navigate(['create'], { relativeTo: this.route });
    }
}
