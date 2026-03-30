import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPro } from './panel-pro';

describe('PanelPro', () => {
  let component: PanelPro;
  let fixture: ComponentFixture<PanelPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
