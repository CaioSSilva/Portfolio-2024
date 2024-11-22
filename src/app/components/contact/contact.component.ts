import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, FontAwesomeModule, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  discordIcon = faDiscord;
  rightIcon = faArrowRight;
  whatsIcon = faWhatsapp;
  envelopeIcon = faEnvelope;
  paperplaneIcon = faPaperPlane;

  @ViewChild('contactLeft') contactLeft!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    gsap.fromTo(
      this.contactLeft.nativeElement,
      { y: 100 },
      { y: 0, duration: 1 }
    );
  }
}
