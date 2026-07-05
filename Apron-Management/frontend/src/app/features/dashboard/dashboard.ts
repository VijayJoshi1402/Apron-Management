import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import { DashboardService } from '../../services/dashboard';
import { Dashboard as DashboardModel } from '../../models/dashboard.model';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,LoadingSpinner],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  private readonly dashboardService =
    inject(DashboardService);

  loading = signal(true);

  totalFlights = signal(0);

  arrivals = signal(0);

  departures = signal(0);

  availableStands = signal(0);

  ngOnInit(): void {

    this.loadDashboard();

  }

  loadDashboard() {

    this.loading.set(true);

    this.dashboardService.getDashboard().subscribe({

      next: (response: DashboardModel) => {

        this.totalFlights.set(
          response.totalFlights,
        );

        this.arrivals.set(
          response.arrivals,
        );

        this.departures.set(
          response.departures,
        );

        this.availableStands.set(
          response.availableStands,
        );

        this.loading.set(false);

      },

      error: () => {

        this.loading.set(false);

      },

    });

  }

}