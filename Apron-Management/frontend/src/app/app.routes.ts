import { Routes } from '@angular/router';

import { MainLayout } from './core/layout/main-layout/main-layout';

import { Dashboard } from './features/dashboard/dashboard';
import { FlightPlans } from './features/flight-plans/flight-plans';
import { StandAssignments } from './features/stand-assignments/stand-assignments';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'flight-plans',
        component: FlightPlans,
      },
      {
        path: 'stand-assignments',
        component: StandAssignments,
      },
    ],
  },
];