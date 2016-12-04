import { CommunityRole } from "./community-role.enum";

export class Member {
    public id: number;
    public email: string;
    public firstName: string;
    public lastName: string;
    public role: CommunityRole;
    public communityIds: number[];
}
