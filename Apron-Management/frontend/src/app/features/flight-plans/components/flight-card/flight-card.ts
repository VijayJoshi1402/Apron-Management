import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FlightPlan } from '../../../../models/flight-plan.model';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './flight-card.html'
})
export class FlightCard {

  @Input({ required: true })
  flight!: FlightPlan;

  @Input()
  expanded = false;

  @Input()
  linkedFlights: FlightPlan[] = [];

  @Output()
  viewDetails = new EventEmitter<number>();

  onViewDetails() {
    this.viewDetails.emit(this.flight.id);
  }

}