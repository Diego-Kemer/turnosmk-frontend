import { TestBed } from '@angular/core/testing';

import { TurnosData } from './turnos-data';

describe('TurnosData', () => {
  let service: TurnosData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnosData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
