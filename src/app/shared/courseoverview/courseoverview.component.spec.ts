import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseoverviewComponent } from './courseoverview.component';

describe('CourseoverviewComponent', () => {
  let component: CourseoverviewComponent;
  let fixture: ComponentFixture<CourseoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseoverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
