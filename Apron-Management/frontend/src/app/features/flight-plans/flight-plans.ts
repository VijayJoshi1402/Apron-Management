import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightPlansService } from '../../services/flight-plans';
import { FlightPlan } from '../../models/flight-plan.model';

import { FlightCard } from './components/flight-card/flight-card';
import { FlightFilter } from './components/flight-filter/flight-filter';

@Component({
  selector: 'app-flight-plans',
  imports: [],
  templateUrl: './flight-plans.html',
  styleUrl: './flight-plans.css',
})
export class FlightPlans {}
