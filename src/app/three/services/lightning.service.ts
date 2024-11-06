// src/app/three/lighting.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root',
})
export class LightingService {
  constructor(private sceneService: SceneService) {
    this.addLights();
  }

  private addLights() {
    // Luz direcional para sombras
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 15, 5);
    directionalLight.castShadow = true; // Configura para lançar sombras

    // Configuração de sombras da luz direcional
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 20;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;

    this.sceneService.getScene().add(directionalLight);

    // Luz ambiente para iluminação suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    this.sceneService.getScene().add(ambientLight);
  }
}
