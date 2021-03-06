import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { routes } from './consts/routes.enum';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public routes: typeof routes = routes;
  mediaSub: Subscription;
  deviceXs: boolean;
  title = 'my-portfolio';
  person: Person = {
    name: 'abderrahmane',
    email: 'abodaitwihi@gmail.com',
    phone: '0651080175',
  };
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
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
