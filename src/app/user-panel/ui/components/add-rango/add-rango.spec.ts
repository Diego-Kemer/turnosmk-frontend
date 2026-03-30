import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRango } from './add-rango';

describe('AddRango', () => {
  let component: AddRango;
  let fixture: ComponentFixture<AddRango>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRango]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRango);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
