
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  isLightTheme: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isLightTheme = document.querySelector('.app-container')?.classList.contains('light-theme') || false;
  }
}
