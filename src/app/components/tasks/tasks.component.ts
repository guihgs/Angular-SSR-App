import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
//import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskSerivice: TaskService) { }

  getAllTasks(): any {
    this.taskSerivice.getTasks().subscribe((tasks) => (this.
      tasks = tasks));
  }

  ngOnInit(): void {
    //Without Observables
    //this.tasks = this.taskSerivice.getTasks();

    this.taskSerivice.getTasks().subscribe((tasks) => (this.
      tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskSerivice.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    //console.log(task.reminder);
    this.taskSerivice.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    //console.log(task);
    this.taskSerivice.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}