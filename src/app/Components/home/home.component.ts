import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { gsap } from 'gsap';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ColorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit{
  instaIcon = faInstagram;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  twitterIcon = faXTwitter;
  paperplaneIcon = faPaperPlane;
  arrowdownIcon = faArrowDown;

  @ViewChildren('toBottomUp')
  toBottomUp!: QueryList<ElementRef>

  @ViewChild('homeSocial', {static:true})
  homeSocial!:ElementRef<HTMLDivElement>

  @ViewChild('homeImg', {static:true})
  homeImg!:ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    var tl = gsap.timeline()

    tl.from(this.homeSocial.nativeElement,{x:50,opacity:0})

    this.toBottomUp.forEach((div: ElementRef<HTMLDivElement>)=>{
      tl.from(div.nativeElement,{opacity:0, ease:'back', y:500})
    })
    tl.from(this.homeImg.nativeElement,{x:200, opacity:0})
  }
}
