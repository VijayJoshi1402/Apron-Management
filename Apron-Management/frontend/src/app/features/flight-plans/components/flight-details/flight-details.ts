import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FlightPlan } from '../../../../models/flight-plan.model';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './flight-details.html'
})
export class FlightDetails {

  @Input({ required: true })
  flight!: FlightPlan;

  @Input()
  linkedFlights: FlightPlan[] = [];

}