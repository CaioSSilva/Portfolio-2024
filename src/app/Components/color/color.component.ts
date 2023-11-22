import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  icon = faMoon;

  root = <DOMTokenList>document.querySelector(':root')?.classList;
  favicon = <HTMLLinkElement>(
    document.querySelector("link[rel='shortcut icon']")
  );

  constructor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.root.add('dark__mode');
      this.icon = faSun;
      this.setFavicon('../../../assets/dark.ico');
    }
  }

  changeTheme() {
    const icon = document.querySelector('.color__icon')?.classList;
    if (this.root.contains('dark__mode')) {
      this.root.remove('dark__mode');
      this.icon = faMoon;
      this.setFavicon('../../../assets/white.ico');
    } else {
      this.root.add('dark__mode');
      this.icon = faSun;
      this.setFavicon('../../../assets/dark.ico');
    }
  }
  setFavicon(favImg: string) {
    let link = <HTMLLinkElement>(
      document.querySelector('head')?.querySelector('link')
    );
    link.href = favImg;
  }
}
