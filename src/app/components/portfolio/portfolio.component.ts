import { GithubService } from './../../services/github.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWork } from 'src/app/interfaces/IWork';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  arrowRight = faArrowRight;
  repos: IWork[] = [];
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];

  constructor(github: GithubService) {
    github.GetWorks().subscribe((res) => {
      this.repos = res;
      this.loaded = !this.loaded;
    });
  }
}
