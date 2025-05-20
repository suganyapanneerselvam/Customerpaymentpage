import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usage.component.html',
  styleUrl: './usage.component.css'
})
export class UsageComponent {
//  
 usageData = [
    { date: '2025-05-01', requests: 120, users: 15, storage: '2.5GB' },
    { date: '2025-05-02', requests: 145, users: 18, storage: '2.6GB' },
    // Add more data as needed
  ];
}
