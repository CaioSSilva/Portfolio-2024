import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class RaycasterService {
  private mouse: THREE.Vector2;
  private raycaster: THREE.Raycaster;
  private mixer: THREE.AnimationMixer | null = null;
  private animationsMap: Map<string, THREE.AnimationAction> = new Map();

  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  initialize() {}

  animate() {
    if (this.mixer) {
      this.mixer.update(0.01); // Adjust the delta time as needed
    }
  }
}
