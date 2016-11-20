import { Member } from "../member/member.entity";
import { Artifact } from "../artifact/artifact.entity";

export class Community {
    public id: number;
    public name: string;
    public email: string;
    public members: Member[];
    public artifacts: Artifact[];
}
