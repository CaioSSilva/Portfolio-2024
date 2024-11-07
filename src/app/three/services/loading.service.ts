import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private totalItems = 1;
  private loadedItems = 0;

  private loadingProgress = new BehaviorSubject<number>(0);
  loadingProgress$ = this.loadingProgress.asObservable();

  updateProgress() {
    this.loadedItems++;
    const percentage = (this.loadedItems / this.totalItems) * 100;
    this.loadingProgress.next(percentage);
  }
}
