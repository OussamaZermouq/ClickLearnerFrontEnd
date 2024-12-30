import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingexamsComponent } from './upcomingexams.component';

describe('UpcomingexamsComponent', () => {
  let component: UpcomingexamsComponent;
  let fixture: ComponentFixture<UpcomingexamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingexamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
