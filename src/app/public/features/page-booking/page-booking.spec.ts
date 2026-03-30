import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBooking } from './page-booking';

describe('PageBooking', () => {
  let component: PageBooking;
  let fixture: ComponentFixture<PageBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBooking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
