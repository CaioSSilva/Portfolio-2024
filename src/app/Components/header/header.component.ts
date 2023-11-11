import { Component } from '@angular/core';
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

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
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

  setNavActive(name: string) {
    this.navActive = name;
  }
  setMenu() {
    this.menu = !this.menu;
  }
}
