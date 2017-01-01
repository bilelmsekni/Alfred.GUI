import { Artifact } from './artifact.entity';

export class ArtifactBoardModel {
    public artifacts: Artifact[];
    public errorMessage: string;
    public icon: string = 'fa-artifacts';
    public boardLink: string = '/artifacts';
}
