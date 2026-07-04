import { Injectable, inject } from '@angular/core';

import { Api } from './api';
import { StandAssignment } from '../models/stand-assignment.model';

@Injectable({
  providedIn: 'root',
})
export class StandAssignments {
  private readonly api = inject(Api);

  getAssignments() {
    return this.api.get<StandAssignment[]>(
      '/stand-assignments',
    );
  }

  createAssignment(body: StandAssignment) {
    return this.api.post(
      '/stand-assignments',
      body,
    );
  }
}