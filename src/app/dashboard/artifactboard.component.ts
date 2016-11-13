import { Component } from '@angular/core';
@Component({
    selector: 'al-artifactboard',
    templateUrl: './dashboard/customboard.component.html'
})
export class ArtifactboardComponent {
    total: number = 13;
    label: string = 'Artifacts in progress';
    icon: string = 'fa-artifacts';
    panelColor: string = 'panel-red';
    boardLink: string = '/artifacts';
}