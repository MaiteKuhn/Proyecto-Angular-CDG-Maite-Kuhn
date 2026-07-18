import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEventos } from './club-eventos';

describe('ClubEventos', () => {
  let component: ClubEventos;
  let fixture: ComponentFixture<ClubEventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubEventos],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubEventos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
