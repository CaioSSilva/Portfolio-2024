import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ColorComponent } from '../color/color.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule,
    ColorComponent,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  instaIcon = faInstagram;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  twitterIcon = faXTwitter;
  paperplaneIcon = faPaperPlane;
  arrowdownIcon = faArrowDown;
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1000);
  }
}
