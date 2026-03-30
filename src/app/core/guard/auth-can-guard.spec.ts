import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authCanGuard } from './auth-can-guard';

describe('authCanGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authCanGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
