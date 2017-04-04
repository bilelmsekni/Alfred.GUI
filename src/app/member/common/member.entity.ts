import { CommunityRole, Community } from './../../community';

export class Member {
    public id: number;
    public email: string;
    public firstName: string;
    public lastName: string;
    public role: CommunityRole;
    public job: string;
    public imageUrl: string;
    public creationDate: Date;
    public gender: number;
    public communities: Community[];
}
