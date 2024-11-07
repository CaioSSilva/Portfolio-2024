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
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 8, 1);
    directionalLight.castShadow = true;

    // Configuração de sombras da luz direcional
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 20;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;

    this.sceneService.getScene().add(directionalLight);

    // Luz ambiente para iluminação suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.sceneService.getScene().add(ambientLight);

    const lightHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    //this.sceneService.getScene().add(lightHelper);
  }
}
