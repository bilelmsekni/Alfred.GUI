import { Community } from '../community/community.entity';
export class NavigationModel {
    public communities: Community[] = [];
    public errorMessage: string = '';
    public artifactStatuses: any[] = [];
    public communityRoles: any[] = [];
}
