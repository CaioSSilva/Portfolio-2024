import { PlayingnowComponent } from './../playingnow/playingnow.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faAward, faBriefcase, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PlayingnowComponent, FontAwesomeModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  awardIcon = faAward
  briefcaseIcon = faBriefcase
  filecontractIcon = faFileContract
}
