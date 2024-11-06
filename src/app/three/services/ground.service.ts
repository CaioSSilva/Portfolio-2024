// src/app/three/ground.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root',
})
export class GroundService {
  constructor(private sceneService: SceneService) {
    this.createGround();
  }

  private createGround() {
    // Define a geometria e o material para o plano (chão)
    const geometry = new THREE.PlaneGeometry(1000, 1000); // Tamanho do chão
    const material = new THREE.MeshStandardMaterial({
      color: '#fff',
      roughness: 0.8,
      metalness: 0,
    });
    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2; // Deita o plano horizontalmente
    ground.position.y = 0; // Posiciona o chão no nível 0
    ground.receiveShadow = true; // Configura para receber sombras

    this.sceneService.getScene().add(ground);

    const axesHelper = new THREE.AxesHelper(5);
    var grid = new THREE.GridHelper(100, 10);

    //this.sceneService.getScene().add(axesHelper, grid);
  }
}
