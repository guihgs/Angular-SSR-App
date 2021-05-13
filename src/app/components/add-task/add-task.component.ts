import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  //pass data to parent component
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string;
  day: string;
  reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert('Please add a Task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // @todo - emit event
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
