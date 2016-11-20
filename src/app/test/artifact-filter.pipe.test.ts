import { expect } from "chai";
import { ArtifactFilterPipe } from "../artifact/artifact-filter.pipe";
import { Artifact } from "../artifact/artifact.entity";

function createArtifact(id: number, title?: string): Artifact {
    let artifact = new Artifact();
    artifact.id = id;
    artifact.title = title;
    return artifact;
}

describe("filter artifacts", function () {
    let artifacts = [
        createArtifact(0, "formation java"),
        createArtifact(0, "article bigdata"),
        createArtifact(0, "12a13 agile"),
        createArtifact(0),
    ];
    it("should return all artifacts when filter doesnt match", function () {
        let artifactFilter = new ArtifactFilterPipe();
        let res = artifactFilter.transform(artifacts, "BDD");
        expect(res.length).eql(0);
    });
});
