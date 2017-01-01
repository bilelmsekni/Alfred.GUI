import { Community } from './community.entity';
import { Artifact } from '../artifact/artifact.entity';

export class CommunityDetailsModel {
    public community: Community = new Community();
    public artifacts: Artifact[] = [];
}
