import { TestBed } from '@angular/core/testing';

import { EmpresaPublic } from './empresa-public';

describe('EmpresaPublic', () => {
  let service: EmpresaPublic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaPublic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
