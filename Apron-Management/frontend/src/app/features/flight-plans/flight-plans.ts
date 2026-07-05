import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

import { FlightPlansService } from '../../services/flight-plans';
import { FlightPlan } from '../../models/flight-plan.model';

import { FlightCard } from './components/flight-card/flight-card';
import { FlightFilter } from './components/flight-filter/flight-filter';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-flight-plans',
  standalone: true,
  imports: [
    CommonModule,
    FlightCard,
    FlightFilter,
    LoadingSpinner
  ],
  templateUrl: './flight-plans.html',
})
export class FlightPlans implements OnInit {
  private readonly flightService = inject(FlightPlansService);

  flights = signal<FlightPlan[]>([]);

  linkedFlights = signal<FlightPlan[]>([]);

  expandedFlightId = signal<number | null>(null);

  loading = signal(false);

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(query?: any) {
    this.loading.set(true);

    this.flightService.getFlights(query).subscribe({
      next: (response) => {
        this.flights.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  onFilterChanged(filter: any) {
    this.loadFlights(filter);
  }

  viewDetails(id: number) {
    if (this.expandedFlightId() === id) {
      this.expandedFlightId.set(null);
      this.linkedFlights.set([]);
      return;
    }

    this.expandedFlightId.set(id);

    this.flightService.getLinkedFlights(id).subscribe({
      next: (response) => {
        this.linkedFlights.set(response);
      },
      error: () => {
        this.linkedFlights.set([]);
      },
    });
  }
}