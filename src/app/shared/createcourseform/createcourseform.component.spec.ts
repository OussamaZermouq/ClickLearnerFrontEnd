import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecourseformComponent } from './createcourseform.component';

describe('CreatecourseformComponent', () => {
  let component: CreatecourseformComponent;
  let fixture: ComponentFixture<CreatecourseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatecourseformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
