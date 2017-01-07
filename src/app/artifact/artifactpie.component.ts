import { ArtifactService } from './artifact.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../common/services';
import { Artifact, StatusColors, ArtifactStatus } from './index';

import * as _ from 'lodash';

@Component({
    selector: 'al-artifactpie',
    templateUrl: './artifactpie.component.html'
})
export class ArtifactPieComponent implements OnInit {

    public communityStats: any[] = [];
    public options: any;
    constructor(private _artifactService: ArtifactService,
        private _loggingService: LoggingService) {
    }

    public ngOnInit() {
        let observ = this._artifactService.getMemberArtifacts(1);
        observ.map(res => this.calculateStatusStats(res))
            .subscribe(res => this.initPieChart(res),
            error => this._loggingService.logError(error));

        observ.map(res => this.calculateCommunityStats(res))
            .subscribe(res => this.communityStats = res,
            error => this._loggingService.logError(error));
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
        let colors: string[] = [];
        stats.forEach(element => {
            colors.push(StatusColors[element.name]);
        });

        this.options = {
            chart: {
                renderTo: 'pieContainer',
                type: 'pie'
            },
            title: '',
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            colors: colors,
            series: [{
                colorByPoint: true,
                data: stats
            }]
        };
    }
}
