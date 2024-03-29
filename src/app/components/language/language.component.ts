import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    FontAwesomeModule,
    TranslateModule,
  ],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  @Output() langChangeEvent = new EventEmitter<string>();

  faGlobe = faGlobe;
  menuOpen = false;
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];
  languages = [
    { name: 'English', value: 'en', flag: '../../../assets/en-icon.webp' },
    { name: 'Portuguese', value: 'pt', flag: '../../../assets/br-icon.webp' },
  ];

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1000);
  }

  changeLang(lang: string) {
    this.langChangeEvent.emit(lang);
  }
}
