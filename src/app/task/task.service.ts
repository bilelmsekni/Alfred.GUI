import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ITask } from './task';

@Injectable()
export class TaskService {
    private _taskUrl = './api/tasks.fake.json';
    constructor(private _http: Http) {
    }

    getTasks(): Observable<ITask[]> {
        return this._http.get(this._taskUrl)
            .map((res: Response) => res.json() as ITask[])
            .catch(this.handleError)
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}