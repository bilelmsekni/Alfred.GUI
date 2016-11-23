import { Component } from "@angular/core";

@Component({
    selector: "al-artifactpie",
    templateUrl: "./artifact/artifactpie.component.html"
})
export class ArtifactPieComponent {

    public options: any;

    constructor() {
        this.options = {
            chart: {
                renderTo: "container",
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
                data: [{
                    name: "In Progress",
                    y: 56.33
                }, {
                    name: "Pending",
                    y: 24.03,

                }, {
                    name: "Done",
                    y: 10.38
                }, {
                    name: "Canceled",
                    y: 4.77
                }, {
                    name: "ToDo",
                    y: 0.91
                }]
            }]
        };
    }
}
