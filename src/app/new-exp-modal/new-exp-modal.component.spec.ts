import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpModalComponent } from './new-exp-modal.component';

describe('NewExpModalComponent', () => {
  let component: NewExpModalComponent;
  let fixture: ComponentFixture<NewExpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExpModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
