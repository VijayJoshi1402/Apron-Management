import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { StandAssignment } from '../../../../models/stand-assignment.model';

@Component({
  selector: 'app-assignment-table',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './assignment-table.html'
})
export class AssignmentTable {

  @Input()
  assignments: StandAssignment[] = [];

}