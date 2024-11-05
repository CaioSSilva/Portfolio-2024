import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css',
})
export class SceneComponent {}
