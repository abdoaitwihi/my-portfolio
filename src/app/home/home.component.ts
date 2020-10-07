import { Component, Input, OnInit } from '@angular/core';
import { Tabb } from '../tabb';
import { TabsService } from '../tabs.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public homeTabs;
  constructor(private tabs: TabsService) {}
  ngOnInit() {
    this.homeTabs = this.tabs.getTabs().subscribe((data: Tabb[]) => {
      this.homeTabs = data;
    });
  }
}
