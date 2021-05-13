import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'task-project';

  constructor() { }

  ngOnInit(): void {
  }

  //Emitted form the button component
  toggleAddTask() {
    console.log('toggle');
  }

}
