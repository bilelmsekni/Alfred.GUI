import { IMember } from '../member/member.entity';
import { IArtifact } from '../artifact/artifact.entity';

export interface ICommunity {
    id: number,
    name: string;
    email: string;
    members: IMember[];
    artifacts: IArtifact[];
}