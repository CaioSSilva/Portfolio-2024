// src/app/three/renderer.service.ts
import { Injectable, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class RendererService {
  private renderer: THREE.WebGLRenderer;

  constructor() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp',
      alpha: true,
    });
    this.renderer.shadowMap.enabled = true; // Habilita sombras no renderer
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  appendRendererToElement(element: ElementRef<HTMLDivElement>) {
    element?.nativeElement.appendChild(this.renderer.domElement);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
