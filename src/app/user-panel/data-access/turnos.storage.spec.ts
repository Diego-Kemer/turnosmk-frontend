import { TestBed } from '@angular/core/testing';

import { TurnosStorage } from './turnos.storage';

describe('TurnosStorage', () => {
  let service: TurnosStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnosStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
