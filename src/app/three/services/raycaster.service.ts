import { ModelService } from './model.service';
import { SceneComponent } from './../scene/scene.component';
import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class RaycasterService {
  private clickCount = 0;
  private mouse: THREE.Vector2;
  private raycaster: THREE.Raycaster;
  private mixer: THREE.AnimationMixer | null = null;
  private animationsMap: Map<string, THREE.AnimationAction> = new Map();

  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  initialize(SceneComponent: SceneComponent, ModelService: ModelService) {
    this.onMouseClick(SceneComponent, ModelService);
  }

  onMouseClick(SceneComponent: SceneComponent, ModelService: ModelService) {
    SceneComponent.getRendererContainer().nativeElement.addEventListener(
      'mousedown',
      (event) => {
        this.clickCount = this.clickCount + 1;

        const model = ModelService.GetModelBase();
        if (!this.mixer) {
          this.mixer = new THREE.AnimationMixer(model.scene);

          model.animations.forEach((clip) => {
            const action = this.mixer!.clipAction(clip);
            this.animationsMap.set(clip.name, action);
          });
        }

        const animationAction = this.animationsMap.get('Animation');
        if (!animationAction) return;

        // Control the animation based on the click count
        if (this.clickCount === 1) {
          animationAction.reset();
          animationAction.timeScale = 1;
          animationAction.play();
          animationAction.clampWhenFinished = true;
          animationAction.loop = THREE.LoopOnce;
        }
      }
    );
  }

  animate() {
    if (this.mixer) {
      this.mixer.update(0.01); // Adjust the delta time as needed
    }
  }
}
