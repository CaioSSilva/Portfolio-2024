// src/app/three/animate.service.ts
import { Injectable } from '@angular/core';
import { CameraService } from './camera.service';
import { SceneService } from './scene.service';
import { RendererService } from './renderer.service';
import { OrbitControlsService } from './orbitControls.service';

@Injectable({
  providedIn: 'root',
})
export class AnimateService {
  constructor(
    private cameraService: CameraService,
    private sceneService: SceneService,
    private rendererService: RendererService,
    private orbitControlsService: OrbitControlsService
  ) {}

  animate() {
    requestAnimationFrame(() => this.animate());

    // Atualiza o cubo e os controles a cada frame
    this.orbitControlsService.updateControls();

    // Renderiza a cena
    this.rendererService
      .getRenderer()
      .render(this.sceneService.getScene(), this.cameraService.getCamera());
  }
}
