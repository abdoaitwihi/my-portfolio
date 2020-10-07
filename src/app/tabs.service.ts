import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  constructor(private http: HttpClient) {}
  tabsUrl = 'assets/tabs.json';
  getTabs() {
    return this.http.get(this.tabsUrl);
  }
}
