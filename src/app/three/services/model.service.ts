import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { SceneService } from './scene.service';
import * as THREE from 'three';
@Injectable({
  providedIn: 'root',
})
export class ModelService {
  constructor(
    private sceneService: SceneService,
    private loadingService: LoadingService
  ) {
    this.loadTableModel();
  }

  private loadTableModel() {
    const loader = new GLTFLoader();

    loader.load(
      '../../../assets/models/scene.glb',
      (gltf) => {
        gltf.scene.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        gltf.scene.position.set(-1, 0, 0);
        gltf.scene.scale.set(0.05, 0.05, 0.05);
        gltf.scene.castShadow = true;
        gltf.scene.receiveShadow = true;
        this.sceneService.getScene().add(gltf.scene);
        this.loadingService.updateProgress();
      },
      undefined,
      (error) => console.error('Error loading table model', error)
    );
  }
}
