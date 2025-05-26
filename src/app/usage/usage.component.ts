import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css'
})

export class UsageComponent implements OnInit {
  dailyActiveUsers: number = 0; // You can fetch this dynamically from an API
  managementRequests: number = 0; // You can fetch this dynamically from an API
  usageData: { date: string, requests: number, users: number, storage: string }[] = [
    { date: '2025-05-01', requests: 120, users: 18, storage: '2.5GB' },
    { date: '2025-05-02', requests: 145, users: 20, storage: '2.6GB' },
    // Add more data as needed
  ];

  constructor() {}

  ngOnInit(): void {
    // Optionally fetch data from an API or service here
  }
}
