import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslateModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  @Output() langChangeEvent = new EventEmitter<string>();

  faGlobe = faGlobe;
  menuOpen = false;
  languages = [
    { name: 'English', value: 'en', flag: '../../../assets/en-icon.webp' },
    { name: 'Portuguese', value: 'pt', flag: '../../../assets/br-icon.webp' },
  ];

  changeLang(lang: string) {
    this.langChangeEvent.emit(lang);
  }
}
