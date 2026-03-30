import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiLink } from './mi-link';

describe('MiLink', () => {
  let component: MiLink;
  let fixture: ComponentFixture<MiLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
