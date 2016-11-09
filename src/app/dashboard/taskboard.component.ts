import { Component } from '@angular/core';
@Component({
    selector: 'al-taskboard',
    templateUrl: './dashboard/customboard.component.html'
})
export class TaskboardComponent {
    total: number = 13;
    label: string = 'Tasks in progress';
    icon: string = 'fa-tasks';
    panelColor: string = 'panel-red';
    boardLink: string = '/tasks';
}