import { ModelService } from './model.service';
import { SceneComponent } from './../scene/scene.component';
import { ElementRef, Injectable } from '@angular/core';
import * as THREE from 'three';
import { CameraService } from './camera.service';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root',
})
export class RaycasterService {
  private mouse;
  private raycaster;
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
        /*this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, camera.getCamera());

        const intersects = this.raycaster.intersectObjects(
          scene.getScene().children,
          true
        );*/

        const model = ModelService.GetModelBase();
        this.mixer = new THREE.AnimationMixer(model.scene);

        model.animations.forEach((clip) => {
          console.log(clip);
          const action = this.mixer!.clipAction(clip);
          this.animationsMap.set(clip.name, action);
        });

        const animationAction = this.animationsMap.get('Animation');
        if (animationAction) {
          animationAction.reset().play(); // Reseta e toca a animação
        }
      }
    );
  }
  animate() {
    if (this.mixer) {
      this.mixer.update(0.01); // Atualiza o mixer com o delta do tempo
    }
  }
}
