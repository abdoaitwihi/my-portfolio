import { Component } from '@angular/core';
import { routes } from './consts/routes.enum';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public routes: typeof routes = routes;
  title = 'my-portfolio';
  person: Person = {
    name: 'abderrahmane',
    email: 'abodaitwihi@gmail.com',
    phone: '0651080175',
  };
}
