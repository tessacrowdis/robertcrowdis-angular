import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../core/services/layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() style: string;
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
