import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAsociate } from './club-asociate';

describe('ClubAsociate', () => {
  let component: ClubAsociate;
  let fixture: ComponentFixture<ClubAsociate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubAsociate],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubAsociate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
