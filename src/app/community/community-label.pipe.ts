import { Pipe, PipeTransform } from "@angular/core";
import { CommunityService } from "./community.service";
import { Observable } from "rxjs/Observable";

@Pipe({ name: "communityLabel" })
export class CommunityLabelPipe implements PipeTransform {
    constructor(private _communityService: CommunityService) {

    }
    public transform(communityId: number): Observable<string> {
        return this._communityService.getCommunity(communityId)
        .map(res => res.name);
    }
}
