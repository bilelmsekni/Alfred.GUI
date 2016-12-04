import { Component, OnInit } from "@angular/core";
import { CommunityService } from "./community.service";
import { CommunityNavigationModel } from "./community-nav.model";

@Component({
    templateUrl: "./community/community-nav.component.html",
    providers: [CommunityService],
    selector: "al-communitynav"
})
export class CommunityNavigationComponent implements OnInit {
private model: CommunityNavigationModel;

    constructor(private _communityService: CommunityService) {
        this.model = new CommunityNavigationModel();
    }

    public ngOnInit() {
        this._communityService.getCommunities()
            .subscribe(res => this.model.communities = res, error => this.model.errorMessage = <any>error);
    }

}
