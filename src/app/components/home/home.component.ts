import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBluesky,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ColorComponent } from '../color/color.component';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';
@Component({
    selector: 'app-home',
    imports: [CommonModule, FontAwesomeModule, TranslateModule, ColorComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  instaIcon = faInstagram;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  twitterIcon = faXTwitter;
  blueSkyIcon = faBluesky;
  paperplaneIcon = faPaperPlane;
  arrowdownIcon = faArrowDown;

  @ViewChild('homeSocial', { static: true })
  homeSocial!: ElementRef<HTMLDivElement>;

  @ViewChild('homeImg', { static: true })
  homeImg!: ElementRef<HTMLDivElement>;

  @ViewChild('homeData', { static: true })
  homeData!: ElementRef<HTMLDivElement>;

  @ViewChild('mouseDown', { static: true })
  mouseDown!: ElementRef<HTMLDivElement>;

  @ViewChild('homeColor', { static: true })
  homeColor!: ElementRef<HTMLDivElement>;
  ngAfterViewInit() {
    gsap.fromTo(
      this.homeSocial.nativeElement,
      { x: -100 },
      { x: 0, duration: 1 }
    );
    gsap.fromTo(this.homeImg.nativeElement, { x: 100 }, { x: 0, duration: 1 });
    gsap.fromTo(this.homeData.nativeElement, { y: 100 }, { y: 0, duration: 1 });
    gsap.fromTo(
      this.mouseDown.nativeElement,
      { y: 100 },
      { y: 0, duration: 1 }
    );
  }
}
