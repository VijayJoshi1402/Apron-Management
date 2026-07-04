import { Injectable, inject } from '@angular/core';

import { Api } from './api';
import { FlightPlan } from '../models/flight-plan.model';

@Injectable({
  providedIn: 'root',
})
export class FlightPlansService {
  private readonly api = inject(Api);

  getFlights() {
    return this.api.get<FlightPlan[]>('/flight-plans');
  }

  getLinkedFlights(id: number) {
    return this.api.get<FlightPlan[]>(
      `/flight-plans/${id}/linked`,
    );
  }

  createFlight(body: FlightPlan) {
    return this.api.post(
      '/flight-plans',
      body,
    );
  }

  updateFlight(id: number, body: Partial<FlightPlan>) {
    return this.api.patch(
      `/flight-plans/${id}`,
      body,
    );
  }
}