import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraIndumentaria } from './compra-indumentaria';

describe('CompraIndumentaria', () => {
  let component: CompraIndumentaria;
  let fixture: ComponentFixture<CompraIndumentaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraIndumentaria],
    }).compileComponents();

    fixture = TestBed.createComponent(CompraIndumentaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
