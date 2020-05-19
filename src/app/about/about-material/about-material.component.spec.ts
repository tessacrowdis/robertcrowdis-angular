import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMaterialComponent } from './about-material.component';

describe('AboutMaterialComponent', () => {
  let component: AboutMaterialComponent;
  let fixture: ComponentFixture<AboutMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
