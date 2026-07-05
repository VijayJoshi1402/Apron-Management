import { Injectable, inject } from '@angular/core';

import { Api } from './api';
import { StandAssignment } from '../models/stand-assignment.model';

@Injectable({
  providedIn: 'root',
})
export class StandAssignmentsService {

  private readonly api = inject(Api);

  getAssignments() {
    return this.api.get<StandAssignment[]>(
      '/stand-assignments'
    );
  }

  createAssignment(body: any) {
    return this.api.post(
      '/stand-assignments',
      body
    );
  }

}