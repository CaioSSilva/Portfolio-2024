import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
    selector: 'app-skills',
    imports: [CommonModule, FontAwesomeModule, TranslateModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  check = faCircleCheck;
  @ViewChild('skillsEl') skillsEl!: ElementRef<HTMLDivElement>;
  ngAfterViewInit() {
    gsap.fromTo(this.skillsEl.nativeElement, { y: 100 }, { y: 0, duration: 1 });
  }
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
}
