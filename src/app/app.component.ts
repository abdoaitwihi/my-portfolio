import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
  person: Person = {
    name: 'abderrahmane',
    email: 'abodaitwihi@gmail.com',
    phone: '0651080175',
  };
}
