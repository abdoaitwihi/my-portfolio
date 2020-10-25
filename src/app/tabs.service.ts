import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private obs = new BehaviorSubject<any>("my behaviour subject 1");
  constructor(private http: HttpClient) { }
  getObs() {
    return this.obs.asObservable();
  }
  i = 0;
  changeObs() {
    this.i++
    this.obs.next(this.i)
  }
  tabsUrl = 'assets/tabs.json';
  postUrl = "https://httpbin.org/post";
  name = 'ABDERRAHAME Ait Wihi'
  getTabs() {
    return this.http.get(this.tabsUrl);
  }
  postMethod(dataToPost) {
    return this.http.post(this.postUrl, dataToPost);
  }
  get myname() {
    return this.name;
  }
}
