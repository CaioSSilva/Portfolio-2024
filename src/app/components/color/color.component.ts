import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule, FontAwesomeModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  menuOpened: boolean = false;
  loaded: boolean = false;
  style = document.querySelector(':root')?.classList[0];
  icon = faPaintBrush;
  root = <DOMTokenList>document.querySelector(':root')?.classList;
  white = document.querySelector('white');
  dark = document.querySelector('dark');
  blue = document.querySelector('blue');

  favicon = <HTMLLinkElement>(
    document.querySelector("link[rel='shortcut icon']")
  );

  constructor() {
    setTimeout(() => {
      this.loaded = !this.loaded;
    }, 1000);

    if (localStorage.getItem('theme')) {
      this.setTheme(<string>localStorage.getItem('theme'));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark__mode');
    } else {
      this.setTheme('white__mode');
    }
  }

  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.querySelector(':root')?.removeAttribute('class');
    this.root.add(<string>localStorage.getItem('theme'));
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
