import { Pipe, PipeTransform } from "@angular/core";
import { Artifact } from "./artifact.entity";

@Pipe({
    name: "artifactFilter"
})
export class ArtifactFilterPipe implements PipeTransform {

    public transform(artifacts: Artifact[], arg: string): Artifact[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? artifacts.filter((t: Artifact) => t.title.toLocaleLowerCase().indexOf(filter) !== -1) : artifacts;
    }
}
