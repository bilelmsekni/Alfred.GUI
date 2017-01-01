import { Pipe, PipeTransform } from '@angular/core';
import { ArtifactStatus } from './artifact-status.enum';

@Pipe({ name: 'artifactStatus' })
export class ArtifactStatusPipe implements PipeTransform {
    public transform(value: ArtifactStatus): string {
        return ArtifactStatus[value];
    }
}
