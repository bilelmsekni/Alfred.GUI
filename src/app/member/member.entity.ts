import { Artifact } from "../artifact/artifact.entity";
import { CommunityRole } from "./community-role.enum";

export interface IMember {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: CommunityRole;
    artifacts: Artifact[];
}
