import { Component, Input, OnInit } from '@angular/core';
import { routes } from '../consts/routes.enum';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public routes: typeof routes = routes;
  item1 = routes[0];
  items = ['home', 'about', 'education'];

  constructor() {}

  ngOnInit(): void {}
}
