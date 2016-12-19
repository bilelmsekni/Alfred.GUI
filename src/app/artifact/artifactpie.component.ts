import { Component, OnInit } from "@angular/core";
import { ArtifactService } from "./artifact.service";
import { ArtifactPieModel } from "./artifactpie.model";
import { Artifact } from "./artifact.entity";
import { ArtifactStatus } from "./artifact-status.enum";
import * as _ from "lodash";

@Component({
    selector: "al-artifactpie",
    templateUrl: "./artifact/artifactpie.component.html",
    providers: [ArtifactService]
})
export class ArtifactPieComponent implements OnInit {

    private options: any;
    private model: ArtifactPieModel;
    constructor(private _artifactService: ArtifactService) {
        this.model = new ArtifactPieModel();
    }

    public ngOnInit() {
        let observ = this._artifactService.getMemberArtifacts(1);
        observ.map(res => this.calculateStatusStats(res))
            .subscribe(res => this.initPieChart(res),
            error => this.model.errorMessage = <any>error);

        observ.map(res => this.calculateCommunityStats(res))
            .subscribe(res => this.model.communityStats = res,
            error => this.model.errorMessage = <any>error);
    }

    private calculateStatusStats(artifacts: Artifact[]): any[] {
        return _(artifacts)
            .groupBy(a => a.status)
            .map((value: any[], key: number) => ({ name: ArtifactStatus[key], y: (value.length / artifacts.length) }))
            .value();
    }

    private calculateCommunityStats(artifacts: Artifact[]): any[] {
        return _(artifacts)
            .groupBy(a => a.communityId)
            .map((value: any[], key: number) => ({ id: key, stats: (value.length / artifacts.length) }))
            .value();
    }

    private initPieChart(stats: any[]) {
        this.options = {
            chart: {
                renderTo: "pieContainer",
                type: "pie"
            },
            title: "",
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            colors: ["#00c0ef", "#f39c12", "#00a65a", "#d2d6de", "#dd4b39"],
            series: [{
                colorByPoint: true,
                data: stats
            }]
        };
    }
}
