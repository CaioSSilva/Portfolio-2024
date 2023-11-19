import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faBriefcase,
  faCalendar,
  faFilePdf,
  faFilter,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import qualifications from './qualifications';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css'],
})
export class QualificationsComponent {
  filterIcon = faFilter;
  calendarIcon = faCalendar;
  certificationIcon = faFilePdf;
  experienceTabIcon = faBriefcase;
  certificationTabIcon = faMedal;
  filterMenuOpen = false;
  qualifications = qualifications;
  tab = 0;
  filters = [
    {
      name: 'Other',
      checked: false,
    },
    {
      name: 'Frontend',
      checked: false,
    },
    {
      name: 'Backend',
      checked: false,
    },
  ];

  setTab(tab: number) {
    this.tab = tab;
  }

  openFilterMenu() {
    this.filterMenuOpen = !this.filterMenuOpen;
  }
}
