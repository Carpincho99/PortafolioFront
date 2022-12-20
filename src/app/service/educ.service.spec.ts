import { TestBed } from '@angular/core/testing';

import { EducService } from './educ.service';

describe('EducService', () => {
  let service: EducService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
