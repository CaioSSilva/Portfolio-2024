import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class SceneService {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color('#ccc');
    this.scene.fog = new THREE.Fog('#ccc', 10, 50);
  }

  getScene(): THREE.Scene {
    return this.scene;
  }
}
