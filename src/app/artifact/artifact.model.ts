import { Artifact } from './artifact.entity';

export class ArtifactModel {
    public listFilter: string = '';
    public artifacts: Artifact[] = [];
}
