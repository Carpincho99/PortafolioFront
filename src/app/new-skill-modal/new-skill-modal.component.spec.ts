import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSkillModalComponent } from './new-skill-modal.component';

describe('NewSkillModalComponent', () => {
  let component: NewSkillModalComponent;
  let fixture: ComponentFixture<NewSkillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSkillModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
