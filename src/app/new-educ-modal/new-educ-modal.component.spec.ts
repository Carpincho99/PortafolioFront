import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEducModalComponent } from './new-educ-modal.component';

describe('NewEducModalComponent', () => {
  let component: NewEducModalComponent;
  let fixture: ComponentFixture<NewEducModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEducModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEducModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
