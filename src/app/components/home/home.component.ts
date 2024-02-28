import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorComponent } from '../color/color.component';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ColorComponent],
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
}
