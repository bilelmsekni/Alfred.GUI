export { ArtifactComponent } from './artifact.component';
export { ArtifactPieComponent } from './artifactpie.component';
export { ArtifactDetailsComponent } from './artifactdetails.component';
export { ArtifactboardComponent } from './artifactboard.component';
export { ArtifactTypePipe } from './artifact-type.pipe';
export { ArtifactStatusPipe } from './artifact-status.pipe';
export { ArtifactLabelPipe } from './artifact-label.pipe';
export { ArtifactFilterPipe } from './artifact-filter.pipe';
export { ArtifactService } from './artifact.service';
export { Artifact } from './artifact.entity';
export { ArtifactStatus } from './artifact-status.enum';
export { ArtifactType } from './artifact-type.enum';
export const StatusColors: any = {
    ToDo: '#dd4b39',
    InProgress: '#00c0ef',
    Done: '#00a65a',
    Pending: '#3c8dbc',
    Canceled: '#f39c12'
};
