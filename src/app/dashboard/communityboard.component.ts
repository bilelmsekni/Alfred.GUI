import { Component } from '@angular/core';

@Component({
    selector: 'al-communityboard',
    templateUrl: './dashboard/customboard.component.html'
})
export class CommunityboardComponent {
    total: number = 6;
    label: string = 'Communities';
    icon: string = 'fa-graduation-cap ';
    panelColor: string = 'panel-yellow';
    boardLink: string = '/communities';
}