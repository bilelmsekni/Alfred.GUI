import { Component } from '@angular/core';
@Component({
    selector: 'al-doneboard',
    templateUrl: './dashboard/customboard.component.html'
})
export class DoneboardComponent {
    total: number = 126;
    label: string = 'Tasks done';
    icon: string = 'fa-check ';
    panelColor: string = 'panel-green';
    boardLink: string = '/tasks';
}