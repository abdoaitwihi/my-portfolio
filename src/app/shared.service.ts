import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) {}
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias == 'xs' ? true : false;
        console.log(this.deviceXs);
      }
    );
  }
  getDeviceXs() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        return result.mqAlias == 'xs' ? true : false;
      }
    );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
