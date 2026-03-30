import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosItem } from './turnos-item';

describe('TurnosItem', () => {
  let component: TurnosItem;
  let fixture: ComponentFixture<TurnosItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnosItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
