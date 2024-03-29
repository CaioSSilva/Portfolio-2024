import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  check = faCircleCheck;
  skills = {
    frontend: [
      {
        name: 'HTML',
        level: 'Advanced',
      },
      {
        name: 'CSS',
        level: 'Advanced',
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
      },
      {
        name: 'TypeScript',
        level: 'Advanced',
      },
      {
        name: 'React',
        level: 'Advanced',
      },
      {
        name: 'Angular',
        level: 'Advanced',
      },
      {
        name: 'Git',
        level: 'Intermediate',
      },
      {
        name: 'Figma',
        level: 'Intermediate',
      },
    ],
  };
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 400);
  }
}
