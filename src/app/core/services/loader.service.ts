import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loading = signal(false);
  private requests = 0;

  show() {
    this.requests++;
    this.loading.set(true);
  }

  hide() {
    this.requests--;
    if (this.requests <= 0) {
      this.loading.set(false);
      this.requests = 0;
    }
  }
}
