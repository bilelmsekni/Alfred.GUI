import { Component } from '@angular/core';

@Component({
    selector: 'al-app',
    template: `<router-outlet></router-outlet>
    <a routerLink="/communities">Heroes</a>`
   
})
export class AppComponent {
}