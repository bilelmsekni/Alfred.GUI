import { Component } from '@angular/core';

@Component({
    selector: 'al-scoreboard',
    templateUrl: './dashboard/customboard.component.html'
})
export class ScoreboardComponent {
    total: number = 26;
    label: string = 'Score';
    icon: string = 'fa-usd';
    panelColor: string = 'panel-primary';
}