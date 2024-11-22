import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-scrollup',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './scrollup.component.html',
    styleUrls: ['./scrollup.component.css']
})
export class ScrollupComponent {
  arrowupIcon = faArrowUp;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollUp = document.querySelector('.scrollup');
    if (window.scrollY >= 560) {
      scrollUp?.classList.add('show__scroll');
    } else {
      scrollUp?.classList.remove('show__scroll');
    }
  }
}
