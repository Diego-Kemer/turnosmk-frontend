import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDataTurnos } from './inicio-data-turnos';

describe('InicioDataTurnos', () => {
  let component: InicioDataTurnos;
  let fixture: ComponentFixture<InicioDataTurnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioDataTurnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDataTurnos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
