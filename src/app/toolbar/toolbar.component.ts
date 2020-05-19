import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() style: string;
  @Input() pageTitle: string;
  @Output() selectLayoutEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  /**
   * Emits an event to change the style of the application.
   *
   * @param layoutType String containing the style to set the application as ('material', or 'custom').
   */
  public selectLayout(layoutType: string): void {
    this.selectLayoutEvent.emit(layoutType.toLowerCase());
  }

}
