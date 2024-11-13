import { LoadingService } from './../services/loading.service';
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { SceneService } from '../services/scene.service';
import { CameraService } from '../services/camera.service';
import { RendererService } from '../services/renderer.service';
import { AnimateService } from '../services/animate.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { GroundService } from '../services/ground.service';
import { LightingService } from '../services/lightning.service';
import { ModelService } from '../services/model.service';
import { RaycasterService } from '../services/raycaster.service';

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
export class SceneComponent implements AfterViewInit {
  loadingProgress: number = 0;
  @ViewChild('scene')
  rendererContainer!: ElementRef<HTMLDivElement>;
  constructor(
    private sceneService: SceneService,
    private cameraService: CameraService,
    private rendererService: RendererService,
    private animateService: AnimateService,
    private groundService: GroundService,
    private lightingService: LightingService,
    private ModelService: ModelService,
    private loadingService: LoadingService,
    private raycasterService: RaycasterService
  ) {}

  ngAfterViewInit() {
    this.rendererService.appendRendererToElement(this.rendererContainer);
    this.animateService.animate();

    this.loadingService.loadingProgress$.subscribe((progress) => {
      setTimeout(() => {
        this.loadingProgress = progress;
      }, 1000);
    });
    //this.raycasterService.initialize();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.cameraService.updateAspectRatio();
    this.rendererService.onResize();
  }

  getRendererContainer() {
    return this.rendererContainer;
  }
}
