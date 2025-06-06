import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  tabs: string[] = ['General', 'Notifications', 'Security', 'Danger Zone'];
  currentTab: string = 'General';

  team = {
    name: 'Team Coding Crisp',
    members: [
      { id: 1, name: 'John Doe', role: 'Admin' },
      { id: 2, name: 'Jane Smith', role: 'Member' }
    ]
  };

  notifications = {
    email: true,
    sms: false
  };

  password = {
    current: '',
    new: '',
    confirm: ''
  };

  isLightTheme: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isLightTheme = document.querySelector('.app-container')?.classList.contains('light-theme') || false;
    
    // Load team data from localStorage if available
    const savedTeam = localStorage.getItem('team');
    if (savedTeam) {
      const parsedTeam = JSON.parse(savedTeam);
      this.team.name = parsedTeam.name || 'Team Coding Crisp'; // Fallback in case name is not saved
      this.team.members = parsedTeam.members || [];
    }
  }

  removeMember(memberId: number): void {
    this.team.members = this.team.members.filter(member => member.id !== memberId);
    // Save updated team data to localStorage
    localStorage.setItem('team', JSON.stringify(this.team));
    console.log(`Member with ID ${memberId} removed`);
  }

  logoutAllDevices(): void {
    console.log('Logging out of all devices');
    alert('Successfully logged out of all devices.');
  }

  deleteTeam(): void {
    if (confirm('Are you sure you want to delete your team? This action cannot be undone.')) {
      console.log('Team deleted:', this.team.name);
      this.team.name = '';
      this.team.members = [];
      // Clear team data from localStorage
      localStorage.removeItem('team');
      alert('Team deleted successfully.');
    }
  }

  saveSettings(): void {
    if (this.password.new && this.password.new === this.password.confirm) {
      console.log('Password updated:', this.password.new);
      this.password = { current: '', new: '', confirm: '' };
    }
    // Save team data to localStorage when saving settings
    localStorage.setItem('team', JSON.stringify(this.team));
    console.log('Settings saved:', {
      team: this.team,
      notifications: this.notifications
    });
    alert('Settings saved successfully!');
  }
}