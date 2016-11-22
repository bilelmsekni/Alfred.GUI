import { Component } from "@angular/core";

@Component({
    selector: "al-artifactpie",
    templateUrl: "./artifact/artifactpie.component.html"
})
export class ArtifactPieComponent {

    public doughnutChartLabels: string[] = ["Progress", "Pending", "Done", "Canceled", "ToDo"];
    public doughnutChartLabelColors: any[] = [
        {
            backgroundColor: "#F00"
        }];
    public doughnutChartData: number[] = [350, 150, 100, 200, 100];
    public doughnutChartType: string = "doughnut";
    public doughnutChartlegend: boolean = false;
}
