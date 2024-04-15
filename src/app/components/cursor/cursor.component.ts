import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css',
})
export class CursorComponent implements OnInit {
  ngOnInit() {
    gsap.set('#ball', { xPercent: -50, yPercent: -50 });

    var ball = <HTMLDivElement>document.querySelector('#ball');
    var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var mouse = { x: pos.x, y: pos.y };
    var speed = 0.1;

    var fpms = 240 / 1000;

    var xSet = gsap.quickSetter(ball, 'x', 'px');
    var ySet = gsap.quickSetter(ball, 'y', 'px');

    var showAnimation = gsap.to(ball, {
      opacity: 1,
      paused: true,
    });

    var timer = gsap
      .delayedCall(5, () => {
        showAnimation.reverse();
      })
      .pause();

    window.addEventListener('mousemove', init);

    function init() {
      window.removeEventListener('mousemove', init);

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      document.addEventListener('mouseleave', (e) => {
        showAnimation.reverse();
      });

      document.addEventListener('mouseenter', (e) => {
        showAnimation.play();

        mouse.x = pos.x = e.x;
        mouse.y = pos.y = e.y;
      });

      document.addEventListener('mousedown', (e) => {
        if (e.button == 0) {
          ball.style.transition = '.1s ease-in-out';
          ball.classList.add('ballClick');
        }
      });

      document.addEventListener('mouseup', (e) => {
        if (e.button == 0) {
          ball.classList.remove('ballClick');
          ball.style.transition = 'none';
        }
      });

      gsap.ticker.add((time, deltaTime) => {
        var delta = deltaTime * fpms;
        var dt = 1.0 - Math.pow(1.0 - speed, delta);

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x + 4.5);
        ySet(pos.y + 13);
      });

      showAnimation.play();
    }
  }
}
