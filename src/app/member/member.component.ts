import { ActivatedRoute, Router } from '@angular/router';
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
    constructor(private memberService: MemberService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.members = this.route.queryParams
            .filter(qp => qp['role'] >= 0)
            .switchMap(qp => this.memberService.getMembers(qp));
    }

    public onCreate(): void {
        this.router.navigate(['create'], { relativeTo: this.route });
    }
}
