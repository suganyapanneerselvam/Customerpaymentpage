
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instances',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './instances.component.html',
  styleUrl: './instances.component.css'
})



export class InstancesComponent implements OnInit {
  instance = {
    name: 'csk',
    url: 'csk-eodh3m.us1.zitadel.cloud',
    region: 'US',
    created: new Date('2025-05-13T18:46:00'),
    version: 'v3.0.3'
  };

  regions: string[] = ['US', 'EU', 'APAC'];
  instanceForm: FormGroup;
  showModal: boolean = false;
  isLightTheme: boolean = false;

  constructor(private fb: FormBuilder) {
    this.instanceForm = this.fb.group({
      name: ['', Validators.required],
      region: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isLightTheme = document.querySelector('.app-container')?.classList.contains('light-theme') || false;
  }

  openCreateInstanceModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.instanceForm.reset();
  }

  createInstance(): void {
    if (this.instanceForm.valid) {
      const newInstance = {
        ...this.instanceForm.value,
        url: `${this.instanceForm.value.name}-eodh3m.us1.xsense.cloud`,
        created: new Date(),
        version: 'v3.0.3'
      };
      console.log('New instance created:', newInstance);
      this.closeModal();
    }
  }
}
