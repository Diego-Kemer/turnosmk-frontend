import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesItem } from './clientes-item';

describe('ClientesItem', () => {
  let component: ClientesItem;
  let fixture: ComponentFixture<ClientesItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
