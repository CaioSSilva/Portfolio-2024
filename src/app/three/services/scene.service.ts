import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class SceneService {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color('#e4e4e4');
    this.scene.fog = new THREE.Fog('#e4e4e4', 10, 50);
  }

  getScene(): THREE.Scene {
    return this.scene;
  }
}
