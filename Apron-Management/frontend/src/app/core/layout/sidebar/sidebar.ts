import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = [
    {
      title: 'Flight Plans',
      route: '/flight-plans',
      icon: '✈️',
    },
    {
      title: 'Stand Assignments',
      route: '/stand-assignments',
      icon: '🅿️',
    },
  ];
}