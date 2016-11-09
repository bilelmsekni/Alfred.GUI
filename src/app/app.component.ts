import { Component } from '@angular/core';

@Component({
    selector: 'al-app',
    template: 
    `<div class="col-lg-12">
        <div class="Jumbotron">
            <h1>Hello {{userName}}</h1>
        </div>
    </div> 
    <router-outlet></router-outlet>`
   
})
export class AppComponent {
    userName: string = "Bilel";
}