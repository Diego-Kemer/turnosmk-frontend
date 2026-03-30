import { TestBed } from '@angular/core/testing';

import { DataStatic } from './data-static';

describe('DataStatic', () => {
  let service: DataStatic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStatic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
