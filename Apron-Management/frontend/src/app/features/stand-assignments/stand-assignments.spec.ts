import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandAssignments } from './stand-assignments';

describe('StandAssignments', () => {
  let component: StandAssignments;
  let fixture: ComponentFixture<StandAssignments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandAssignments],
    }).compileComponents();

    fixture = TestBed.createComponent(StandAssignments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
