import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoirduecardComponent } from './devoirduecard.component';

describe('DevoirduecardComponent', () => {
  let component: DevoirduecardComponent;
  let fixture: ComponentFixture<DevoirduecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevoirduecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoirduecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
