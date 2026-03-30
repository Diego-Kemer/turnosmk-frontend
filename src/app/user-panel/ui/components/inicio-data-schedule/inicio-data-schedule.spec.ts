import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDataSchedule } from './inicio-data-schedule';

describe('InicioDataSchedule', () => {
  let component: InicioDataSchedule;
  let fixture: ComponentFixture<InicioDataSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioDataSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDataSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
