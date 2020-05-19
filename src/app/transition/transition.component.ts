import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, sequence } from '@angular/animations';


/**
 * Overlay to display when a user is transitioning between different styles on the website.
 */
@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(250),
      ]),
      transition(':leave', [
        animate(750, style({ opacity: 1 })),
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TransitionComponent implements OnInit {

  @Input() showOverlay: boolean;

  constructor() { }

  ngOnInit(): void { }

}
