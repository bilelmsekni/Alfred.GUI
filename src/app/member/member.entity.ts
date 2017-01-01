import { CommunityRole } from './community-role.enum';
import { Community } from './../community/community.entity';

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
