import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  //Recieving Props from html
  @Input() text: string;
  @Input() color: string;

  //Output to make reusable
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Emit event to upper component
  onClick() {
    this.btnClick.emit();
  }

}
