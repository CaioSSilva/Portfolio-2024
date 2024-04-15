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
  themes = 1;
  icon = faPaintBrush;
  root = <DOMTokenList>document.querySelector(':root')?.classList;
  white = document.querySelector('white');
  dark = document.querySelector('dark');
  blue = document.querySelector('blue');

  favicon = <HTMLLinkElement>(
    document.querySelector("link[rel='shortcut icon']")
  );

  constructor() {
    if (localStorage.getItem('theme')) {
      this.setTheme(<string>localStorage.getItem('theme'));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark__mode');
    } else {
      this.setTheme('white__mode');
    }
  }

  handleClick(): string {
    switch (this.themes) {
      case 1:
        this.themes++;
        return 'white__mode';
      case 2:
        this.themes++;
        return 'dark__mode';
      case 3:
        this.themes = 1;
        return 'blue__mode';
    }
    return 'white__mode';
  }

  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.querySelector(':root')?.removeAttribute('class');
    this.root.add(<string>localStorage.getItem('theme'));
    this.setFavicon(`'../../../assets/${theme}.ico`);
  }

  setFavicon(favImg: string) {
    let link = <HTMLLinkElement>(
      document.querySelector('head')?.querySelector('link')
    );
    link.href = favImg;
  }
}
