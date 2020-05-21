import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMaterialComponent } from './experience-material.component';

describe('ExperienceMaterialComponent', () => {
  let component: ExperienceMaterialComponent;
  let fixture: ComponentFixture<ExperienceMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
