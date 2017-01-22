import { Member } from './member.entity';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './member.component.html'
})
export class MemberComponent implements OnInit {
    public members: Member[];
    constructor(private http: Http) {
    }

    public ngOnInit(): void {
        this.http.get('http://localhost:50405/members')
            .map((res: Response) => res.json().results)
            .do(res => console.log(res))
            .subscribe(members => this.members = members);
    }
}
