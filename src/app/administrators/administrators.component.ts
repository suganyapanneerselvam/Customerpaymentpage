import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administrators',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './administrators.component.html',
  styleUrl: './administrators.component.css'
})


export class AdministratorsComponent implements OnInit {
  admins: any[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Super Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Moderator', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Emma Davis', email: 'emma.davis@example.com', role: 'Moderator', status: 'Inactive' },
    { id: 6, name: 'Michael Lee', email: 'michael.lee@example.com', role: 'Super Admin', status: 'Active' }
  ];

  filteredAdmins: any[] = [];
  paginatedAdmins: any[] = [];
  searchTerm: string = '';
  roleFilter: string = '';
  statusFilter: string = '';
  isLightTheme: boolean = false;
  currentPage: number = 1;
  pageSize: number = 4;
  totalPages: number = 1;

  showModal: boolean = false;
  selectedAdmin: any = null;
  modalAdmin: any = { name: '', email: '', role: 'Admin', status: 'Active' };

  constructor() {}

  ngOnInit(): void {
    this.filteredAdmins = [...this.admins];
    this.calculatePagination();
    this.updatePaginatedAdmins();
    this.isLightTheme = document.querySelector('.app-container')?.classList.contains('light-theme') || false;
  }

  filterAdmins(): void {
    let filtered = [...this.admins];

    // Apply search filter
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(admin =>
        admin.name.toLowerCase().includes(term) ||
        admin.email.toLowerCase().includes(term) ||
        admin.role.toLowerCase().includes(term)
      );
    }

    // Apply role filter
    if (this.roleFilter) {
      filtered = filtered.filter(admin => admin.role === this.roleFilter);
    }

    // Apply status filter
    if (this.statusFilter) {
      filtered = filtered.filter(admin => admin.status === this.statusFilter);
    }

    this.filteredAdmins = filtered;
    this.currentPage = 1; // Reset to first page on filter change
    this.calculatePagination();
    this.updatePaginatedAdmins();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredAdmins.length / this.pageSize);
  }

  updatePaginatedAdmins(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedAdmins = this.filteredAdmins.slice(startIndex, endIndex);
  }

  changePage(direction: number): void {
    this.currentPage += direction;
    this.updatePaginatedAdmins();
  }

  openAddEditModal(admin: any | null): void {
    this.selectedAdmin = admin;
    if (admin) {
      this.modalAdmin = { ...admin };
    } else {
      this.modalAdmin = { name: '', email: '', role: 'Admin', status: 'Active' };
    }
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedAdmin = null;
    this.modalAdmin = { name: '', email: '', role: 'Admin', status: 'Active' };
  }

  saveAdmin(): void {
    if (this.selectedAdmin) {
      // Edit existing admin
      const index = this.admins.findIndex(a => a.id === this.selectedAdmin.id);
      if (index !== -1) {
        this.admins[index] = { ...this.modalAdmin, id: this.selectedAdmin.id };
      }
    } else {
      // Add new admin
      const newId = this.admins.length ? Math.max(...this.admins.map(a => a.id)) + 1 : 1;
      this.admins.push({ ...this.modalAdmin, id: newId });
    }
    this.filterAdmins();
    this.closeModal();
  }

  deleteAdmin(admin: any): void {
    if (confirm(`Are you sure you want to delete ${admin.name}?`)) {
      this.admins = this.admins.filter(a => a.id !== admin.id);
      this.filterAdmins();
    }
  }
}
