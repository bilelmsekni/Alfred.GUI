import { expect } from "chai";
import { ArtifactFilterPipe} from "../artifact/artifact-filter.pipe";
import { Artifact} from "../artifact/artifact.entity";
describe("filter artifacts", function(){
    let artifacts = [
        new Artifact(),
        new Artifact(),
        new Artifact()
    ];
    it("should return all artifacts when filter doesnt match", function(){
        let artifactFilter = new ArtifactFilterPipe();
        let res = artifactFilter.transform(artifacts, "BDD");
        expect(res.length).eql(artifacts.length);
    });
});
