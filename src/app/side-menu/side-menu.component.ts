import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from '../consts/routes.enum';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public routes: typeof routes = routes;
  @Output() hideSideMenu = new EventEmitter();
  constructor() {}
  hideIt() {
    this.hideSideMenu.emit();
  }
  ngOnInit(): void {}
}
