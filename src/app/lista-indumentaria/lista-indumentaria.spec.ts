import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndumentaria } from './lista-indumentaria';

describe('ListaIndumentaria', () => {
  let component: ListaIndumentaria;
  let fixture: ComponentFixture<ListaIndumentaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaIndumentaria],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaIndumentaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
