import { GithubService } from './../../services/github.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWork } from 'src/app/interfaces/IWork';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  arrowRight = faArrowRight;
  repos: IWork[] = [];

  constructor(github: GithubService) {
    github.GetWorks().subscribe((res) => {
      this.repos = res;
    });
  }
}
