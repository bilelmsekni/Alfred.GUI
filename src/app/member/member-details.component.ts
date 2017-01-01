import { Component, OnInit } from '@angular/core';
import { ArtifactStatus } from './../artifact/artifact-status.enum';
import { Artifact } from './../artifact/artifact.entity';
import { ArtifactService } from './../artifact/artifact.service';
import { Community } from './../community/community.entity';
import { Member } from './member.entity';
import { ActivatedRoute, Params } from '@angular/router';
import { MemberService } from './member.service';
import * as _ from 'lodash';

@Component({
    templateUrl: './member/member-details.component.html'
})
export class MemberDetailsComponent implements OnInit {
    private model: Member;
    private communityNames: string[];
    private artifactStats: any[];

    private _id: string = 'id';
    constructor(private _memberService: MemberService,
        private _artifactService: ArtifactService,
        private _route: ActivatedRoute) {
        this.model = new Member();
        this.communityNames = [];
    }

    public ngOnInit() {
        this._route.params
            .switchMap((params: Params) => this._memberService.getMember(+params[this._id]))
            .do((member: Member) => this.communityNames = this.extractNames(member.communities))
            .subscribe((member: Member) => this.model = member, error => console.log(<any>error));

        this._route.params
            .switchMap((params: Params) => this._artifactService.getMemberArtifacts(+params[this._id]))
            .subscribe((artifacts: Artifact[]) => this.artifactStats = this.extractArtifactStats(artifacts));
    }

    private extractNames(communities: Community[]): string[] {
        return communities.map(com => com.name);
    }

    private extractArtifactStats(artifacts: Artifact[]): any[] {
        return _(artifacts)
            .groupBy(a => a.status)
            .map((value: any[], key: number) => ({ name: ArtifactStatus[key], count: (value.length) }))
            .value();
    }
}
