import { Component } from 'angular2/core';

@Component(
    {
        selector: 'pm-dashboard',
        templateUrl: 'app/dashboard/dashboard.component.html'
    }
)
export class Dashboard {
    userName: string = "Bilel";
}