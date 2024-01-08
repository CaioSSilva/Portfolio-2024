import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  instaIcon = faInstagram;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  twitterIcon = faXTwitter;
}
