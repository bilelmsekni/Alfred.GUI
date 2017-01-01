import { Pipe, PipeTransform } from '@angular/core';
import { Artifact } from './artifact.entity';

@Pipe({
    name: 'artifactFilter'
})
export class ArtifactFilterPipe implements PipeTransform {

    public transform(artifacts: Artifact[], arg: string): Artifact[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? artifacts.filter((t: Artifact) => this.isMatch(t, filter)) : artifacts;
    }

    private isMatch(artifact: Artifact, filter: string): boolean {
        let title: string = artifact.title ? artifact.title.toLocaleLowerCase() : null;
        return title ? title.indexOf(filter) !== -1 : false;
    }
}
