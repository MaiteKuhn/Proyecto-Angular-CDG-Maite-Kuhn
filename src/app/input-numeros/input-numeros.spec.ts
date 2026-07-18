import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumeros } from './input-numeros';

describe('InputNumeros', () => {
  let component: InputNumeros;
  let fixture: ComponentFixture<InputNumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNumeros],
    }).compileComponents();

    fixture = TestBed.createComponent(InputNumeros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
