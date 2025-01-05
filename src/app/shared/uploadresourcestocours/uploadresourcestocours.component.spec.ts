import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadresourcestocoursComponent } from './uploadresourcestocours.component';

describe('UploadresourcestocoursComponent', () => {
  let component: UploadresourcestocoursComponent;
  let fixture: ComponentFixture<UploadresourcestocoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadresourcestocoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadresourcestocoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
