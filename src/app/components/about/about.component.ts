import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PlayingnowComponent } from './../playingnow/playingnow.component';
import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faAward,
  faBriefcase,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PlayingnowComponent,
    FontAwesomeModule,
    TranslateModule,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterContentInit {
  opened: boolean = false;
  awardIcon = faAward;
  briefcaseIcon = faBriefcase;
  filecontractIcon = faFileContract;
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];

  ngAfterContentInit() {
    this.loaded = !this.loaded;
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
