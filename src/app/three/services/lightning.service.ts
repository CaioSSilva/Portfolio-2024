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
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 400, 25);
    directionalLight.castShadow = true;

    // Configuração de sombras da luz direcional
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 600;
    directionalLight.shadow.camera.left = -500;
    directionalLight.shadow.camera.right = 500;
    directionalLight.shadow.camera.top = 500;
    directionalLight.shadow.camera.bottom = -500;

    // Ajuste do bias para evitar linhas e artefatos nas sombras
    directionalLight.shadow.bias = -0.0005; // Valor inicial sugerido, ajuste conforme necessário

    // Suavidade das sombras (shadow.radius)
    directionalLight.shadow.radius = 4;

    // Luz ambiente para iluminação suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);

    const pointLight = new THREE.PointLight(0xffffff, 700, 200);

    pointLight.position.set(40, 90, 12);

    pointLight.castShadow = true;
    pointLight.shadow.mapSize;
    pointLight.shadow.mapSize.width = 1024;
    pointLight.shadow.mapSize.height = 1024;
    pointLight.shadow.camera.near = 0.5;
    pointLight.shadow.camera.far = 600;

    this.sceneService
      .getScene()
      .add(pointLight, directionalLight, ambientLight);

    const dirHelper = new THREE.DirectionalLightHelper(directionalLight);
    const pointHelper = new THREE.PointLightHelper(pointLight);
    //this.sceneService.getScene().add(dirHelper, pointHelper);
  }
}
