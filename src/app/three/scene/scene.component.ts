import { LoadingService } from './../services/loading.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { SceneService } from '../services/scene.service';
import { CameraService } from '../services/camera.service';
import { RendererService } from '../services/renderer.service';
import { AnimateService } from '../services/animate.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { GroundService } from '../services/ground.service';
import { LightingService } from '../services/lightning.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: 'scene.component.html',
  styleUrl: './scene.component.css',
  providers: [
    {
      provide: Window,
      useValue: window,
    },
  ],
})
export class SceneComponent implements OnInit {
  loadingProgress: number = 0;
  @ViewChild('scene', { static: true })
  rendererContainer!: ElementRef;
  constructor(
    private sceneService: SceneService,
    private cameraService: CameraService,
    private rendererService: RendererService,
    private animateService: AnimateService,
    private groundService: GroundService,
    private lightingService: LightingService,
    private loaderService: LoaderService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.rendererService.appendRendererToElement(this.rendererContainer);
    this.animateService.animate();

    this.loadingService.loadingProgress$.subscribe((progress) => {
      console.log('Progress: ', progress);
      this.loadingProgress = progress;
    });
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.cameraService.updateAspectRatio();
    this.rendererService.onResize();
  }
}
