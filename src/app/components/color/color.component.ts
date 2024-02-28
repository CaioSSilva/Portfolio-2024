import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  menuOpened: boolean = false;
  icon = faPaintBrush;

  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.querySelector(':root')?.removeAttribute('class');
    document
      .querySelector(':root')
      ?.classList.add(<string>localStorage.getItem('theme'));
    this.setFavicon(`'../../../assets/${theme}.ico`);
  }
  openMenu() {
    this.menuOpened = !this.menuOpened;
  }

  setFavicon(favImg: string) {
    let link = <HTMLLinkElement>(
      document.querySelector('head')?.querySelector('link')
    );
    link.href = favImg;
  }
}
