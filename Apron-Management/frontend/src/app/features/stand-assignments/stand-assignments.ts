import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FlightPlansService } from '../../services/flight-plans';
import { Stands } from '../../services/stands';
import { StandAssignmentsService } from '../../services/stand-assignments';

import { FlightPlan } from '../../models/flight-plan.model';
import { Stand } from '../../models/stand.model';
import { StandAssignment } from '../../models/stand-assignment.model';

import { AssignmentTable } from './components/assignment-table/assignment-table';

@Component({
  selector: 'app-stand-assignments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AssignmentTable,
  ],
  templateUrl: './stand-assignments.html',
})
export class StandAssignments implements OnInit {

  private readonly fb = inject(FormBuilder);

  private readonly flightService = inject(FlightPlansService);

  private readonly standService = inject(Stands);

  private readonly assignmentService = inject(StandAssignmentsService);

  flights = signal<FlightPlan[]>([]);

  stands = signal<Stand[]>([]);

  assignments = signal<StandAssignment[]>([]);

  loading = signal(false);

  assignmentForm = this.fb.group({
    flightPlanId: ['', Validators.required],
    standCode: ['', Validators.required],
    fromTime: ['', Validators.required],
    toTime: ['', Validators.required],
    remarks: [''],
  });

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {

    this.loading.set(true);

    this.flightService.getFlights().subscribe({
      next: (response) => {
        this.flights.set(response);
      },
    });

    this.standService.getStands().subscribe({
      next: (response) => {
        this.stands.set(response);
      },
    });

    this.assignmentService.getAssignments().subscribe({
      next: (response) => {
        this.assignments.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });

  }

  assignStand(): void {

    if (this.assignmentForm.invalid) {

      this.assignmentForm.markAllAsTouched();

      return;

    }

    this.assignmentService.createAssignment(
      this.assignmentForm.value
    ).subscribe({

      next: () => {

        alert('Stand Assigned Successfully');

        this.assignmentForm.reset();

        this.loadData();

      },

      error: (error) => {

        alert(error.error.message);

      }

    });

  }

}