import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../consts/routes.enum';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  public routes: typeof routes = routes;
  opened: boolean = false;
  mode = 'side';
  nextMode = this.mode == 'side' ? 'over' : 'side';
  public appData = new BehaviorSubject<any[]>([]);

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor() {
    this.getScreenSize();
  }

  toggleDrower() {
    this.opened = !this.opened;
  }
  changeMode() {
    this.mode == 'over' ? (this.mode = 'side') : (this.mode = 'over');
    this.appData.subscribe((data) => {
      this.nextMode = this.mode == 'side' ? 'over' : 'side';
    });
  }
  closeSideMenu() {
    this.opened = false;
  }

  ngOnInit(): void {
    this.opened = false;
    console.log(this.screenHeight);
    console.log(this.screenWidth);
    this.mode = this.screenWidth > 600 ? 'side' : 'over';
  }
}
