// src/app/three/cube.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root',
})
export class CubeService {
  private cube: THREE.Mesh;

  constructor(private sceneService: SceneService) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.castShadow = true;
    this.cube.position.set(0, 1.5, 0);
    // Adiciona o cubo à cena
    this.sceneService.getScene().add(this.cube);
  }

  // Método de animação do cubo
  animateCube() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
