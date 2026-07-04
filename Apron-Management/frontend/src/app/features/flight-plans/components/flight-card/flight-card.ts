import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightPlan } from '../../../../models/flight-plan.model';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.html',
})
export class FlightCard {

  @Input({ required: true })
  flight!: FlightPlan;

}