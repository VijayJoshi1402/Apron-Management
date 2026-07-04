import { Injectable, inject } from '@angular/core';

import { Api } from './api';
import { Stand } from '../models/stand.model';

@Injectable({
  providedIn: 'root',
})
export class Stands {
  private readonly api = inject(Api);

  getStands() {
    return this.api.get<Stand[]>('/stands');
  }
}