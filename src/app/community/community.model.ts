import { Community } from "./community.entity";

export class CommunityModel {
    public communities: Community[] = [];
    public errorMessage: string = "";
    public listFilter: string = "";
}
