import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  faGlobe = faGlobe;
  menuOpen = false;
  languages = [
    { name: 'English', flag: '../../../assets/en-icon.png' },
    { name: 'Portuguese', flag: '../../../assets/br-icon.png' },
  ];
}
