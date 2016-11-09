import { Component, OnInit } from '@angular/core';
import { TaskModel } from './task.model';
import { TaskService } from './task.service';
import { ITask } from './task';

@Component({
    templateUrl: './task/task.component.html',
    providers: [TaskService]
})
export class TaskComponent implements OnInit {
    model: TaskModel;
    listFilter: string = '';
    constructor(private _taskService: TaskService) {
        this.model = new TaskModel();
    }

    ngOnInit() {
        this._taskService.getTasks()
            .subscribe(tasks => this.model.tasks = tasks,
            error => this.model.errorMessage = <any>error);
    }
}