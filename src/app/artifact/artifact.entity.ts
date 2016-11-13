import { ArtifactType } from './artifact-type.enum'
import { ArtifactStatus } from './artifact-status.enum'

export interface IArtifact {
    id: number,
    title: string;
    reward: number;
    type: ArtifactType;
    status: ArtifactStatus;
    bonus: number;
}