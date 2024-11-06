import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(
    private sceneService: SceneService,
    private loadingService: LoadingService
  ) {
    this.loadTableModel();
  }

  private loadTableModel() {
    const loader = new GLTFLoader();

    loader.load(
      '../models/desk_veneer.glb',
      (geometry) => {
        console.log(geometry);
        //this.sceneService.getScene().add(geometry.scene);
        //this.loadingService.updateProgress();
      },
      undefined,
      (error) => console.error('Error loading table model', error)
    );
  }
}
