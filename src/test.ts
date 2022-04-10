import {observable } from 'mobx';

let runningId = 0;


class Todo {
    id: number = runningId++;

    @observable name: string = '';
    @observable isCompleted: boolean = false;

    constructor(name: string) {
        this.name = name;
    }


}


