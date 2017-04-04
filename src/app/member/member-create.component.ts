import { MemberState } from './member.state';
import { CommunityService } from './../community/community.service';
import { Observable } from 'rxjs';
import { Community } from './../community/community.entity';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
    templateUrl: 'member-create.component.html'
})
export class MemberCreateComponent implements OnInit {
    public memberCreateForm: FormGroup;
    public communities: Observable<Community[]>;
    constructor(private communityService: CommunityService,
        private store: Store<MemberState>) {
    }

    public ngOnInit(): void {
        this.communities = this.communityService.getCommunities();
        this.memberCreateForm = new FormGroup(
            {
                firstName: new FormControl('', Validators.required),
                lastName: new FormControl('', Validators.required),
                email: new FormControl('', Validators.minLength(5)),
                communityId: new FormControl()
            }
        );
    }

    public onCreate() {
        this.store.dispatch({
            type: 'CREATE_MEMBER',
            payload: this.memberCreateForm.value
        });
    }
}