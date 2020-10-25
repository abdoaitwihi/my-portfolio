import { Component, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  obd = "text one"
  constructor(private tabs: TabsService) { }

  ngOnInit(): void {
    this.tabs.getObs().subscribe(data => {
      this.obd = data;
    })
  }

}
