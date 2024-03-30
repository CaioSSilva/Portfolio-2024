import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  discordIcon = faDiscord;
  rightIcon = faArrowRight;
  whatsIcon = faWhatsapp;
  envelopeIcon = faEnvelope;
  paperplaneIcon = faPaperPlane;
}
