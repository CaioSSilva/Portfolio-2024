// src/app/three/orbit-controls.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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
    this.controls.enableDamping = false;
    this.controls.enablePan = false;
    this.controls.enableRotate = true;
    this.controls.enableZoom = true;
    this.controls.dampingFactor = 0.1;

    this.controls.maxPolarAngle = Math.PI / 2.5;

    // Limitar a distância de zoom
    this.controls.minDistance = 100;
    this.controls.maxDistance = 300;

    this.controls.target.set(-1, 4, 0);
  }

  // Método para atualizar os controles a cada frame
  updateControls() {
    this.controls.update();
  }
}
