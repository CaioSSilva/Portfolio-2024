// src/app/three/orbit-controls.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CameraService } from './camera.service';
import { RendererService } from './renderer.service';

@Injectable({
  providedIn: 'root',
})
export class OrbitControlsService {
  private controls: OrbitControls;

  constructor(
    private cameraService: CameraService,
    private rendererService: RendererService
  ) {
    this.controls = new OrbitControls(
      this.cameraService.getCamera(),
      this.rendererService.getRenderer().domElement
    );

    // Ajuste inicial para o controle
    this.controls.enableDamping = true; // Para suavizar o movimento
    this.controls.dampingFactor = 0.1;
  }

  // Método para atualizar os controles a cada frame
  updateControls() {
    this.controls.update();
  }
}
