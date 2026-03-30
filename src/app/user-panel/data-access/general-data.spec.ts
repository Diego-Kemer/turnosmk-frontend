import { TestBed } from '@angular/core/testing';

import { GeneralData } from './general-data';

describe('GeneralData', () => {
  let service: GeneralData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
