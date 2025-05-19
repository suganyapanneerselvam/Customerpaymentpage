import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
   sidebarOpen: boolean = false;
     isDarkTheme:boolean = true;
  title = 'customer-portal';
  ngOnInit() {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme ? savedTheme === 'dark' : true;
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
}
