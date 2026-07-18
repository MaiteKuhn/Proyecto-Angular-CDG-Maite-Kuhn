import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHistoria } from './club-historia';

describe('ClubHistoria', () => {
  let component: ClubHistoria;
  let fixture: ComponentFixture<ClubHistoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubHistoria],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubHistoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
