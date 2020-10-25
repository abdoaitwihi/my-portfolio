import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Myinterface } from '../myinterface';
import { Tabb } from '../tabb';
import { TabsService } from '../tabs.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public homeTabs;
  public login = "souhail";
  public apiData;
  public apiData2;
  mydata = {
    "civilite": "marocain",
    "nom": "ait wihi",
    "prenom": "abderrahmane",
    "adresse": "rabat",
    "complementAdresse": "morocco",
    "lieuDeNaissance": "agadir",
    "telephone": "0651870175",
    "mobile": "0651870175",
    "username": "abdoaitwihi",
    "email": "abdoaitwihi@gmail.com",
    "password": "1234567890",
    "tokenPassword": "",
    "tokenEmail": "",
    "dateDeNaissance": "2020-10-14T10:10:31.061Z",
    "emailVerifier": true,
    "forcerReinitialisationPasse": true,
    "hasValidatedCGU": true,
    "reference": "string",
    "dateCreation": "2020-10-14T10:10:31.061Z",
    "enabled": true
  }
  myPostUrl = "https://winwin.ssaidi.com/api/inscription";
  myGetUrl = "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread"
  options = {
    "headers": {
      "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
      "x-rapidapi-key": "958ca4c767msh2ef54387d882445p1ab430jsn872fe6edad61",
      "useQueryString": "true"
    }
  }
  isDemanded: boolean = false;
  obs = "text one";
  constructor(private tabs: TabsService, private http: HttpClient) { }
  ngOnInit() {
    this.login = this.tabs.myname;
    this.tabs.getObs().subscribe(data => {
      this.obs = data
    })
  }
  subscribe() {
    this.http.post(this.myPostUrl, this.mydata).toPromise().then(data => {
      console.log(data);
    })
  }
  getFootball() {
    this.isDemanded = true;
    this.http.get(this.myGetUrl, this.options).subscribe(data => {
      console.log(data);
      this.apiData = data;
    })
  }
  changeObs() {
    this.tabs.changeObs();
  }
  getFootball2() {
    this.http.get(this.myGetUrl, this.options).subscribe(data => {
      console.log(data);
      this.apiData2 = data;
    })
  }
}
