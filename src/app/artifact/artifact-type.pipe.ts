import { Pipe, PipeTransform } from "@angular/core";
import { ArtifactType } from "./artifact-type.enum";

@Pipe({ name: "artifactType" })
export class ArtifactTypePipe implements PipeTransform {
    public transform(value: ArtifactType): string {
        return ArtifactType[value];
    }
}
