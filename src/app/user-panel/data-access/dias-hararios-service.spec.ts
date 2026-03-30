import { TestBed } from '@angular/core/testing';

import { DiasHarariosService } from './dias-hararios-service';

describe('DiasHarariosService', () => {
  let service: DiasHarariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiasHarariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
