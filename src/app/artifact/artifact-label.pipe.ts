import { Pipe, PipeTransform } from "@angular/core";
import { ArtifactStatus } from "./artifact-status.enum";

@Pipe({ name: "artifactLabel" })
export class ArtifactLabelPipe implements PipeTransform {
    public transform(value: ArtifactStatus): string {
        if (value === ArtifactStatus.InProgress) {
            return "label-info";
        } else if (value === ArtifactStatus.ToDo) {
            return "label-danger";
        } else if (value === ArtifactStatus.Canceled) {
            return "label-warning";
        } else if (value === ArtifactStatus.Done) {
            return "label-success";
        }
        return "";
    }
}
