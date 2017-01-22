import { Component } from '@angular/core';
@Component({
    template : '{{helloWorld}} from memberComponent'
})
export class MemberComponent {
    public helloWorld: string = 'Hello Ng2 BBL';

}
