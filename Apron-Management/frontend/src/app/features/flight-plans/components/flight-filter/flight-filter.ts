import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './flight-filter.html'
})
export class FlightFilter {

  search = '';

  flightPlanType = '';

  originDate = '';

  @Output()
  filterChanged = new EventEmitter<any>();

  applyFilter() {

    this.filterChanged.emit({

      search: this.search,

      flightPlanType: this.flightPlanType,

      originDateFrom: this.originDate,

      originDateTo: this.originDate

    });

  }

}