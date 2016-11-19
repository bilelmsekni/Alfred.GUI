import { ArtifactType } from "./artifact-type.enum";
import { ArtifactStatus } from "./artifact-status.enum";

export class Artifact {
    public id: number;
    public title: string;
    public reward: number;
    public type: ArtifactType;
    public status: ArtifactStatus;
    public bonus: number;
}
