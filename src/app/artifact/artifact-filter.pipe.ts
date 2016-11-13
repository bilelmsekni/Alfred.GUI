import { Pipe, PipeTransform } from '@angular/core';
import { IArtifact } from './artifact.entity';

@Pipe({
    name: 'artifactFilter'
})
export class ArtifactFilterPipe implements PipeTransform {

    transform(artifacts: IArtifact[], arg: string): IArtifact[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? artifacts.filter((t: IArtifact) => t.title.toLocaleLowerCase().indexOf(filter) != -1) : artifacts;
    }
}