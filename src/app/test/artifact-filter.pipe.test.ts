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
        createArtifact(0, "12a13 java"),
        createArtifact(0, "article bigdata"),
        createArtifact(0, "12a13 agile"),
        createArtifact(0),
    ];
    it("should return all artifacts when filter is BDD", function () {
        let artifactFilter = new ArtifactFilterPipe();
        let res = artifactFilter.transform(artifacts, "BDD");
        expect(res.length).eql(0);
    });

    it("should return one artifact when filter is bigdata ", function () {
        let artifactFilter = new ArtifactFilterPipe();
        let res = artifactFilter.transform(artifacts, "bigdata");
        expect(res.length).eql(1);
    });

    it("should return two artifacts when filter is 12a13 ", function () {
        let artifactFilter = new ArtifactFilterPipe();
        let res = artifactFilter.transform(artifacts, "12a13");
        expect(res.length).eql(2);
    });

    it("should return one artifacts when filter is AGILE ", function () {
        let artifactFilter = new ArtifactFilterPipe();
        let res = artifactFilter.transform(artifacts, "AGILE");
        expect(res.length).eql(1);
    });
});
