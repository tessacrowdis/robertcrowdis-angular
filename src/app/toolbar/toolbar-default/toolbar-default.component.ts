import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-default',
  templateUrl: './toolbar-default.component.html',
  styleUrls: ['./toolbar-default.component.scss']
})
export class ToolbarDefaultComponent implements OnInit {

  @Output() layoutDefClickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public clickLayoutButton(): void {
    this.layoutDefClickEvent.emit('material');
  }

}
