import { PlayingnowComponent } from './../playingnow/playingnow.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faAward,
  faBriefcase,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PlayingnowComponent,
    FontAwesomeModule,
    TranslateModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  awardIcon = faAward;
  briefcaseIcon = faBriefcase;
  filecontractIcon = faFileContract;

  constructor(private translate: TranslateService) {}

  DownloadResume() {
    if (this.translate.currentLang == 'pt') {
      this.saveFile(
        '../../../assets/Currículo.pdf',
        'Curriculo - Caio Souza Silva'
      );
    } else {
      this.saveFile('../../../assets/Resume.pdf', 'Resume - Caio Souza Silva');
    }
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
