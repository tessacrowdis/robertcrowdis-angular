import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience-data';

@Component({
  selector: 'app-experience-material',
  templateUrl: './experience-material.component.html',
  styleUrls: ['./experience-material.component.scss']
})
export class ExperienceMaterialComponent implements OnInit {

  @Input() experiences: Array<Experience>;

  constructor() { }

  ngOnInit(): void {
  }

}
