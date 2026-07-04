import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPlans } from './flight-plans';

describe('FlightPlans', () => {
  let component: FlightPlans;
  let fixture: ComponentFixture<FlightPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightPlans],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightPlans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
