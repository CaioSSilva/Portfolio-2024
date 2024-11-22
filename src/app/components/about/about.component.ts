import { PlayingnowComponent } from './../playingnow/playingnow.component';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faAward,
  faBriefcase,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
    selector: 'app-about',
    imports: [
        CommonModule,
        PlayingnowComponent,
        FontAwesomeModule,
        TranslateModule,
    ],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  opened: boolean = false;
  awardIcon = faAward;
  briefcaseIcon = faBriefcase;
  filecontractIcon = faFileContract;

  @ViewChild('aboutTitle', { static: true })
  aboutTitle!: ElementRef<HTMLDivElement>;

  @ViewChild('aboutsubTitle', { static: true })
  aboutsubTitle!: ElementRef<HTMLDivElement>;

  @ViewChild('avatar', { static: true })
  avatar!: ElementRef<Component>;

  @ViewChild('abtData', { static: true })
  abtData!: ElementRef<Component>;

  ngAfterViewInit() {
    gsap.fromTo(
      this.aboutTitle.nativeElement,
      { y: -100 },
      { y: 0, duration: 1 }
    );
    gsap.fromTo(
      this.aboutsubTitle.nativeElement,
      { y: -100 },
      { y: 0, duration: 1 }
    );
    gsap.fromTo(this.avatar.nativeElement, { x: -100 }, { x: 0, duration: 1 });
    gsap.fromTo(this.abtData.nativeElement, { y: 100 }, { y: 0, duration: 1 });
  }

  Download() {
    this.opened = !this.opened;
  }

  saveFile(url: string, filename: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'file-name';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
