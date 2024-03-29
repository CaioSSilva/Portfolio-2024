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
import { IQualification } from 'src/app/interfaces/IQualification';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    FontAwesomeModule,
    TranslateModule,
  ],
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
  aux = qualifications;
  filtered: boolean = false;
  tab = 0;
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 400);
  }

  filters = [
    {
      name: <IQualification['type']>'Frontend',
      checked: false,
    },
    {
      name: <IQualification['type']>'Backend',
      checked: false,
    },
    {
      name: <IQualification['type']>'Other',
      checked: false,
    },
  ];

  setTab(tab: number) {
    this.tab = tab;
  }
  openFilterMenu() {
    this.filterMenuOpen = !this.filterMenuOpen;
  }

  handleFilterSelection(name: IQualification['type']) {
    this.filters.map((filter) => {
      if (filter.name != name) filter.checked = false;
      else if (filter.name == name && filter.checked) {
        filter.checked = false;
        this.filtered = false;
      } else {
        filter.checked = true;
        this.filtered = true;
      }
    });
  }

  filterClick(name: IQualification['type']) {
    this.qualifications = this.aux;
    this.handleFilterSelection(name);
    if (this.filtered) {
      this.qualifications = this.qualifications.filter(
        (certification) => certification.type == name
      );
    }
  }
}
