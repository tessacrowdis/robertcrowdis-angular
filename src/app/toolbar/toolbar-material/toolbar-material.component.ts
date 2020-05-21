import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-material',
  templateUrl: './toolbar-material.component.html',
  styleUrls: ['./toolbar-material.component.scss']
})
export class ToolbarMaterialComponent implements OnInit {

  @Input() pageTitle: string;
  @Output() layoutMatClickEvent: EventEmitter<string> = new EventEmitter();
  @Output() sidenavClickEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  public clickLayoutButton(): void {
    this.layoutMatClickEvent.emit('custom');
  }

  public clickSidenavButton(): void {
    this.sidenavClickEvent.emit();
  }
}
