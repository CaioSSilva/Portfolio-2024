import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faUser,
  faFileAlt,
  faGraduationCap,
  faWrench,
  faMessage,
  faX,
  faGrip,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  homeIcon = faHome;
  userIcon = faUser;
  fileIcon = faFileAlt;
  gradcapIcon = faGraduationCap;
  wrenchIcon = faWrench;
  messageIcon = faMessage;
  xIcon = faX;
  gripIcon = faGrip;
  menu = false;
  navActive = '#home';
  style = <string>document.querySelector(':root')?.classList[0];
  loaded = false;

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 400);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.progress();
  }

  setNavActive(name: string) {
    this.navActive = name;
  }
  setMenu() {
    this.menu = !this.menu;
  }
  progress() {
    var progressBar = <HTMLElement>document.getElementById('progress');
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    progressBar.style.height = '2px';

    if (scrolled > 2) {
      progressBar.style.width = scrolled + '%';
    } else {
      progressBar.style.height = '0px';
    }
  }
}
