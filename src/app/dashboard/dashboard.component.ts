import { Component } from '@angular/core';

@Component(
    {
        selector: 'al-dashboard',
        templateUrl: './dashboard/dashboard.component.html'        
    }
)
export class DashboardComponent {
    userName: string = "Bilel";
}