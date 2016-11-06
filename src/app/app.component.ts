import { Component } from '@angular/core';
import 'rxjs/Rx';

@Component({
    selector: 'al-app',
    template: 
    `<div class="col-lg-12">
        <div class="Jumbotron">
            <h1>Hello {{userName}}</h1>
        </div>
    </div>
    <a routerLink="/communities">communities</a>
    <a routerLink="/dashboard">dashboard</a>    
    <router-outlet></router-outlet>`
   
})
export class AppComponent {
    userName: string = "Bilel";
}