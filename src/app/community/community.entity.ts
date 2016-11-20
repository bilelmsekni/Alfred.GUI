import { Member } from '../member/member.entity';
import { Artifact } from '../artifact/artifact.entity';

export interface ICommunity {
    id: number,
    name: string;
    email: string;
    members: Member[];
    artifacts: Artifact[];
}