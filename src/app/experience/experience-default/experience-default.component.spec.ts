import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDefaultComponent } from './experience-default.component';

describe('ExperienceDefaultComponent', () => {
  let component: ExperienceDefaultComponent;
  let fixture: ComponentFixture<ExperienceDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
