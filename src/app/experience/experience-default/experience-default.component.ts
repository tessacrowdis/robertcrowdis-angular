import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience-data';

@Component({
  selector: 'app-experience-default',
  templateUrl: './experience-default.component.html',
  styleUrls: ['./experience-default.component.scss']
})
export class ExperienceDefaultComponent implements OnInit {

  @Input() experiences: Array<Experience>;

  constructor() { }

  ngOnInit(): void { }

}
