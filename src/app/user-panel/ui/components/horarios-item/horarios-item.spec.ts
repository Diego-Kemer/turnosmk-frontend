import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosItem } from './horarios-item';

describe('HorariosItem', () => {
  let component: HorariosItem;
  let fixture: ComponentFixture<HorariosItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
