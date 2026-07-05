import { Injectable, inject } from '@angular/core';

import { Api } from './api';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private readonly api = inject(Api);

  getDashboard() {

    return this.api.get<Dashboard>(
      '/dashboard',
    );

  }

}