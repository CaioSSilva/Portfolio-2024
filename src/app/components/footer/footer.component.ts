import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  instaIcon = faInstagram;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  twitterIcon = faXTwitter;
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1000);
  }
}
