import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurnos } from './lista-turnos';

describe('ListaTurnos', () => {
  let component: ListaTurnos;
  let fixture: ComponentFixture<ListaTurnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTurnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTurnos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
