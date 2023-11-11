import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scrollup',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css'],
})
export class ScrollupComponent implements OnInit {
  arrowupIcon = faArrowUp;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      const scrollUp = document.querySelector('.scrollup');
      if (window.scrollY >= 560) {
        scrollUp?.classList.add('show__scroll');
      } else {
        scrollUp?.classList.remove('show__scroll');
      }
    });
  }
}
